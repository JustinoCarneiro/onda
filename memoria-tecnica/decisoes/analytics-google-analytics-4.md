---
tipo: decisao
data: 2026-09-14
status: Substituída
fonte: documentação oficial da Vercel (/docs/analytics/limits-and-pricing) + confirmação do usuário
---

# Vercel Web Analytics (Hobby) substituído por Google Analytics 4

## Contexto
P1-06 (`js/app.js`, commit `cc0cf73`) implementou `trackEvent()` disparando 5 eventos
customizados via `window.va` (Vercel Web Analytics): `cta_click`, `whatsapp_click`,
`case_click`, `form_error`/`form_submit`, `form_send_error`. A implementação em si estava
correta e testada.

Verificado na documentação oficial da Vercel (`/docs/analytics/limits-and-pricing`, tabela de
preços): a coluna **"Custom Events"** mostra `-` (não incluído) no plano **Hobby** e `Included`
a partir do **Pro**. Page views automáticos funcionam no Hobby; eventos customizados, não. O
usuário confirmou em 14/09/2026 que o time `ondabusiness` está no plano Hobby e optou por trocar
de provedor em vez de aguardar upgrade.

## Decisão
1. **Substituído Vercel Web Analytics por Google Analytics 4** (conta/propriedade criada pelo
   usuário em 14/09/2026, Measurement ID `G-K31TBC0EHE`). GA4 tem eventos customizados inclusos
   no plano grátis, sem limite de plano equivalente ao problema do Vercel Hobby.
2. **Snippet `gtag.js` adicionado nas 12 páginas do site** (antes só `index.html` tinha
   qualquer script de analytics — `/_vercel/insights/script.js`, removido). Agora `expertise.html`,
   os 6 cases em `projetos/` e as 4 páginas em `solucoes/` também têm page view rastreado — uma
   melhoria real em relação ao estado anterior, não só uma troca 1:1.
3. **`trackEvent()` reescrito** para chamar `window.gtag('event', name, data)` em vez de
   `window.va('event', {...})`. Mesmos 5 nomes de evento e mesmos parâmetros — só o transporte
   mudou. No-op silencioso se `gtag` não estiver carregado (mesma postura defensiva de antes).
4. **"Métrica otimizada" do GA4 mantida ativada** na criação do stream — rastreia rolagem e
   cliques de saída automaticamente, de graça, sem código adicional no site.

## Próximos passos que isto destrava
- Nenhum — migração concluída e validada (responsivo 360-1280px sem overflow, `gtag` presente
  e disparando em todas as páginas, testado via Playwright).
- Se o usuário quiser, dá para reativar o Vercel Web Analytics em paralelo no futuro (ex.: se
  fizer upgrade para Pro por outro motivo) sem conflito — os dois sistemas de tracking podem
  coexistir, `trackEvent()` teria que voltar a chamar os dois.
