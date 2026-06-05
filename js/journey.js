/* ============================================================
   ONDA — "A Jornada": scrollytelling
   5 fundos (mesmo cenário, sol em posições diferentes) que
   trocam suavemente no scroll, em sincronia com as 5 fases da
   metodologia. Cross-fade via opacidade (CSS .jr-frame.on).
   ============================================================ */
(function () {
  'use strict';
  var journey = document.getElementById('jornada');
  if (!journey) return;

  var frames  = [].slice.call(document.querySelectorAll('.jr-frame'));
  var chapters= [].slice.call(document.querySelectorAll('.jr-chapter'));
  var railBtns= [].slice.call(document.querySelectorAll('#jrRail button'));
  var hint    = document.getElementById('jrHint');
  var reduce  = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var n = chapters.length;   // 5
  var current = -1;
  function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }

  function setActive(k) {
    if (k === current) return;
    current = k;
    frames.forEach(function (f, i) { f.classList.toggle('on', i === k); });
    chapters.forEach(function (c, i) { c.classList.toggle('on', i === k); });
    railBtns.forEach(function (b, i) { b.classList.toggle('on', i === k); });
  }

  function render(forceP) {
    var rect = journey.getBoundingClientRect();
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

  function scrollEl() {
    if (document.scrollingElement && document.scrollingElement.scrollHeight > window.innerHeight + 4) return document.scrollingElement;
    if (document.body.scrollHeight > document.body.clientHeight + 4) return document.body;
    return document.documentElement;
  }
  function scrollToY(y) {
    var el = scrollEl();
    try { el.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' }); }
    catch (e) { el.scrollTop = y; }
    try { window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' }); } catch (e) {}
  }

  railBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var k = parseInt(b.getAttribute('data-go'), 10);
      var total = journey.offsetHeight - window.innerHeight;
      var targetP = n > 1 ? k / (n - 1) : 0;
      var y = journey.offsetTop + clamp(targetP, 0.001, 0.999) * total;
      scrollToY(y);
    });
  });
})();
