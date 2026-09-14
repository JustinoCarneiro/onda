---
tipo: decisao
data: 2026-09-14
status: Ativa
fonte: documentação oficial da Vercel (/docs/analytics/limits-and-pricing) + confirmação do usuário
---

# Eventos customizados de analytics não funcionam no plano Hobby

## Contexto
P1-06 (`js/app.js`, commit `cc0cf73`) implementou `trackEvent()` disparando 5 eventos
customizados via `window.va`: `cta_click`, `whatsapp_click`, `case_click`, `form_error`/
`form_submit`, `form_send_error`. A implementação em si está correta e testada.

Verificado na documentação oficial da Vercel (`/docs/analytics/limits-and-pricing`, tabela de
preços): a coluna **"Custom Events"** mostra `-` (não incluído) no plano **Hobby** e `Included`
a partir do **Pro**. Page views automáticos (visita de página) funcionam no Hobby; eventos
customizados via `track()`/`window.va('event', ...)`, não.

O usuário confirmou em 14/09/2026 que o time `ondabusiness` está no plano **Hobby**.

## Decisão
1. **O código de tracking fica como está** — não é um bug, é uma limitação de plano. Os 5
   eventos continuam implementados e prontos; simplesmente não aparecem no dashboard da Vercel
   enquanto o time estiver no Hobby. `window.va` é `undefined` nesse plano e `trackEvent()` já
   trata isso como no-op silencioso (`typeof window.va !== 'function'`), sem erro no console.
2. **Nenhuma migração de provedor de analytics foi feita.** Alternativas existem (Google
   Analytics 4 tem eventos customizados de graça, por exemplo), mas trocar de provedor é uma
   decisão de produto/privacidade que cabe ao usuário, não uma correção técnica — não avançada
   sem pedido explícito.

## Próximos passos que isto destrava
- Se o usuário fizer upgrade para o plano Pro da Vercel, os 5 eventos já implementados passam a
  aparecer no dashboard sem nenhuma mudança de código — só habilitar Web Analytics no projeto
  (`vercel project web-analytics enable onda`, comando interativo).
- Se o usuário preferir uma alternativa gratuita com eventos customizados (ex.: Google Analytics
  4) em vez de esperar um upgrade, isso é uma nova decisão a ser tomada explicitamente — trocar
  de provedor de analytics tem implicação de privacidade/cookies que vale conversar antes.
