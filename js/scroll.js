/**
 * PAVEL – scroll.js
 * ──────────────────────────────────────────────
 * Experiencia de scroll dinámica:
 *  1. Barra de progreso de lectura (fixed top).
 *  2. Reveal en cascada de las secciones al entrar
 *     en viewport (usa .reveal-section ya definida
 *     en hero.css, vía IntersectionObserver).
 *  3. Botón "volver arriba" en el footer.
 *  4. Año dinámico del copyright.
 * Complementa a hero.js (que ya gestiona header,
 * topbar y parallax) sin duplicar listeners.
 */

(function () {
  'use strict';

  // ── Referencias DOM ──────────────────────────
  const progressBar   = document.getElementById('scroll-progress');
  const backTopBtn     = document.getElementById('back-top');
  const yearEl          = document.getElementById('footer-year');
  const heroSection    = document.getElementById('inicio');
  const heroContent    = document.querySelector('.hero__content');
  const heroOverlay    = document.querySelector('.hero__overlay');
  const heroBgImg      = document.querySelector('.hero__bg-img');
  const revealTargets  = document.querySelectorAll(
    '.section-placeholder, .services, .site-footer'
  );

  // ── Año dinámico ─────────────────────────────
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Barra de progreso + transición cinematográfica de salida del hero ──
  let ticking = false;
  const heroH = heroSection ? heroSection.offsetHeight : 0;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = progress.toFixed(2) + '%';
    }

    /* Transición notoria: al abandonar el hero, el fondo hace
       zoom-in, el overlay oscurece la escena y el contenido se
       desliza hacia arriba con blur creciente, como una salida
       de cámara (efecto perceptible incluso en scroll corto). */
    if (heroH > 0) {
      const exitProgress = Math.min(scrollTop / (heroH * 0.85), 1);

      if (heroContent) {
        heroContent.style.transform = `translateY(${exitProgress * -120}px) scale(${1 - exitProgress * 0.12})`;
        heroContent.style.opacity   = (1 - exitProgress).toFixed(3);
        heroContent.style.filter    = `blur(${(exitProgress * 6).toFixed(2)}px)`;
      }
      if (heroBgImg) {
        heroBgImg.style.transform = `scale(${1 + exitProgress * 0.18}) translateY(${scrollTop * 0.05}px)`;
      }
      if (heroOverlay) {
        heroOverlay.style.setProperty('--overlay-boost', (exitProgress * 0.6).toFixed(3));
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();

  // ── Volver arriba ────────────────────────────
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Reveal de secciones (clip-path + fade) ───
  if (revealTargets.length > 0) {
    revealTargets.forEach((el) => el.classList.add('reveal-section'));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  // ── Respeta reduced-motion: sin transición, todo visible ──
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-section').forEach((el) => {
      el.classList.add('revealed');
    });
  }

  // ── Animación de imágenes de sección (zoom-out + fade) ──────
  // Excluye .hero__bg-img (inicio) que ya tiene su propia animación.
  const sectionImgs = document.querySelectorAll(
    '.services__hero-img, .solutions__hero-img, .projects__hero-img, .about__hero-img, .contact__hero-img'
  );

  if (sectionImgs.length > 0) {
    sectionImgs.forEach((img) => img.classList.add('section-img-reveal'));

    const imgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('img-visible');
            imgObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '50px 0px 0px 0px' }
    );

    sectionImgs.forEach((img) => imgObserver.observe(img));
  }

  // ── Estadísticas dinámicas: proyectos entregados + años de trayectoria ──
  // Proyectos entregados: sube +1 cada 5 días desde una base, con tope de 10 000.
  // Años de trayectoria: se calcula en vivo desde la fecha de fundación, así
  // sube solo cada aniversario sin que haya que tocar el HTML nunca más.
  (function setDynamicStatTargets() {
    const MS_DAY = 86400000;

    const projectsEl = document.querySelector('[data-stat="proyectos"]');
    if (projectsEl) {
      const BASE_COUNT   = 34;
      const BASE_DATE    = new Date('2026-06-30T00:00:00');
      const STEP_DAYS    = 5;
      const CAP          = 10000;
      const elapsedDays  = Math.max(0, Math.floor((Date.now() - BASE_DATE.getTime()) / MS_DAY));
      const target       = Math.min(CAP, BASE_COUNT + Math.floor(elapsedDays / STEP_DAYS));
      projectsEl.setAttribute('data-count', target);
    }

    const yearsEl = document.querySelector('[data-stat="anios"]');
    if (yearsEl) {
      const FOUNDING_DATE = new Date('2022-09-01T00:00:00');
      const now = new Date();
      let years = now.getFullYear() - FOUNDING_DATE.getFullYear();
      const anniversaryThisYear = new Date(now.getFullYear(), FOUNDING_DATE.getMonth(), FOUNDING_DATE.getDate());
      if (now < anniversaryThisYear) years -= 1;
      yearsEl.setAttribute('data-count', Math.max(0, years));
    }
  })();

  // ── Contador animado de estadísticas (sección Proyectos) ──
  // Independiente de sectionImgs: antes vivía anidado dentro de ese bloque
  // y por eso, si esas imágenes no estaban presentes, los contadores nunca
  // se ejecutaban y los números se quedaban siempre en 0.
  const statValues = document.querySelectorAll('.pstat__num-value[data-count]');

  if (statValues.length > 0) {
    const animateCount = (el) => {
      const target   = parseInt(el.getAttribute('data-count'), 10) || 0;
      const duration = 1400;
      const start    = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      statValues.forEach((el) => { el.textContent = el.getAttribute('data-count'); });
    } else {
      const statObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              statObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      statValues.forEach((el) => statObserver.observe(el));
    }
  }

})();

/* ================================================
   CHATBOT WIDGET v3.1 — Motor Conversacional IA
   Motor de comprensión avanzado con:
   - Análisis completo del mensaje antes de responder
   - Detección de múltiples intenciones (Intent Scoring)
   - Semántica híbrida: keywords + sinónimos + frases
   - Confidence Score con solicitud de aclaración
   - Memoria conversacional (contexto de sesión)
   - Referencias anafóricas ("eso", "lo anterior", etc.)
   - Detección de tipo de mensaje (pregunta/orden/casual)
   - Tolerancia a errores ortográficos y abreviaturas
   - Detección automática de idioma
   - Diversidad de respuestas (anti-repetición)
   - Postprocesamiento de naturalidad
   - Validación interna de cobertura de intenciones
   - Enrutador automático empresa/Wikipedia (sin botones)
   NO modificar código existente arriba de esta línea.
================================================ */

