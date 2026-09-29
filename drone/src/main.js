import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Drone3D, SPAN, FOOT } from './drone3d.js';

gsap.registerPlugin(ScrollTrigger);
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const fmt = (n, d = 0) => n.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });
const isTouch = matchMedia('(hover:none),(pointer:coarse)').matches;
const mobile = () => innerWidth < 900;

// ---------- mídias ----------
const MEDIA = window.AERIS_MEDIA || {};
$$('[data-media]').forEach(el => { const u = MEDIA[el.dataset.media]; if (u) el.src = u; });

// ---------- barcode ----------
$$('[data-barcode]').forEach(svg => {
  let x = 0, seed = 7, out = '';
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  while (x < 250) { const w = 1 + Math.floor(rnd() * 3); if (rnd() > .35) out += `<rect x="${x}" y="${rnd() > .8 ? 14 : 0}" width="${w}" height="40"/>`; x += w + 1; }
  svg.setAttribute('viewBox', '0 0 250 40'); svg.setAttribute('preserveAspectRatio', 'none'); svg.innerHTML = out;
});

// ---------- split words ----------
$$('.split-words').forEach(el => {
  const walk = n => [...n.childNodes].forEach(c => {
    if (c.nodeType === 3) {
      const f = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach(w => { if (!w) return; if (/^\s+$/.test(w)) f.append(' '); else { const o = document.createElement('span'); o.className = 'w'; o.innerHTML = `<span>${w}</span>`; f.append(o); } });
      c.replaceWith(f);
    } else walk(c);
  });
  walk(el);
});

// ---------- scroll suave ----------
const lenis = new Lenis({ lerp: .09, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
lenis.stop();
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const t = $(a.getAttribute('href')); if (t) { e.preventDefault(); lenis.scrollTo(t, { duration: 1.8 }); } }));

// ---------- drone 3D ----------
let drone = null;
try { drone = new Drone3D($('.drone-canvas')); } catch (e) { console.warn('WebGL indisponível', e); $('.drone-canvas').remove(); }
addEventListener('resize', () => { drone && drone.resize(); });

// ---------- mouse ----------
const mouse = { x: innerWidth / 2, y: innerHeight / 2, nx: 0, ny: 0, active: false };
addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.nx = e.clientX / innerWidth * 2 - 1; mouse.ny = e.clientY / innerHeight * 2 - 1; mouse.active = true; });

// cursor
const cur = $('.cursor');
if (!isTouch && cur) {
  document.documentElement.classList.add('has-cursor');
  const dot = $('.cursor-dot'), ring = $('.cursor-ring'), label = $('.cursor-label');
  let rx = mouse.x, ry = mouse.y;
  gsap.ticker.add(() => { rx = lerp(rx, mouse.x, .18); ry = lerp(ry, mouse.y, .18); dot.style.transform = `translate(${mouse.x}px,${mouse.y}px)`; ring.style.transform = `translate(${rx}px,${ry}px)`; });
  addEventListener('pointerover', e => { const t = e.target.closest('[data-cursor]'); if (t) { label.textContent = t.dataset.cursor; cur.classList.add('is-label'); } else cur.classList.remove('is-label'); });
  addEventListener('pointerdown', () => cur.classList.add('is-down'));
  addEventListener('pointerup', () => cur.classList.remove('is-down'));
}
// botões magnéticos
$$('.magnetic').forEach(el => {
  el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .35, duration: .4 }); });
  el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1,.4)' }));
});

