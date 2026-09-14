---
tipo: decisao
data: 2026-09-14
status: Ativa
fonte: pedido direto do usuário — paridade de preview em vídeo entre os cards da home
---

# Preview em vídeo dos cards de projeto (Heliene Araújo e Confidencial Calçados)

## Contexto
Na home, o card do Instituto Melvin (ERP) já usava um vídeo em loop como miniatura (em vez de
screenshot estático), com lightbox estilo Stories ao clicar — ver `.video-lightbox` /
`.proj-thumb video` em [[multipagina-projetos-cases]]. Os cards de Heliene Araújo e Confidencial
Calçados ainda usavam `.proj-slider` com uma imagem estática. O usuário pediu paridade: os três
cards com vídeo.

Não havia gravação de tela desses dois sites disponível — diferente do Melvin/Lucas, que já
tinham `.mp4` prontos em `assets/img/`.

## Decisão

1. **Vídeo gravado com Playwright direto do site em produção** (mesmo princípio de integridade
   de [[expansao-portfolio-p2-01]]: nunca material do repositório do cliente, sempre o site real
   ao vivo). Sessão headless em viewport 1280×720, `recordVideo` do próprio Playwright, com um
   scroll suave e gradual pela página por ~20s (sem interação além disso — não há dado de
   cliente/produto sensível envolvido em rolar a página pública).

2. **Compressão para o padrão já usado pelo Melvin**: reencode com `ffmpeg`/libx264, 1280×720,
   24fps, sem áudio (`-an`), CRF 30 com teto de 300kbps (`-maxrate 300k -bufsize 600k`),
   `-movflags +faststart`. Resultado: ~550KB (Heliene, 20s) e ~755KB (Confidencial, 20s) — mesma
   ordem de grandeza por segundo do `proj-melvin-erp.mp4` (1.9MB / 63s ≈ 245kbps).
   Poster extraído como frame estático (`ffmpeg -ss` num ponto já carregado, não no frame 0 em
   branco) e convertido para WebP, replicando `proj-melvin-erp-poster.webp`.

3. **Arquivos**: `assets/img/proj-heliene-araujo.mp4` + `-poster.webp`;
   `assets/img/proj-confidencial-calcados.mp4` + `-poster.webp`. Markup idêntico ao do Melvin
   (`.video-lightbox > video[preload=none loop muted playsinline]`), então o mesmo JS de
   `js/app.js` (IntersectionObserver para autoplay/pause + modal Stories) já cobre os três sem
   mudança de código.

## Como regravar (se o site do cliente mudar)
Script de gravação não foi commitado (é um one-off de scratchpad). Receita: abrir o site alvo
com `chromium.launch()` + `newContext({ viewport: {width:1280,height:720}, recordVideo: { dir,
size: {width:1280,height:720} } })`, rolar a página gradualmente por ~20s, fechar o contexto
(o `.webm` só é finalizado no `close()`), depois reencodar com o comando ffmpeg acima. Repetir
para o vídeo do Melvin/Lucas caso precisem de refresh também.
