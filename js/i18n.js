/**
 * PAVEL – i18n.js  v1.0
 * ──────────────────────────────────────────────
 * Motor de idioma del sitio (independiente del motor
 * del chatbot, pero sincronizado con él).
 *
 * - Idioma por defecto: INGLÉS.
 * - El texto en inglés ya vive directamente en el HTML
 *   (index.html), así que no se requiere diccionario EN:
 *   este script captura el inglés original la primera
 *   vez que corre y lo reutiliza para volver a EN.
 * - El español vive en window.PV_I18N_ES (bot/i18n-data.js
 *   o js/i18n-data.js, debe cargarse ANTES que este archivo).
 * - El idioma SIEMPRE inicia en inglés al cargar la página
 *   (no se recuerda la elección entre visitas).
 * - Dispara un evento 'pv:langchange' en window para que
 *   otros módulos (scroll.js / chatbot) puedan sincronizarse.
 *
 * CONTRATO PÚBLICO:
 *   window.PV_I18N.getLang()        → 'en' | 'es'
 *   window.PV_I18N.setLang(lang)    → cambia y aplica el idioma
 * ──────────────────────────────────────────────
 */
(function () {
  'use strict';

  /* Se lee window.PV_I18N_ES en el momento de aplicar el idioma
     (no al cargar este script) para no depender del orden exacto
     de carga de los <script>. Si el diccionario aún no existe,
     se devuelve un objeto vacío en vez de romper el motor. */
  function getES() {
    return window.PV_I18N_ES || { text: {}, html: {}, ariaLabel: {}, placeholder: {}, meta: {} };
  }

  /* Caché del contenido ORIGINAL en inglés, para poder
     restaurarlo exactamente al volver a EN. */
  var ORIGINAL_EN = {
    text: {},
    html: {},
    ariaLabel: {},
    placeholder: {}
  };
  var captured = false;

  function captureOriginal() {
    if (captured) return;
    captured = true;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in ORIGINAL_EN.text)) ORIGINAL_EN.text[k] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (!(k in ORIGINAL_EN.html)) ORIGINAL_EN.html[k] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria-label');
      if (!(k in ORIGINAL_EN.ariaLabel)) ORIGINAL_EN.ariaLabel[k] = el.getAttribute('aria-label') || '';
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (!(k in ORIGINAL_EN.placeholder)) ORIGINAL_EN.placeholder[k] = el.getAttribute('placeholder') || '';
    });

    ORIGINAL_EN.metaTitle = document.title;
    var descEl = document.getElementById('pvPageDesc');
    ORIGINAL_EN.metaDesc = descEl ? descEl.getAttribute('content') : '';
  }

  var currentLang = 'en';

  function applyLang(lang) {
    captureOriginal();
    currentLang = (lang === 'es') ? 'es' : 'en';

    var dict = currentLang === 'es' ? getES() : null;

    if (currentLang === 'es' && (!dict.text || Object.keys(dict.text).length === 0)) {
      /* Diagnóstico: si esto aparece en la consola, window.PV_I18N_ES
         no está disponible (js/i18n-data.js no cargó, ruta incorrecta,
         o se cargó después de este script). El botón cambiará de
         estado pero el texto de la página no se traducirá. */
      console.warn('[PV_I18N] window.PV_I18N_ES no está disponible o está vacío. Verifique que js/i18n-data.js se cargue correctamente ANTES de js/i18n.js (revise la pestaña Network en busca de un 404).');
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var val = dict ? (dict.text && dict.text[k]) : ORIGINAL_EN.text[k];
      if (val === undefined || val === null) val = ORIGINAL_EN.text[k];
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      var val = dict ? (dict.html && dict.html[k]) : ORIGINAL_EN.html[k];
      if (val === undefined || val === null) val = ORIGINAL_EN.html[k];
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria-label');
      var val = dict ? (dict.ariaLabel && dict.ariaLabel[k]) : ORIGINAL_EN.ariaLabel[k];
      if (val === undefined || val === null) val = ORIGINAL_EN.ariaLabel[k];
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      var val = dict ? (dict.placeholder && dict.placeholder[k]) : ORIGINAL_EN.placeholder[k];
      if (val === undefined || val === null) val = ORIGINAL_EN.placeholder[k];
      if (val !== undefined) el.setAttribute('placeholder', val);
    });

    /* <title> y <meta name="description"> */
    var esDict = getES();
    if (currentLang === 'es' && esDict.meta) {
      if (esDict.meta.title) document.title = esDict.meta.title;
      var descEl = document.getElementById('pvPageDesc');
      if (descEl && esDict.meta.description) descEl.setAttribute('content', esDict.meta.description);
    } else {
      document.title = ORIGINAL_EN.metaTitle;
      var descEl2 = document.getElementById('pvPageDesc');
      if (descEl2) descEl2.setAttribute('content', ORIGINAL_EN.metaDesc);
    }

    document.documentElement.setAttribute('lang', currentLang);
    document.body && document.body.setAttribute('data-site-lang', currentLang);

    /* Botones del selector de idioma del topbar */
    document.querySelectorAll('#pvSiteLang .lang-toggle__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-site-lang') === currentLang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    /* Avisar a otros módulos (chatbot) del cambio de idioma */
    try {
      window.dispatchEvent(new CustomEvent('pv:langchange', { detail: { lang: currentLang } }));
    } catch (e) {
      /* navegadores muy antiguos sin soporte de CustomEvent */
    }
  }

  function init() {
    captureOriginal();
    /* Siempre inicia en inglés — no se lee preferencia guardada. */
    applyLang('en');

    var toggle = document.getElementById('pvSiteLang');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        var btn = e.target.closest('.lang-toggle__btn');
        if (!btn) return;
        var lang = btn.getAttribute('data-site-lang');
        if (lang && lang !== currentLang) applyLang(lang);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PV_I18N = {
    getLang: function () { return currentLang; },
    setLang: function (lang) { applyLang(lang); }
  };

})();
/* FIN i18n.js */
