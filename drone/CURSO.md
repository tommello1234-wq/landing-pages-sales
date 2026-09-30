# Curso — Criando a landing page AERIS X do zero

Página de venda de um drone com 6 dobras, drone 3D que atravessa a página com o scroll, vídeo guiado pelo scroll e checkout onde o drone pousa.

Cada módulo tem: **objetivo**, **conceitos**, **passo a passo**, **prompt para o Claude** (para quem vai construir com IA) e **exercício**. No fim de cada módulo a página funciona.

Arquivos finais de referência: `index.html`, `styles.css`, `src/main.js`, `src/drone3d.js`, `media.js`.

---

## Módulo 0 — Conceito e direção (15 min)

**Objetivo:** decidir o que a página é antes de escrever código.

1. **Produto e marca:** um drone de cinema autônomo. A marca é fictícia (AERIS X) para não copiar ninguém.
2. **Referência visual:** fundo laranja vivo, sujeito em preto e branco, tipografia gigante em minúsculas, painéis de vidro e HUDs com números. Pegamos a *linguagem* da referência, não o layout.
3. **Ideia central:** um elemento que atravessa a página inteira. Aqui é o próprio drone, que decola no topo e pousa no checkout: *"Toda landing page precisa de um pouso."*
4. **As 6 dobras, cada uma com uma interação diferente:**

| # | Dobra | Interação principal | O que vende |
|---|-------|---------------------|-------------|
| 1 | Hero | Simulador de vento + drone segue o mouse | Estabilidade |
| 2 | Câmera | Vídeo FPV controlado pelo scroll | Qualidade de imagem, alcance |
| 3 | Anatomia | Vista explodida do drone | Engenharia, especificações |
| 4 | Sensores | Drone desvia do cursor | Segurança (não bate) |
| 5 | Galeria | Rolagem horizontal | Resultado real + prova social |
| 6 | Compra | Drone pousa, troca de cor ao vivo | Oferta, urgência, garantia |

5. **Paleta:** laranja `#ff4a17`, preto `#0b0b0c`, papel `#eceae4`, branco e um ciano de destaque `#2fd3ff`. As seções alternam fundo claro e escuro para dar ritmo.
6. **Tipografia:** Geist (títulos e texto) e Geist Mono (HUD, números, rótulos).

**Exercício:** escolher outro produto (fone, tênis, carro elétrico) e preencher a tabela acima.

---

## Módulo 1 — Gerando os assets com IA (20 min)

**Objetivo:** ter imagens e vídeo antes de montar a página.

Assets usados (Gravyx):

| Asset | Modelo | Custo aprox. |
|-------|--------|--------------|
| Piloto com óculos FPV (fundo laranja) + remoção de fundo | Nano Banana Pro 2K + remover fundo | 350 tokens |
| 6 fotos aéreas (4:5) | Nano Banana 2, 2K | 900 tokens |
| Vídeo FPV 7s 720p | Seedance 2.5 | 2.590 tokens |

**Dicas de prompt:**
- Imagem para recorte: *"isolado sobre fundo laranja sólido e uniforme, bordas nítidas, sem logos, sem texto"*.
- Fotos de galeria: *"fotografia aérea de drone vista de cima, composição minimalista, sem texto, sem marca d'água"*.
- Vídeo para scroll: *"uma única tomada contínua, sem cortes, sem texto, sem pessoas, câmera subindo"*. Vídeo com cortes fica feio quando é controlado pelo scroll.
- Seedance costuma bloquear prompts com marcas ou pessoas: prefira cenas genéricas.

**Organização:** todas as URLs ficam num único arquivo, `media.js`:

```js
window.AERIS_MEDIA = {
  pilot: "https://.../removebg.png",
  fpv:   "https://.../video.mp4",
  beach: "https://.../beach.jpeg",
  // ...
};
```

No HTML, cada imagem usa `data-media="beach"` e o JS preenche o `src`. Trocar um asset = trocar uma linha.

