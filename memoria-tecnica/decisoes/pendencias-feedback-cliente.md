---
tipo: decisao
data: 2026-08-01
status: Ativa
---

# Pendências de conteúdo — Feedback do cliente (ago/2026)

Origem: `Feedback_Cliente_Onda.pdf` (nota 8.4/10). Todas as pendências estão espelhadas no Trello (board "Site Onda").

## Lista de pendências

### 🔴 Prioridade Alta

| # | Seção | O que falta | Arquivo | Linha aprox. | Trello |
|---|---|---|---|---|---|
| 1 | `#estudio` · `.studio-stats` | Números reais: projetos, empresas, anos | `index.html` | ~315 | ✅ Concluído |
| 2 | `#vozes` · Depoimentos | Nomes, cargos, fotos e textos reais | `index.html` | ~557 | Card pendente |
| 3 | `#vozes` · Links nav | Remover `hidden` dos 3 links "Clientes" (L67, L90, L622) | `index.html` | L67,90,622 | Card pendente |

### 🟡 Prioridade Média

| # | Seção | O que falta | Arquivo | Linha aprox. | Trello |
|---|---|---|---|---|---|
| 4 | `#estudio` · `.studio-team` | Fotos e nomes da equipe/fundadores | `index.html` | ~332 | Card pendente |
| 5 | `#faq` | Validar/ajustar respostas com dados reais | `index.html` | ~487 | ✅ Concluído (2026-09-18) |

### 🟢 Prioridade Baixa

| # | Seção | O que falta | Arquivo | Linha aprox. | Trello |
|---|---|---|---|---|---|
| 6 | `.proj-result` (×4) | Métricas reais de resultado por projeto | `index.html` | ~356,375,393,413 | Card pendente |

## Item 5 — como foi resolvido (2026-09-18)
Nenhuma das 5 respostas do FAQ continha dado fabricado (eram descrições de processo/política,
genéricas por natureza). Duas foram reforçadas com evidência real já publicada nos cases do
site — sem inventar nada, só citando o que já existia: "O código e os dados ficam com o
cliente?" passou a citar que 3 dos 5 cases documentados entregam na conta de hospedagem do
próprio cliente (Vercel/Coolify); "Vocês integram com sistemas existentes?" passou a citar os
gateways/APIs reais já integrados (Stripe no Melvin, Mercado Pago com HMAC na Confidencial
Calçados, DeepL na Heliene). As outras 3 (projetos existentes, prazo/orçamento, manutenção) não
tinham como ganhar um exemplo real sem inventar um caso que não existe — mantidas como estavam.

## Como ativar
Ver [[hidden-placeholder-pattern]] para o procedimento padrão.

## Ligado a
- [[hidden-placeholder-pattern]]
