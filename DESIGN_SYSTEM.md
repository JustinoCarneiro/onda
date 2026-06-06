# Onda · Sistema de Design & Iconografia

> **Guia de marca para designers.** Este documento traduz a identidade visual da Onda
> (extraída diretamente do código da landing page) em regras reutilizáveis para criar
> artes, posts, apresentações, peças impressas e conceitos em qualquer plataforma
> (Figma, Illustrator, Canva, Photoshop, etc.).

**Versão:** 1.1 · **Atualizado:** Junho/2026 · **Origem:** `css/styles.css`, `css/journey.css`
· Posicionamento de marca: ver [BRANDING.md](BRANDING.md).

---

## 1. Essência da marca

**Onda — Estúdio de Produtos Digitais · Fortaleza, Ceará.**

O conceito visual é **"Tropical Tech"**: a *Marinha* de Aldemir Martins (escola cearense de
pintura) traduzida para interface digital. Alta tecnologia que **não é fria** — traz o calor,
a organicidade e a luz do litoral nordestino para dentro do software.

### Os três pilares (ver [BRANDING.md](BRANDING.md))
A marca mantém os três termos, cada um com um **domínio**: **Belo** no design, **Fluido** nas
funcionalidades, **Impactante** na segurança. No visual, eles se traduzem em:

| Pilar | Domínio | Tradução visual |
|---|---|---|
| **Belo** | Design | Tipografia serifada elegante, paleta quente, textura, hierarquia clara |
| **Fluido** | Funcionalidades (a solução funciona) | Layout sem atrito, transições suaves, legibilidade, ritmo |
| **Impactante** | Segurança | Clareza, precisão e sinais de confiança — solidez que sustenta o impacto |

### Palavras-chave estéticas
Litoral · luz quente · formas orgânicas · pinceladas · squircles · areia + oceano + turquesa ·
grão de tela · clareza · precisão.

### Sobre a metáfora
A imagem da onda **explica a marca**: flui leve (fluido) e carrega força (impacto sólido/seguro) —
por isso vale usá-la, com bom senso. A inspiração litorânea (a *Marinha* de Aldemir Martins) é a base
**visual**, legítima e autoral. O equilíbrio: técnica na frente, arte e região **na entrelinha** —
metáfora quando *explica*, nunca como enfeite repetido nem militância regional.

---

## 2. Logotipo / Wordmark

- **Forma:** a palavra **"Onda"** + um **ponto** (`.`) na cor de destaque.
  - Exemplo: `Onda.` — o ponto é sempre turquesa (`--turq`).
- **Tipografia do logo:** Instrument Serif (font display), peso regular (400).
- **Variações de tamanho:** nav ≈ 27px · footer ≈ 40px · menu mobile ≈ 28px.

### Regras de uso
- O ponto **nunca** muda de cor exceto pelo destaque ativo do tema (turquesa na Maré Clara/Noite, terra na Tela).
- Sobre fundos escuros (hero imersivo), o wordmark fica **branco** com o ponto turquesa.
- Área de respiro mínima: a altura da letra "O" em todos os lados.
- **Não** aplicar contorno, sombra dura, gradiente ou distorção no wordmark.

---

## 3. Sistema de cores

A marca tem **3 modos** (temas). O designer deve trabalhar primariamente no modo **Maré Clara**.

### 3.1 Maré Clara (padrão) — fundo claro/areia

| Token | Hex | Papel |
|---|---|---|
| `--sand` | `#F3ECDC` | Fundo principal (areia) |
| `--sand-deep` | `#EAE0CB` | Fundo de seção alternada |
| `--card` | `#FCF8EE` | Cartões / superfícies elevadas |
| `--card-2` | `#F6EEDC` | Superfície secundária |
| `--ink` | `#0E2A33` | Texto principal (quase-preto azulado) |
| `--ink-soft` | `#4C636A` | Texto secundário |
| `--ink-faint` | `#8A989B` | Texto terciário / legendas |
| **`--ocean`** | **`#0E3F52`** | **Azul-oceano profundo — cor institucional** |
| `--ocean-2` | `#15596E` | Azul mar médio |
| `--sky` | `#B7DCE3` | Céu claro |
| `--sea` | `#1B8C84` | Faixa de mar verde-azulado |
| **`--turq`** | **`#14A8A0`** | **Turquesa vibrante — cor de DESTAQUE / CTA** |
| `--turq-bright` | `#1AC6B6` | Turquesa brilhante (hover, detalhes) |
| `--sun` | `#F2B015` | Amarelo-sol — acento quente |
| `--terra` | `#DA6A32` | Laranja-terra (duna) |
| `--coral` | `#E07C61` | Coral rosado |
| `--moss` | `#3C7A4E` | Verde-musgo (capim) |
| `--cobalt` | `#244C86` | Azul cobalto |
| `--line` | `#DCD2BC` | Bordas / divisores |
| `--line-soft` | `#E6DDC9` | Bordas sutis |

