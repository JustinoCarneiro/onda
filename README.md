# Onda — Estúdio de Produtos Digitais 🌊

Repositório oficial do site da **Onda**, um estúdio de produtos digitais do Ceará focado em engenharia de software e performance.

## 🏖️ Sobre o Projeto

O site da Onda reflete a cultura e a [metodologia de desenvolvimento (Onda-Dev)](./docs/Metodologia%20de%20Desenvolvimento%20-%20Onda.pdf) do estúdio. Desenvolvido com HTML, CSS Vanilla e Javascript nativo, o projeto foca em leveza, performance (zero dependências pesadas no bundle final) e uma experiência de usuário imersiva.

## 🛠️ Tecnologias e Arquitetura

- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Design System ("Tropical Tech"):** Paleta de cores inspirada na luz do litoral cearense e no artista Aldemir Martins (squircles flutuantes, pinceladas e texturas de grão). Tipografia **Manrope** (família única) com gradiente-assinatura oficial `#88399A → #C05171 → #ED7735 → #FEA31B`.
- **Otimizações:**
  - Imagens servidas no formato **WebP** (alta redução de peso garantindo carregamento rápido).
  - Ícones padronizados e reutilizáveis via **SVG Sprites**.
  - Componentização nativa e tags Open Graph (OG) prontas para compartilhamento em redes sociais.

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

## 📝 Gestão de Escopo

O projeto adota e divulga a política de **Escopo Protegido**. Mudanças de layout pós-aprovação visual ou redefinições no meio do fluxo retornam à prancheta (Fase 1) gerando um aditivo de prazo transparente. Isso defende a qualidade do código já construído e preserva a sanidade arquitetural do software.
