# VOLT · Página de vendas para personal trainer

Página modelo, feita do zero em HTML, CSS e JavaScript puro (sem frameworks nem bibliotecas; só as fontes vêm do Google Fonts). Basta abrir `index.html` no navegador.

```
personal-trainer/
├── index.html
└── assets/
    ├── css/style.css
    └── js/main.js
```

## Dobras (em ordem) e para que cada uma serve

| # | Dobra | Objetivo de venda | Interação / animação |
|---|-------|-------------------|----------------------|
| 1 | **Hero** | Promessa clara (resultado + prazo), CTA e prova social logo de cara | Título entrando linha a linha, kettlebell 3D que segue o mouse, cards flutuantes com batimento "ao vivo" |
| 2 | **Faixa (ticker)** | Reforçar especialidades e credenciais (CREF, anos de experiência) | Duas faixas cruzadas que aceleram com a rolagem |
| 3 | **Para quem é (dores)** | Identificação: o visitante se reconhece no problema | Checklist clicável que alimenta um medidor de "diagnóstico" |
| 4 | **Método VOLT** | Mostrar que existe um mecanismo, não só "treino" | Cards dos 4 pilares com destaque em verde que acompanha o mouse |
| 5 | **Como funciona** | Tirar a insegurança sobre o processo | Timeline que acende conforme a rolagem e anel de progresso fixo |
| 6 | **App / área do aluno** | Tornar a entrega tangível | Demo funcional: marcar séries, cronômetro de descanso, gráfico de evolução, check-in |
| 7 | **Resultados** | Prova com números | Contadores animados e troca de aluno com gráfico desenhado na hora |
| 8 | **Sobre o personal** | Autoridade e conexão pessoal | Retrato com moldura HUD e linha de scan |
| 9 | **Depoimentos** | Prova social | Dois carrosséis infinitos em sentidos opostos (pausam no hover) |
| 10 | **Diagnóstico (quiz)** | Microcompromisso e recomendação de plano | 3 perguntas → plano recomendado → rola até o plano e destaca |
| 11 | **Planos** | Oferta com ancoragem de preço | Alternância mensal / trimestral / semestral com preço animado e preço por dia |
| 12 | **Garantia** | Reverter o risco | Selo girando |
| 13 | **FAQ** | Quebrar objeções finais | Acordeão animado |
| 14 | **CTA final** | Urgência e escassez reais | Vagas preenchidas e contagem regressiva até domingo |
| — | **Extras** | Conversão contínua | Barra fixa no mobile, WhatsApp flutuante, barra de progresso de leitura, nav com indicador da seção atual |

Tudo respeita `prefers-reduced-motion`: com movimento reduzido, as animações são desligadas e o conteúdo aparece direto.

## Como personalizar para um cliente

- **Nome, marca e CREF**: procure por `VOLT`, `Bruno Castro` e `CREF 045872-G/SP` no `index.html`.
- **WhatsApp**: troque `5511900000000` (aparece no HTML e na constante `WA` do `main.js`).
- **Preços**: atributo `data-price` de cada `.plan` (valor mensal cheio). Os descontos ficam em `DISC` no `main.js`.
- **Foto do personal**: substitua o `<svg class="portrait-svg">` por `<img src="assets/img/personal.jpg" alt="...">` (o CSS já cobre `.portrait img`).
- **Resultados dos alunos**: array `CASES` no `main.js` (métricas e série do gráfico).
- **Exercícios da demo do app**: array `EX` no `main.js`.
- **Cor de destaque**: variável `--lime` no topo do `style.css`.

> Nomes, depoimentos e resultados são fictícios. Troque pelos dados reais do cliente antes de publicar e remova o aviso do rodapé.