**Exercício:** gerar uma 7ª foto para a galeria e adicionar no `media.js`.

---

## Módulo 2 — Estrutura HTML e CSS (40 min)

**Objetivo:** a página inteira estática e bonita, **sem JavaScript**.

### 2.1 Esqueleto
```html
<canvas class="drone-canvas"></canvas>   <!-- drone 3D, fixo por cima de tudo -->
<header class="nav">…</header>
<main>
  <section class="s-hero"     id="voo">…</section>
  <section class="s-fpv"      id="fpv">…</section>
  <section class="s-anat"     id="anatomia">…</section>
  <section class="s-sense"    id="sensores">…</section>
  <section class="s-gal"      id="galeria">…</section>
  <section class="s-buy"      id="comprar">…</section>
</main>
<footer class="footer">…</footer>
```

### 2.2 Tokens de design
```css
:root{
  --orange:#ff4a17; --ink:#0b0b0c; --paper:#eceae4; --cyan:#2fd3ff;
  --font:"Geist",system-ui,sans-serif; --mono:"Geist Mono",monospace;
  --pad-x:clamp(20px,3vw,44px);
}
```
Regra de ouro: **nenhuma cor solta no CSS**, sempre `var(--...)`.

### 2.3 O hero (a parte mais trabalhosa de layout)
Tudo em `position:absolute` dentro de uma seção de `100vh`:
- painel de vidro no canto superior esquerdo (`backdrop-filter: blur()`);
- título gigante centralizado, com gradiente metálico no texto (`background-clip:text`) e a última letra em ciano;
- piloto recortado ancorado embaixo, atrás do título (`z-index`);
- pill "99,7%" no canto superior direito;
- marca + frase de impacto embaixo à esquerda, card com código de barras embaixo à direita.

### 2.4 Seções "palco"
As dobras 2 a 5 têm uma div interna de `height:100vh` (`.fpv-stage`, `.anat-stage`…). É ela que vai ficar presa na tela no Módulo 3.

### 2.5 Responsivo
No `@media (max-width:900px)`: esconder o menu de pílulas, simplificar o hero, empilhar o checkout em uma coluna.

**Prompt para o Claude:**
> Monte o HTML e CSS de uma landing page de drone com 6 seções (hero, câmera, anatomia, sensores, galeria horizontal, compra). Paleta laranja #ff4a17, preto e papel. Fonte Geist e Geist Mono. Hero no estilo editorial: painel de vidro com sliders, título gigante minúsculo, figura recortada atrás do título. Sem JavaScript ainda.

**Exercício:** mudar a paleta inteira trocando só os tokens.

---

## Módulo 3 — Scroll suave e seções presas (30 min)

**Objetivo:** a página ganha "peso" e as dobras ficam presas enquanto o conteúdo anima.

### 3.1 Bibliotecas
```bash
npm install gsap lenis three esbuild
```
- **Lenis:** scroll suave.
- **GSAP + ScrollTrigger:** liga animações ao scroll.
- **esbuild:** junta tudo num único `app.js` (`npm run build`).

### 3.2 Integração Lenis + ScrollTrigger
```js
const lenis = new Lenis({ lerp: .09 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
```

### 3.3 Pin (prender a seção)
```js
ScrollTrigger.create({
  trigger: '.s-anat', start: 'top top', end: '+=380%',
  pin: '.anat-stage', scrub: true,
  onUpdate: s => anatP = s.progress   // 0 → 1 enquanto está preso
});
```
**Conceito-chave:** cada seção vira um número de 0 a 1 (`progress`). Todas as animações da seção são funções desse número.

### 3.4 Galeria horizontal
Mesmo pin, mas o `end` é a largura da trilha, e o progresso vira `translateX`:
```js
track.style.transform = `translateX(${-galP * (track.scrollWidth - innerWidth)}px)`;
```

### 3.5 Textos palavra por palavra
Quebrar o título em `<span>` por palavra e animar `yPercent: 110 → 0` com `stagger`.

