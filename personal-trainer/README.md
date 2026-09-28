# Método VOLT: página de vendas para personal trainer

Página de vendas de consultoria online para personal trainer. Fundo escuro (preto azulado + navy) com destaque em verde-limão.

Feita do zero em HTML, CSS e JavaScript puro, sem nenhuma biblioteca externa. A fonte (Geist, licença OFL) fica na pasta `assets/fonts`, então a página funciona offline.

Todo o conteúdo é fictício (nome, depoimentos, números e preços) e serve para ser trocado pelo do cliente.

## Como abrir

Abra o `index.html` no navegador ou sirva a pasta com qualquer servidor estático:

```bash
npx http-server personal-trainer
```

## Dobras

| # | Dobra | Função na venda | Interação / animação |
|---|-------|-----------------|----------------------|
| 1 | Hero | Promessa, CTA e prova social rápida | Entrada em sequência, celular com app animado, cards flutuantes com parallax no mouse |
| 2 | Faixas | Transição com os benefícios principais | Duas faixas cruzadas que aceleram com o scroll |
| 3 | Diagnóstico (dores) | Identificação com o problema | O visitante marca as frases e recebe um diagnóstico na hora |
| 4 | Manifesto | Quebra de crença | Texto que acende palavra por palavra conforme o scroll |
| 5 | Método (3 pilares) | Apresenta a solução | Cards que expandem e ficam verdes no hover/toque |
| 6 | Como funciona | Tira o medo do processo | Celular fixo que troca de tela a cada passo, linha de progresso |
| 7 | Treino sob medida | Mostra a personalização | Mapa muscular (frente e costas) que acende por dia da semana |
| 8 | Painel do coach | Prova de acompanhamento próximo | Dashboard clicável: filtros, lista de alunos e detalhe com gráfico |
| 9 | O que você recebe | Entregáveis | Bento grid com timer, gráfico de macros, chat digitando e calendário |
| 10 | Resultados | Prova social | Contadores, histórias arrastáveis e mensagens de alunos em loop |
| 11 | Sobre | Autoridade | Cartão do treinador em 3D com reflexo e scanner |
| 12 | Planos | Oferta | Três planos, destaque animado e barra de vagas |
| 13 | Garantia | Reversão de risco | Selo girando |
| 14 | FAQ | Quebra de objeções | Acordeão com altura animada |
| 15 | CTA final | Urgência | Texto gigante que desliza com o scroll e barra de vagas |

Extras: fundo que muda de tom entre as dobras, barra de progresso de leitura, menu com indicador da seção atual, cursor personalizado, botões magnéticos, botão flutuante de WhatsApp e CTA fixo no celular. Tudo respeita a preferência de movimento reduzido do sistema.

## O que trocar para um cliente

| O quê | Onde |
|-------|------|
| Nome, CREF, bio e formação | `index.html`, seções `#sobre`, rodapé e `.hero__side` |
| Número do WhatsApp | Procure por `wa.me/5511900000000` no `index.html` (3 ocorrências) |
| Links de checkout | `href="#checkout-mensal"`, `#checkout-trimestral` e `#checkout-semestral` |
| Preços | Seção `#planos` e o mini card `.dash-slots` do painel |
| Foto do treinador | Substitua o `<svg class="coach-card__figure">` por um `<img>` (há um comentário no local) |
| Depoimentos e resultados | Seção `#resultados` (cards `.story` e mensagens `.wa`) |
| Divisão de treino de exemplo | Array `DAYS` em `assets/js/main.js` |
| Alunos do painel | Array `STUDENTS` em `assets/js/main.js` |
| Cores | Variáveis no topo de `assets/css/style.css` (`--lime`, `--bg`, `--bg-navy`…) |

O mês da turma ("vagas de outubro") é calculado automaticamente: depois do dia 20 a página já mostra o mês seguinte.

## Estrutura

```
personal-trainer/
├── index.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── fonts/ (Geist + licença OFL)
```
