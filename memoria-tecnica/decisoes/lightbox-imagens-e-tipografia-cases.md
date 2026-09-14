---
tipo: decisao
data: 2026-09-14
status: Ativa
fonte: pedido direto do usuário — screenshots das páginas de case não abriam ao clicar; fontes pequenas
---

# Lightbox de imagem + revisão tipográfica nas páginas de case

## Contexto
O usuário reportou dois problemas nas 6 páginas de case (`projetos/*.html`, seção "O
produto em uso" e afins): (1) clicar nos screenshots (`.shot img`) não fazia nada — só
o vídeo do Melvin tinha esse tipo de interação, via lightbox de vídeo; (2) fontes do
corpo do texto pequenas demais e alinhamento inconsistente entre "tópicos" — mais
concretamente, a grade de "Engenharia" (`.eng`, `display:grid` 2 colunas) deixava o
último item sozinho numa linha inteira à esquerda quando a contagem de itens era ímpar
(caso comum: a maioria das páginas tem 7 campos técnicos).

Nas 6 páginas de case, os blocos `.shot`/`.res` no `<style>` local eram **byte-a-byte
idênticos** (confirmado por diff) — nunca haviam divergido, então centralizá-los em
`css/detail-page.css` (mesmo racional do refactor original, ver decisão 4 nesse
arquivo) elimina 6 cópias que só aumentariam o risco de inconsistência.

## Decisão

1. **`.shot`/`.shot-grid`/`.shot-cap`/`.res`/`.res-grid`/`.res-note` movidos** do
   `<style>` local das 6 páginas para `css/detail-page.css` (removido de cada HTML,
   versão do link bump `?v=1` → `?v=2` pra invalidar cache).

2. **Lightbox de imagem novo**: `js/case-lightbox.js`, injetado como `<script>` nas 6
   páginas. Cria o overlay via `document.createElement` em runtime (não precisa editar
   markup em cada página) — clique em `.shot img` abre a imagem em tamanho grande,
   fecha com clique fora, no X ou Esc. No hover/toque aparece um badge de lupa
   (também injetado por JS) pra sinalizar que a imagem é clicável. Estilo do overlay
   em `.shot-lightbox*` no `detail-page.css`.

3. **`.eng` (seção Engenharia) trocado de `grid-template-columns` pra `column-count:2`**
   com `break-inside:avoid` em cada item — preenche a primeira coluna de cima a baixo
   antes de passar pra segunda, em vez de intercalar linha a linha. Resolve o caso de
   contagem ímpar sem deixar uma linha órfã ocupando a largura toda.

4. **Fontes do corpo aumentadas** em toda a família de páginas de detalhe (cases,
   soluções, expertise, que compartilham `detail-page.css`): `.case-lead` 18→19px,
   `.case-section p` 16→17px, `.mod-list li` 15→16px, `.eng div` 14.5→15.5px, `.res b`
   15→16.5px, `.res span` 14→15px, `.shot-cap` 13.5→14.5px, `.case-testimonial
   blockquote` 17→18px — com os breakpoints mobile (`max-width:560px`) ajustados na
   mesma proporção.

## Como regenerar/estender
Qualquer página nova de case só precisa: usar as classes `.shot`/`.shot-grid`/`.res`/
`.res-grid`/`.eng` normalmente (sem CSS local pra elas) e incluir
`<script src="../js/case-lightbox.js"></script>` perto do script de idioma no rodapé —
o lightbox se auto-inicializa detectando `.shot img` na página.