(function () {
  'use strict';

  /* ════════════════════════════════════════════════
     BASE DE CONOCIMIENTO — FALLBACK MÍNIMO
  ════════════════════════════════════════════════ */
  var PV_DATA_FALLBACK = {
    kb: [
      {
        keys: ['contacto', 'contactar', 'telefono', 'asesor', 'humano', 'llamar'],
        synonyms: ['comunicarse', 'hablar con alguien', 'persona real'],
        answer: ['Puede contactarnos a través del formulario en la sección Contacto o directamente por teléfono.']
      }
    ],
    fallback: [
      'No tengo información específica sobre eso, pero nuestro equipo puede ayudarle directamente:',
      'Para responderle con precisión, lo mejor es hablar con uno de nuestros especialistas:'
    ],
    welcome: '¡Hola! 👋 Soy Leo, el asistente virtual de JPO Contracting Unlimited Inc. ¿En qué puedo ayudarle hoy?',
    contact: {
      name: 'JPO Contracting Unlimited Inc.',
      phoneDisplay: '+1 (437) 830-2999',
      phoneHref: '+14378302999',
      email: 'official@jpocontracting.com'
    }
  };

  /* ════════════════════════════════════════════════
     OBTENER DATOS SEGÚN IDIOMA ACTIVO
  ════════════════════════════════════════════════ */
  function getData() {
    if (currentLang === 'en' && window.PV_CHATBOT_DATA_EN && window.PV_CHATBOT_DATA_EN.kb) {
      return window.PV_CHATBOT_DATA_EN;
    }
    if (window.PV_CHATBOT_DATA && window.PV_CHATBOT_DATA.kb) {
      return window.PV_CHATBOT_DATA;
    }
    if (window.console && console.warn) {
      console.warn('[Chatbot] pavel-chatbot-data.js no encontrado. Usando fallback mínimo.');
    }
    return PV_DATA_FALLBACK;
  }

  /* ════════════════════════════════════════════════
     ESTADO DE LA CONVERSACIÓN — MEMORIA TEMPORAL
  ════════════════════════════════════════════════ */
  var conversationMemory = {
    history: [],          // [{role, text, intent, timestamp}]
    lastTopic: null,      // última entrada KB respondida
    lastAnswer: null,     // última respuesta enviada
    usedAnswers: {},      // {entryIndex: [answerIndex, ...]} — anti-repetición
    topicStack: [],       // pila de temas detectados
    userName: null,       // nombre si el usuario lo dijo
    detectedLang: null,   // idioma detectado del usuario
    clarificationPending: false,
    turnCount: 0
  };

  /* ════════════════════════════════════════════════
     NORMALIZACIÓN AVANZADA
     - Minúsculas, tildes, puntuación, abreviaturas comunes
  ════════════════════════════════════════════════ */
  var ABBREVIATIONS = {
    'q ': 'que ', 'xq': 'porque', 'xk': 'porque', 'tmb': 'también',
    'pq': 'porque', 'tb': 'también', 'grcs': 'gracias', 'grs': 'gracias',
    'fav': 'favor', 'pa': 'para', 'x': 'por', 'nro': 'numero',
    'tel': 'telefono', 'wsp': 'whatsapp', 'info': 'informacion',
    'cto': 'contacto', 'ppto': 'presupuesto', 'ger': 'gerencia',
    'ing': 'ingenieria', 'aprox': 'aproximadamente', 'esp': 'especialidad',
    /* ── Ampliación: jerga de chat / mensajería informal ── */
    'xfa': 'por favor', 'porfa': 'por favor', 'porfis': 'por favor',
    'finde': 'fin de semana', 'depto': 'departamento', 'depa': 'departamento',
    'xa': 'para', 'd': 'de', 'k': 'que', 'kiero': 'quiero', 'kisiera': 'quisiera',
    'msj': 'mensaje', 'asap': 'lo antes posible', 'seg': 'seguro',
    'lic': 'licencia', 'mant': 'mantenimiento', 'serv': 'servicio',
    'cliente': 'cliente', 'gtia': 'garantia', 'gar': 'garantia',
    'pres': 'presupuesto', 'oki doki': 'ok', 'dl': 'del', 'ste': 'siguiente',
    'jeje': '', 'jaja': '', 'jajaja': ''
  };

  var TYPO_MAP = {
    'serviciso': 'servicios', 'iingenieria': 'ingenieria', 'presuspuesto': 'presupuesto',
    'cotisacion': 'cotizacion', 'horaro': 'horario', 'telefone': 'telefono',
    'contactar': 'contacto', 'aseror': 'asesor', 'bim': 'bim',
    'proecto': 'proyecto', 'proycto': 'proyecto', 'calidad': 'calidad',
    'certficacion': 'certificacion', 'sostenibilidad': 'sostenibilidad',
    /* ── Ampliación: errores ortográficos comunes detectados en auditoría ── */
    'garantia': 'garantia', 'garrantia': 'garantia', 'garantía': 'garantia',
    'asegurasion': 'aseguracion', 'asegurado': 'asegurado', 'seuro': 'seguro',
    'aseguransa': 'seguro', 'confidenzialidad': 'confidencialidad',
    'confidenciaidad': 'confidencialidad', 'visita': 'visita',
    'bideollamada': 'videollamada', 'bideo llamada': 'videollamada',
    'reunio': 'reunion', 'idioma': 'idioma', 'espaniol': 'español',
    'pekeño': 'pequeño', 'pequenio': 'pequeño', 'segunda opinio': 'segunda opinion',
    'subdibision': 'subdivision', 'subdivicion': 'subdivision',
    'topografia': 'topografia', 'topojrafia': 'topografia',
    'jeotecnico': 'geotecnico', 'jeotécnico': 'geotecnico',
    'elektrico': 'electrico', 'elecrico': 'electrico', 'plomeria': 'plomeria',
    'plomería': 'plomeria', 'plomeriia': 'plomeria', 'aser': 'hacer',
    'aze': 'hace', 'asen': 'hacen', 'kieren': 'quieren', 'aora': 'ahora',
    'aci': 'asi', 'amos': 'vamos', 'ablar': 'hablar', 'ola': 'hola',
    'q tal': 'que tal', 'q onda': 'que tal', 'kanto': 'cuanto', 'kuanto': 'cuanto',
    'kosto': 'costo', 'presio': 'precio', 'presios': 'precios',
    'orario': 'horario', 'oras': 'horas', 'kontrato': 'contrato',
    'firmaron': 'firmaron', 'recibo': 'recibo', 'fatura': 'factura',
    'facura': 'factura', 'kancelar': 'cancelar', 'kancelacion': 'cancelacion',
    'rembolso': 'reembolso', 'rembolsan': 'reembolsan', 'kalidad': 'calidad',
    'aser cita': 'hacer cita', 'ajenda': 'agenda', 'ajendar': 'agendar',
    'permizo': 'permiso', 'pemiso': 'permiso', 'lizencia': 'licencia',
    'lisencia': 'licencia', 'rrenovacion': 'renovacion', 'amplazion': 'ampliacion',
    'ampliasion': 'ampliacion', 'arkitecto': 'arquitecto', 'arkitectura': 'arquitectura'
  };

  function normalize(str) {
    var s = str.toLowerCase()
      .replace(/[áàäâã]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöôõ]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/ñ/g, 'n')
      .replace(/ç/g, 'c')
      .replace(/[¿¡]/g, '');

    // Expandir abreviaturas
    Object.keys(ABBREVIATIONS).forEach(function(abbr) {
      var re = new RegExp('\\b' + abbr + '\\b', 'g');
      s = s.replace(re, ABBREVIATIONS[abbr]);
    });

    // Corregir errores tipográficos conocidos
    Object.keys(TYPO_MAP).forEach(function(typo) {
      var re = new RegExp('\\b' + typo + '\\b', 'g');
      s = s.replace(re, TYPO_MAP[typo]);
    });

    return s;
  }

  /* ════════════════════════════════════════════════
     DETECCIÓN DE IDIOMA
  ════════════════════════════════════════════════ */
  var LANG_SIGNALS = {
    en: ['what', 'how', 'where', 'when', 'which', 'who', 'can you', 'do you', 'is there',
         'services', 'project', 'contact', 'price', 'cost', 'hello', 'hi ', 'thanks', 'please'],
    es: ['qué', 'que', 'cómo', 'como', 'dónde', 'donde', 'cuándo', 'cuando', 'cuál',
         'servicios', 'proyecto', 'contacto', 'precio', 'costo', 'hola', 'gracias', 'favor']
  };

  function detectLanguage(text) {
    var lower = text.toLowerCase();
    var enScore = 0, esScore = 0;
    LANG_SIGNALS.en.forEach(function(w) { if (lower.indexOf(w) !== -1) enScore++; });
    LANG_SIGNALS.es.forEach(function(w) { if (lower.indexOf(w) !== -1) esScore++; });
    if (enScore > esScore + 1) return 'en';
    if (esScore > enScore)     return 'es';
    return null; // inconcluso — mantener idioma actual
  }

  /* ════════════════════════════════════════════════
     CLASIFICACIÓN DE TIPO DE MENSAJE
     Distingue: pregunta, orden, casual, comparacion,
     solicitud, opinion, referencia_anterior
  ════════════════════════════════════════════════ */
  var MSG_TYPE_PATTERNS = {
    pregunta: [/^(qu[eé]|c[oó]mo|cu[aá]ndo|d[oó]nde|cu[aá]l|qui[eé]n|cu[aá]nto)/,
               /\?/, /(sabes|saben|tienen|hacen|ofrecen|pueden|es que|hay)/],
    orden:    [/^(dame|d[aá]me|env[ií]ame|mand|muestr|lista|dime|explica|describ|quiero|cuentame|cu[eé]ntame|hablame|h[aá]blame|platicame|platicame)/,
               /^(necesito|busco|require|solicito|quisiera|deseo)/],
    casual:   [/^(hola|buenos|buenas|hey|hi\b|oye|saludos|qu[eé] tal|c[oó]mo est)/,
               /^(gracias|ok\b|oki|perfecto|entendido|listo|genial|excelente|bien)/,
               /^(adios|hasta|chao|bye|nos vemos)/],
    referencia: [/\b(eso|eso mismo|aquello|lo anterior|lo que dijiste|lo mencionado|el anterior|la anterior|ese tema|esa opcion|esa opción)\b/,
                 /\b(como dijiste|como mencionaste|a lo que te refieres|lo que comentaste)\b/]
  };

  /* Muletillas / saludos que suelen ANTEPONERSE a la consulta real
     ("ok dame el correo", "hola quiero saber el precio", "oye, tienen
     servicio de..."). Si no se separan antes de clasificar, los patrones
     de "orden"/"pregunta" (anclados al inicio del mensaje) nunca llegan
     a evaluarse y el mensaje se cae erróneamente en "casual". */
  var FILLER_RE = /^(buenos d[ií]as|buenas tardes|buenas noches|buenas|hola+|holis|hey|hi|oye|oiga|disculp[ae]|perdon[ae]?|ok(ay)?|oki|vale|bueno|listo|entendido|genial|excelente|perfecto|muchas gracias|gracias|por favor|porfa|porfavor|saludos|qu[eé] tal|c[oó]mo est[aá]s?|adios|hasta luego|hasta pronto|hasta|chao|bye|nos vemos)\b[\s,.!¡¿:]*/;

  function stripFillers(normalizedText) {
    var s = normalizedText;
    var prev;
    do {
      prev = s;
      s = s.replace(FILLER_RE, '').trim();
    } while (s !== prev && s.length > 0);
    return s;
  }

  function classifyMessage(text) {
    var lower    = normalize(text);
    var stripped = stripFillers(lower);
    var testText = stripped.length > 0 ? stripped : lower;
    var types = [];

    /* "pregunta"/"orden"/"referencia" se evalúan sobre el texto SIN
       saludos/muletillas iniciales, para que sus patrones anclados (^)
       detecten correctamente la intención real del mensaje. */
    ['pregunta', 'orden', 'referencia'].forEach(function(type) {
      var patterns = MSG_TYPE_PATTERNS[type];
      for (var i = 0; i < patterns.length; i++) {
        if (patterns[i].test(testText)) { types.push(type); break; }
      }
    });

    /* "casual" solo se considera la clasificación PURA del mensaje
       (y por lo tanto bloquea la búsqueda en la KB) cuando, tras
       quitar el saludo/muletilla, no queda contenido adicional. */
    var casualPatterns = MSG_TYPE_PATTERNS.casual;
    var hasCasualPrefix = false;
    for (var c = 0; c < casualPatterns.length; c++) {
      if (casualPatterns[c].test(lower)) { hasCasualPrefix = true; break; }
    }
    if (hasCasualPrefix && stripped.length === 0 && types.length === 0) {
      types.push('casual');
    }

    if (types.length === 0) types.push('solicitud');
    return types;
  }

  /* ════════════════════════════════════════════════
     SEGMENTACIÓN DE MÚLTIPLES INTENCIONES
     Divide un mensaje en sub-preguntas cuando detecta
     separadores sintácticos o conjunciones adversativas.
  ════════════════════════════════════════════════ */
  var INTENT_SEPARATORS = /[?!]\s+(?=[A-ZÁÉÍÓÚ¿])|(?:\s+y\s+(?:también\s+)?(?:qu[eé]|c[oó]mo|cu[aá]ndo|d[oó]nde|cu[aá]nto))|(?:\s+(?:además|también|por otro lado|asimismo|igualmente)\s+)|(?:\s+(?:otra pregunta|segunda pregunta|también quiero saber)\s*[,:]\s*)/gi;

  function segmentIntents(text) {
    // Conservar el '?' al dividir
    var segments = [];
    var parts = text.split(/(?<=[?!])\s+(?=[A-ZÁÉÍÓÚ¿a-záéíóú])/);
    if (parts.length <= 1) {
      // intentar split por conjunciones
      parts = text.split(/\s+y\s+(?=qu[eé]|c[oó]mo|cu[aá]ndo|d[oó]nde|cu[aá]nto)/i);
    }
    parts.forEach(function(p) {
      var t = p.trim();
      if (t.length > 5) segments.push(t);
    });
    return segments.length > 0 ? segments : [text];
  }

  /* ════════════════════════════════════════════════
     STOPWORDS PARA EXTRACCIÓN DE KEYWORDS
  ════════════════════════════════════════════════ */
  var STOPWORDS = {
    es: ['quiero','saber','cual','cuál','como','cómo','qué','que','por','para',
         'con','una','uno','los','las','del','sea','son','hay','tan','muy',
         'esto','esta','ese','esa','pero','mas','más','cuando','donde','dónde',
         'cuándo','sobre','acerca','favor','podría','podria','puede','puedo',
         'me','te','le','se','si','no','de','la','el','en','es','un','y',
         'a','e','o','al','lo','su','fue','ser','han','tener','ver','dar',
         'mi','tu','su','nos','les','mis','tus','sus','este','estos','estas'],
    en: ['what','which','how','when','where','why','want','know','can','could',
         'would','should','please','about','some','this','that','these','those',
         'with','from','have','been','will','more','than','also','just','like',
         'the','a','an','in','is','it','of','on','to','do','be','at','or',
         'and','for','are','was','has','had','not','but','so','if','as','by']
  };

  function extractKeywords(text) {
    var stops = STOPWORDS[currentLang] || STOPWORDS.es;
    var words = normalize(text)
      .replace(/[¿¡?!.,;:()\[\]"'«»]/g, ' ')
      .split(/\s+/)
      .filter(function(w) { return w.length > 2 && stops.indexOf(w) === -1; });
    words.sort(function(a, b) { return b.length - a.length; });
    var seen = {}, top = [];
    for (var i = 0; i < words.length && top.length < 5; i++) {
      if (!seen[words[i]]) { seen[words[i]] = true; top.push(words[i]); }
    }
    return top;
  }

  /* ════════════════════════════════════════════════
     SINÓNIMOS SEMÁNTICOS GLOBALES
     Amplia la cobertura cuando la KB no tiene la
     palabra exacta usada por el usuario.
  ════════════════════════════════════════════════ */
  var SEMANTIC_SYNONYMS = {
    'precio':        ['costo','tarifa','valor','cuanto cuesta','cuanto cobran','honorario','inversion'],
    'costo':         ['precio','tarifa','valor','cuanto cuesta','honorario'],
    'servicio':      ['oferta','solucion','actividad','especialidad','capacidad'],
    'proyecto':      ['obra','trabajo','construccion','desarrollo','encargo'],
    'contacto':      ['comunicacion','telefono','whatsapp','correo','email','llamar','escribir'],
    'tiempo':        ['plazo','duracion','demora','cuando terminan','cronograma','fecha'],
    'equipo':        ['personal','staff','profesionales','ingenieros','quienes son'],
    'calidad':       ['garantia','certificacion','iso','norma','estandar'],
    'bim':           ['modelado','digital','software','3d','revit','tecnologia'],
    'cobertura':     ['paises','donde','region','internacional','latam'],
    'proceso':       ['metodologia','pasos','etapas','como trabajan','procedimiento'],
    'residencial':   ['vivienda','casa','apartamento','conjunto','edificio'],
    'infraestructura': ['via','carretera','puente','obra civil','red vial'],
    'sostenible':    ['verde','ecologico','leed','medio ambiente','huella carbono'],
    'emergencia':    ['urgente','dano','grieta','fisura','colapso','falla','sismo'],
    /* ── Ampliación: nuevos tópicos cubiertos en la KB ── */
    'garantia':      ['respaldo','responden','seguridad del trabajo','cobertura de garantia'],
    'seguro':        ['poliza','licencia profesional','asegurados','wsib','responsabilidad civil'],
    'confidencialidad': ['nda','reserva','privacidad','propiedad de los planos'],
    'subdivision':   ['severance','dividir terreno','lot severance','fraccionar lote'],
    'adu':           ['garden suite','coach house','segundo suite','suite secundaria','unidad accesoria'],
    'patrimonial':   ['heritage','historico','designacion patrimonial','edificio protegido'],
    'accesibilidad': ['aoda','diseño universal','rampa','acceso discapacitados'],
    'topografia':    ['survey','levantamiento','linderos','mojones'],
    'electrico':     ['plomeria','mecanica','hvac','mep','instalaciones'],
    'cancelar':      ['cancelacion','reembolso','devolucion del anticipo'],
    'queja':         ['reclamo','inconformidad','no satisfecho','mal servicio'],
    'empleo':        ['vacantes','carreras','pasantia','trabajo con ustedes'],
    'idioma':        ['español','ingles','bilingue','en que idioma atienden'],
    'visita':        ['inspeccion','levantamiento en sitio','medicion en sitio'],
    'virtual':       ['zoom','videollamada','reunion virtual','consulta remota']
  };

  function expandWithSynonyms(keywords) {
    var expanded = keywords.slice();
    keywords.forEach(function(kw) {
      Object.keys(SEMANTIC_SYNONYMS).forEach(function(root) {
        var syns = SEMANTIC_SYNONYMS[root];
        if (root === kw || syns.indexOf(kw) !== -1) {
          // Agregar root y todos los sinónimos
          if (expanded.indexOf(root) === -1) expanded.push(root);
          syns.forEach(function(s) {
            var singleWord = s.split(' ')[0];
            if (expanded.indexOf(singleWord) === -1) expanded.push(singleWord);
          });
        }
      });
    });
    return expanded;
  }

  /* ════════════════════════════════════════════════
     RESOLUCIÓN DE REFERENCIAS ANAFÓRICAS
     "eso", "lo anterior", "ese tema", etc.
     Devuelve la última entrada KB respondida si se detecta.
  ════════════════════════════════════════════════ */
  function resolveAnaphora(text) {
    var lower = normalize(text);
    var anaphoraPatterns = [
      'eso', 'eso mismo', 'aquello', 'lo anterior', 'lo que dijiste',
      'lo mencionado', 'el anterior', 'la anterior', 'ese tema',
      'esa opcion', 'como dijiste', 'como mencionaste', 'lo que comentaste'
    ];
    for (var i = 0; i < anaphoraPatterns.length; i++) {
      if (lower.indexOf(anaphoraPatterns[i]) !== -1) {
        return conversationMemory.lastTopic; // puede ser null
      }
    }
    return false; // false = no es referencia anafórica
  }

  /* ════════════════════════════════════════════════
     MOTOR DE INTENT SCORING
     Sistema de puntuación multi-evidencia:
     1. Hits directos en keys (frases > 1 palabra valen más)
     2. Hits en sinónimos de la entrada KB
     3. Hits de keywords expandidas semánticamente
     4. Boost por coincidencia contextual con memoria
     5. Score normalizado relativo al tamaño de la entrada
     6. Confidence = ratio hits/posibles_hits
  ════════════════════════════════════════════════ */
  var MIN_SCORE     = 0.08;
  var MULTI_GAP     = 0.38;
  var MAX_INTENTS   = 3;
  var CONFIDENCE_THRESHOLD = 0.25; // por debajo → pedir aclaración
  var DOMAIN_STRONG_THRESHOLD = 0.30; // relScore por encima del cual la KB de empresa gana sin importar la forma de la pregunta
  var DOMAIN_WEAK_THRESHOLD   = 0.12; // relScore mínimo para aceptar empresa cuando NO hay patrón enciclopédico explícito

  function scoreEntry(entry, normalizedMsg, keywords, expandedKeywords, entryIndex) {
    var score = 0;
    var maxPossible = 0;
    var matchedKeys = [];

    // 1. Hits directos en keys
    for (var j = 0; j < entry.keys.length; j++) {
      var key = normalize(entry.keys[j]);
      var weight = key.indexOf(' ') !== -1 ? 2.5 : 1; // frases valen más
      maxPossible += weight;
      if (normalizedMsg.indexOf(key) !== -1) {
        score += weight;
        matchedKeys.push(key);
      }
    }

    // 2. Hits en sinónimos declarados en la entrada KB (si los tiene)
    if (entry.synonyms) {
      for (var s = 0; s < entry.synonyms.length; s++) {
        var syn = normalize(entry.synonyms[s]);
        var synWeight = syn.indexOf(' ') !== -1 ? 1.8 : 0.8;
        maxPossible += synWeight;
        if (normalizedMsg.indexOf(syn) !== -1) {
          score += synWeight;
          matchedKeys.push('[syn:' + syn + ']');
        }
      }
    }

    // 3. Hits semánticos expandidos (keywords del usuario vs keys de la entrada)
    expandedKeywords.forEach(function(kw) {
      if (kw.length < 3) return;
      for (var k = 0; k < entry.keys.length; k++) {
        var entryKey = normalize(entry.keys[k]);
        if (entryKey.indexOf(kw) !== -1 && matchedKeys.indexOf(entryKey) === -1) {
          score += 0.6;
          matchedKeys.push('[sem:' + kw + ']');
          break;
        }
      }
    });

    // 4. Boost contextual: si el tema es el mismo que el anterior
    if (conversationMemory.lastTopic !== null &&
        conversationMemory.lastTopic === entryIndex) {
      score += 0.4;
    }

    if (score === 0) return null;

    var confidence = maxPossible > 0 ? score / maxPossible : 0;
    var relScore   = score / Math.sqrt(Math.max(entry.keys.length, 1));

    return {
      entry:      entry,
      entryIndex: entryIndex,
      score:      relScore,
      confidence: confidence,
      matchedKeys: matchedKeys
    };
  }

  /* ════════════════════════════════════════════════
     SELECCIÓN ANTI-REPETICIÓN DE RESPUESTAS
  ════════════════════════════════════════════════ */
  function pickAnswer(entry, entryIndex) {
    var answers = Array.isArray(entry.answer) ? entry.answer : [entry.answer];
    if (answers.length === 1) return answers[0];

    var used = conversationMemory.usedAnswers[entryIndex] || [];
    var available = [];
    for (var i = 0; i < answers.length; i++) {
      if (used.indexOf(i) === -1) available.push(i);
    }

    // Si ya se usaron todas, resetear
    if (available.length === 0) {
      conversationMemory.usedAnswers[entryIndex] = [];
      available = answers.map(function(_, idx) { return idx; });
    }

    var chosen = available[Math.floor(Math.random() * available.length)];
    if (!conversationMemory.usedAnswers[entryIndex]) {
      conversationMemory.usedAnswers[entryIndex] = [];
    }
    conversationMemory.usedAnswers[entryIndex].push(chosen);
    return answers[chosen];
  }

  /* ════════════════════════════════════════════════
     PROCESO INTERNO DE RAZONAMIENTO POR ETAPAS
     1. Comprender  → normalizar, detectar idioma, clasificar tipo
     2. Segmentar   → dividir en sub-intenciones si hay múltiples preguntas
     3. Detectar    → Intent Scoring para cada segmento
     4. Validar     → verificar que cada intención tiene respuesta
     5. Recuperar   → seleccionar respuestas con anti-repetición
     6. Postprocesar → añadir conectores naturales, ordenar por prioridad
  ════════════════════════════════════════════════ */
  function findAnswer(rawText) {
    var data  = getData();
    var kb    = data.kb || [];

    /* ── ETAPA 1: Comprender ── */
    var detectedLang = detectLanguage(rawText);
    if (detectedLang && detectedLang !== currentLang) {
      // Usuario escribió en otro idioma: no forzar cambio automático,
      // pero registrarlo para futuras respuestas
      conversationMemory.detectedLang = detectedLang;
    }

    var msgTypes  = classifyMessage(rawText);
    var isAnaphora = resolveAnaphora(rawText);

    // Si es referencia anafórica y tenemos un tema previo: usar directamente
    if (isAnaphora !== false && isAnaphora !== null) {
      var prevEntry = kb[isAnaphora];
      if (prevEntry) {
        var anaphoraAnswer = pickAnswer(prevEntry, isAnaphora);
        return { text: anaphoraAnswer, type: 'anaphora', confidence: 0.9, section: prevEntry.section || null };
      }
    }

    // Si es saludo casual puro: no buscar en KB
    if (msgTypes.length === 1 && msgTypes[0] === 'casual') {
      return { text: null, type: 'casual', confidence: 1.0 };
    }

    /* ── ETAPA 2: Segmentar en sub-intenciones ── */
    var segments = segmentIntents(rawText);

    /* ── ETAPA 3 & 4: Detectar y puntuar intenciones por segmento ── */
    var allScored = [];
    var seenEntries = {};

    segments.forEach(function(segment) {
      var normalizedSeg = normalize(segment);
      var keywords = extractKeywords(segment);
      var expandedKw = expandWithSynonyms(keywords);

      for (var i = 0; i < kb.length; i++) {
        if (seenEntries[i]) continue; // evitar duplicados entre segmentos
        var result = scoreEntry(kb[i], normalizedSeg, keywords, expandedKw, i);
        if (result && result.score >= MIN_SCORE) {
          seenEntries[i] = true;
          allScored.push(result);
        }
      }
    });

    if (allScored.length === 0) {
      return { text: null, type: 'notfound', confidence: 0 };
    }

    /* ── Ordenar por score ── */
    allScored.sort(function(a, b) { return b.score - a.score; });

    var bestScore = allScored[0].score;
    var bestConf  = allScored[0].confidence;

    /* ── ETAPA 5: Recuperar respuestas — filtrar por MULTI_GAP ── */
    var selected = [];
    for (var k = 0; k < allScored.length && selected.length < MAX_INTENTS; k++) {
      var item = allScored[k];
      if (item.score < bestScore * MULTI_GAP) break;
      var answer = pickAnswer(item.entry, item.entryIndex);
      selected.push({ text: answer, entryIndex: item.entryIndex, confidence: item.confidence, showContactCard: !!item.entry.showContactCard, section: item.entry.section || null });
    }

    if (selected.length === 0) {
      return { text: null, type: 'notfound', confidence: 0 };
    }

    /* ── Actualizar memoria ── */
    conversationMemory.lastTopic = selected[0].entryIndex;
    conversationMemory.topicStack.push(selected[0].entryIndex);
    if (conversationMemory.topicStack.length > 5) conversationMemory.topicStack.shift();

    /* ── ETAPA 6: Postprocesar — unir con conectores naturales ── */
    var finalText;
    if (selected.length === 1) {
      finalText = selected[0].text;
    } else {
      // Numerar cuando hay múltiples intenciones
      var parts = selected.map(function(s, idx) {
        return (idx > 0 ? '\n\n──────────\n\n' : '') + s.text;
      });
      finalText = parts.join('');
    }

    return { text: finalText, type: 'kb', confidence: bestConf, showContactCard: selected.some(function(s){ return s.showContactCard; }), section: selected[0].section };
  }

  /* ════════════════════════════════════════════════
     ENRUTADOR AUTOMÁTICO ENTRE DOMINIOS
     ──────────────────────────────────────────────
     El bot decide automáticamente, por cada mensaje,
     si debe consultar la KB de la empresa o Wikipedia.
     No hay botones de modo: el enrutamiento es 100%
     transparente para el usuario.

     Prioridad estricta:
       1. KB empresa — score fuerte  (>= DOMAIN_STRONG_THRESHOLD)
          Gana siempre, incluso si la pregunta tiene forma
          enciclopédica ("qué es BIM", "qué servicios tienen").
       2. KB empresa — score débil-moderado (>= DOMAIN_WEAK_THRESHOLD)
          Se acepta cuando la pregunta NO es claramente enciclopédica
          (ej. "cómo solicito una propuesta").
       3. Wikipedia — patrón enciclopédico explícito + sin match fuerte
          de empresa (ej. "qué es el hormigón armado", "quién fue
          Eiffel", "capital de Colombia").
       4. Ambiguo — sin match de empresa y sin patrón enciclopédico:
          intenta Wikipedia primero; si falla, tarjeta de contacto.
  ════════════════════════════════════════════════ */
  var ENCYCLOPEDIC_PATTERNS = [
    /^(que|qu[eé])\s+es\s+/, /^(que|qu[eé])\s+son\s+/, /^(que|qu[eé])\s+significa/,
    /^(que|qu[eé])\s+fue\s+/, /^(que|qu[eé])\s+era\s+/,
    /^quien(es)?\s+(es|fue|son|eran)\s+/, /^qui[eé]n(es)?\s+(es|fue|son|eran)\s+/,
    /^quien(es)?\s+(descubrio|invento|creo|escribio|pinto|construyo|fundo|gano)/,
    /^qui[eé]n(es)?\s+(descubri[oó]|invent[oó]|cre[oó]|escribi[oó]|pint[oó]|construy[oó]|fund[oó]|gan[oó])/,
    /^donde\s+(esta|queda|se encuentra|nacio|murio)/, /^d[oó]nde\s+(est[aá]|queda|se encuentra|naci[oó]|muri[oó])/,
    /^cuando\s+(fue|ocurrio|sucedio|nacio|murio|empezo|termino|se descubrio|se invento)/,
    /^cu[aá]ndo\s+(fue|ocurri[oó]|sucedi[oó]|naci[oó]|muri[oó]|empez[oó]|termin[oó]|se descubri[oó]|se invent[oó])/,
    /^(define|definicion de|definición de)\s+/,
    /^cuantos?\s+(habitantes|kilometros|km|años|anos|planetas|elementos)/,
    /^cu[aá]ntos?\s+(habitantes|kil[oó]metros|km|a[ñn]os|planetas|elementos)/,
    /^(what|who|when|where)\s+(is|are|was|were|invented|discovered|wrote|painted|founded)\s+/,
    /^(define|definition of)\s+/,
    /^how\s+(does|do|did)\s+.+\s+work/, /^c[oó]mo\s+funciona/,
    /capital\s+de\b/, /capital\s+of\b/
  ];

  function looksEncyclopedic(rawText) {
    var lower = normalize(rawText);
    for (var i = 0; i < ENCYCLOPEDIC_PATTERNS.length; i++) {
      if (ENCYCLOPEDIC_PATTERNS[i].test(lower)) return true;
    }
    return false;
  }

  /* Mejor score de la KB de empresa para un texto, sin aplicar
     segmentación ni memoria de contexto (chequeo "puro" de dominio). */
  function bestCompanyScore(rawText) {
    var data = getData();
    var kb   = data.kb || [];
    var normalizedMsg = normalize(rawText);
    var keywords = extractKeywords(rawText);
    var expandedKw = expandWithSynonyms(keywords);
    var best = 0;
    for (var i = 0; i < kb.length; i++) {
      var result = scoreEntry(kb[i], normalizedMsg, keywords, expandedKw, i);
      if (result && result.score > best) best = result.score;
    }
    return best;
  }

  /* Decide el dominio real del mensaje.
     Devuelve: 'empresa' | 'wikipedia' | 'ambiguo' | 'casual' */
  function detectDomain(rawText) {
    var msgTypes = classifyMessage(rawText);
    if (msgTypes.length === 1 && msgTypes[0] === 'casual') return 'casual';
    var anaphoraTopic = resolveAnaphora(rawText);
    if (anaphoraTopic !== false && anaphoraTopic !== null) return 'empresa';

    var companyScore   = bestCompanyScore(rawText);
    var isEncyclopedic = looksEncyclopedic(rawText);

    // Score fuerte de empresa → gana siempre (incluso con forma enciclopédica)
    if (companyScore >= DOMAIN_STRONG_THRESHOLD) return 'empresa';

    // Patrón enciclopédico explícito + sin match fuerte → Wikipedia
    if (isEncyclopedic) return 'wikipedia';

    // Sin patrón enciclopédico pero con match débil-moderado → empresa
    if (companyScore >= DOMAIN_WEAK_THRESHOLD) return 'empresa';

    // Sin match y sin patrón enciclopédico → ambiguo
    // (sendMessage intentará Wikipedia antes del fallback de contacto)
    return 'ambiguo';
  }

  /* ════════════════════════════════════════════════
     RESPUESTAS PARA SALUDOS CASUALES
  ════════════════════════════════════════════════ */
  var CASUAL_RESPONSES = {
    es: [
      'Hola, ¿en qué puedo ayudarle hoy? Estoy aquí para responder sus consultas sobre JPO Contracting Unlimited Inc.',
      '¡Buenas! Si tiene alguna pregunta sobre nuestros servicios, proyectos o tecnología, con gusto le atiendo.',
      'Hola, es un gusto saludarle. ¿Tiene alguna consulta sobre arquitectura, ingeniería o construcción?',
      '¡Buenos días! Si desea conocer nuestros servicios, experiencia o proceso de trabajo, adelante con su pregunta.'
    ],
    en: [
      'Hello! How can I help you today? I\'m here to answer your questions about JPO Contracting Unlimited Inc.',
      'Hi there! Feel free to ask me about our services, projects, or shop drawings.',
      'Good day! What can I help you with regarding architecture or engineering projects?'
    ]
  };

  /* ════════════════════════════════════════════════
     RESPUESTAS PARA SOLICITAR ACLARACIÓN
  ════════════════════════════════════════════════ */
  var CLARIFICATION_MSGS = {
    es: [
      '¿Podría especificar un poco más su consulta? Así podré darle la información más precisa posible.',
      'Para orientarle mejor, ¿puede decirme a qué área se refiere: servicios, proyectos, contacto o algo más?',
      'Su consulta puede referirse a varios temas. ¿Me indica concretamente qué información necesita?'
    ],
    en: [
      'Could you be more specific? That way I can give you the most accurate information.',
      'To help you better, which area are you referring to: services, projects, shop drawings, contact, or something else?',
      'Your question could relate to several topics. Could you tell me exactly what information you need?'
    ]
  };

  /* ════════════════════════════════════════════════
     CONFIRMACIONES CORTAS ("sí" / "no") A PREGUNTAS
     DEL BOT — evita que se enruten por error a Wikipedia.
     Solo se activan cuando el mensaje COMPLETO (corto)
     es una afirmación/negación y ya existe un tema KB
     reciente en la memoria de conversación.
  ════════════════════════════════════════════════ */
  var CONFIRM_YES_PATTERNS = [
    /^s[ií]$/, /^s[ií] por favor$/, /^s[ií] claro$/, /^claro que s[ií]$/,
    /^claro$/, /^exacto$/, /^correcto$/, /^afirmativo$/, /^as[ií] es$/,
    /^por supuesto$/, /^efectivamente$/, /^eso es$/, /^eso mismo$/,
    /^yes$/, /^yeah$/, /^yep$/, /^sure$/, /^of course$/, /^correct$/,
    /^right$/, /^exactly$/, /^affirmative$/
  ];
  var CONFIRM_NO_PATTERNS = [
    /^no$/, /^no gracias$/, /^para nada$/, /^negativo$/, /^no por ahora$/,
    /^no por el momento$/, /^nope$/, /^not really$/, /^no thanks$/,
    /^not at this time$/
  ];

  function detectShortConfirmation(rawText) {
    var t = normalize(rawText).trim().replace(/[.!¡¿?]+$/g, '').trim();
    if (!t || t.split(' ').length > 4) return null;
    for (var i = 0; i < CONFIRM_YES_PATTERNS.length; i++) {
      if (CONFIRM_YES_PATTERNS[i].test(t)) return 'yes';
    }
    for (var j = 0; j < CONFIRM_NO_PATTERNS.length; j++) {
      if (CONFIRM_NO_PATTERNS[j].test(t)) return 'no';
    }
    return null;
  }

  var CONFIRM_FOLLOWUP_MSGS = {
    es: [
      'Perfecto. Puede contarme los detalles de su proyecto aquí, o contactarnos directamente:',
      'Genial, con gusto le ayudamos. Puede escribir los detalles o contactarnos directamente:'
    ],
    en: [
      'Great, feel free to share the details here, or reach us directly:',
      'Perfect, happy to help. You can tell me the details or contact us directly:'
    ]
  };

  var CONFIRM_DECLINE_MSGS = {
    es: [
      '¡Entendido! Si tiene otra consulta sobre nuestros servicios o proyectos, con gusto le ayudo.',
      'De acuerdo. Quedo atento si necesita información sobre algo más.'
    ],
    en: [
      'Got it! If you have another question about our services or projects, I\'m happy to help.',
      'Understood. I\'m here if you need information about anything else.'
    ]
  };

  /* ════════════════════════════════════════════════
     NAVEGACIÓN AUTOMÁTICA A SECCIONES DE LA PÁGINA
     Cuando una entrada de la KB trae `section` (definido
     en data.js / data-en.js), el bot desplaza la página
     principal hasta esa sección y lo indica en su respuesta.
  ════════════════════════════════════════════════ */
  var SECTION_INFO = {
    servicios:  { es: 'Servicios',  en: 'Services' },
    soluciones: { es: 'Soluciones', en: 'Solutions' },
    proyectos:  { es: 'Proyectos',  en: 'Projects' },
    nosotros:   { es: 'Nosotros',   en: 'About Us' },
    contacto:   { es: 'Contacto',   en: 'Contact' }
  };

  function scrollToPageSection(sectionId) {
    var target = document.getElementById(sectionId);
    if (!target) return;
    var header = document.getElementById('site-header');
    var offset = header ? header.offsetHeight : 80;
    var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  }

  function navNoteFor(sectionId) {
    var info = SECTION_INFO[sectionId];
    if (!info) return '';
    var label = info[currentLang] || info.es;
    return currentLang === 'en'
      ? '\n\n📍 I just took you to the **' + label + '** section.'
      : '\n\n📍 Lo acabo de llevar a la sección de **' + label + '**.';
  }

  /* ════════════════════════════════════════════════
     REFERENCIAS DOM
  ════════════════════════════════════════════════ */
  var fab       = document.getElementById('pvChatFab');
  var panel     = document.getElementById('pvChat');
  var closeBtn  = document.getElementById('pvChatClose');
  var messages  = document.getElementById('pvChatMessages');
  var input     = document.getElementById('pvChatInput');
  var sendBtn   = document.getElementById('pvChatSend');
  var quickArea = document.getElementById('pvChatQuick');
  var badge     = document.getElementById('pvChatBadge');

  if (!fab || !panel) return;

  /* ════════════════════════════════════════════════
     SISTEMA DE IDIOMA
     El chatbot sigue el idioma del sitio (window.PV_I18N,
     definido en js/i18n.js) por defecto INGLÉS, y se
     mantiene sincronizado mediante el evento 'pv:langchange'.
     El selector de idioma propio del chat (ES/EN dentro del
     panel) sigue funcionando y, a su vez, también actualiza
     el idioma del sitio para que ambos queden coherentes.
  ════════════════════════════════════════════════ */
  var currentLang = (window.PV_I18N && window.PV_I18N.getLang && window.PV_I18N.getLang())
    || window.__PV_INITIAL_LANG
    || 'en';

  var UI_STRINGS = {
    es: {
      status:       'En línea',
      placeholder:  'Escribe tu consulta…',
      foot:         'Leo · Asistente virtual · respuestas automáticas',
    },
    en: {
      status:       'Online',
      placeholder:  'Type your question…',
      foot:         'Leo · Virtual Assistant · automated responses',
    }
  };

  var WIKI_FALLBACK_MSGS = {
    es: [
      'No encontré información precisa sobre ese tema. Pruebe con un término más específico.',
      'La búsqueda no arrojó resultados concluyentes. Intente reformular la pregunta.',
      'No hallé datos suficientes. Pruebe con una consulta más concreta.'
    ],
    en: [
      'I couldn\'t find precise information on that topic. Try a more specific term.',
      'The search didn\'t return conclusive results. Try rephrasing your question.',
      'I didn\'t find enough data on that. Try a more specific query.'
    ]
  };

  function applyLangUI() {
    var s   = UI_STRINGS[currentLang];
    var inp = document.getElementById('pvChatInput');
    var st  = document.getElementById('pvStatusText');
    var ft  = document.getElementById('pvChatFoot');
    if (inp) inp.placeholder = s.placeholder;
    if (st)  st.textContent  = s.status;
    if (ft)  ft.textContent  = s.foot;
    document.querySelectorAll('.pv-chat__qr').forEach(function(btn) {
      var q = btn.getAttribute('data-q-' + currentLang);
      if (q) btn.setAttribute('data-q', q);
    });
    document.querySelectorAll('.pv-lang__btn').forEach(function(b) {
      var active = b.getAttribute('data-lang') === currentLang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  var langBar = document.getElementById('pvLang');
  if (langBar) {
    langBar.addEventListener('click', function(e) {
      var btn = e.target.closest('.pv-lang__btn');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        currentLang = lang;
        applyLangUI();
        /* Mantener el idioma del sitio sincronizado con el del chat */
        if (window.PV_I18N && window.PV_I18N.setLang) {
          window.PV_I18N.setLang(lang);
        }
      }
    });
  }

  /* El idioma del sitio (selector del topbar) es la fuente de
     verdad por defecto: si cambia ahí, el chat se actualiza también. */
  window.addEventListener('pv:langchange', function (e) {
    var lang = e && e.detail && e.detail.lang;
    if (lang && lang !== currentLang) {
      currentLang = lang;
      applyLangUI();
    }
  });

  applyLangUI();

  var isOpen          = false;
  var welcomed        = false;
  var typingRow       = null;
  var firstMessageSent = false;
  var wikiAbortCtrl   = null;

  /* ── Helpers ── */
  function nowTime() {
    var d = new Date();
    var h = d.getHours().toString().padStart(2, '0');
    var m = d.getMinutes().toString().padStart(2, '0');
    return h + ':' + m;
  }

  function pickRandom(val) {
    if (!val) return '';
    if (Array.isArray(val)) return val[Math.floor(Math.random() * val.length)];
    return val;
  }

  /* ── Parsear mini-markdown ── */
  function parseMarkdown(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  /* ── Agregar mensaje ── */
  function addMessage(text, role, animate) {
    var row = document.createElement('div');
    row.className = 'pv-row pv-row--' + role;
    var avatarSVG = role === 'bot'
      ? '<img src="images/leo.webp" alt="Leo" class="pv-av-img" />'
      : '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';
    row.innerHTML =
      '<div class="pv-av">' + avatarSVG + '</div>' +
      '<div class="pv-col">' +
        '<div class="pv-bubble' + (animate ? ' pv-bubble-anim' : '') + '">' + parseMarkdown(text) + '</div>' +
        '<div class="pv-ts">' + nowTime() + '</div>' +
      '</div>';
    messages.appendChild(row);
    scrollBottom();
    return row;
  }

  /* ── Typing indicator ── */
  function showTyping() {
    var row = document.createElement('div');
    row.className = 'pv-row pv-row--bot';
    row.innerHTML =
      '<div class="pv-av"><img src="images/leo.webp" alt="Leo" class="pv-av-img" /></div>' +
      '<div class="pv-col"><div class="pv-typing"><span></span><span></span><span></span></div></div>';
    messages.appendChild(row);
    scrollBottom();
    typingRow = row;
  }

  function hideTyping() {
    if (typingRow) { typingRow.remove(); typingRow = null; }
  }

  function scrollBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  /* ── Fallback ── */
  function pickFallbackMessage() {
    var data = getData();
    var list = (data.fallback && data.fallback.length) ? data.fallback : PV_DATA_FALLBACK.fallback;
    return list[Math.floor(Math.random() * list.length)];
  }

  function estimateReplyDuration(text) {
    var totalLen  = text.length;
    var readDelay = Math.min(800 + totalLen * 8, 2200);
    var typeSpeed = Math.max(12, Math.min(28, 2000 / totalLen));
    return readDelay + totalLen * typeSpeed * 1.3;
  }

  function sendFallbackWithContact() {
    var msg = pickFallbackMessage();
    botReply(msg);
    setTimeout(addContactCard, estimateReplyDuration(msg) + 300);
  }

  /* ── Tarjeta de contacto ── */
  function addContactCard() {
    var data    = getData();
    var contact = data.contact || PV_DATA_FALLBACK.contact;
    var row = document.createElement('div');
    row.className = 'pv-row pv-row--bot';
    var avatarSVG = '<img src="images/leo.webp" alt="Leo" class="pv-av-img" />';
    var phoneIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16z"/></svg>';
    var mailIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="M22 6 12 13 2 6"/></svg>';
    var emailRow = contact.email
      ? '<a class="pv-contact-card pv-bubble-anim" href="mailto:' + contact.email + '" target="_blank" rel="noopener" style="margin-top:6px;" onclick="window.open(\'mailto:' + contact.email + '\');return false;">' +
          '<span class="pv-contact-card__ico">' + mailIcon + '</span>' +
          '<span class="pv-contact-card__info">' +
            '<span class="pv-contact-card__name">' + (currentLang === 'en' ? 'Email' : 'Correo') + '</span>' +
            '<span class="pv-contact-card__phone">' + contact.email + '</span>' +
          '</span>' +
          '<span class="pv-contact-card__action">' + (currentLang === 'en' ? 'Write' : 'Escribir') + '</span>' +
        '</a>'
      : '';
    row.innerHTML =
      '<div class="pv-av">' + avatarSVG + '</div>' +
      '<div class="pv-col">' +
        '<a class="pv-contact-card pv-bubble-anim" href="tel:' + contact.phoneHref + '" target="_self" rel="noopener" onclick="window.location.href=\'tel:' + contact.phoneHref + '\';return false;">' +
          '<span class="pv-contact-card__ico">' + phoneIcon + '</span>' +
          '<span class="pv-contact-card__info">' +
            '<span class="pv-contact-card__name">' + contact.name + '</span>' +
            '<span class="pv-contact-card__phone">' + contact.phoneDisplay + '</span>' +
          '</span>' +
          '<span class="pv-contact-card__action">' + (currentLang === 'en' ? 'Call' : 'Llamar') + '</span>' +
        '</a>' +
        emailRow +
        '<div class="pv-ts">' + nowTime() + '</div>' +
      '</div>';
    messages.appendChild(row);
    scrollBottom();
  }

  /* ════════════════════════════════════════════════
     MODO GENERAL — Wikipedia
  ════════════════════════════════════════════════ */
  function sanitizeWikiText(text) {
    return text.replace(/\[\d+\]/g, '').replace(/\s{2,}/g, ' ').trim();
  }

  function fetchWikipediaAnswer(rawQuery, onSuccess, onFail) {
    if (typeof fetch !== 'function') { onFail(); return; }
    var keywords = extractKeywords(rawQuery);
    var query = keywords.slice(0, 4).join(' ') || rawQuery.trim();
    if (!query) { onFail(); return; }
    var wikiBase = currentLang === 'en' ? 'https://en.wikipedia.org' : 'https://es.wikipedia.org';
    if (wikiAbortCtrl) { try { wikiAbortCtrl.abort(); } catch(e) {} }
    wikiAbortCtrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var signal = wikiAbortCtrl ? wikiAbortCtrl.signal : undefined;
    var searchUrl = wikiBase + '/w/api.php?action=opensearch&format=json&origin=*&limit=1&namespace=0&search=' + encodeURIComponent(query);

    /* Si Wikipedia no produce resultado, intentar ConceptNet antes de rendirnos */
    var conceptNetFallback = function() {
      if (window.PV_CONCEPTNET && typeof window.PV_CONCEPTNET.query === 'function') {
        window.PV_CONCEPTNET.query(rawQuery, onSuccess, onFail);
      } else {
        onFail();
      }
    };

    fetch(searchUrl, { signal: signal })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var title = data && data[1] && data[1][0];
        if (!title) { conceptNetFallback(); return null; }
        return fetch(wikiBase + '/api/rest_v1/page/summary/' + encodeURIComponent(title), { signal: signal })
          .then(function(r2) { return r2.json(); });
      })
      .then(function(summary) {
        if (!summary) return;
        if (!summary.extract || summary.type === 'disambiguation') { conceptNetFallback(); return; }
        onSuccess(sanitizeWikiText(summary.extract));
      })
      .catch(function(err) { if (err && err.name === 'AbortError') return; conceptNetFallback(); });
  }

  function handleGeneralQuery(text) {
    showTyping();
    fetchWikipediaAnswer(
      text,
      function(answerText) { hideTyping(); botReply(answerText); },
      function() {
        hideTyping();
        var msgs = WIKI_FALLBACK_MSGS[currentLang] || WIKI_FALLBACK_MSGS.es;
        botReply(msgs[Math.floor(Math.random() * msgs.length)]);
      }
    );
  }

  /* ── Typewriter ── */
  function typewriterInsert(bubbleEl, text, speed) {
    var parsed = parseMarkdown(text);
    var chars  = parsed.split('');
    var idx    = 0;
    bubbleEl.innerHTML = '';
    function step() {
      if (idx >= chars.length) { scrollBottom(); return; }
      if (chars[idx] === '<') {
        var tagEnd = parsed.indexOf('>', idx);
        if (tagEnd !== -1) {
          bubbleEl.innerHTML += parsed.slice(idx, tagEnd + 1);
          idx = tagEnd + 1;
          scrollBottom();
          setTimeout(step, 1);
          return;
        }
      }
      bubbleEl.innerHTML += chars[idx];
      idx++;
      scrollBottom();
      var delay = speed;
      var ch = chars[idx - 1];
      if (ch === '.' || ch === '!' || ch === '?') delay = speed * 6;
      else if (ch === ',' || ch === ':') delay = speed * 3;
      else if (ch === ' ') delay = speed * 0.5;
      setTimeout(step, delay);
    }
    step();
  }

  /* ── botReply ── */
  function botReply(text) {
    var totalLen  = text.length;
    var readDelay = Math.min(800 + totalLen * 8, 2200);
    var typeSpeed = Math.max(12, Math.min(28, 2000 / totalLen));
    showTyping();
    setTimeout(function() {
      hideTyping();
      var row = document.createElement('div');
      row.className = 'pv-row pv-row--bot';
      var avatarSVG = '<img src="images/leo.webp" alt="Leo" class="pv-av-img" />';
      row.innerHTML =
        '<div class="pv-av">' + avatarSVG + '</div>' +
        '<div class="pv-col">' +
          '<div class="pv-bubble pv-bubble-anim"></div>' +
          '<div class="pv-ts">' + nowTime() + '</div>' +
        '</div>';
      messages.appendChild(row);
      scrollBottom();
      typewriterInsert(row.querySelector('.pv-bubble'), text, typeSpeed);
      // Guardar en memoria
      conversationMemory.lastAnswer = text;
      conversationMemory.history.push({ role: 'bot', text: text, timestamp: Date.now() });
      if (conversationMemory.history.length > 20) conversationMemory.history.shift();
    }, readDelay);
  }

  /* ════════════════════════════════════════════════
     ENVIAR MENSAJE — Punto de entrada principal
  ════════════════════════════════════════════════ */
  function sendMessage(text) {
    text = text.trim();
    if (!text) return;

    addMessage(text, 'user', true);
    input.value = '';
    resizeInput();
    firstMessageSent = true;
    conversationMemory.turnCount++;
    conversationMemory.history.push({ role: 'user', text: text, timestamp: Date.now() });

    if (quickArea) quickArea.style.display = 'none';

    /* ── Confirmación corta ("sí"/"no") a una pregunta previa del bot:
       se resuelve aquí mismo, antes del enrutador, para que NUNCA
       caiga en Wikipedia/ConceptNet (causaba respuestas fuera de
       contexto, ej. "sí" → artículo sobre el Sistema Internacional). ── */
    var shortConfirm = conversationMemory.lastTopic !== null
      ? detectShortConfirmation(text)
      : null;
    if (shortConfirm) {
      if (shortConfirm === 'yes') {
        var followMsg = pickRandom(CONFIRM_FOLLOWUP_MSGS[currentLang] || CONFIRM_FOLLOWUP_MSGS.es);
        botReply(followMsg);
        setTimeout(addContactCard, estimateReplyDuration(followMsg) + 300);
      } else {
        botReply(pickRandom(CONFIRM_DECLINE_MSGS[currentLang] || CONFIRM_DECLINE_MSGS.es));
      }
      return;
    }

    /* ── Enrutador automático: empresa · Wikipedia · casual · ambiguo ── */
    var domain = detectDomain(text);

    /* 1. Saludo casual */
    if (domain === 'casual') {
      var casualResponses = CASUAL_RESPONSES[currentLang] || CASUAL_RESPONSES.es;
      botReply(pickRandom(casualResponses));
      return;
    }

    /* 2. Pregunta enciclopédica clara → Wikipedia directo */
    if (domain === 'wikipedia') {
      handleGeneralQuery(text);
      return;
    }

    /* 3. Dominio empresa (score fuerte o débil-moderado sin patrón enciclopédico) */
    if (domain === 'empresa') {
      var kbResult = findAnswer(text);
      if (kbResult && kbResult.text) {
        conversationMemory.clarificationPending = false;
        var kbReplyText = kbResult.text;
        if (kbResult.section) {
          kbReplyText += navNoteFor(kbResult.section);
          scrollToPageSection(kbResult.section);
        }
        botReply(kbReplyText);
        if (kbResult.showContactCard) setTimeout(addContactCard, estimateReplyDuration(kbReplyText) + 300);
        return;
      }
      /* Score confirmó empresa pero findAnswer no produjo texto (caso raro):
         caer a flujo ambiguo en lugar de mostrar silencio. */
    }

    /* 4. Ambiguo (o empresa sin resultado):
          intentar findAnswer → aclaración o Wikipedia → fallback de contacto */
    var result = findAnswer(text);

    if (result && result.text) {
      conversationMemory.clarificationPending = false;
      var resultReplyText = result.text;
      if (result.section) {
        resultReplyText += navNoteFor(result.section);
        scrollToPageSection(result.section);
      }
      botReply(resultReplyText);
      if (result.showContactCard) setTimeout(addContactCard, estimateReplyDuration(resultReplyText) + 300);
      return;
    }

    /* Saludo casual detectado en segunda pasada */
    if (result && result.type === 'casual') {
      var casualResponses2 = CASUAL_RESPONSES[currentLang] || CASUAL_RESPONSES.es;
      botReply(pickRandom(casualResponses2));
      return;
    }

    /* Algo matcheó pero con confianza baja → pedir aclaración */
    if (result && result.confidence > 0 && result.confidence < CONFIDENCE_THRESHOLD) {
      var clarMsgs = CLARIFICATION_MSGS[currentLang] || CLARIFICATION_MSGS.es;
      botReply(pickRandom(clarMsgs));
      conversationMemory.clarificationPending = true;
      return;
    }

    /* Nada encontrado → intentar Wikipedia antes del fallback de contacto.
       Cubre preguntas sin patrón enciclopédico explícito que tampoco son
       sobre la empresa (ej. "cómo funciona el concreto prefabricado"). */
    showTyping();
    fetchWikipediaAnswer(
      text,
      function(answerText) { hideTyping(); botReply(answerText); },
      function() { hideTyping(); sendFallbackWithContact(); }
    );
  }


  /* ── Auto-resize textarea ── */
  function resizeInput() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  }

  /* ── Abrir / cerrar ── */
  function openChat() {
    isOpen = true;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    fab.classList.add('is-open');
    fab.setAttribute('aria-expanded', 'true');
    hideBadge();
    if (!messages.querySelector('.pv-chat__spacer')) {
      var sp = document.createElement('div');
      sp.className = 'pv-chat__spacer';
      messages.insertBefore(sp, messages.firstChild);
    }
    if (!welcomed) {
      welcomed = true;
      setTimeout(function() {
        botReply(pickRandom(getData().welcome) || pickRandom(PV_DATA_FALLBACK.welcome));
      }, 350);
    }
    setTimeout(function() { input.focus(); }, 300);
  }

  function closeChat() {
    isOpen = false;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    fab.classList.remove('is-open');
    fab.setAttribute('aria-expanded', 'false');
  }

  function hideBadge() {
    if (badge) badge.classList.add('hidden');
  }

  setTimeout(function() {
    if (!isOpen && badge) badge.classList.remove('hidden');
  }, 3000);

  /* ── Event listeners ── */
  fab.addEventListener('click', function() { isOpen ? closeChat() : openChat(); });
  if (closeBtn) closeBtn.addEventListener('click', closeChat);
  sendBtn.addEventListener('click', function() { sendMessage(input.value); });
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input.value); }
  });
  input.addEventListener('input', resizeInput);
  if (quickArea) {
    quickArea.addEventListener('click', function(e) {
      var btn = e.target.closest('.pv-chat__qr');
      if (!btn) return;
      sendMessage(btn.getAttribute('data-q'));
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) closeChat();
  });

})();
/* ================================================
   FIN CHATBOT WIDGET v3.0
================================================ */