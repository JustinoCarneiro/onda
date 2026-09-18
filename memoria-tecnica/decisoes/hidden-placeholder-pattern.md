---
tipo: decisao
data: 2026-08-01
status: Ativa
---

# Padrão hidden-placeholder para seções pendentes de conteúdo real

## Contexto
O feedback do cliente (nota 8.4/10) identificou 6 gaps no site, mas a maioria depende de **conteúdo real** que
ainda não temos (depoimentos, números de autoridade, fotos da equipe, métricas de projeto, respostas de FAQ).

Implementar a estrutura HTML/CSS sem o conteúdo real permite que:
1. O código esteja pronto para ativação imediata quando o conteúdo chegar
2. O design não precise ser revisitado — só o conteúdo
3. O site continue funcional e bonito enquanto isso (nota 10/10 em design mantida)

## Decisão
Toda seção que depende de conteúdo real do cliente é implementada com o atributo HTML `hidden` e marcada com
comentários `<!-- PLACEHOLDER: ... -->` indicando exatamente o que precisa ser substituído.

**Padrão de marcação:**
```html
<!-- PLACEHOLDER: Descrição do que precisa ser substituído — remover hidden quando tiver dados reais -->
<div class="nome-da-classe" hidden>
  ...conteúdo placeholder...
</div>
```

**Para ativar uma seção:**
1. Substituir o conteúdo placeholder por dados reais
2. Remover o atributo `hidden`
3. Remover o comentário `<!-- PLACEHOLDER: ... -->`
4. Se houver links de navegação associados (ex: "Clientes" → `#vozes`), remover `hidden` deles também

## Consequências
- **NÃO** ativar seções com dados fictícios — isso é pior do que a ausência
- Os cards do Trello no board "Site Onda" refletem cada pendência individualmente
- Ver [[pendencias-feedback-cliente]] para a lista completa de itens pendentes
- Ao ativar uma seção, atualizar o Trello correspondente e esta memória técnica

## Bug encontrado e corrigido (2026-09-18): `hidden` não funcionava no menu mobile nem no rodapé
Os 3 links "Clientes" (`#vozes`) usam `hidden`, mas só o do `.nav-links` (nav desktop) ficava
realmente invisível. `.mm-links a { display: flex... }` e `.footer-col a { display: block... }`
têm a mesma especificidade do `[hidden]` do UA stylesheet — como regra de autor sempre vence UA
com especificidade igual, os dois links ficavam visíveis mesmo com `hidden` presente, apontando
pra uma seção (`#vozes`) que também está oculta (link morto visível pro usuário real).

Corrigido com `.mm-links a[hidden], .footer-col a[hidden] { display: none; }` em `css/styles.css`
— o atributo extra no seletor dá especificidade maior, então sempre vence independente de ordem
no arquivo. **Regra pra qualquer novo link com `hidden` nesses dois menus**: conferir com
DevTools (ou Playwright `offsetParent !== null`) que ele realmente sumiu — não confiar só no
atributo estar presente no HTML, porque o CSS destes menus historicamente seta `display`
diretamente no seletor `a`.

## Ligado a
- [[pendencias-feedback-cliente]]
