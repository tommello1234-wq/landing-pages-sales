# Método VOLT — Página de vendas para Personal Trainer

Landing page de alta conversão para consultoria online de personal trainer, com visual dark e destaque em verde-limão, cheia de animações e interações. É feita só com HTML, CSS e JavaScript puro, sem nenhuma biblioteca ou dependência externa (as fontes ficam dentro do projeto).

## Como abrir

Abra o `index.html` no navegador ou sirva a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Estrutura

```
index.html            → marcação de todas as dobras
assets/css/style.css  → design system (tokens), layout, animações e responsivo
assets/css/fonts.css  → @font-face das fontes auto-hospedadas
assets/js/main.js     → interações (vanilla JS)
assets/fonts/         → Unbounded (títulos) e Manrope (texto), licença OFL
```

## Dobras (na ordem)

| # | Dobra | Objetivo | Interação / animação |
|---|-------|----------|----------------------|
| 01 | **Hero** | Promessa + CTA + prova social | Preloader, entrada palavra a palavra, mockup do app com parallax/tilt no mouse, cards flutuantes, ECG e barras animadas |
| — | **Faixa marquee** | Objetivos atendidos | Loop infinito inclinado |
| 02 | **Números** | Autoridade rápida | Contadores animados |
| 03 | **Identificação (dores)** | Fazer o lead se reconhecer | Checklist clicável com barra e mensagens dinâmicas |
| — | **Manifesto** | Virada de chave (quebra de objeção) | Texto que acende palavra por palavra no scroll |
| 04 | **Método (3 pilares)** | Mostrar o mecanismo único | O destaque verde segue o hover |
| 05 | **Para quem é (objetivos)** | Personalização por objetivo | Abas que trocam conteúdo e a semana de treino |
| 06 | **Como funciona** | Reduzir fricção (passo a passo) | Linha do tempo que se preenche com o scroll |
| 07 | **App / Dashboard** | Tangibilizar o acompanhamento | Tablet com entrada 3D no scroll, 4 abas navegáveis, check-ins clicáveis, gráfico com tooltip |
| 08 | **Resultados** | Prova com números | Carrossel arrastável + setas, sparklines desenhadas |
| 09 | **Depoimentos** | Prova social em volume | Duas faixas infinitas em sentidos opostos (pausam no hover) |
| 10 | **Sobre o personal** | Autoridade e conexão | Retrato com tilt, credenciais, texto vertical decorativo |
| 11 | **Planos** | Oferta | Alternância mensal/trimestral/semestral com preços animados, bônus e formas de pagamento |
| 12 | **Garantia** | Reverter o risco | Selo giratório de 7 dias |
| 13 | **FAQ** | Quebrar objeções finais | Acordeão animado (um aberto por vez) |
| 14 | **CTA final** | Urgência + escassez | Contagem regressiva real, barra de vagas, anéis pulsantes |
| — | **Rodapé + WhatsApp flutuante** | Contato | Botão que expande no hover |

Extras globais: header com pílula deslizante e link ativo por seção, que se esconde ao rolar para baixo; barra de progresso de leitura; brilho que segue o cursor; efeito spotlight nos cards; botões magnéticos; menu mobile em tela cheia; suporte a `prefers-reduced-motion`.

## Personalização rápida

- **Cores**: variáveis em `:root` no topo do `style.css` (`--lime`, `--bg`, `--navy`…).
- **Foto do personal**: na seção `#sobre`, troque o `.portrait__art` por `<img src="..." alt="...">`.
- **Preços**: atributos `data-m`, `data-t` e `data-s` em cada `.plan` (valor mensal de cada período).
- **Objetivos, check-ins e gráfico**: objetos `GOALS`, `CHECKINS` e `chartData` no `main.js`.
- **Links de checkout/WhatsApp**: os botões apontam para `#finalizar` ou `#`. Troque pelos links reais.
- **Contagem regressiva**: por padrão termina no próximo domingo às 23:59 (`main.js`, seção Countdown).

> Nomes, números e depoimentos são fictícios, usados só como exemplo.