// =========================================================
// 01 · HERO — simulador de vento
// =========================================================
const sim = { wind: 38, gust: 40, alt: 120, paused: false, mode: 'cine' };
const MODES = { cine: { led: '#ff4a17', agility: .6 }, normal: { led: '#2fd3ff', agility: 1 }, sport: { led: '#ff2d55', agility: 1.7 } };
$$('.slider input').forEach(inp => {
  const upd = () => {
    const k = inp.dataset.key, v = +inp.value;
    sim[k] = v;
    inp.style.setProperty('--p', ((v - inp.min) / (inp.max - inp.min) * 100) + '%');
    $(`[data-out="${k}"]`).textContent = k === 'wind' ? `${v} km/h` : k === 'gust' ? `${v}%` : `${v} m`;
  };
  inp.addEventListener('input', upd); upd();
});
$('.panel-pause').addEventListener('click', e => { sim.paused = !sim.paused; e.currentTarget.setAttribute('aria-pressed', sim.paused); });
$$('.modes button').forEach(b => b.addEventListener('click', () => {
  $$('.modes button').forEach(x => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-checked', x === b); });
  sim.mode = b.dataset.mode; drone && drone.setLed(MODES[sim.mode].led);
  $('.osd-mode').textContent = sim.mode.toUpperCase();
}));
$('.s-hero').addEventListener('click', e => { if (!e.target.closest('.hero-panel,a,button') && drone) drone.doFlip(); });

// partículas de vento/chuva
const wc = $('.wind-canvas'), wx = wc.getContext('2d');
let streaks = [];
function sizeWind() { const r = wc.getBoundingClientRect(), d = Math.min(devicePixelRatio, 2); wc.width = r.width * d; wc.height = r.height * d; wx.setTransform(d, 0, 0, d, 0, 0); streaks = Array.from({ length: 140 }, () => ({ x: Math.random() * r.width, y: Math.random() * r.height, z: Math.random() })); }
sizeWind(); addEventListener('resize', sizeWind);
let heroVisible = true, gustV = 0;
function drawWind(dt) {
  if (!heroVisible) return;
  const w = wc.clientWidth, h = wc.clientHeight;
  wx.clearRect(0, 0, w, h);
  if (sim.paused) dt = 0;
  gustV = lerp(gustV, (Math.sin(performance.now() / 700) * .5 + .5) * sim.gust / 100, .05);
  const sp = (sim.wind / 90) * (1 + gustV);
  const ang = -.25 - sp * .9;
  wx.lineCap = 'round';
  for (const s of streaks) {
    const v = (220 + s.z * 700) * (.25 + sp * 1.6);
    s.x += Math.cos(ang + Math.PI / 2) * -v * dt * Math.sin(-ang) * 2 + v * dt * sp;
    s.y += v * dt * .9;
    if (s.y > h + 40 || s.x > w + 60) { s.y = -40; s.x = Math.random() * (w + 200) - 200; }
    const len = 14 + s.z * 40 * (.4 + sp);
    wx.strokeStyle = `rgba(255,255,255,${.12 + s.z * .35})`;
    wx.lineWidth = .6 + s.z * 1.2;
    wx.beginPath(); wx.moveTo(s.x, s.y); wx.lineTo(s.x - sp * len * 1.2, s.y - len * .9); wx.stroke();
  }
}
const statNum = $('.stat-num');

// =========================================================
// 02 · FPV — vídeo guiado pelo scroll
// =========================================================
const video = $('.fpv-video'), fpvView = $('.fpv-view');
let vDur = 7;
video.addEventListener('loadedmetadata', () => { vDur = video.duration || 7; });
video.addEventListener('error', () => fpvView.classList.add('no-video'));
setTimeout(() => { if (video.readyState < 1) fpvView.classList.add('no-video'); }, 9000);
// tenta baixar o vídeo inteiro (scrub mais suave), senão usa o src direto
if (MEDIA.fpv) fetch(MEDIA.fpv).then(r => r.ok ? r.blob() : Promise.reject()).then(b => { const t = video.currentTime; video.src = URL.createObjectURL(b); video.currentTime = t; }).catch(() => {});
const tape = $('.compass-tape');
const dirs = { 0: 'N', 45: 'NE', 90: 'L', 135: 'SE', 180: 'S', 225: 'SO', 270: 'O', 315: 'NO' };
let tapeHTML = '';
for (let i = 0; i < 3; i++) for (let d = 0; d < 360; d += 15) tapeHTML += `<span class="${d % 45 ? '' : 'major'}">${dirs[d] || d}</span>`;
tape.innerHTML = tapeHTML;
const chapters = $$('.chapter');
let fpvP = 0, vTarget = 0;

// =========================================================
// 03 · ANATOMIA
// =========================================================
const callouts = $$('.callout');
const svgLines = $('.anat-lines');
svgLines.innerHTML = callouts.map(() => '<path/><circle r="4"/><circle class="ring" r="9"/>').join('');
let anatP = 0;

// =========================================================
// 04 · SENSORES
// =========================================================
const sc = $('.sense-canvas'), sx = sc.getContext('2d');
function sizeSense() { const d = Math.min(devicePixelRatio, 2); sc.width = sc.clientWidth * d; sc.height = sc.clientHeight * d; sx.setTransform(d, 0, 0, d, 0, 0); }
sizeSense(); addEventListener('resize', sizeSense);
const dodge = { x: 0, y: 0, vx: 0, vy: 0, count: 0, alert: false };
let senseActive = false, touchObs = null;
$('.s-sense').addEventListener('pointerdown', e => { if (isTouch) touchObs = { x: e.clientX, y: e.clientY, t: 0 }; });
function noise(x, y) { return Math.sin(x * 1.3 + y * .7) * .5 + Math.sin(x * .37 - y * 1.1 + 2) * .7 + Math.sin(x * 2.1 + y * 2.7) * .2; }
function drawSense(dronePos) {
  const w = sc.clientWidth, h = sc.clientHeight, t = performance.now() / 1000;
  sx.clearRect(0, 0, w, h);
  // terreno LiDAR
  const rows = 34, cols = 70, scan = (t * .25) % 1;
  for (let r = 0; r < rows; r++) {
    const z = r / rows, py = h * .45 + Math.pow(z, 1.6) * h * .62;
    const spread = .5 + z * 1.6;
    const near = 1 - Math.min(1, Math.abs(z - scan) * 8);
    for (let c = 0; c < cols; c++) {
      const u = c / (cols - 1) - .5;
      const x = w / 2 + u * w * spread;
      const y = py - noise(u * 8, z * 6 + t * .15) * 26 * (1 - z * .3);
      const a = .08 + z * .3 + near * .6;
      sx.fillStyle = near > .1 ? `rgba(255,${120 - near * 60},${60 - near * 40},${a})` : `rgba(47,211,255,${a * .7})`;
      sx.fillRect(x, y, 1.4 + z * 1.2, 1.4 + z * 1.2);
    }
  }
  if (!dronePos) return;
  const { x: dx, y: dy } = dronePos;
  const top = sc.getBoundingClientRect().top;
  const cy = dy - top;
  // anéis de proximidade
  for (let i = 1; i <= 4; i++) {
    sx.strokeStyle = `rgba(255,255,255,${.14 - i * .02})`; sx.lineWidth = 1;
    sx.beginPath(); sx.arc(dx, cy, 70 * i + Math.sin(t * 2 + i) * 3, 0, Math.PI * 2); sx.stroke();
  }
  // varredura
  const sa = t * 2.2;
  const g = sx.createConicGradient ? sx.createConicGradient(sa, dx, cy) : null;
  if (g) { g.addColorStop(0, 'rgba(255,74,23,.28)'); g.addColorStop(.12, 'rgba(255,74,23,0)'); g.addColorStop(1, 'rgba(255,74,23,0)'); sx.fillStyle = g; sx.beginPath(); sx.arc(dx, cy, 290, 0, Math.PI * 2); sx.fill(); }
  // obstáculo
  const ob = isTouch ? touchObs : (mouse.active ? { x: mouse.x, y: mouse.y } : null);
  if (ob) {
    const oy = ob.y - top, dist = Math.hypot(ob.x - dx, oy - cy);
    const close = dist < 260;
    sx.setLineDash([4, 6]); sx.strokeStyle = close ? 'rgba(255,74,23,.9)' : 'rgba(255,255,255,.35)';
    sx.beginPath(); sx.moveTo(dx, cy); sx.lineTo(ob.x, oy); sx.stroke(); sx.setLineDash([]);
    sx.strokeStyle = close ? '#ff4a17' : 'rgba(255,255,255,.6)'; sx.strokeRect(ob.x - 14, oy - 14, 28, 28);
    if (close) { const a = Math.atan2(oy - cy, ob.x - dx); sx.strokeStyle = '#ff4a17'; sx.lineWidth = 4; sx.beginPath(); sx.arc(dx, cy, 120, a - .5, a + .5); sx.stroke(); sx.lineWidth = 1; }
    sx.fillStyle = '#fff'; sx.font = '11px "Geist Mono", monospace';
    sx.fillText(`${fmt(dist / 40, 1)} m`, ob.x + 20, oy - 18);
  }
}

// =========================================================
// 05 · GALERIA / 06 · COMPRA
// =========================================================
const track = $('.gal-track');
let galP = 0;
const cardImgs = $$('.gc-img img');
const mq = $('.mq-track');
let mqX = 0;

$$('.sw').forEach(b => b.addEventListener('click', () => {
  $$('.sw').forEach(x => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-checked', x === b); });
  drone && drone.setColor(b.dataset.color); $('.cta-color').textContent = b.dataset.name;
}));
$$('.kit').forEach(b => b.addEventListener('click', () => {
  $$('.kit').forEach(x => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-checked', x === b); });
  const p = +b.dataset.price, o = { v: parseFloat($('.pr-inst').textContent.replace(/\./g, '').replace(',', '.')) };
  gsap.to(o, { v: p / 12, duration: .8, ease: 'power3.out', onUpdate: () => { $('.pr-inst').textContent = fmt(o.v, 2); } });
  $('.pr-pix').textContent = fmt(p * .95, 2); $('.cta-kit').textContent = b.dataset.name;
}));
// contagem regressiva (fim do lote: próximo domingo 23:59)
const end = new Date(); end.setDate(end.getDate() + ((7 - end.getDay()) % 7 || 7)); end.setHours(23, 59, 59, 0);
function tick() { let s = Math.max(0, (end - Date.now()) / 1000); const v = { d: s / 86400 | 0, h: s % 86400 / 3600 | 0, m: s % 3600 / 60 | 0, s: s % 60 | 0 }; for (const k in v) $(`[data-cd="${k}"]`).textContent = String(v[k]).padStart(2, '0'); }
tick(); setInterval(tick, 1000);

// =========================================================
// SCROLL TRIGGERS
// =========================================================
const ST = {};
ST.hero = ScrollTrigger.create({ trigger: '.s-hero', start: 'top top', end: 'bottom top', onToggle: s => heroVisible = s.isActive });
ST.fpv = ScrollTrigger.create({ trigger: '.s-fpv', start: 'top top', end: '+=520%', pin: '.fpv-stage', scrub: true, onUpdate: s => fpvP = s.progress });
ST.anat = ScrollTrigger.create({ trigger: '.s-anat', start: 'top top', end: '+=380%', pin: '.anat-stage', scrub: true, onUpdate: s => anatP = s.progress });
ST.sense = ScrollTrigger.create({ trigger: '.s-sense', start: 'top top', end: '+=120%', pin: '.sense-stage', onToggle: s => senseActive = s.isActive });
ST.gal = ScrollTrigger.create({ trigger: '.s-gal', start: 'top top', end: () => '+=' + Math.max(1, track.scrollWidth - innerWidth), pin: '.gal-stage', scrub: true, invalidateOnRefresh: true, onUpdate: s => galP = s.progress });
ST.land = ScrollTrigger.create({ trigger: '#pad', start: 'center bottom', end: 'center 58%' });
ST.all = ScrollTrigger.create({ start: 0, end: 'max' });

// temas de navegação
$$('[data-theme]').forEach(sec => ScrollTrigger.create({ trigger: sec, start: 'top 60px', end: 'bottom 60px', onToggle: s => { if (s.isActive) { document.body.classList.toggle('theme-light', sec.dataset.theme === 'light'); document.body.classList.toggle('theme-dark', sec.dataset.theme === 'dark'); } } }));
$$('[data-section]').forEach(sec => ScrollTrigger.create({ trigger: sec, start: 'top center', end: 'bottom center', onToggle: s => s.isActive && $$('[data-nav]').forEach(a => a.classList.toggle('is-active', a.dataset.nav === sec.dataset.section)) }));

// reveals
$$('.split-words').forEach(el => gsap.from($$('.w>span', el), { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: .05, scrollTrigger: { trigger: el, start: 'top 85%' } }));
$$('[data-count]').forEach(el => ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => gsap.to({ v: 0 }, { v: +el.dataset.count, duration: 1.6, ease: 'power3.out', onUpdate() { el.textContent = Math.round(this.targets()[0].v); } }) }));
ScrollTrigger.create({ trigger: '.stock', start: 'top 90%', once: true, onEnter: () => $('.stock').classList.add('is-in') });
gsap.from('.ft-word span', { yPercent: 100, duration: 1.2, ease: 'expo.out', stagger: .06, scrollTrigger: { trigger: '.footer', start: 'top 70%' } });

// =========================================================
// DIRETOR DO DRONE — keyframes presos ao scroll
// =========================================================
// x,y: fração da viewport a partir do centro · s: largura (fração de min(vw, 1.5vh))
const KF = () => {
  const m = mobile();
  return [
    { at: ['hero', 0], x: m ? .18 : .2, y: m ? -.1 : -.12, s: m ? .62 : .36, yaw: -.6, tilt: .42, pitch: .05, prop: 1 },
    { at: ['hero', .6], x: .06, y: .05, s: m ? .6 : .3, yaw: -.25, tilt: .3 },
    { at: ['fpv', 0], x: 0, y: 0, s: m ? .75 : .38, yaw: 0, tilt: .06, pitch: 0, lens: 0 },
    { at: ['fpv', .05], s: m ? 1.2 : .6, lens: 1 },
    { at: ['fpv', .13], s: m ? 24 : 12, lens: 1 },
    { at: ['fpv', .14], vis: 0 },
    { at: ['fpv', .86], vis: 0 },
    { at: ['fpv', .87], vis: 1, s: m ? 24 : 12, lens: 1 },
    { at: ['fpv', .96], s: m ? .85 : .45, lens: 0, yaw: 0, tilt: .1 },
    { at: ['anat', 0], x: 0, y: m ? -.08 : .06, s: m ? .85 : .42, yaw: .5, tilt: .45, explode: 0, shadow: .35 },
    { at: ['anat', .25], yaw: 1.1, tilt: .55, explode: 0 },
    { at: ['anat', .6], yaw: 2.2, tilt: .62, explode: 1, s: m ? .8 : .4 },
    { at: ['anat', .85], yaw: 2.8, explode: 1 },
    { at: ['anat', 1], yaw: 3.4, tilt: .35, explode: 0, shadow: 0 },
    { at: ['sense', 0], x: m ? 0 : .08, y: .02, s: m ? .6 : .26, yaw: 6.28 + .4, tilt: .5 },
    { at: ['sense', 1], x: m ? 0 : .08, y: .02 },
    { at: ['gal', 0], x: -.44, y: .41, s: m ? .16 : .07, yaw: 1.57, tilt: .25, pitch: .15 },
    { at: ['gal', 1], x: .44, y: .41 },
    { at: ['land', 0], anchor: 'pad', lift: 1.4, s: m ? .6 : .34, yaw: .5, tilt: .5, pitch: 0, prop: 1, shadow: .15, pad: 1, glow: 1 },
    { at: ['land', .75], lift: .12, prop: 1, shadow: .45 },
    { at: ['land', 1], lift: 0, prop: 0, shadow: .55, glow: 0 }
  ];
};
const DEF = { x: 0, y: 0, s: .3, yaw: 0, tilt: .3, pitch: 0, roll: 0, explode: 0, prop: 1, shadow: 0, lift: 0, lens: 0, vis: 1, pad: 0, glow: 0, anchor: null };
let frames = [];
function buildFrames() {
  let prev = { ...DEF };
  frames = KF().map(k => {
    const st = ST[k.at[0]];
    const f = { ...prev, ...k };
    f.pos = st.start + k.at[1] * (st.end - st.start);
    prev = f; return f;
  }).sort((a, b) => a.pos - b.pos);
}
ScrollTrigger.addEventListener('refresh', buildFrames);

function padInfo() {
  const r = $('#pad').getBoundingClientRect();
  return { x: r.left + r.width / 2 - innerWidth / 2, y: r.top + r.height * .56 - innerHeight / 2, s: Math.min(r.width * .78, r.height * 1.1) };
}
function resolve(f, unit, pad) {
  const o = { ...f };
  if (f.anchor === 'pad') {
    o.s = pad.s / unit;
    const pxu = pad.s / SPAN;
    o.x = pad.x / innerWidth;
    o.y = (pad.y - (FOOT + f.lift) * pxu * Math.cos(f.tilt)) / innerHeight;
  }
  return o;
}
const cur3 = { ...DEF, x: .2, y: .6, s: .1 };
let lastT = performance.now(), prevX = 0;
const keys = ['x', 'y', 's', 'yaw', 'tilt', 'pitch', 'explode', 'prop', 'shadow', 'lift', 'lens', 'vis', 'glow'];

function frame() {
  const now = performance.now(), dt = Math.min(.05, (now - lastT) / 1000); lastT = now;
  const y = scrollY, unit = Math.min(innerWidth, innerHeight * 1.5), pad = padInfo();
  let tgt;
  if (!frames.length) buildFrames();
  if (y <= frames[0].pos) tgt = resolve(frames[0], unit, pad);
  else if (y >= frames[frames.length - 1].pos) tgt = resolve(frames[frames.length - 1], unit, pad);
  else {
    let i = 0; while (frames[i + 1].pos < y) i++;
    const a = resolve(frames[i], unit, pad), b = resolve(frames[i + 1], unit, pad);
    const t = ease(clamp((y - a.pos) / Math.max(1, b.pos - a.pos), 0, 1));
    tgt = {}; keys.forEach(k => tgt[k] = k === 's' ? Math.exp(lerp(Math.log(a.s), Math.log(b.s), t)) : lerp(a[k], b[k], t));
    tgt.vis = b.vis < .5 || a.vis < .5 ? Math.min(a.vis, b.vis) : 1;
  }
  // influência interativa
  const heroW = clamp(1 - y / (innerHeight * .6), 0, 1);
  const agility = MODES[sim.mode].agility;
  const wind = sim.paused ? 0 : (sim.wind / 90) * (1 + gustV);
  const tt = now / 1000;
  tgt.x += (mouse.nx * .03 + Math.sin(tt * 2.3) * .006 * wind) * heroW;
  tgt.y += (-(sim.alt - 120) / 900 + mouse.ny * .02 + Math.sin(tt * 3.1) * .008 * wind) * heroW;

  let dodgeOn = senseActive && !mobile() || (senseActive && isTouch);
  if (dodgeOn) {
    const cx = innerWidth / 2 + cur3.x * innerWidth, cy = innerHeight / 2 + cur3.y * innerHeight;
    const ob = isTouch ? touchObs : (mouse.active ? mouse : null);
    let ax = -dodge.x * 6, ay = -dodge.y * 6;
    dodge.alert = false;
    if (ob) {
      const ddx = cx - ob.x, ddy = cy - ob.y, d = Math.hypot(ddx, ddy) || 1;
      if (d < 260) { const f = (260 - d) / 260; ax += ddx / d * f * 90; ay += ddy / d * f * 90; dodge.alert = true; }
      $('.sr-dist').textContent = `${fmt(d / 40, 1)} m`;
    }
    if (dodge.alert && !dodge.was) { dodge.count++; $('.sr-count').textContent = String(dodge.count).padStart(3, '0'); }
    dodge.was = dodge.alert;
    $('.sr-status').textContent = dodge.alert ? 'DESVIANDO' : 'LIVRE';
    $('.sr-status').classList.toggle('is-alert', dodge.alert);
    dodge.vx = (dodge.vx + ax * dt) * .9; dodge.vy = (dodge.vy + ay * dt) * .9;
    dodge.x = clamp(dodge.x + dodge.vx * dt, -.3, .3); dodge.y = clamp(dodge.y + dodge.vy * dt, -.25, .25);
  } else { dodge.x *= .9; dodge.y *= .9; }
  tgt.x += dodge.x; tgt.y += dodge.y;

  // suavização tipo mola
  const k = 1 - Math.exp(-dt * (tgt.lens > .5 ? 30 : 7 * agility));
  keys.forEach(key => cur3[key] = key === 'vis' ? tgt.vis : key === 's' ? Math.exp(lerp(Math.log(cur3.s), Math.log(tgt.s), k)) : lerp(cur3[key], tgt[key], k));
  const vx = (cur3.x - prevX) / Math.max(dt, .001); prevX = cur3.x;

  if (drone) {
    const S = drone.state;
    S.x = cur3.x * innerWidth; S.y = cur3.y * innerHeight; S.s = cur3.s * unit;
    S.yaw = cur3.yaw + mouse.nx * .25 * heroW;
    S.tilt = cur3.tilt + mouse.ny * .12 * heroW;
    S.pitch = cur3.pitch + clamp(Math.abs(vx) * .4, 0, .3) * (1 - cur3.lens);
    S.roll = clamp(-vx * .5, -.5, .5) * (1 - cur3.lens) + Math.sin(tt * 4) * .04 * wind * heroW + dodge.vx * -.4;
    Object.assign(S, { explode: cur3.explode, prop: cur3.prop, shadow: cur3.shadow, lift: cur3.lift, lens: cur3.lens, vis: cur3.vis, pad: pad.s ? (y > ST.gal.end - innerHeight ? 1 : 0) : 0, padX: pad.x, padY: pad.y, padS: pad.s, padTilt: .5, padGlow: cur3.glow });
    drone.update(dt);
  }

  // HUD do hero
  const ll = $('.link-layer');
  if (heroW > 0 && drone && !mobile()) {
    const st = $('.stat-pill').getBoundingClientRect();
    const d = drone.anchorScreen('motor');
    const l = $('.hero-link');
    l.setAttribute('x1', st.left + 10); l.setAttribute('y1', st.bottom);
    l.setAttribute('x2', d.x); l.setAttribute('y2', d.y);
    $('.hero-link-dot').setAttribute('cx', d.x); $('.hero-link-dot').setAttribute('cy', d.y);
    ll.style.opacity = heroW;
  } else ll.style.opacity = 0;
  statNum.textContent = fmt(99.9 - wind * .35 - Math.abs(Math.sin(tt * 2)) * .1 * wind, 1);
  drawWind(dt);

  // FPV
  if (ST.fpv.isActive || (y > ST.fpv.start - innerHeight && y < ST.fpv.end + innerHeight)) {
    const p = fpvP;
    let clip;
    if (cur3.vis < .5) clip = 'circle(150% at 50% 50%)';
    else if (drone && cur3.lens > .55) { const L = drone.lensScreen(); clip = `circle(${L.r * 1.25}px at ${L.x}px ${L.y}px)`; }
    else clip = 'circle(0px at 50% 50%)';
    fpvView.style.clipPath = clip;
    $('.fpv-pre').style.opacity = clamp(1 - (p - .02) * 12, 0, 1) + (p > .85 ? clamp((p - .9) * 12, 0, 1) : 0);
    const vp = clamp((p - .12) / .76, 0, 1);
    vTarget = vp * vDur;
    if (video.readyState >= 1 && !video.seeking && Math.abs(video.currentTime - vTarget) > .02) video.currentTime = lerp(video.currentTime, vTarget, .5);
    $('.osd-alt').textContent = String(Math.round(2 + Math.pow(vp, 1.3) * 478)).padStart(3, '0');
    $('.osd-spd').textContent = String(Math.round(18 + Math.sin(vp * Math.PI) * 54)).padStart(2, '0');
    $('.osd-dist').textContent = fmt(vp * 2.84, 2);
    $('.osd-bat').textContent = Math.round(98 - vp * 6);
    const secs = vp * vDur; $('.osd-tc').textContent = `00:00:${String(secs | 0).padStart(2, '0')}:${String((secs % 1) * 30 | 0).padStart(2, '0')}`;
    tape.style.transform = `translateX(${-(360 + 40 + vp * 110) / 15 * 30 + 190}px)`;
    $('.osd-horizon').style.transform = `translate(-50%,-50%) rotate(${Math.sin(vp * 11) * 5}deg)`;
    $('.fpv-progress i').style.transform = `scaleX(${vp})`;
    chapters.forEach(c => { const a = +c.dataset.from, b = +c.dataset.to; const o = clamp(Math.min((p - a) / .03, (b - p) / .03), 0, 1); c.style.opacity = o; c.style.visibility = o > 0 ? 'visible' : 'hidden'; c.style.transform = `translateY(${(1 - o) * 30}px)`; });
  }

  // ANATOMIA — callouts ligados às peças
  if (ST.anat.isActive && drone) {
    const ex = cur3.explode;
    $('.am-bar i').style.transform = `scaleX(${ex})`; $('.am-val').textContent = Math.round(ex * 100) + '%';
    $('.aw-num').textContent = Math.round(249 * (.2 + .8 * Math.min(1, anatP * 3)));
    const paths = $$('path', svgLines), dots = $$('circle', svgLines);
    callouts.forEach((c, i) => {
      const on = ex > .35 + i * .06;
      c.classList.toggle('is-in', on);
      const a = drone.anchorScreen(c.dataset.anchor), r = c.getBoundingClientRect();
      const left = c.dataset.side === 'left';
      const sx0 = left ? r.right + 12 : r.left - 12, sy0 = r.top + 30;
      const mx = left ? sx0 + 40 : sx0 - 40;
      paths[i].setAttribute('d', `M${sx0},${sy0} L${mx},${sy0} L${a.x},${a.y}`);
      paths[i].style.opacity = on && !mobile() ? .55 : 0;
      [dots[i * 2], dots[i * 2 + 1]].forEach(d => { d.setAttribute('cx', a.x); d.setAttribute('cy', a.y); d.style.opacity = on && !mobile() ? 1 : 0; });
    });
  } else if (!ST.anat.isActive) { callouts.forEach(c => c.classList.remove('is-in')); $$('path,circle', svgLines).forEach(e => e.style.opacity = 0); }

  // SENSORES
  if (y > ST.sense.start - innerHeight && y < ST.sense.end + innerHeight) drawSense({ x: innerWidth / 2 + cur3.x * innerWidth, y: innerHeight / 2 + cur3.y * innerHeight });

  // GALERIA
  if (y > ST.gal.start - innerHeight && y < ST.gal.end + innerHeight) {
    const dist = Math.max(0, track.scrollWidth - innerWidth);
    track.style.transform = `translate3d(${-galP * dist}px,0,0)`;
    $('.fl-fill').style.transform = `scaleX(${galP})`;
    cardImgs.forEach(img => { const r = img.parentElement.getBoundingClientRect(); const c = (r.left + r.width / 2) / innerWidth - .5; img.style.transform = `translate3d(${c * -8}%,0,0)`; });
  }

  // marquee com velocidade do scroll
  const vel = lenis.velocity || 0;
  mqX -= (1.2 + Math.abs(vel) * .25) * (vel < 0 ? -1 : 1);
  const half = mq.scrollWidth / 2; if (mqX < -half) mqX += half; if (mqX > 0) mqX -= half;
  mq.style.transform = `translate3d(${mqX}px,0,0) skewX(${clamp(-vel * .4, -12, 12)}deg)`;

  // pouso
  const landed = ST.land.progress > .98;
  const ps = $('.pz-status'); ps.textContent = landed ? 'POUSO CONFIRMADO ✓' : (ST.land.progress > 0 ? 'APROXIMANDO' : 'AGUARDANDO'); ps.classList.toggle('is-landed', landed);

  // trilho de altitude
  const gp = ST.all.progress || 0;
  $('.scroll-rail i').style.transform = `scaleY(${gp})`;
  const ra = $('.rail-alt'); ra.style.top = gp * 100 + '%'; ra.textContent = `ALT ${String(Math.round(480 * (1 - gp))).padStart(3, '0')} m`;

  requestAnimationFrame(frame);
}

// =========================================================
// PRELOADER + INTRO
// =========================================================
const pre = $('.preloader'), checks = $$('.pre-checks li');
const cnt = { v: 0 };
gsap.to(cnt, {
  v: 100, duration: 2.2, ease: 'power2.inOut',
  onUpdate: () => { $('.pre-num').textContent = String(Math.round(cnt.v)).padStart(3, '0'); $('.pre-bar i').style.transform = `scaleX(${cnt.v / 100})`; checks.forEach((c, i) => c.classList.toggle('ok', cnt.v > (i + 1) * 15)); },
  onComplete: () => {
    $('.pre-status').textContent = 'Pronto para decolar';
    const tl = gsap.timeline({ delay: .25 });
    tl.to(pre, { yPercent: -100, duration: 1.1, ease: 'expo.inOut' })
      .from('.ht-inner', { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: .08 }, '-=.45')
      .from('.hero-pilot', { yPercent: 12, opacity: 0, duration: 1.4, ease: 'expo.out' }, '<')
      .from('.hero-panel,.hero-stat,.hero-brand,.hero-card,.hero-hint,.nav', { y: 24, opacity: 0, duration: 1, ease: 'expo.out', stagger: .06 }, '<.2')
      .add(() => { pre.remove(); document.body.classList.remove('is-loading'); lenis.start(); ScrollTrigger.refresh(); });
  }
});

ScrollTrigger.refresh();
buildFrames();
requestAnimationFrame(frame);
