---
tipo: decisao
data: 2026-09-18
status: Ativa — aguardando ação do usuário no Google Search Console
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

## Pendências (só o usuário consegue fazer)
- [ ] Cadastrar a propriedade em search.google.com/search-console (conta Google do usuário) e
      pegar o código da Tag HTML — passo a passo dado na conversa.
- [ ] Colar o código de volta pra eu adicionar em `index.html` e publicar.
- [ ] Depois de verificado: adicionar acesso "Completo" pra uma conta Google que o agente/outra
      pessoa da equipe possa operar, pra não precisar voltar no usuário a cada ação.
- [ ] Enviar `sitemap.xml` e solicitar indexação da home (e só as páginas mais importantes).
