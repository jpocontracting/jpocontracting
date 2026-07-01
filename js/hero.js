/* ===============================================
   PAVEL — hero.js
   Nav scroll behavior · Hamburger · Parallax
   Partículas canvas · Contadores animados
   Reutiliza AOS ya cargado en el HTML.
=============================================== */

(function () {
  'use strict';

  /* ---- Init AOS (blindado: si el CDN externo falla o está
     bloqueado en la red del visitante, no debe romper el resto
     del script) ---- */
  try {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 750,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
      });
    }
  } catch (e) {
    /* AOS no disponible: continuar sin animaciones de scroll */
  }

  /* ---- Referencias DOM ---- */
  const topbar    = document.getElementById('topbar');
  const header    = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('main-nav');
  const bgImg     = document.querySelector('.hero__bg-img');
  const canvas    = document.getElementById('hero-particles');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');

  let lastScroll  = 0;
  let ticking     = false;
  let headerH     = header ? header.offsetHeight : 72;
  const headerTrigger  = document.getElementById('header-trigger');
  let headerForceHidden = false;

  /* ════════════════════════════════════════════════════════════════
     ⚠️  NO MODIFICAR ESTA LÓGICA — ADVERTENCIA PERMANENTE  ⚠️
     ════════════════════════════════════════════════════════════════
     Regla del header (#site-header):
       • Se oculta INMEDIATAMENTE en cuanto sy > 0 (cualquier scroll
         hacia abajo, sin esperar ningún porcentaje ni sección).
       • Solo reaparece si: (a) el usuario vuelve al tope de la página
         (sy === 0, sección Inicio), o (b) pasa el cursor por la franja
         superior (#header-trigger), lo cual activa "header--peek".
       • NO debe depender de offsetTop/offsetHeight de NINGUNA sección
         (ni #servicios, ni #inicio). Esa dependencia fue la causa de
         varios bugs visuales repetidos (header superpuesto al título
         de la sección 2). Este bloque ya se corrigió múltiples veces
         porque ediciones futuras tienden a reintroducir esa lógica.
         Si necesitas tocar este comportamiento, hazlo con MUCHO
         cuidado y sin volver a atar el hide/show a una sección.
     ════════════════════════════════════════════════════════════════ */

  /* ---- Fade-in de la imagen de fondo al cargar ---- */
  if (bgImg) {
    const heroBg = bgImg.closest('.hero__bg');
    const clearPlaceholder = () => {
      bgImg.classList.add('loaded');
      if (heroBg) heroBg.style.backgroundImage = 'none';
    };
    if (bgImg.complete) {
      clearPlaceholder();
    } else {
      bgImg.addEventListener('load', clearPlaceholder, { once: true });
    }
  }

  /* ================================================
     SCROLL — header sticky + topbar hide + parallax
  ================================================ */
  function onScroll() {
    const sy = window.scrollY;

    /* Header scrolled class */
    if (header) {
      header.classList.toggle('scrolled', sy > 40);
    }

    /* Header se oculta por completo al entrar a la sección Servicios.
       Vuelve a su comportamiento normal si el usuario sube antes de llegar ahí. */
    /* ⚠️ Ver advertencia arriba — NO atar esto a ninguna sección.
       Oculto apenas hay scroll (sy > 0); visible solo en el tope
       (sy === 0) o por hover en #header-trigger (header--peek). */
    if (header) {
      headerForceHidden = sy > 0;

      /* Si estaba revelado por clic y el usuario sigue bajando, retoma el auto-hide */
      if (header.classList.contains('header--revealed') && sy > lastScroll) {
        header.classList.remove('header--revealed');
      }
      if (!header.classList.contains('header--revealed')) {
        if (headerForceHidden) {
          header.classList.add('header--hidden');
          header.classList.remove('header--peek');
        } else {
          header.classList.remove('header--hidden', 'header--peek');
        }
      }
      if (headerTrigger) {
        headerTrigger.style.pointerEvents = headerForceHidden ? 'auto' : 'none';
      }
    }

    /* Topbar oculta al bajar, reaparece al subir */
    if (topbar) {
      if (sy > lastScroll && sy > 80) {
        topbar.classList.add('hidden');
      } else {
        topbar.classList.remove('hidden');
      }
    }

    /* Parallax + zoom de la imagen de fondo: controlado por scroll.js
       (incluye el efecto de zoom-out cinematográfico al salir del hero) */

    /* Active nav link por sección visible */
    let current = '';
    sections.forEach((sec) => {
      if (sy >= sec.offsetTop - headerH - 10) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });

    lastScroll = sy;
    ticking    = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ================================================
     HEADER OCULTO — hover en franja superior revela
     el header (peek); clic lo fija visible.
  ================================================ */
  if (header && headerTrigger) {
    let peekTimeout = null;

    headerTrigger.addEventListener('mouseenter', () => {
      if (headerForceHidden && !header.classList.contains('header--revealed')) {
        clearTimeout(peekTimeout);
        header.classList.remove('header--hidden');
        header.classList.add('header--peek');
      }
    });

    headerTrigger.addEventListener('mouseleave', () => {
      if (header.classList.contains('header--peek')) {
        peekTimeout = setTimeout(() => {
          header.classList.remove('header--peek');
          header.classList.add('header--hidden');
        }, 600);
      }
    });

    header.addEventListener('mouseenter', () => {
      clearTimeout(peekTimeout);
    });

    header.addEventListener('mouseleave', () => {
      if (header.classList.contains('header--peek') && !header.classList.contains('header--revealed')) {
        peekTimeout = setTimeout(() => {
          header.classList.remove('header--peek');
          header.classList.add('header--hidden');
        }, 800);
      }
    });

    [headerTrigger, header].forEach((el) => {
      el.addEventListener('click', () => {
        if (headerForceHidden) {
          clearTimeout(peekTimeout);
          header.classList.remove('header--hidden', 'header--peek');
          header.classList.add('header--revealed');
        }
      });
    });
  }

  /* ================================================
     HAMBURGER MENU
  ================================================ */
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Cierra al hacer clic en un enlace */
    nav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Cierra al clic fuera del drawer */
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') &&
          !nav.contains(e.target) &&
          !hamburger.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ================================================
     SOLUTION CARDS — efecto flip al hacer clic
  ================================================ */
  document.querySelectorAll('.solution-card').forEach((card) => {
    const toggle = () => {
      const flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  /* ================================================
     PSTAT FLIP — "Entregas a tiempo" (sección Proyectos)
  ================================================ */
  document.querySelectorAll('.pstat--flip').forEach((card) => {
    const toggle = () => {
      const flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  /* ================================================
     CANVAS PARTÍCULAS — cubre toda la página
  ================================================ */
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  /* Respeta reduced-motion */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) return;

  /* Número de partículas según ancho */
  const COUNT = window.innerWidth < 768 ? 28 : 55;

  function rand(a, b) { return a + Math.random() * (b - a); }

  function createParticle() {
    return {
      x:     rand(0, W),
      y:     rand(0, H),
      r:     rand(0.6, 2.2),
      vx:    rand(-0.18, 0.18),
      vy:    rand(-0.22, -0.06),
      alpha: rand(0.15, 0.55),
    };
  }

  for (let i = 0; i < COUNT; i++) particles.push(createParticle());

  /* Paleta: blanco + acento cian */
  const COLORS = ['rgba(255,255,255,{a})', 'rgba(15,163,224,{a})'];

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p, i) => {
      const color = COLORS[i % 2].replace('{a}', p.alpha);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      /* Rebote suave */
      if (p.y < -10) { p.y = H + 10; p.x = rand(0, W); }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
    });

    /* Líneas de conexión entre partículas cercanas */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(26,110,187,${(1 - dist / 90) * 0.18})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();

})();