**Cor de ação (`--on-accent`):** `#FFFFFF` — texto/ícone sobre superfícies turquesa.

### 3.2 Maré Noite (dark) — fundo escuro/oceano noturno

| Token | Hex |
|---|---|
| `--sand` | `#07242F` |
| `--sand-deep` | `#061E27` |
| `--card` | `#0C3140` |
| `--card-2` | `#0A2A37` |
| `--ink` | `#EAF2EE` |
| `--ink-soft` | `#A7C2C6` |
| `--ink-faint` | `#5E7C84` |
| `--ocean` | `#0A3041` |
| `--ocean-2` | `#114F62` |
| `--sky` | `#16475A` |
| `--on-accent` | `#042027` |

Destaque (turquesa) e acento quente (sol) **permanecem os mesmos** no modo noite.

### 3.3 Tela (pictórico / autoral) — clima de pintura

| Token | Hex |
|---|---|
| `--sand` | `#ECE2CB` |
| `--sand-deep` | `#E2D5B8` |
| `--card` | `#F6EFDD` |
| `--card-2` | `#F0E6CF` |
| `--ink` | `#2A2014` |
| `--ink-soft` | `#5E5040` |
| `--ink-faint` | `#8C7E68` |
| **destaque** | `--terra` (`#DA6A32`) — neste modo a cor de ação é o **laranja-terra** |
| `--on-accent` | `#FBF5E6` |

### 3.4 Paleta "Marinha" (assinatura do quadro)
Sequência de cores que aparece nas amostras (swatches) e na divisória de pincelada.
Use como **paleta de apoio** para ilustrações, gradientes e composições artísticas:

`#274472` · `#7B5283` · `#C16A6B` · `#E68A4A` · `#F4B64A` · `#1F8980` · `#C9893A`

E o gradiente da pincelada-assinatura (esquerda → direita):
`#244C86` → `#3C7A4E` → `#D9663A` → `#F2B015` → `#14A8A0`

### 3.5 Cores-assinatura por categoria de serviço
Cada serviço tem uma cor própria (usada no hover dos cards). Útil para diferenciar temas:

| Serviço | Cor |
|---|---|
| Produtos & SaaS | `--ocean` `#0E3F52` |
| Apps mobile | `--turq` `#14A8A0` |
| Sites & Landing | `--terra` `#DA6A32` |
| Design & Branding | `--cobalt` `#244C86` |
| E-commerce | `--moss` `#3C7A4E` |
| Automação | `--sun` `#F2B015` |
| Consultoria | `--coral` `#E07C61` |

### 3.6 Regras de uso de cor
- **Hierarquia:** areia (fundo) → ink (texto) → turquesa (1 ação principal por tela).
- **Turquesa é pontual** — use para CTAs, links e detalhes; nunca como grande área de fundo.
- **Oceano** é a cor institucional para grandes blocos sólidos (rodapé do contato, faixas).
- O **sol/terra/coral** são acentos quentes — pequenas doses, nunca competindo com o turquesa.
- Mantenha contraste AA: texto `--ink` sobre `--sand`/`--card` está sempre OK.

---

## 4. Tipografia

### Famílias
| Uso | Fonte | Fallback | Pesos |
|---|---|---|---|
| **Display / títulos** | **Instrument Serif** | Georgia, serif | 400 (regular + itálico) |
| **Corpo / UI** | **Plus Jakarta Sans** | system-ui, sans-serif | 400, 500, 600, 700, 800 + itálico 500 |
| Serifa alternativa | Playfair Display | — | 400–600 (uso pontual) |

