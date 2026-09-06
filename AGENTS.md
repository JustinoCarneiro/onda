# Onda — Contrato canônico de trabalho (site do estúdio)

## Objetivo

Site institucional da **Onda**, estúdio de produtos digitais do Ceará. Um site
**estático** (HTML5 + CSS3 vanilla + JavaScript ES6+, sem framework e sem etapa
de build) com scrollytelling que apresenta a cultura e a metodologia Onda-Dev.
Foco em leveza, performance e experiência imersiva. Metodologia OndaDev — versão
em `ONDA_VERSION`.

## Mapa do repositório

| Caminho | Finalidade |
| --- | --- |
| `index.html` | Página principal — precisa ficar na **raiz** (o padrão de imagens trocáveis grava um sidecar na raiz). |
| `css/` | `styles.css` (base + design system "Tropical Tech") e `journey.css` (scrollytelling). |
| `js/` | `app.js` (interações), `journey.js` (scrollytelling), `image-slot.js` (Web Component de imagem trocável). |
| `assets/` | Imagens (WebP), SVG sprites, favicon, portfólio Workana. |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | SEO e PWA básico. |
| `docs/brand/` | `BRANDING.md` + `DESIGN_SYSTEM.md` (paleta, tipografia Manrope, gradiente-assinatura). |
| `docs/process/` | Cópia em PDF da metodologia de desenvolvimento. |
| `docs/referencias/` | Referências visuais de design. |
| `memoria-tecnica/` | Bugs cabeludos e decisões fora da spec; consulte antes de investigar (`_index.md`). |
| `.ondadev/` | Protocolo de failover de cota e template de handoff entre agentes. |
| `.agents/`, `.claude/` | Skills OndaDev dos agentes (nunca edite os destinos; a fonte é o `onda-starter`). |
| `.github/workflows/` | CI de secret scanning (gitleaks nos commits do PR). |

## Autoridade da informação

| Assunto | Fonte canônica | Papel das demais fontes |
| --- | --- | --- |
| Conteúdo e escopo do site | `index.html` + `README.md` | — (não há CMS; o conteúdo muda editando o markup). |
| Design system e marca | `docs/brand/DESIGN_SYSTEM.md` + `docs/brand/BRANDING.md` | Os PDFs são export; o `.md` é a fonte. |
| Decisão de arquitetura | `memoria-tecnica/decisoes/` | — |
| Código e histórico versionado | Git | GitHub registra PRs, revisão e CI. |

Antes de investigar um bug não trivial, consulte `memoria-tecnica/bugs/`; antes
de uma decisão de arquitetura, consulte `memoria-tecnica/decisoes/`. Ao
descobrir causa-raiz reutilizável ou tomar decisão fora da spec, registre uma
nota nova (templates em `onda-starter/memoria-tecnica/templates/`), linkando com
`[[nome-da-nota]]`.

## Comandos verificados

```bash
# Servir localmente (não há build)
python3 -m http.server 8000      # ou: npx serve

# Checkpoint de handoff entre agentes (só metadados seguros)
bash scripts/ai-checkpoint.sh --stdout
```

Não há build, lint ou suíte de testes: o que está no disco é o que o navegador
roda. Validação é conferência manual no navegador (scrollytelling, navegação
centralizada, carrossel mobile de serviços) em desktop e mobile.

## Fronteiras e convenções

- **Sem framework, sem build, zero dependência pesada no bundle final.** Não
  introduza npm, bundler, lockfile ou biblioteca de terceiros sem uma decisão
  registrada em `memoria-tecnica/decisoes/`.
- **`index.html` na raiz** (persistência do `<image-slot>` depende disso).
- **Design system "Tropical Tech"**: respeite a paleta, a tipografia Manrope
  (família única) e o gradiente-assinatura oficial
  `#88399A → #C05171 → #ED7735 → #FEA31B`.
- **Performance**: imagens em WebP, ícones via SVG sprites, tags OG prontas.
- Seções que dependem de conteúdo real do cliente seguem o padrão de placeholder
  oculto (ver `memoria-tecnica/decisoes/`).
- Documentação em português claro; nomes técnicos no idioma da tecnologia.

## Segurança e classes de risco

Site institucional sem backend, login ou dado de cliente. Nunca versione tokens,
chaves de API, credenciais de hospedagem ou dados pessoais. Links de contato e
redes são públicos e podem ficar no markup.

| Nível | Exemplos | Regra |
| --- | --- | --- |
| R0 | Edição de conteúdo, estilo, cópia de texto, testes locais | Executar e validar normalmente. |
| R1 | Estrutura do `index.html`, `js/`, design system, SEO, CI, assets pesados | Declarar impacto, conferir no navegador e pedir revisão de diff. |
| R2 | Publicação em produção, credenciais, exclusão de assets em uso | Exigir autorização explícita e alvo confirmado. |

## Definition of Done

1. atende a um pedido de conteúdo/ajuste com resultado verificável na página;
2. conferido no navegador em desktop e mobile (o que existe de "teste" aqui);
3. atualiza `README.md`, `docs/brand/` ou `memoria-tecnica/` quando a estrutura
   ou uma decisão mudou;
4. não introduz segredo, credencial ou dado pessoal no repositório;
5. passa por revisão proporcional ao risco e deixa um diff compreensível;
6. registra handoff com mudanças, validações, decisões, riscos e pendências.

Não afirme que a publicação foi feita sem evidência.

## Revisão e handoff entre agentes

Claude e Codex seguem este arquivo como núcleo comum. Um autor por PR; o outro
revisa o diff quando o risco (R1/R2) exige. Quando a cota de um agente acaba, o
outro assume por handoff — protocolo na metodologia OndaDev 3.0 (`ONDA_VERSION`),
com `scripts/ai-checkpoint.sh` preenchendo `.ondadev/handoff/current.md`.

Síntese de handoff:

```text
Escopo: …
Mudanças: …
Validações executadas e resultado: …
Decisões/ADRs: …
Riscos, bloqueios e próximos passos: …
```
