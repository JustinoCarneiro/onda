---
tipo: decisao
data: 2026-09-18
status: Concluída em 2026-09-18
fonte: pedido direto do usuário — configurar indexação no Google
---

# Configuração do Google Search Console

## Diagnóstico técnico (2026-09-18, checado em produção via curl)

| Item | Status |
| --- | --- |
| `robots.txt` | OK — `Allow: /` + `Sitemap: https://onda.business/sitemap.xml` |
| `sitemap.xml` | OK — 13 URLs, `lastmod` atualizado, cobre home + `/projetos` + 6 cases + soluções |
| Título/descrição únicos por página | OK — já implementado (12 páginas, cada uma com `<title>`/`<meta description>` próprios, ver commits de analytics/SEO anteriores) |
| Redirects de domínio | OK — `www.onda.business` → 301 → `https://onda.business/`; `http://` → 308 → `https://`. Só existe UMA superfície canônica |
| Schema.org `Organization` | Já existia (`@id https://onda.business/#onda`, nome, url, descrição, contato, endereço) |
| Schema.org `WebSite` | **Faltava — adicionado nesta sessão**, referenciando a Organization via `publisher: {"@id": ".../#onda"}` |
| `sameAs` (perfis públicos/redes sociais) | **Não adicionado** — o site não lista nenhum perfil de rede social (Instagram/LinkedIn/etc.), só WhatsApp comercial/suporte. Não fabricado; fica pendente até o usuário indicar links reais, se existirem |
| `google-site-verification` (meta ou arquivo) | Não existe ainda — nenhuma propriedade cadastrada no Search Console pra este domínio |

## Decisão sobre o método de verificação

Site é **estático** (HTML puro, sem build, sem Next.js — ver `AGENTS.md`), então os passos do
pedido original que assumiam Next.js (`generateMetadata`, env var injetada em build, pasta
`public/`) não se aplicam ao pé da letra:
- Sem build step, não há mecanismo de env var em runtime — o valor do
  `google-site-verification` (que não é segredo — é público por natureza, aparece no próprio
  HTML) vai direto hardcoded no `<head>` do `index.html`.
- "Arquivo HTML" na raiz aqui significa literalmente `google<hash>.html` na raiz do repo, do
  lado do `index.html`, do `robots.txt` etc. — sem pasta `public/`.
- O aviso sobre escapar `<` no JSON-LD (`<`) não se aplica: os dois blocos JSON-LD do site
  são hardcoded no HTML, não vêm de CMS/input dinâmico — não há como um valor de usuário quebrar
  a tag `<script>`.

**Método escolhido: Prefixo do URL + Tag HTML** (não Domínio+DNS). Critério do próprio pedido:
como `www` e `http` já colapsam pra uma única URL canônica via redirect (confirmado acima), não
há variação de subdomínio pra cobrir — não vale a pena mexer em DNS (~24-48h de propagação) por
um ganho que o redirect já cobre. Verificação por Tag HTML é instantânea e 100% controlada pelo
deploy do site.

## Bug descoberto: método "Arquivo HTML" não funciona neste site (`cleanUrls`)

O usuário cadastrou a propriedade por Prefixo do URL e o Google ofereceu "Arquivo HTML" como
método recomendado (`google<hash>.html`). **Tentei publicar o arquivo e não funciona**:
`vercel.json` tem `"cleanUrls": true`, que redireciona (308) qualquer requisição a um caminho
terminado em `.html` pra versão sem extensão — inclusive esse arquivo:

```
curl -sI https://onda.business/google7973a241656912d1.html
HTTP/2 308
location: /google7973a241656912d1
```

O verificador de arquivo do Google busca a URL **exata** com `.html` e exige `200` com o
conteúdo — não segue esse redirect de forma confiável (é um problema conhecido de
`cleanUrls`/Vercel com qualquer verificação por arquivo estático: Bing, Pinterest, Facebook
Domain Verification etc. teriam o mesmo problema aqui). Arquivo removido (commit `269ff83`).

**Regra pra próxima vez que uma verificação de domínio pedir arquivo estático nesse projeto**:
não usar o método "Arquivo HTML" — ir direto pro método "Tag HTML"/meta tag, que verifica a URL
normal da home (sem extensão, sem redirect). Se um serviço só oferecer o método de arquivo, a
alternativa seria criar uma exceção no roteamento do Vercel especificamente pra esse arquivo
(não tentado aqui — mudar o `cleanUrls` do projeto inteiro por causa de 1 arquivo de verificação
seria desproporcional).

## Status — processo fechado
- [x] Propriedade `https://onda.business/` cadastrada (Prefixo do URL).
- [x] Verificada por Tag HTML em 2026-09-18 (`content="-c9iUeudaql8lTSbp0jKdM0JxA9BFjqZ5yvgc-tRhfM"`,
      commit `fa1a398`, confirmado ao vivo em produção antes do usuário clicar em Verificar).
- [x] Sitemap enviado — status "Processado", **13 páginas encontradas** (bate com o número real
      de URLs no `sitemap.xml`).
- [x] Home (`https://onda.business/`) já estava indexada no Google antes mesmo desse processo
      (rastreamento orgânico prévio) — "O URL está no Google", HTTPS OK. Reforçada solicitação de
      indexação manual pra pegar a mudança do schema WebSite.

**Nota de processo**: o agente (Claude) não tem conta Google própria — não faz sentido pedir pro
usuário "adicionar acesso completo pra um e-mail que o agente opera". Os passos finais de UI do
Search Console (enviar sitemap, solicitar indexação) são rápidos o bastante pra o próprio usuário
fazer direto, com o agente só orientando o clique-a-clique. Não repetir esse pedido de acesso em
follow-ups futuros de SEO neste projeto.

## Follow-up opcional (não bloqueia, não teve pedido explícito ainda)
- `sameAs` no schema Organization: só adicionar se o usuário indicar perfis reais de rede social
  da Onda (Instagram/LinkedIn/etc.) — nada foi fabricado.
