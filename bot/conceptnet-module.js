/**
 * PAVEL – conceptnet-module.js  v1.0
 * ──────────────────────────────────────────────
 * Módulo complementario de conocimiento general.
 * Consulta la API pública de ConceptNet (gratuita,
 * sin API key, CORS habilitado) ÚNICAMENTE cuando
 * el motor principal (scroll.js) no encuentra
 * respuesta en la KB de empresa ni en Wikipedia.
 *
 * INTEGRACIÓN:
 *   Cargar en index.html DESPUÉS de los archivos de
 *   datos y ANTES de js/scroll.js:
 *
 *   <script src="bot/data.js?v=1"></script>
 *   <script src="bot/conceptnet-module.js?v=1"></script>
 *   <script src="js/scroll.js?v=3"></script>
 *
 * CONTRATO PÚBLICO:
 *   window.PV_CONCEPTNET.query(rawQuery, onSuccess, onFail)
 *   - rawQuery  : texto original del usuario
 *   - onSuccess : function(string) → respuesta formateada lista para el bot
 *   - onFail    : function()       → sin resultados útiles
 *
 * PRINCIPIO CLAVE:
 *   Este módulo NO modifica ninguna variable, función
 *   ni comportamiento del motor existente. Solo expone
 *   su API en window.PV_CONCEPTNET para que scroll.js
 *   la llame opcionalmente.
 * ──────────────────────────────────────────────
 */

