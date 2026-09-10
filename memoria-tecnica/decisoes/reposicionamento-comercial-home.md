---
tipo: decisao
data: 2026-09-10
status: Ativa
fonte: relatorio_implementacao_site_onda.docx (v1.0, 10/09/2026) — briefing do cliente
---

# Reposicionamento comercial do site (estúdio → software sob medida B2B)

## Contexto
O relatório de implementação do site (documento externo do cliente, v1.0) especifica um
reposicionamento: sair de "quem somos + tudo o que fazemos" para
**"o que resolvemos → prova → soluções → método → confiança → contato"**. A prioridade
declarada é **conversão e autoridade antes de redesign estético**, e o documento é explícito
em **preservar a identidade visual atual** ("Tropical Tech" / mar / Ceará) — nada de dark/neon
genérico de SaaS.

O site hoje é uma página única estática (`index.html`, sem framework, sem build — ver `AGENTS.md`).
O relatório pede arquitetura multi-página (`/solucoes/*`, `/projetos/*`, `/estudio`, `/contato`),
páginas de case no formato de miniestudo de negócio, e um formulário de contato confiável.

## Decisões

1. **Abordagem faseada, home primeiro.** A primeira entrega mexe **só no `index.html` atual**:
   hero comercial novo (P0-01), 7 serviços chapados → 4 soluções principais + complementares
   (P0-02), metodologia em 5 etapas de linguagem de cliente (P0-04). Sem criar rotas novas
   nem tocar na estrutura de arquivos nesta fase. A arquitetura multi-página e as páginas de
   case vêm depois, em nota/PR próprios.

2. **Formulário = serviço externo gratuito** (Formspree ou Web3Forms, free tier). Envia para
   e-mail, tem antispam, **não introduz backend próprio** — respeita a fronteira "site sem
   backend" do `AGENTS.md`. Não usar função serverless nesta fase.

3. **Identidade visual preservada.** O design system `docs/brand/DESIGN_SYSTEM.md` (Manrope,
   paleta Maré Clara, gradiente-assinatura, cores-assinatura por serviço) continua valendo.
   As mudanças são de **hierarquia, copy e prova**, não de estética.

4. **Nada inventado.** Métricas, depoimentos e logos entram só após validação com cliente —
   até lá, usar o padrão de placeholder oculto (ver [[hidden-placeholder-pattern]] e
   [[placeholder_structures]]). A copy inicial vem do Anexo (seção 10) do relatório.

5. **Brand line vira assinatura, não explicação.** "Software fluido, belo e impactante"
   permanece como assinatura de marca (as palavras rotativas do hero imersivo continuam),
   mas a **primeira mensagem de negócio** passa a ser explícita sobre software sob medida /
   ERP / SaaS / e-commerce / integrações e o público B2B.

## O que fica de fora desta nota (fases seguintes)
- Rotas `/solucoes/*` e `/projetos/*` + `sitemap.xml` multi-URL — nota própria quando a
  estrutura de arquivos mudar (R1).
- Configuração de e-mail corporativo `contato@onda.business` na Hostinger (fora do repo).
- Backlog completo P0/P1/P2 e critérios de aceite: ver artifact "Onda — Backlog do site".

## Rastreabilidade
Backlog derivado do relatório: seções 08 (backlog) e 09 (critérios de aceite). Overlap de SEO
(seção 07) com o artifact "Maré SEO" já entregue e com o WIP de JSON-LD já aplicado ao
`<head>` do `index.html` (troca `ProfessionalService` → `Organization`).
