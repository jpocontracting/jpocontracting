/**
 * PAVEL – footer-map.js
 * ──────────────────────────────────────────────
 * Botón "Ubicación" en el pie de página que abre
 * un popover anclado a su lado (no centrado en
 * pantalla) con un mapa interactivo de fondo.
 *  - Leaflet.js + tiles CARTO "Dark Matter" (gratuitos,
 *    sin API key) para un mapa en modo oscuro real.
 *  - El mapa es puramente visual (pointer-events: none):
 *    el clic en el popover abre Google Maps en pestaña
 *    nueva a través del <a> que lo envuelve.
 *  - Leaflet se inicializa solo la primera vez que el
 *    popover se abre (lazy init), no al cargar la página.
 *  - Cierra con clic fuera, tecla Escape, o el botón
 *    de nuevo.
 */

(function () {
  'use strict';

  const trigger  = document.getElementById('map-trigger');
  const popover  = document.getElementById('map-popover');
  const mapEl    = document.getElementById('footer-map');
  if (!trigger || !popover || !mapEl) return;

  // Ubicación: Toronto, Canadá
  const LAT = 43.6532;
  const LNG = -79.3832;

  let map = null;
  let isOpen = false;

  function initMapOnce() {
    if (map || typeof L === 'undefined') return;
    if (!mapEl.offsetWidth || !mapEl.offsetHeight) return; // aún no es medible, se reintenta en el siguiente open

    map = L.map(mapEl, {
      center: [LAT, LNG],
      zoom: 11,
      zoomControl: false,
      attributionControl: false, // sin "Leaflet | OpenStreetMap | CARTO"
      scrollWheelZoom: false,
      dragging: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      touchZoom: false,
      tap: false,
    });

    // CARTO Dark Matter: tiles oscuros gratuitos, sin API key.
    L.tileLayer('https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(map);

    const icon = L.divIcon({
      className: 'footer-map__pin',
      html: '<span></span>',
      iconSize: [12, 12],
    });
    L.marker([LAT, LNG], { icon }).addTo(map);
  }

  function openPopover() {
    isOpen = true;
    popover.classList.add('popover-open');
    trigger.setAttribute('aria-expanded', 'true');

    // Lazy init: Leaflet necesita el contenedor visible y con tamaño
    // real para medir correctamente, por eso se crea tras abrir.
    requestAnimationFrame(() => {
      initMapOnce();
      if (map) map.invalidateSize();
    });
    // Segunda medición cuando termina la transición de apertura (.25s):
    // a veces el contenedor mide mal mientras el popover sigue animándose.
    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 280);

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
  }

  function closePopover() {
    isOpen = false;
    popover.classList.remove('popover-open');
    trigger.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('keydown', handleEscape);
  }

  function handleOutsideClick(e) {
    if (!popover.contains(e.target) && e.target !== trigger && !trigger.contains(e.target)) {
      closePopover();
    }
  }

  function handleEscape(e) {
    if (e.key === 'Escape') closePopover();
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen ? closePopover() : openPopover();
  });
})();