(function () {
  'use strict';

  /* ── Endpoint público de ConceptNet ─────────
     No requiere API key. Límite de uso libre:
     ~3 600 req/hora por IP (suficiente para chat).
     CORS habilitado en api.conceptnet.io.
  ──────────────────────────────────────────── */
  var CONCEPTNET_API = 'https://api.conceptnet.io';

  /* ── Máximo de relaciones a incluir en la respuesta ── */
  var MAX_RELATIONS = 6;

  /* ── Mínimo de peso de arista para considerar la relación confiable ── */
  var MIN_WEIGHT = 1.0;

  /* ── Stopwords propias para filtrar términos vacíos en la respuesta ── */
  var IGNORE_TERMS = ['a', 'an', 'the', 'of', 'to', 'in', 'on', 'at',
    'and', 'or', 'be', 'is', 'are', 'was', 'have', 'has', 'it', 'this',
    'that', 'with', 'for', 'from', 'by', 'as', 'do', 'can', 'will',
    'would', 'could', 'should', 'may', 'un', 'una', 'el', 'la', 'los',
    'las', 'de', 'en', 'y', 'o', 'al', 'del', 'se', 'su', 'por', 'es'];

  /* ── Tipos de relación y su traducción legible ── */
  var RELATION_LABELS = {
    '/r/IsA':             { es: 'es un tipo de', en: 'is a type of' },
    '/r/UsedFor':         { es: 'se usa para',   en: 'is used for' },
    '/r/HasA':            { es: 'tiene',          en: 'has' },
    '/r/PartOf':          { es: 'es parte de',    en: 'is part of' },
    '/r/CapableOf':       { es: 'puede',          en: 'can' },
    '/r/Causes':          { es: 'causa',          en: 'causes' },
    '/r/CausesDesire':    { es: 'genera el deseo de', en: 'causes the desire to' },
    '/r/CreatedBy':       { es: 'fue creado por', en: 'was created by' },
    '/r/DefinedAs':       { es: 'se define como', en: 'is defined as' },
    '/r/DerivedFrom':     { es: 'deriva de',      en: 'derives from' },
    '/r/Desires':         { es: 'desea',          en: 'desires' },
    '/r/DistinctFrom':    { es: 'es distinto de', en: 'is distinct from' },
    '/r/HasContext':      { es: 'en el contexto de', en: 'in the context of' },
    '/r/HasPrerequisite': { es: 'requiere',        en: 'requires' },
    '/r/HasProperty':     { es: 'tiene la propiedad de', en: 'has the property of' },
    '/r/LocatedNear':     { es: 'está cerca de',  en: 'is located near' },
    '/r/MadeOf':          { es: 'está hecho de',  en: 'is made of' },
    '/r/MannerOf':        { es: 'es una forma de',en: 'is a manner of' },
    '/r/MotivatedByGoal': { es: 'está motivado por', en: 'is motivated by' },
    '/r/ReceivesAction':  { es: 'recibe la acción de', en: 'can receive the action' },
    '/r/RelatedTo':       { es: 'está relacionado con', en: 'is related to' },
    '/r/SimilarTo':       { es: 'es similar a',   en: 'is similar to' },
    '/r/Synonym':         { es: 'sinónimo de',    en: 'synonym of' },
    '/r/Antonym':         { es: 'antónimo de',    en: 'antonym of' },
  };

  /* ── Mensajes de encabezado de la respuesta ── */
  var INTRO_MSGS = {
    es: 'Según la base de conocimiento conceptual, **{term}**:',
    en: 'Based on conceptual knowledge, **{term}**:'
  };

  var NORESULT_MSGS = {
    es: 'No encontré información conceptual suficiente sobre ese tema.',
    en: 'I couldn\'t find enough conceptual information on that topic.'
  };

  /* ─────────────────────────────────────────────
     UTILIDADES INTERNAS
  ───────────────────────────────────────────── */

  /* Detecta el idioma activo del bot desde scroll.js
     (lee la variable de UI si está disponible en DOM) */
  function detectCurrentLang() {
    var inp = document.getElementById('pvChatInput');
    if (inp) {
      var ph = inp.placeholder || '';
      if (/type your/i.test(ph)) return 'en';
    }
    return 'es';
  }

  /* Limpia un nodo de ConceptNet para mostrarlo como texto legible:
     '/c/en/reinforce_concrete' → 'reinforce concrete'
     '/c/es/hormigon_armado'    → 'hormigon armado'   */
  function labelOf(node) {
    if (!node) return '';
    var raw = (node.label || node['@id'] || '').trim();
    if (!raw) return '';
    /* Preferir label si existe */
    if (node.label) return node.label.trim();
    /* Extraer la parte final del @id y limpiar */
    var parts = raw.split('/');
    return parts[parts.length - 1].replace(/_/g, ' ').trim();
  }

  /* Filtra un texto: descarta stopwords y vacíos */
  function isUseful(text) {
    if (!text || text.length < 2) return false;
    return IGNORE_TERMS.indexOf(text.toLowerCase()) === -1;
  }

  /* Extrae el término principal de la consulta del usuario
     (las primeras 2 palabras significativas) */
  function extractMainTerm(rawQuery) {
    var stops = IGNORE_TERMS;
    var words = rawQuery
      .toLowerCase()
      .replace(/[¿¡?!.,;:()\[\]"'«»]/g, ' ')
      .split(/\s+/)
      .filter(function(w) {
        return w.length > 2 && stops.indexOf(w) === -1;
      });
    /* Quitar palabras de pregunta comunes */
    var questionWords = ['que', 'como', 'cual', 'quien', 'donde', 'cuando',
      'what', 'how', 'which', 'who', 'where', 'when', 'define',
      'definicion', 'significa', 'significado'];
    words = words.filter(function(w) { return questionWords.indexOf(w) === -1; });
    return words.slice(0, 2).join(' ').trim() || rawQuery.trim().split(' ')[0];
  }

  /* Construye la respuesta en lenguaje natural desde los edges de ConceptNet */
  function buildResponse(term, edges, lang) {
    var intro = (INTRO_MSGS[lang] || INTRO_MSGS.es).replace('{term}', term);
    var lines = [];
    var seen  = {};

    for (var i = 0; i < edges.length && lines.length < MAX_RELATIONS; i++) {
      var edge = edges[i];
      if (!edge || !edge.rel || !edge.start || !edge.end) continue;
      if ((edge.weight || 0) < MIN_WEIGHT) continue;

      var relUri   = edge.rel['@id'] || '';
      var relLabel = RELATION_LABELS[relUri];
      if (!relLabel) continue; /* descartar relaciones sin traducción conocida */

      var startLabel = labelOf(edge.start);
      var endLabel   = labelOf(edge.end);
      var termNorm   = term.toLowerCase();

      /* Solo mostrar el extremo que NO es el término buscado */
      var other = '';
      if (startLabel.toLowerCase() === termNorm) {
        other = endLabel;
      } else if (endLabel.toLowerCase() === termNorm) {
        /* Relación inversa: reformular */
        other = startLabel;
      } else {
        /* Ninguno coincide exactamente — usar end como complemento */
        other = endLabel;
      }

      if (!isUseful(other)) continue;
      var key = relUri + '|' + other.toLowerCase();
      if (seen[key]) continue;
      seen[key] = true;

      lines.push('- ' + (relLabel[lang] || relLabel.es) + ' **' + other + '**');
    }

    if (lines.length === 0) return null;
    return intro + '\n' + lines.join('\n');
  }

  /* ─────────────────────────────────────────────
     API PÚBLICA
  ───────────────────────────────────────────── */

  /**
   * query(rawQuery, onSuccess, onFail)
   * Consulta ConceptNet y llama onSuccess(text) o onFail().
   */
  function query(rawQuery, onSuccess, onFail) {
    if (typeof fetch !== 'function') { onFail(); return; }

    var lang = detectCurrentLang();
    var term = extractMainTerm(rawQuery);
    if (!term) { onFail(); return; }

    /* ConceptNet acepta el nodo en inglés o español.
       Intentamos con el idioma activo; si falla sin resultados,
       probamos en inglés como segundo intento. */
    var langCode = lang === 'en' ? 'en' : 'es';
    var nodeUri  = '/c/' + langCode + '/' + encodeURIComponent(term.replace(/\s+/g, '_'));
    var url      = CONCEPTNET_API + '/query?node=' + nodeUri +
                   '&rel=/r/IsA,/r/UsedFor,/r/HasA,/r/PartOf,/r/CapableOf,' +
                   '/r/DefinedAs,/r/HasProperty,/r/RelatedTo,/r/MadeOf,' +
                   '/r/Causes,/r/CreatedBy,/r/SimilarTo' +
                   '&limit=15&offset=0';

    fetch(url)
      .then(function(r) {
        if (!r.ok) throw new Error('http-' + r.status);
        return r.json();
      })
      .then(function(data) {
        var edges = data && data.edges;
        if (!edges || edges.length === 0) {
          /* Segundo intento en inglés si el primer idioma no da resultados */
          if (langCode !== 'en') {
            return fetchEnglishFallback(term, lang, onSuccess, onFail);
          }
          onFail();
          return;
        }
        var text = buildResponse(term, edges, lang);
        if (text) {
          onSuccess(text);
        } else {
          if (langCode !== 'en') {
            fetchEnglishFallback(term, lang, onSuccess, onFail);
          } else {
            onFail();
          }
        }
      })
      .catch(function() { onFail(); });
  }

  /* Segundo intento del nodo en inglés cuando el original en español falla */
  function fetchEnglishFallback(term, lang, onSuccess, onFail) {
    var nodeUri = '/c/en/' + encodeURIComponent(term.replace(/\s+/g, '_'));
    var url     = CONCEPTNET_API + '/query?node=' + nodeUri +
                  '&rel=/r/IsA,/r/UsedFor,/r/HasA,/r/PartOf,/r/CapableOf,' +
                  '/r/DefinedAs,/r/HasProperty,/r/RelatedTo,/r/MadeOf,' +
                  '/r/Causes,/r/CreatedBy,/r/SimilarTo' +
                  '&limit=15&offset=0';
    fetch(url)
      .then(function(r) {
        if (!r.ok) throw new Error('http-' + r.status);
        return r.json();
      })
      .then(function(data) {
        var edges = data && data.edges;
        if (!edges || edges.length === 0) { onFail(); return; }
        var text = buildResponse(term, edges, lang);
        text ? onSuccess(text) : onFail();
      })
      .catch(function() { onFail(); });
  }

  /* ── Exponer API global ── */
  window.PV_CONCEPTNET = {
    query: query
  };

})();
/* FIN conceptnet-module.js */
