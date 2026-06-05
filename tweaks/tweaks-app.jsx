/* ============================================================
   ONDA — Tweaks (ilha React)
   Direções para comparar: maré (mood), cor de destaque,
   fonte dos títulos, textura de tela, idioma.
   ============================================================ */

const ONDA_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroStyle": "imersivo",
  "mare": "clara",
  "accent": "#E07A2C",
  "headingFont": "'Instrument Serif', Georgia, serif",
  "grain": 42,
  "lang": "pt",
  "journey": true
}/*EDITMODE-END*/;

// Texto legível sobre cada cor de destaque (claro → tinta escura).
function ondaOnAccent(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return '#FFFFFF';
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) > 150000 ? '#0E2A33' : '#FFFFFF';
}

function OndaTweaks() {
  const init = Object.assign({}, ONDA_TWEAK_DEFAULTS, {
    lang: (typeof window !== 'undefined' && window.__ondaLang) || ONDA_TWEAK_DEFAULTS.lang,
  });
  const [t, setTweak] = useTweaks(init);

  React.useEffect(() => {
    const root = document.documentElement;
    document.body.setAttribute('data-hero', t.heroStyle);
    document.body.setAttribute('data-mood', t.mare);
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--on-accent', ondaOnAccent(t.accent));
    root.style.setProperty('--font-display', t.headingFont);
    root.style.setProperty('--grain-opacity', String((t.grain || 0) / 100));
    var jr = document.getElementById('jornada');
    if (jr) jr.style.display = t.journey ? '' : 'none';
    if (window.ondaSetLang) window.ondaSetLang(t.lang);
  }, [t.mare, t.accent, t.headingFont, t.grain, t.lang, t.heroStyle, t.journey]);

  return (
    <TweaksPanel title="Tweaks · Onda">
      <TweakSection label="Hero" />
      <TweakRadio
        label="Estilo"
        value={t.heroStyle}
        options={[
          { value: 'imersivo', label: 'Imersivo' },
          { value: 'editorial', label: 'Editorial' },
        ]}
        onChange={(v) => setTweak('heroStyle', v)}
      />

      <TweakSection label="Seções" />
      <TweakToggle
        label="A Jornada (scrollytelling)"
        value={t.journey}
        onChange={(v) => setTweak('journey', v)}
      />

      <TweakSection label="Maré (direção visual)" />
      <TweakRadio
        label="Mood"
        value={t.mare}
        options={[
          { value: 'clara', label: 'Clara' },
          { value: 'noite', label: 'Noite' },
          { value: 'tela', label: 'Tela' },
        ]}
        onChange={(v) => setTweak('mare', v)}
      />

      <TweakSection label="Cor de destaque" />
      <TweakColor
        label="CTA / acento"
        value={t.accent}
        options={['#E07A2C', '#F2B015', '#C0356B', '#14A8A0', '#244C86']}
        onChange={(v) => setTweak('accent', v)}
      />

      <TweakSection label="Tipografia" />
      <TweakRadio
        label="Títulos"
        value={t.headingFont}
        options={[
          { value: "'Instrument Serif', Georgia, serif", label: 'Instrument' },
          { value: "'Playfair Display', Georgia, serif", label: 'Playfair' },
        ]}
        onChange={(v) => setTweak('headingFont', v)}
      />

      <TweakSection label="Textura de tela" />
      <TweakSlider
        label="Grão"
        value={t.grain}
        min={0}
        max={90}
        step={2}
        unit="%"
        onChange={(v) => setTweak('grain', v)}
      />

      <TweakSection label="Idioma" />
      <TweakRadio
        label="Conteúdo"
        value={t.lang}
        options={[
          { value: 'pt', label: 'PT' },
          { value: 'en', label: 'EN' },
        ]}
        onChange={(v) => setTweak('lang', v)}
      />
    </TweaksPanel>
  );
}

(function mountOndaTweaks() {
  const el = document.createElement('div');
  el.id = 'onda-tweaks-root';
  document.body.appendChild(el);
  ReactDOM.createRoot(el).render(<OndaTweaks />);
})();
