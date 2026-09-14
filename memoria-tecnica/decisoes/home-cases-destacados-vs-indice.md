---
tipo: decisao
data: 2026-09-14
status: Ativa
fonte: relatorio_implementacao_site_onda.docx (v1.0) — seções 03 (sitemap) e 04 (H03 "Cases destacados")
---

# Home mostra 2-3 cases destacados; catálogo completo mora em `/projetos`

## Contexto
O usuário perguntou se a seção de projetos da home ("Ilhas que construímos") não ficaria
melhor como carrossel, já que tinha crescido para 7 cards ao longo da expansão do portfólio
([[expansao-portfolio-p2-01]]). Antes de decidir sobre carrossel, reli o relatório original:

- Seção 03 ("Sitemap proposto") já previa `/projetos — índice de cases` como rota própria,
  separada da home — nunca construída; os 7 cards foram todos se acumulando direto na home.
- Seção 04, item H03 ("Cases destacados", prioridade P0): "Mostrar capacidade antes de
  explicar tudo" → "**2–3 cases**, com resultado e imagem". A home nunca foi desenhada para
  ser o catálogo completo.

Ou seja, o problema não era grid vs. carrossel — era a home acumulando duas funções
(vitrine curada + catálogo completo) que o relatório já separava desde o início.

## Decisão
1. **Home (`#projetos`) reduzida a 3 cases**, escolhidos para cobrir os três tipos de
   capacidade mais fortes sem repetir categoria: **Instituto Melvin (ERP)** — sistema
   complexo/RBAC; **Heliene Araújo** — site com CMS/i18n; **Confidencial Calçados** —
   e-commerce com pagamento real. Removidos da home (mas não do site): Instituto Melvin
   (site), Instituto Lucas, Zoo Agency, Vanessa Vaz Advocacia.
2. **Filtro de categoria (`Todos/Sistemas/Sites & LP`) removido da home** — com só 3 cards
   fixos e escolhidos a dedo, filtrar não faz sentido; o filtro migrou inteiro para o índice.
3. **Nova rota `/projetos` (`projetos/index.html`)**: catálogo completo com os 7 cards, filtro
   de categoria, e o mesmo modal de vídeo em Stories usado no Melvin ERP/Lucas — página
   auto-contida (não depende de `js/app.js`; tem seu próprio script inline de PT/EN + filtro +
   modal, no mesmo padrão das páginas de case).
4. **CTA "Ver todos os projetos"** adicionado ao fim da seção da home, apontando para
   `projetos/` — fecha o funil vitrine → catálogo → case individual que o relatório desenhou.

## Próximos passos que isto destrava
- Nenhum bloqueio. Follow-up opcional de baixa prioridade: `projetos/index.html` não tem
  tracking de `case_click` via `gtag` (só têm isso as páginas que carregam `js/app.js`,
  que é só `index.html`) — se quiser paridade de analytics ali, precisa de um pequeno
  listener de clique próprio nessa página.