> Fontes disponíveis no Google Fonts. A combinação **serifa elegante (Instrument) + sans
> geométrica humanista (Jakarta)** é a assinatura tipográfica — mantenha sempre esse par.

### Princípios
- **Títulos** sempre em Instrument Serif, peso regular, *line-height* apertado (~0.98),
  *letter-spacing* levemente negativo (`-0.012em` a `-0.022em`).
- **Itálico** da serifa é usado para **destacar a palavra-chave** dentro de um título
  (ex.: *"softwares fluidos."*, *"onda começa aqui."*) — geralmente na cor de destaque.
- **Olho/eyebrow** (rótulo acima do título): Jakarta, 13px, MAIÚSCULAS, `letter-spacing: 0.2em`,
  peso 600, cor de destaque, com um traço curto antes.
- **Corpo:** Jakarta 17px, `line-height: 1.62`, cor `--ink-soft`.

### Escala (fluida — `clamp(min, vw, max)`)
| Elemento | Tamanho |
|---|---|
| Display gigante (hero imersivo) | `clamp(72px, 16vw, 232px)` |
| Display de seção (`.display`) | `clamp(38px, 5.4vw, 78px)` |
| Título de seção (h2) | `clamp(36px, 5vw, 64px)` |
| Título de card (h3 serifa) | ~29px |
| Fase da jornada (título) | `clamp(48px, 7.6vw, 108px)` |
| Corpo | 15–20px |
| Eyebrow / rótulos | 12–13px, MAIÚSCULAS, tracking 0.2–0.3em |

Para artes estáticas, ancore nos valores **máximos** (ex.: títulos de 64–108px em peças grandes).

---

## 5. Iconografia

A iconografia é **linear, leve e arredondada** — coerente com a leveza "fluida" da marca.

### Especificação técnica
| Propriedade | Valor |
|---|---|
| Grid / viewBox | **24 × 24** |
| Estilo | **Contorno (line)**, sem preenchimento — `fill: none` |
| Traço (`stroke-width`) | **1.6** (ícones de UI/serviço) a **2.2** (setas, ações) |
| Terminações | `stroke-linecap: round` · `stroke-linejoin: round` |
| Cor | `currentColor` (herda a cor do contexto) |
| Tamanho em uso | 16–20px (inline) · 44px (marca de card) |

> **Exceção:** o ícone do **WhatsApp** é o único **preenchido** (`fill`), por ser logo de marca
> reconhecível de terceiro. Cor verde oficial `#25D366` quando isolado, ou branco dentro de círculo.

### Princípios de desenho
1. **Cantos arredondados** sempre (linejoin round) — nada de pontas afiadas.
2. **Traço uniforme** — espessura constante; não misturar grossuras no mesmo ícone.
3. **Geometria orgânica** — curvas suaves (`quadratic`/`cubic`) lembrando ondas, dunas e velas.
4. **Metáforas náuticas/litorâneas** quando possível (mar, vela, sol, jangada, horizonte).
5. **Otimização ótica** — alinhe ao grid de 24px; deixe ~2px de margem interna.

### Biblioteca atual (no sprite SVG)
| Ícone | ID | Descrição |
|---|---|---|
| Seta | `ic-arrow` | Seta horizontal → (CTAs, "voltar ao topo" girada) |
| Link externo | `ic-external` | Seta diagonal saindo de caixa |
| Chevron | `ic-chevron` | Seta para baixo (scroll/expandir) |
| WhatsApp | `ic-whatsapp` | Logo do WhatsApp (preenchido) |

### Ícones de serviço (estilo de referência para novos)
Todos line, 1.6px, 24px: monitor, smartphone, olho (visão), globo, sacola, sol radiante,
pessoa/consultoria. **Ao criar novos ícones**, siga exatamente esse traço e arredondamento.

### Não fazer
- ❌ Ícones preenchidos sólidos (exceto logos de terceiros).
- ❌ Misturar estilos (line + glyph) numa mesma composição.
- ❌ Sombras, gradientes ou 3D nos ícones.
- ❌ Traço muito fino (<1.4px) ou muito grosso (>2.4px).

---

## 6. Layout, grid & espaçamento

