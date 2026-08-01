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

## Ligado a
- [[pendencias-feedback-cliente]]
