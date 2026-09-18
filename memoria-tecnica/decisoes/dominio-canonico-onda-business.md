---
tipo: decisao
data: 2026-09-09
status: Concluída — domínio ao vivo com SSL válido desde antes de 2026-09-13 (confirmado por
  curl repetidas vezes em sessões posteriores; branch mesclada em main)
---

# Domínio canônico onda.business (substitui o vercel.app nas referências de SEO)

## Contexto
O site está publicado no deploy Vercel `onda-empresa.vercel.app` (confirmado no ar em 2026-09-09).
O domínio próprio `onda.business` foi registrado na Hostinger (ativo, expira em 2027-09-09,
**renovação automática desligada** — vale religar). Faltava decidir a forma canônica do domínio e
apontar o DNS para o deploy existente.

**Limite de execução:** um agente de IA sem acesso de browser e sem o projeto Vercel no scope do
CLI autenticado localmente (token do ambiente está no team "ufc", que não inclui o projeto da Onda)
não consegue nem adicionar o domínio no painel Vercel, nem editar a zona DNS no hPanel da Hostinger.
Essas duas etapas continuam manuais — ver pendências abaixo.

## Decisão
1. **`onda.business` (apex, sem `www`) é o domínio canônico.** Segue a convenção já usada pelo
   `vercel.app` (também sem `www`). `www.onda.business` deve ser configurado no Vercel como redirect
   301 para o apex, não como origem paralela.
2. **DNS continua gerenciado na Hostinger** (registros A/CNAME apontando para o Vercel), sem migrar
   nameservers para o Vercel — menos disruptivo, reversível registro a registro, e não depende de
   mexer em outros serviços eventualmente associados ao domínio (e-mail, etc.).
3. Todas as referências hardcoded de `https://onda-empresa.vercel.app` foram trocadas para
   `https://onda.business` em `index.html` (canonical, `og:url`, `og:image`, `twitter:image`,
   JSON-LD `@id`/`url`/`logo`/`image`), `sitemap.xml` (`<loc>`, `lastmod` atualizado) e `robots.txt`
   (linha `Sitemap:`). Branch `infra/dominio-onda-business`, ainda sem merge — ver pendências.

## Pendências (bloqueiam o merge)
- [ ] Adicionar `onda.business` (+ `www.onda.business` com redirect) em Vercel → projeto → Settings →
      Domains, na conta/team correta (não é o team "ufc" acessível pelo CLI local).
- [ ] Criar na Hostinger (hPanel → Domínios → onda.business → Gerenciar → DNS/Zona DNS) os registros
      que o próprio painel do Vercel exibir ao adicionar o domínio (A no apex, CNAME no `www`) —
      remover qualquer registro de parking page que a Hostinger tenha criado por padrão.
- [ ] Religar a "Renovação automática" do domínio na Hostinger (estava desligada na captura de tela
      de 2026-09-09).
- [ ] Só depois do Vercel reportar "Valid Configuration" + SSL emitido: dar merge nesta branch,
      conferir no navegador em desktop e mobile (Definition of Done do `AGENTS.md`).

## Consequências
- **Não fazer merge desta branch antes do domínio resolver com SSL válido** — senão o canonical/OG/
  JSON-LD em produção passam a apontar para um host que não resolve, o que é pior para SEO/social
  do que manter o `vercel.app` por mais alguns dias.
- Depois do merge, o `vercel.app` antigo deve continuar funcionando como alias (Vercel mantém o
  domínio de deploy ativo por padrão) — não há necessidade de redirect explícito dele para o domínio
  novo a menos que apareça necessidade futura.
