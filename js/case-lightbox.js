/* Lightbox de imagem para os screenshots (.shot img) das páginas de case.
   Overlay é criado em runtime (sem precisar editar markup nas 6 páginas);
   estilo vem de css/detail-page.css (.shot-lightbox*). */
(function () {
  var images = document.querySelectorAll('.shot img');
  if (!images.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'shot-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML =
    '<button type="button" class="shot-lightbox-close" aria-label="Fechar">' +
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    '</button>' +
    '<img class="shot-lightbox-img" alt="" />';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('.shot-lightbox-img');
  var closeBtn = overlay.querySelector('.shot-lightbox-close');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('active');
    document.body.classList.add('shot-lightbox-open');
  }
  function close() {
    overlay.classList.remove('active');
    document.body.classList.remove('shot-lightbox-open');
  }

  images.forEach(function (im) {
    var card = im.closest('.shot');
    if (card) {
      var badge = document.createElement('span');
      badge.className = 'shot-zoom-badge';
      badge.setAttribute('aria-hidden', 'true');
      badge.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>';
      card.appendChild(badge);
    }
    im.addEventListener('click', function () {
      open(im.currentSrc || im.src, im.alt);
    });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) close();
  });
})();