| Propriedade | Valor |
|---|---|
| Largura máxima de conteúdo | **1280px** (`--maxw`) |
| Margem lateral (gutter) | `clamp(20px, 5vw, 76px)` — 20px mobile, 76px desktop |
| Grid de serviços | bento de **6 colunas** (cards ocupam 2/3/4 colunas) |
| Padding vertical de seção | `clamp(74px, 11vw, 156px)` |
| Gap padrão entre cards | 16–34px |

### Raios de canto (border-radius)
| Token | Valor | Uso |
|---|---|---|
| `--r-card` | **30px** | Cartões, imagens, blocos grandes |
| `--r-pill` | **100px** | Botões, chips, tags (formato "pílula") |
| pequeno | 8–20px | Molduras, badges, campos de formulário |

> A marca prefere **cantos generosos e arredondados** ("squircles flutuantes") — reforça
> a sensação orgânica e fluida. Evite cantos retos de 0px em superfícies de conteúdo.

### Breakpoints responsivos
- **≤1080px:** menu vira hambúrguer.
- **≤1000px:** grids colapsam (hero, serviços, projetos, footer viram 1–2 colunas).
- **≤620px:** tudo em 1 coluna.

---

## 7. Elevação & sombras

Sombras **suaves, difusas e direcionadas para baixo** (luz natural do sol).

| Token | Valor | Uso |
|---|---|---|
| `--shadow-soft` | `0 18px 40px -28px rgba(14,42,51,.45)` | Cartões em repouso |
| `--shadow-float` | `0 30px 60px -34px rgba(14,42,51,.55)` | Cartões em hover / elementos flutuantes |

- A cor da sombra é **azul-oceano translúcido** (`rgba(14,42,51,...)`), não preto puro.
- *Spread* negativo (`-28px`/`-34px`) deixa a sombra concentrada e elegante, não vazada.
- No hover, os cards **sobem 6px** (`translateY(-6px)`) e ganham a sombra `float`.

---

## 8. Textura & efeitos

Elementos que dão o caráter "pictórico/artesanal" da marca. **Use com moderação** em artes.

### Grão de tela (film grain)
- Ruído `fractalNoise` (SVG `feTurbulence`) sobre toda a página.
- `baseFrequency`: 0.82 (geral) / 0.7 (seções escuras).
- Opacidade: **0.42** (Maré Clara) · 0.30 (Noite) · 0.72 (Tela).
- `mix-blend-mode: multiply` (claro) / `soft-light` (escuro).
- **Em artes:** aplique uma camada de grão sutil (5–15% opacidade) para o toque autoral.

### Vidro (glassmorphism)
- `--glass`: `rgba(255,255,255,0.42)` · borda `rgba(255,255,255,0.55)` · `blur(16px)`.
- Uso: badges sobre imagens, créditos de arte, tags flutuantes.

### Pincelada-assinatura (brush stroke divider)
- Linha **sinuosa** desenhada à mão (curvas Bézier) separando seções.
- Traço de 5px, ponta arredondada, com **gradiente da paleta marinha** (ver §3.4).
- Anima desenhando-se da esquerda para a direita ao surgir.
- **Em artes:** use como elemento gráfico de divisão / sublinhado orgânico.

### Squircles & blobs
- Formas orgânicas arredondadas e manchas radiais desfocadas (`blur` 60px) como fundo
  ambiente (ex.: brilho turquesa atrás do formulário de contato).

---

## 9. Movimento & animação

Princípios de motion (para protótipos, vídeos e GIFs):

| Princípio | Detalhe |
|---|---|
| **Curva padrão** | `cubic-bezier(.2,.7,.2,1)` — saída suave, "deslizante como água" |
| **Reveal ao rolar** | elementos sobem 28px + fade-in (1s), em cascata (delays 0.08s) |
| **Hover de card** | sobe 6px + flood de cor da categoria subindo de baixo p/ cima (0.5s) |
| **Marquee** | faixa de texto rolando infinitamente (30s linear) |
| **Jornada** | scrollytelling — 5 fases trocam com cross-fade conforme o scroll |
| **Respeito a acessibilidade** | tudo desliga com `prefers-reduced-motion` |

**Direção da luz/movimento:** do **nascer (esquerda/baixo)** ao **pôr do sol (direita)** —
metáfora temporal que pode guiar transições e storyboards.

