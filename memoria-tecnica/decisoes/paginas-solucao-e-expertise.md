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

5. **Eventos de analytics do formulário nomeados por o que de fato acontece.** O envio do
   formulário de contato ainda não está ligado a um serviço externo (P0-08); o evento
   correspondente chama-se `form_valid` (validação client-side passou + confirmação local
   mostrada), não `form_submit` — reservado para quando existir envio real.

## Próximos passos que isto destrava
- Quando P0-08 for resolvido: renomear/reativar `form_submit` para o sucesso real de envio.