**Exercício:** mudar a duração de uma seção presa (`+=380%` → `+=200%`) e sentir a diferença.

---

## Módulo 4 — Vídeo controlado pelo scroll (30 min)

**Objetivo:** o scroll vira o controle do drone em primeira pessoa.

```js
const vp = clamp((fpvP - .12) / .76, 0, 1);   // parte do progresso usada pelo vídeo
video.currentTime = vp * video.duration;
```

- O vídeo fica `muted playsinline preload="auto"` e **nunca dá play**: só mudamos o `currentTime`.
- O HUD de voo (altitude, velocidade, bússola, bateria, timecode) usa o **mesmo `vp`**. Ex.: `altitude = 2 + vp^1.3 * 478`.
- Capítulos de texto aparecem em janelas do progresso (`data-from="0.14" data-to="0.34"`).

**Dica de qualidade:** re-encodar o vídeo com todos os quadros-chave deixa o scrub liso:
```bash
ffmpeg -i fpv.mp4 -an -c:v libx264 -g 1 -crf 22 fpv-scrub.mp4
```
(o script `tools/localize-media.sh` faz isso).

**Exercício:** adicionar um 5º capítulo de texto.

---

## Módulo 5 — O drone 3D do zero (60 min) ★ aula principal

**Objetivo:** construir o drone só com código, usando Three.js. Arquivo: `src/drone3d.js`.

### 5.1 Cena básica
```js
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
const scene = new THREE.Scene();
scene.environment = pmrem.fromScene(new RoomEnvironment()).texture; // reflexos de estúdio
const camera = new THREE.PerspectiveCamera(28, w / h, .01, 200);
```
`alpha: true` deixa o canvas transparente: o drone flutua por cima do HTML.

### 5.2 Hierarquia (a ideia mais importante)
```
stage  → posição na tela, tamanho, inclinação da vista
 └ craft → atitude de voo (girar, inclinar, flutuar, pirueta)
    └ pivot → deslocamento (usado para dar zoom na lente)
       └ peças: corpo, carenagem, bateria, 4 braços, gimbal, câmera
```
Cada nível cuida de uma coisa. Mexer num não bagunça o outro.

### 5.3 Modelando cada peça
| Peça | Técnica |
|------|---------|
| Corpo | Desenha o contorno visto de cima (superelipse mais fina na frente) → `ExtrudeGeometry` com bevel = "seixo" arredondado |
| Faixa laranja | O mesmo contorno, um pouco maior e bem fino |
| Braços | `CylinderGeometry` afunilado, achatado, apontado com `lookAt(motor)` |
| Motores | `LatheGeometry`: um perfil de lado girado 360° |
| Hélices | Contorno de uma pá → extrude fininho → inclinado; 2 pás por motor |
| Câmera | `RoundedBoxGeometry` + cilindro (tubo da lente) + vidro |

### 5.4 Materiais
`MeshPhysicalMaterial` com `clearcoat` (verniz), fibra de carbono com textura xadrez desenhada num `<canvas>`, metal nos motores e **iridescência** no vidro da lente (aquele reflexo colorido).

### 5.5 Animações
- **Hélices:** giram rápido + um disco semitransparente = efeito de desfoque real.
- **Flutuar:** `sin(tempo)` na altura e em pequenas inclinações.
- **Vista explodida:** cada peça guarda sua posição "casa" e uma direção. `posição = casa + direção × explode` (explode vai de 0 a 1).
- **Troca de cor:** a cor da carenagem se aproxima da cor alvo a cada quadro (`color.lerp`).

**Prompt para o Claude:**
> Crie em Three.js um drone quadricóptero procedural (sem arquivo 3D): corpo extrudado arredondado, 4 braços de carbono, motores feitos com LatheGeometry, hélices de 2 pás com disco de desfoque, gimbal com câmera e lente iridescente. Separe em grupos stage/craft/pivot e exponha uma API setState({x, y, s, yaw, tilt, explode, prop}).

**Exercício:** adicionar uma luz LED embaixo do corpo que pisca.

