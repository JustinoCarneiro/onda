# Estruturas HTML de Placeholders

Como removemos o conteúdo fictício da produção para evitar indexação/problemas, guardamos aqui
a estrutura HTML que deve ser usada quando o conteúdo real chegar.

## Equipe (.studio-team > .team-grid)
```html
<div class="team-member">
  <div class="team-photo"><img src="assets/img/team-nome.webp" alt="Nome" width="120" height="120" loading="lazy" decoding="async" /></div>
  <b>Nome Sobrenome</b>
  <span data-pt="Co-fundador · Engenharia" data-en="Co-founder · Engineering">Co-fundador · Engenharia</span>
</div>
```

## Depoimentos (#vozes > .tst-grid)
```html
<article class="tst feature reveal">
  <div class="tst-mark">”</div>
  <p class="tst-quote" data-pt="Texto..." data-en="Text...">Texto...</p>
  <div class="tst-who">
    <span class="tst-av"><image-slot id="tst-1" placeholder="Foto"></image-slot></span>
    <div><b>Nome da Pessoa</b><span data-pt="Cargo" data-en="Title">Cargo</span></div>
  </div>
</article>
```

## FAQ (#faq > .faq-grid)
```html
<details class="faq-item reveal">
  <summary data-pt="Pergunta?" data-en="Question?">Pergunta?</summary>
  <div class="faq-body">
    <p data-pt="Resposta..." data-en="Answer...">Resposta...</p>
  </div>
</details>
```

## Cards de Projeto (.proj-result)
```html
<span class="proj-result" data-pt="↑ XX% de métrica" data-en="↑ XX% metric">↑ XX% de métrica</span>
```
