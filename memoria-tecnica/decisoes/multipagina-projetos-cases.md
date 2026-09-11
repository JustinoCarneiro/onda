---
tipo: decisao
data: 2026-09-10
status: Ativa
fonte: relatorio_implementacao_site_onda.docx (v1.0) — seções 03, 05, 09
---

# Site multi-página: rotas /projetos/* para páginas de case

## Contexto
O relatório trata as páginas de case como o **ativo comercial mais importante** (seção 05)
e as coloca em **P0** (P0-03). A regra de arquitetura (seção 03) exige que cada case seja
uma URL própria, linkável a partir das soluções e terminando em CTA. Até aqui o site era
uma página única (`index.html`), conforme `AGENTS.md` (estático, sem framework, sem build).

Fazer as primeiras páginas de case é o gatilho para introduzir a estrutura multi-página —
e uma página de case é a forma mais segura de começar (auto-contida, não depende do
`js/app.js` nem do `js/journey.js` da home).

## Decisão

1. **Multi-página como arquivos `.html` estáticos numa pasta `projetos/`.** Sem router,
   sem framework, sem build — coerente com `AGENTS.md`. Rotas: `projetos/instituto-melvin-erp.html`,
   `projetos/instituto-lucas.html`. `index.html` continua na raiz (o `<image-slot>` depende disso).

2. **`vercel.json` com `cleanUrls: true`.** Assim `/projetos/instituto-melvin-erp` (canonical
   e sitemap, sem `.html`) resolve e `.../instituto-melvin-erp.html` redireciona 308 para a
   versão limpa. Único config de deploy do projeto até agora.

3. **Cabeçalho/rodapé simplificados nas páginas de case.** Não duplicam a nav com toggle
   PT/EN, menu mobile e `journey.js` da home. Header enxuto: logo → `../index.html`,
   breadcrumb "Projetos", CTA "Falar sobre meu projeto". Rodapé reaproveita o markup da home.
   Reutilizam `css/styles.css` (design system) + um `<style>` local pequeno para layout de case.

4. **Páginas de case em PT.** EN fica como follow-up (P1) — a copy do relatório é toda PT
   e duplicar bilíngue agora dobra o custo sem retorno imediato.

5. **Template C01–C09** (seção 05 do relatório): Hero · Contexto · Problema · Solução ·
   Produto em uso · Resultados · Engenharia · Depoimento · CTA.

6. **Integridade (seção 05):** nenhuma métrica numérica inventada. Resultados em linguagem
   qualitativa de escopo (o que passou a ser possível), com bloco de métricas em
   placeholder oculto até validação com cliente — ver [[hidden-placeholder-pattern]].

7. **Prints reais** extraídos dos próprios repositórios (`sistema_melvin/frontend/dist/assets/`,
   `sistema_lucas/docs/manual-assets/`), convertidos para WebP em `assets/img/cases/<projeto>/`.

## Próximos passos que isto destrava
- `sitemap.xml` multi-URL + `robots.txt` (P0-07) — agora há mais de uma rota.
- Páginas de solução `/solucoes/*` (P1-03) seguem o mesmo padrão de arquivo estático.
- Nav compartilhada de verdade (com as rotas) quando as páginas de solução existirem.
