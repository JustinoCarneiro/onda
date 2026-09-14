---
tipo: indice
---

# Memória Técnica — Site Institucional Onda

Base de conhecimento viva do site institucional: bugs cabeludos resolvidos (com causa raiz) e decisões técnicas
tomadas fora da spec original. Não documenta conceitos genéricos — só o que é específico deste projeto e
não seria óbvio olhando só o código.

Padrão da metodologia Onda-Dev — ver seção 11 da metodologia pro critério completo de quando vale
(e quando não vale) criar uma nota aqui.

## Como usar
- **Antes de investigar um bug**, procurar em `bugs/` se algo parecido já foi resolvido.
- **Antes de tomar uma decisão de arquitetura**, procurar em `decisoes/` se já existe uma decisão
  relacionada (evita reabrir debate já resolvido ou contradizer uma decisão ativa).
- **Ao resolver um bug não-trivial** ou **tomar uma decisão técnica fora da spec**, criar uma nota
  nova usando os templates do `onda-starter/memoria-tecnica/templates/`.

## Bugs
*(vazio — começar a popular conforme bugs apareçam)*

## Decisões
- [[hidden-placeholder-pattern]] — Padrão para seções que dependem de conteúdo real do cliente
- [[pendencias-feedback-cliente]] — Lista de conteúdo pendente para ativar seções ocultas
- [[dominio-canonico-onda-business]] — onda.business como domínio canônico (apex, sem www); DNS
  segue na Hostinger; merge bloqueado até o domínio resolver com SSL no Vercel
- [[reposicionamento-comercial-home]] — Reposicionamento comercial da home (fase 1 do relatório)
- [[multipagina-projetos-cases]] — Site multi-página: rotas `/projetos/*` para páginas de case
- [[paginas-solucao-e-expertise]] — Rotas `/solucoes/*` e `/expertise.html`; regra de
  rastreabilidade de prova de engenharia até um case real; testes nunca somados entre projetos
- [[expansao-portfolio-p2-01]] — 3 novos cases reais (Heliene Araújo, Vanessa Vaz, Confidencial
  Calçados); critério de integridade usado para escolher/descartar projetos de `~/Applications/`
- [[analytics-google-analytics-4]] — Vercel Web Analytics (Hobby, sem eventos customizados)
  substituído por GA4 nas 12 páginas do site
- [[home-cases-destacados-vs-indice]] — Home volta a mostrar só 2-3 cases (H03 do relatório);
  catálogo completo dos 7 projetos mora em `/projetos`, rota prevista desde o sitemap original
- [[previews-em-video-dos-cases]] — REVOGADA: preview em vídeo tentado nos 3 cards da home e
  depois removido a pedido do usuário; cards voltaram a imagem estática. Ler antes de reabrir o tema
- [[lightbox-imagens-e-tipografia-cases]] — Screenshots das páginas de case ganham lightbox de
  clique; `.shot`/`.res` centralizados em `detail-page.css`; fontes do corpo aumentadas
