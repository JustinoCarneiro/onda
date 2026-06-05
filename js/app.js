/* ============================================================
   ONDA — interações
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Cards de serviço: injetar fill para efeito hover ---------- */
  document.querySelectorAll('.svc').forEach(function (svc) {
    var fill = document.createElement('div');
    fill.className = 'svc-fill';
    fill.setAttribute('aria-hidden', 'true');
    svc.insertBefore(fill, svc.firstChild);
  });

  /* ---------- Nav: estado ao rolar ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  var mmClose = document.getElementById('mmClose');
  function closeMenu() { menu.classList.remove('open'); }
  if (burger) burger.addEventListener('click', function () { menu.classList.add('open'); });
  if (mmClose) mmClose.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  /* ---------- Reveal on scroll (scroll-driven: robusto em qualquer iframe) ---------- */
  var revs = [].slice.call(document.querySelectorAll('.reveal'));
  function revealCheck() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = revs.length - 1; i >= 0; i--) {
      var el = revs[i];
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        el.classList.add('in');
        revs.splice(i, 1);
      }
    }
  }
  window.addEventListener('scroll', revealCheck, { passive: true });
  window.addEventListener('resize', revealCheck);
  revealCheck();
  requestAnimationFrame(revealCheck);
  setTimeout(revealCheck, 200);
  setTimeout(revealCheck, 600);
  // Failsafe: nunca deixe conteúdo escondido se o cálculo de scroll falhar.
  setTimeout(function () { revs.forEach(function (el) { el.classList.add('in'); }); revs.length = 0; }, 1600);
  window.addEventListener('load', revealCheck);

  /* ---------- Marquee: duplica para loop contínuo ---------- */
  var mq = document.getElementById('marquee');
  if (mq) { mq.innerHTML += mq.innerHTML; }

  /* ---------- Pinceladas: anima o traço ao revelar ---------- */
  var strokes = [];
  document.querySelectorAll('.sd-path').forEach(function (p) {
    try {
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      strokes.push(p);
    } catch (err) { p.style.strokeDashoffset = '0'; }
  });
  function strokeCheck() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = strokes.length - 1; i >= 0; i--) {
      var p = strokes[i];
      var r = p.getBoundingClientRect();
      if (r.top < vh * 0.85 && r.bottom > 0) {
        p.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.2,.7,.2,1)';
        p.style.strokeDashoffset = '0';
        strokes.splice(i, 1);
      }
    }
  }
  window.addEventListener('scroll', strokeCheck, { passive: true });
  strokeCheck();
  setTimeout(strokeCheck, 200);

  /* ---------- Filtro de projetos ---------- */
  var filter = document.getElementById('projFilter');
  var grid = document.getElementById('projGrid');
  if (filter && grid) {
    filter.addEventListener('click', function (e) {
      var btn = e.target.closest('.chip');
      if (!btn) return;
      filter.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      grid.querySelectorAll('.proj').forEach(function (p) {
        var show = f === 'all' || p.getAttribute('data-cat') === f;
        p.classList.toggle('hide', !show);
      });
    });
  }

  /* ---------- Formulário de contato ---------- */
  var form = document.getElementById('contactForm');
  var ok = document.getElementById('formOk');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      ['f-name', 'f-email', 'f-msg'].forEach(function (id) {
        var input = document.getElementById(id);
        var field = input.closest('.field');
        var bad = !input.value.trim() || (input.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value));
        field.classList.toggle('invalid', bad);
        if (bad) valid = false;
      });
      if (!valid) return;
      form.style.display = 'none';
      ok.classList.add('show');
    });
    form.querySelectorAll('input, textarea').forEach(function (input) {
      input.addEventListener('input', function () {
        var field = input.closest('.field');
        if (field) field.classList.remove('invalid');
      });
    });
  }

  /* ---------- Sal da maré: grãos que reagem ao mouse ---------- */
  (function () {
    var canvas = document.getElementById('cineSalt');
    var cine = document.querySelector('.cine');
    if (!canvas || !cine) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, grains = [];
    var mouse = { x: -9999, y: -9999, active: false };
    var RADIUS = 140;     // raio de influência do cursor
    var raf = null;

    function rand(a, b) { return a + Math.random() * (b - a); }

    function build() {
      var r = cine.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var density = Math.round((W * H) / 7000);   // nº de grãos conforme área
      density = Math.max(90, Math.min(260, density));
      grains = [];
      for (var i = 0; i < density; i++) {
        var bx = rand(0, W), by = rand(0, H);
        grains.push({
          bx: bx, by: by, x: bx, y: by,
          vx: 0, vy: 0,
          r: rand(0.6, 2.2),
          base: rand(0.18, 0.6),       // brilho de repouso
          tw: rand(0, Math.PI * 2),    // fase de cintilância
          tws: rand(0.6, 1.6),         // velocidade de cintilância
          drift: rand(0.0008, 0.004)   // deriva lenta de retorno
        });
      }
    }

    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      var time = t * 0.001;
      var moving = false;
      for (var i = 0; i < grains.length; i++) {
        var g = grains[i];
        // força de repulsão do cursor
        if (mouse.active) {
          var dx = g.x - mouse.x, dy = g.y - mouse.y;
          var d2 = dx * dx + dy * dy;
          if (d2 < RADIUS * RADIUS) {
            var d = Math.sqrt(d2) || 1;
            var force = (1 - d / RADIUS);
            g.vx += (dx / d) * force * 1.6;
            g.vy += (dy / d) * force * 1.6;
          }
        }
        // retorno elástico à posição-base
        g.vx += (g.bx - g.x) * 0.012;
        g.vy += (g.by - g.y) * 0.012;
        g.vx *= 0.86; g.vy *= 0.86;
        g.x += g.vx; g.y += g.vy;
        if (Math.abs(g.vx) + Math.abs(g.vy) > 0.05) moving = true;

        // brilho: repouso + cintilância + realce perto do cursor
        var glow = g.base + Math.sin(time * g.tws + g.tw) * 0.12;
        if (mouse.active) {
          var ex = g.x - mouse.x, ey = g.y - mouse.y;
          var ed = Math.sqrt(ex * ex + ey * ey);
          if (ed < RADIUS) glow += (1 - ed / RADIUS) * 0.7;
        }
        glow = Math.max(0.05, Math.min(1, glow));
        ctx.beginPath();
        ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,' + glow + ')';
        ctx.fill();
      }
      // mantém animando p/ cintilância; para só se reduced-motion e sem mouse
      if (reduce && !mouse.active && !moving) { raf = null; return; }
      raf = requestAnimationFrame(frame);
    }

    function ensure() { if (!raf) raf = requestAnimationFrame(frame); }

    cine.addEventListener('pointermove', function (e) {
      var r = cine.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
      ensure();
    }, { passive: true });
    cine.addEventListener('pointerleave', function () { mouse.active = false; });

    build();
    ensure();
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { build(); ensure(); }, 200);
    });
  })();

  /* ---------- Hero imersivo: slider dos pilares ---------- */
  (function () {
    var stage = document.getElementById('cineStage');
    if (!stage) return;
    var slides = [].slice.call(stage.querySelectorAll('.cine-slide'));
    var n = slides.length, cur = 0, timer = null;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function go(k) {
      cur = (k + n) % n;
      slides.forEach(function (s, i) { s.classList.toggle('active', i === cur); });
    }
    function next() { go(cur + 1); }
    function prev() { go(cur - 1); }
    function start() { if (reduce) return; stop(); timer = setInterval(next, 5000); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    var cine = document.querySelector('.cine');
    cine.addEventListener('mouseenter', stop);
    cine.addEventListener('mouseleave', start);

    document.addEventListener('keydown', function (e) {
      if (document.body.getAttribute('data-hero') !== 'imersivo') return;
      if (window.scrollY > window.innerHeight * 0.6) return;
      if (e.key === 'ArrowRight') { next(); start(); }
      else if (e.key === 'ArrowLeft') { prev(); start(); }
    });

    start();
  })();

  /* ---------- Idioma PT / EN ---------- */
  var LANG_KEY = 'onda-lang';
  function applyLang(lang) {
    lang = lang === 'en' ? 'en' : 'pt';
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.querySelectorAll('[data-pt]').forEach(function (el) {
      var v = el.getAttribute('data-' + lang);
      if (v == null) return;
      // Some strings carry inline markup (<em>, <br>); render those as HTML.
      if (v.indexOf('<') !== -1) el.innerHTML = v;
      else el.textContent = v;
    });
    document.querySelectorAll('[data-ph-pt]').forEach(function (el) {
      var v = el.getAttribute('data-ph-' + lang);
      if (v != null) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    window.__ondaLang = lang;
  }
  window.ondaSetLang = applyLang;
  var langWrap = document.getElementById('lang');
  if (langWrap) {
    langWrap.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      applyLang(b.getAttribute('data-lang'));
    });
  }
  var saved = 'pt';
  try { saved = localStorage.getItem(LANG_KEY) || 'pt'; } catch (e) {}
  if (saved === 'en') { applyLang('en'); }
  else { window.__ondaLang = 'pt'; }

  /* ---------- Âncoras suaves fecham menu ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function () { closeMenu(); });
  });

  /* ---------- Video Modal Logic ---------- */
  const videoLinks = document.querySelectorAll('.video-lightbox');
  const videoModal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalClose = document.querySelector('.modal-close');

  if (videoModal && modalVideo) {
    videoLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const videoSrc = link.getAttribute('href');
        modalVideo.src = videoSrc;
        videoModal.classList.add('active');
        modalVideo.play().catch(e => console.log('Autoplay prevented', e));
      });
    });

    const closeModal = () => {
      videoModal.classList.remove('active');
      setTimeout(() => {
        modalVideo.pause();
        modalVideo.src = '';
      }, 300);
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('active')) closeModal();
    });
  }
})();
