# Onda — Estúdio de Produtos Digitais 🌊

Repositório oficial do site da **Onda**, um estúdio de produtos digitais do Ceará focado em engenharia de software e performance.

## 🏖️ Sobre o Projeto

O site da Onda reflete a cultura e a [metodologia de desenvolvimento (Onda-Dev)](./docs/Metodologia%20de%20Desenvolvimento%20-%20Onda.pdf) do estúdio. Desenvolvido com HTML, CSS Vanilla e Javascript nativo, o projeto foca em leveza, performance (zero dependências pesadas no bundle final) e uma experiência de usuário imersiva.

## 🛠️ Tecnologias e Arquitetura

- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Design System ("Tropical Tech"):** Paleta de cores inspirada na obra *"Marinha"* (1978), de Aldemir Martins (squircles flutuantes, pinceladas e texturas de grão). Tipografia **Manrope** (família única) com gradiente-assinatura oficial `#88399A → #C05171 → #ED7735 → #FEA31B`.
- **Otimizações:**
  - Imagens servidas no formato **WebP** (alta redução de peso garantindo carregamento rápido).
  - Ícones padronizados e reutilizáveis via **SVG Sprites**.
  - Componentização nativa e tags Open Graph (OG) prontas para compartilhamento em redes sociais.
  - **Navegação centralizada** (links absolutamente centrados no eixo horizontal da tela).
  - **Carrossel mobile** de serviços com scroll-snap centralizado e dots de navegação.

## 📖 Metodologia (Onda-Dev)

O estúdio opera num fluxo focado em transparência, previsibilidade e excelência técnica, que é refletido ao longo da jornada (scrollytelling) do próprio site:

1. **Spec Viva:** Especificações claras traduzidas em épicos e histórias de usuário.
2. **Congelamento Visual:** Aprovação do layout antes do código, garantindo a proteção do escopo visual.
3. **Prazo Calculado:** Prazos matemáticos (baseados no peso do módulo + aprovações) e não por estimativas rasas.
4. **Codificação XP (Extreme Programming):** Ciclo TDD (Red → Green → Refactor), com desenvolvimento em ondas curtas turbinado e acelerado pelo uso de IA de ponta.
5. **Deploy automatizado:** Smoke tests rigorosos, QA humano e esteiras CI/CD prontas.

> 📚 *A documentação completa da metodologia está disponível na pasta `/docs` do repositório.*

## 🚀 Como rodar localmente

Por ser desenvolvido utilizando apenas web standards nativos, basta subir um servidor estático local para visualizar o site.

1. Clone o repositório:
   ```bash
   git clone https://github.com/JustinoCarneiro/onda.git
   ```
2. Entre na pasta:
   ```bash
   cd onda
   ```
3. Inicie um servidor local. Exemplo usando Python:
   ```bash
   python3 -m http.server 8000
   ```
   *Ou usando Node.js: `npx serve`*
4. Acesse `http://localhost:8000` no seu navegador.

## 🏗️ Estrutura do Projeto

```text
.
├── assets/
│   ├── brand/      # Identidade visual oficial (logo, símbolo, brand sheet, SVGs)
│   ├── img/        # Imagens e vídeos (WebP/mp4)
│   ├── favicon.svg
│   └── apple-touch-icon.png
├── css/            # Estilos principais (styles.css e journey.css)
├── docs/
│   ├── brand/      # Documentação de marca (BRANDING, DESIGN_SYSTEM, guidelines)
│   ├── referencias/
│   └── Metodologia de Desenvolvimento - Onda.pdf
├── js/             # Interações (app.js, journey.js, image-slot.js)
├── tweaks/         # Ferramentas internas (React Island dev-only)
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── .gitignore
└── index.html      # Página principal
```

## 🔍 SEO

O site implementa uma estratégia completa de otimização para motores de busca e compartilhamento social:

### Meta tags essenciais
- `<meta name="description">` — descrição única e relevante da página
- `<meta name="robots" content="index, follow, max-image-preview:large">` — autoriza indexação com prévia de imagem grande
- `<link rel="canonical">` — evita conteúdo duplicado apontando a URL canônica

### Open Graph (Facebook, LinkedIn, WhatsApp)
```html
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:locale:alternate" content="en_US" />
<meta property="og:title" content="Onda — Estúdio de Produtos Digitais · Ceará" />
<meta property="og:description" content="..." />
<meta property="og:image" content=".../og-cover.jpg" />  <!-- 1200×630px -->
<meta property="og:image:alt" content="..." />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
```
Exibe preview com imagem grande no X/Twitter.

### Dados Estruturados (Schema.org)
Bloco `application/ld+json` do tipo `ProfessionalService` com:
- Nome, URL, logo e imagem
- Endereço (`PostalAddress`) → Fortaleza, CE, BR
- `areaServed: "BR"` e `knowsLanguage: ["pt-BR", "en"]`
- Dois `ContactPoint` (comercial e suporte) com telefone e e-mail

### Rastreamento e indexação
| Arquivo | Função |
|---|---|
| `robots.txt` | Libera todos os agentes e aponta o sitemap |
| `sitemap.xml` | URL canônica com `lastmod`, `changefreq: monthly`, `priority: 1.0` |
| `site.webmanifest` | PWA metadata (nome, tema, ícones) |

### PWA / Favicons
- `favicon.svg` — símbolo oficial vetorial (qualquer resolução)
- `apple-touch-icon.png` — ícone 180×180px para iOS
- `theme-color` → `#0E3F52` (teal da marca) na barra do sistema

---

## 📝 Gestão de Escopo

O projeto adota e divulga a política de **Escopo Protegido**. Mudanças de layout pós-aprovação visual ou redefinições no meio do fluxo retornam à prancheta (Fase 1) gerando um aditivo de prazo transparente. Isso defende a qualidade do código já construído e preserva a sanidade arquitetural do software.
