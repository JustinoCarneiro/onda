/* ============================================================
   ONDA — "A Jornada": scrollytelling
   Fundo estático (mesma marinha do hero). As 5 fases da
   metodologia se revelam conforme a página rola.
   ============================================================ */
(function () {
  'use strict';

  var journey  = document.getElementById('jornada');
  if (!journey) return;

  var chapters = [].slice.call(document.querySelectorAll('.jr-chapter'));
  var railBtns = [].slice.call(document.querySelectorAll('#jrRail button'));
  var hint     = document.getElementById('jrHint');
  var reduce   = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var n = chapters.length;   // 5
  var current = -1;
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  /* ---- troca de capítulo ---- */
  function setActive(k) {
    if (k === current) return;
    current = k;
    chapters.forEach(function (c, i) { c.classList.toggle('on', i === k); });
    railBtns.forEach(function (b, i) {
      b.classList.toggle('on', i === k);
      b.setAttribute('aria-current', i === k ? 'true' : 'false');
    });
  }

  function render(forceP) {
    var rect  = journey.getBoundingClientRect();
    var total = journey.offsetHeight - window.innerHeight;
    var p = (typeof forceP === 'number') ? forceP : clamp(-rect.top / total, 0, 1);
    setActive(clamp(Math.round(p * (n - 1)), 0, n - 1));
    if (hint) hint.style.opacity = p > 0.04 ? '0' : '1';
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { render(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', render);
  render();
  window.__jrRender = render;

  /* ---- navegação pelo trilho ---- */
  function scrollToY(y) {
    var el = document.scrollingElement || document.body;
    try { el.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' }); }
    catch (e) { el.scrollTop = y; }
  }

  railBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var k       = parseInt(b.getAttribute('data-go'), 10);
      var total   = journey.offsetHeight - window.innerHeight;
      var targetP = n > 1 ? k / (n - 1) : 0;
      scrollToY(journey.offsetTop + clamp(targetP, 0.001, 0.999) * total);
    });
  });
})();