---

## 10. Componentes-chave

### Botão (CTA)
- Pílula (`border-radius: 100px`), fundo turquesa, texto branco, peso 600.
- Padding `14px 26px` (normal) / `17px 32px` (grande).
- Ícone de seta opcional à direita (gap 9px).
- Hover: sobe 2px + sombra turquesa difusa.
- **Variantes:** `ink` (fundo oceano), `ghost` (contorno, fundo transparente).

### Cartão de serviço/projeto
- Fundo `--card`, raio 30px, borda `--line-soft`, sombra suave.
- Numeração serifada ("01"), ícone de linha no topo.
- Hover: flood da cor-assinatura + texto branco.

### Chip / Tag
- Pílula pequena, contorno fino `--line`, texto `--ink-faint`, 12px.
- Estado ativo: fundo `--ink`, texto areia.

### Badge sobre imagem
- Vidro (blur) + ponto colorido (`--accent-warm`) + texto 12px peso 600.

---

## 11. Direção de arte / imagens

- **Inspiração central:** *Marinha* de Aldemir Martins — mar, jangadas, dunas, sol,
  horizonte do litoral cearense, em pinceladas e cores quentes.
- Preferir **ilustração/pintura estilizada** a fotografia genérica de banco.
- Quando usar foto: litoral, luz dourada, mar, texturas naturais.
- Emoldurar artes com **moldura clara levemente rotacionada** (efeito quadro na parede).
- Paleta das imagens deve conversar com a paleta marinha (§3.4).

---

## 12. Voz, idioma & conteúdo

- **Bilíngue:** Português (padrão, `pt-BR`) e Inglês. Toda peça-chave deve ter as duas versões.
- **Tom:** equilíbrio entre a veia **técnica** e a **artística** — passa segurança e qualidade sem
  arrogância, com calor sem ser piegas. Direto, sem jargão vazio.
- **Mensagem central:** software **belo no design, fluido no uso e impactante na segurança** —
  qualidade verificada (testes, validação), não só prometida.
- **Metáfora a serviço da clareza:** use a imagem da onda quando *ajuda a explicar* (“flui leve e
  chega com força”); evite encher de termos marítimos.
- **Região na entrelinha:** a origem cearense aparece como sotaque, nunca como bandeira.
- ✅ Ex.: *"Belo no design, fluido no uso, sólido na segurança."*
- ❌ Evitar: jargão disruptivo vazio e metáfora náutica exagerada ("navegue a maré rumo ao horizonte").
- Localização: **Fortaleza · Ceará · Brasil**.

---

## 13. Acessibilidade (obrigatório)

- Contraste mínimo **AA** (texto normal ≥ 4.5:1; grande ≥ 3:1).
- Texto `--ink` sobre fundos claros e branco sobre oceano/turquesa atendem AA.
- Não comunicar **só por cor** — use ícone/rótulo junto.
- Áreas de toque ≥ 44×44px.
- Em movimento: sempre prever versão estática (reduced-motion).

---

## 14. Referência rápida (cheat sheet)

```
COR INSTITUCIONAL   Oceano   #0E3F52
COR DE AÇÃO/CTA     Turquesa #14A8A0   (hover #1AC6B6)
ACENTO QUENTE       Sol      #F2B015
FUNDO               Areia    #F3ECDC
TEXTO               Ink      #0E2A33

DISPLAY   Instrument Serif (400), tracking -0.012em, itálico p/ destaque
CORPO     Plus Jakarta Sans (400–800), 17px, line-height 1.62

RAIO      Card 30px · Pílula 100px
GUTTER    20px (mobile) → 76px (desktop) · Máx. conteúdo 1280px
SOMBRA    azul translúcido, difusa, para baixo
ÍCONES    line, 24px grid, traço 1.6–2.2px, cantos redondos, currentColor
CURVA     cubic-bezier(.2,.7,.2,1)
TEXTURA   grão de filme sutil + pinceladas + vidro
MARCA     belo (design) · fluido (uso) · impactante (segurança) · região na entrelinha
```

---

*Dúvidas ou novos componentes: manter coerência com `css/styles.css`. Este guia deve
evoluir junto com o produto — versionar a cada mudança relevante de marca.*
