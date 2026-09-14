---
tipo: decisao
data: 2026-09-13
status: Ativa
fonte: relatorio_implementacao_site_onda.docx (v1.0) — seções 03, 07, backlog P1-03/P2-03
---

# Páginas de solução (`/solucoes/*`) e página de expertise (`/expertise.html`)

## Contexto
`[[multipagina-projetos-cases]]` já havia estabelecido o padrão multi-página estática
para os cases. O relatório pede, em P1-03, uma URL própria por solução comercial
(seção 03: "cada solução principal deve possuir URL própria, title, meta description,
H1 único e conteúdo específico") e, em P2-03, uma página técnica de expertise para
buyers técnicos, absorvendo os termos de processo (Gherkin, TDD, XP, API-First) que a
seção 06 do relatório pede para tirar da camada comercial da home.

Diferente dos cases, essas páginas não descrevem um projeto de cliente — descrevem uma
capacidade comercial (solução) ou o processo/arquitetura da própria Onda. Isso levanta um
risco de integridade específico: sem um projeto real por trás de cada solução, é fácil
a copy escorregar para alegação genérica ou métrica sem fonte.

## Decisão

1. **Mesma arquitetura dos cases**: arquivo `.html` estático, sem router/framework/build,
   reaproveitando `css/styles.css` + um `<style>` local por página (mesmo padrão de
   `[[multipagina-projetos-cases]]`, decisão 3). `expertise.html` fica na raiz (nível de
   `index.html`) por não pertencer a nenhuma das duas famílias de rota (`projetos/`,
   `solucoes/`); as 4 páginas de solução ficam em `solucoes/`.

2. **Toda "prova de engenharia" deve rastrear até um case real.** Nenhuma solução ou a
   página de expertise pode citar stack, teste, prática de segurança ou métrica que não
   esteja documentada em `projetos/instituto-melvin-erp.html` ou `projetos/instituto-lucas.html`.
   Onde a evidência é parcial (ex.: e-commerce), o texto diz isso explicitamente em vez de
   generalizar — ex.: `solucoes/ecommerce.html` é explícita que não há case de e-commerce
   publicado e qualifica a evidência real (Stripe/webhooks do Melvin) como "camada de
   pagamentos", não como "checkout completo".

3. **Contagem de testes nunca consolidada entre projetos.** "Suíte E2E" e "teste de
   backend" não são a mesma unidade — não somar em um único número (ex.: não escrever
   "189 testes"). Cada projeto aparece com sua contagem própria, e qualquer prática de
   entrega (CI/CD, Docker Compose) é atribuída ao(s) projeto(s) onde está de fato
   documentada — ex.: CI/CD via GitHub Actions só está documentado para o Melvin.
   Regra descoberta e corrigida numa revisão R1 do Codex em 13/09/2026.

4. **CSS base extraída para `css/detail-page.css`.** As 7 páginas do padrão "case/solução"
   (2 cases + 4 soluções + expertise) repetiam ~80% do mesmo bloco `<style>` (~40KB
   duplicados). Revisão R1 do Codex (13/09/2026) recomendou extrair a base num refactor
   **separado**, sem misturar com mudança de conteúdo — feito no commit `a1dd67e`. Cada
   família mantém inline só o que é específico dela (cases: `.shot*`/`.res*`; soluções e
   expertise: `.sol-mark`/`.case-cta-row`/`.rel-case*`; expertise: `.step-list`/`.eng-cols`).

5. **Eventos de analytics do formulário nomeados por o que de fato acontece.** Enquanto o
   formulário não estava ligado a um serviço externo, o evento de sucesso chamava-se
   `form_valid` (validação client-side passou + confirmação local mostrada), não `form_submit`.
   **Resolvido em 13/09/2026 (P0-08)**: formulário ligado ao Web3Forms (`js/app.js`, fetch JSON
   para `https://api.web3forms.com/submit`, formato oficial da doc do serviço); `form_submit`
   dispara só no sucesso real do envio, e um novo evento `form_send_error` cobre falha de
   rede/API (com `#formSendError` mostrando mensagem de retry ao usuário, botão reabilitado).
   A access key do Web3Forms é pública por design (a própria doc do serviço autoriza uso em
   client-side) — não é segredo a proteger.

   **Falso alarme de CORS durante a validação**: testes automatizados via Playwright contra
   `onda.business` falhavam com `No 'Access-Control-Allow-Origin' header`. Isolado via requisição
   HTTP direta (fora do navegador): sem headers de navegador real, a API retorna 403 explícito
   ("Use our API in client side... Pro plan required" — bloqueio deliberado a chamadas
   servidor-a-servidor); com `Origin`/`Referer`/`User-Agent` de navegador real, retorna 200 e
   `access-control-allow-origin: *`. Conclusão: o Cloudflare/anti-bot do Web3Forms bloqueia
   especificamente automação headless (Playwright seta `navigator.webdriver`), não navegadores
   reais — por isso o teste automatizado falhava enquanto um envio de verdade funcionaria.
   **Confirmado em produção**: e-mail de teste enviado pelo usuário via `onda.business` chegou
   em `ondaempresa1@gmail.com` com nome, e-mail, mensagem e URL de origem corretos.

6. **Migração de Web3Forms para EmailJS (13-14/09/2026)**: o usuário pediu que o e-mail de
   notificação seguisse a identidade visual da Onda. Web3Forms não permite template HTML
   customizado no plano grátis (só assunto/remetente/reply-to); EmailJS permite template HTML
   próprio direto no painel, mantendo o site 100% estático (Public Key é feita para uso
   client-side, mesma lógica da access key do Web3Forms). Cotado usar o Resend da Confidencial
   Calçados como alternativa — descartado porque lá a chave fica protegida num backend Next.js
   que este site não tem; expor uma chave secreta de Resend no `js/app.js` seria uma
   vulnerabilidade real (qualquer um vê no "Ver código-fonte" e manda e-mail em nome da conta).
   Template HTML fonte em `docs/email-template-contato.html` (logo, barra do gradiente-assinatura,
   campos do formulário, CTA de resposta), colado manualmente no editor do EmailJS (sem API de
   gestão de templates — confirmado que é operação exclusiva do painel deles). Credenciais:
   Service ID `service_z97t47g` (Gmail, `ondaempresa1@gmail.com`), Template ID `template_4emn7ti`,
   Public Key em `js/app.js`. Testado com sucesso via API direta e via formulário real em
   produção — e-mail chegou com o design correto.

## Próximos passos que isto destrava
- P0-08 concluído com o design de e-mail definitivo (EmailJS) — confirmado com entrega real.
- Quando P0-05 (e-mail corporativo) for resolvido, trocar o e-mail cadastrado no serviço
  (Settings → To Email do template no EmailJS) de `ondaempresa1@gmail.com` para o corporativo.
