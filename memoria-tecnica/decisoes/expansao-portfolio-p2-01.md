---
tipo: decisao
data: 2026-09-13
status: Ativa
fonte: relatorio_implementacao_site_onda.docx (v1.0) — backlog P2-01; repositórios reais em ~/Applications/
---

# Expansão do portfólio: 3 novos cases reais (P2-01)

## Contexto
P2-01 ("Mais cases: expandir portfólio e criar recortes por setor") estava bloqueado desde a
sessão anterior por falta de projetos com briefing real (problema/contexto/resultado) além de
Instituto Melvin e Instituto Lucas — os outros itens do portfólio antigo (site institucional do
Melvin, Zoo Agency) só tinham descrição de uma linha, sem case.

O usuário indicou `~/Applications/` como fonte de outros projetos reais da Onda. Levantamento
encontrou ~15 repositórios; a maioria não servia (protótipo sem backend, projeto pessoal,
produto próprio da Onda, ou explicitamente "produção real ainda pendente"). Três projetos
passaram no critério de integridade: **completos, ao vivo, com briefing real documentado**
(`CLAUDE.md` + `ROADMAP.md` no padrão OndaDev) e sem sinal de confidencialidade.

## Decisão

1. **3 novos cases publicados**, seguindo o template C01–C09 já estabelecido:
   - `projetos/heliene-araujo.html` — site acadêmico bilíngue com CMS (Payload), ao vivo em
     `helienearaujo.com.br`. 12 módulos concluídos.
   - `projetos/vanessa-vaz-advocacia.html` — site + blog jurídico internacional, ao vivo em
     `vanessavazadv.com.br`.
   - `projetos/confidencial-calcados.html` — e-commerce completo (catálogo, checkout, Mercado
     Pago em produção, frete automatizado via Melhor Envio), ao vivo em
     `confidencialcalcados.com.br`. Fecha a lacuna que `solucoes/ecommerce.html` deixava
     explícita desde o commit `f584715` ("ainda não publicamos um case de e-commerce completo")
     — a página foi atualizada para referenciar este case real.

2. **Screenshots capturados ao vivo via Playwright** direto dos sites em produção (não usados
   prints do repositório do cliente), convertidos para WebP em
   `assets/img/cases/{heliene,vanessavaz,confidencial}/`. Critério de integridade aplicado na
   escolha: o painel financeiro da Confidencial Calçados (`public/manual/pedidos-pago.png`) foi
   descartado porque os pedidos ali são de teste ("Cliente Teste", valores pequenos) — usar
   aquele print teria implicado faturamento real que não existe.

3. **Nenhuma métrica de negócio inventada.** Resultados publicados são só o que é verificável
   objetivamente: contagens ao vivo do próprio site (indicadores da Heliene, 7 artigos do blog
   da Vanessa Vaz, 39 produtos da Confidencial Calçados) ou fatos de engenharia documentados nos
   repositórios (validação de pagamento real com dinheiro real, contagem de testes por
   framework). Faturamento e volume de vendas da Confidencial Calçados foram explicitamente
   excluídos — nota no case diz que esses números são operados pela cliente e não publicados
   sem autorização dela.

4. **Zoo Agency**: ganhou página de case própria (`projetos/zoo-agency.html`), com fatos reais
   do código-fonte (`landing_page_Klinsmann`) — fundadores reais (Klinsmann Santana/"Coruja",
   Beatriz Silva/"Coelha"), stack (HTML/CSS/JS vanilla, fontes auto-hospedadas), cabeçalhos de
   segurança reais (CSP, X-Frame-Options) do `.htaccess` de produção. Decisão revisada em
   13/09/2026: inicialmente o card levava direto ao site externo; o usuário pediu consistência
   com o padrão dos demais cards — clicar sempre abre a página de case primeiro, e um botão
   "Visitar site" dentro do case leva ao site real. O mesmo padrão foi aplicado ao card do site
   institucional do Melvin, que passou a apontar para `projetos/instituto-melvin-erp.html` (o
   case do ERP já existente, mesmo cliente) em vez do link direto para `institutomelvin.org` —
   evita duplicar conteúdo com um case novo para o mesmo cliente.

5. **Bug corrigido**: nos 3 cases novos (Heliene, Vanessa Vaz, Confidencial Calçados), a
   miniatura do card não era clicável — só o ícone de seta e o link de texto levavam ao case.
   Corrigido envolvendo a imagem do `.proj-slider` num link para a página de case, no mesmo
   padrão dos cards mais antigos.

5. **Projetos avaliados e não usados** (registrado para não reabrir a investigação depois):
   - `confidencial-calcados` outros dados sensíveis (e-mail pessoal, valores de venda) nunca
     saíram do repositório de origem.
   - `figurinos-tja` — projeto reiniciado, sem backend funcionando ainda.
   - `edu-plus` — é o mesmo Sistema Melvin já publicado, não é um projeto novo.
   - `marketplace-ceara` — sistema real e sofisticado, mas o próprio ROADMAP diz "produção real
     ainda pendente" (só demo público); não virou case nesta rodada por decisão do usuário.
   - `gestao_financeira`, `tutor-socratico`, `weblocacao-wix`, `copiloto-ai-source` — projeto
     pessoal, protótipo, integração pontual ou produto próprio da Onda — não são cases de cliente
     fechados.

## Próximos passos que isto destrava
- Se o usuário quiser, `marketplace-ceara` pode virar um 4º case quando a produção real (não só
  o ambiente de demo) estiver confirmada.
- `solucoes/integracoes-automacoes.html` poderia ganhar o webhook do Mercado Pago (HMAC) da
  Confidencial Calçados como segunda evidência de integração, além do Stripe do Melvin — não
  feito nesta rodada para não misturar com o fechamento do P2-01.