---

## Módulo 6 — O diretor: o drone viajando pela página (40 min)

**Objetivo:** fazer o drone atravessar as 6 dobras.

### 6.1 Keyframes presos ao scroll
```js
{ at: ['hero', 0],   x: .2, y: -.12, s: .36, yaw: -.6 },
{ at: ['fpv', .13],  s: 12, lens: 1 },            // mergulha na lente
{ at: ['anat', .6],  explode: 1, yaw: 2.2 },      // desmontado
{ at: ['gal', 1],    x: .44, y: .41, s: .07 },    // pequeno na linha de progresso
{ at: ['land', 1],   anchor: 'pad', lift: 0, prop: 0 }  // pousado, hélices paradas
```
`at` = (seção, progresso). O código converte cada um numa posição de scroll em pixels.

### 6.2 O loop (a cada quadro)
1. Acha os dois keyframes em volta do scroll atual.
2. Mistura os dois (com easing).
3. Soma as interações: mouse no hero, vento, desvio do cursor.
4. **Suaviza como uma mola:** `atual = lerp(atual, alvo, 1 - exp(-dt*7))`. É isso que dá peso.
5. Inclina o drone de acordo com a velocidade (ele "se inclina na curva").

> Dica: o tamanho (`s`) se mistura em escala logarítmica. Senão, ao sair do zoom gigante ele demora a encolher.

### 6.3 Os três truques
- **Entrar na lente:** a lente tem um material que "fura" o canvas (`CustomBlending` com fatores zero) e deixa o pixel transparente. O vídeo que está atrás no HTML aparece dentro da lente.
- **Linhas da anatomia:** `objeto.getWorldPosition()` + `project(camera)` convertem a peça 3D em pixel da tela. As linhas SVG seguem as peças enquanto elas se movem.
- **Pouso:** o último keyframe lê a posição da `#pad` no HTML (`getBoundingClientRect`) a cada quadro. A plataforma é desenhada no mesmo canvas 3D, com a mesma inclinação, então os pés encostam exatamente nela.

**Exercício:** criar um keyframe novo onde o drone dá uma volta completa no meio da galeria.

---

## Módulo 7 — Interações de venda e acabamento (30 min)

**Objetivo:** transformar a experiência em conversão.

- **Hero:** sliders de vento/rajadas/altitude movem partículas num `<canvas>` e balançam o drone; o "99,7%" quase não muda (prova visual de estabilidade). Modos Cine/Normal/Sport trocam a cor dos LEDs. Clique = pirueta.
- **Sensores:** se o cursor chega a menos de 260 px, o drone é empurrado na direção oposta; o radar desenha a linha até o "obstáculo" e conta os desvios.
- **Checkout:** kits com preço animado, parcelas e Pix calculados, contagem regressiva real, barra de estoque, botão magnético e cores que pintam o drone 3D ao vivo.
- **Acabamento:** preloader de "checagem pré-voo", cursor customizado, grão de filme, nav que troca de cor em seção clara/escura, rodapé com a marca gigante.

**Checklist antes de publicar:**
- [ ] Trocar depoimentos e números fictícios pelos reais
- [ ] Rodar `tools/localize-media.sh` (mídias locais + vídeo com todos os quadros-chave)
- [ ] `npm run build`
- [ ] Testar no celular
- [ ] Deploy (Vercel: Root Directory = `drone`)

---

## Sugestão de gravação

| Aula | Módulos | Duração |
|------|---------|---------|
| 1 | 0 + 1 (conceito e assets) | ~35 min |
| 2 | 2 (HTML/CSS) | ~40 min |
| 3 | 3 + 4 (scroll e vídeo) | ~60 min |
| 4 | 5 (drone 3D) | ~60 min |
| 5 | 6 + 7 (diretor, interações e deploy) | ~70 min |

Recomendo um branch do Git por aula (`aula-01` … `aula-05`), para o aluno baixar exatamente o ponto em que a aula começa.
