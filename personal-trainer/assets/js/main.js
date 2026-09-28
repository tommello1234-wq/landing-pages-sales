/* =========================================================
   VOLT Personal Training — interações
   JavaScript puro, sem dependências.
   ========================================================= */
(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const nf = (n, dec = 0) => n.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const secs = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
  const WA = 'https://wa.me/5511900000000?text=';

  /* ---------- 1. Texto dividido em palavras ---------- */
  function splitWords(el) {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            const inner = document.createElement('span');
            w.className = 'w';
            inner.textContent = part;
            inner.style.setProperty('--i', i++);
            w.appendChild(inner);
            frag.appendChild(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) {
          walk(child);
        }
      });
    };
    walk(el);
  }
  $$('[data-split]').forEach(splitWords);

  /* ---------- 2. Revelar ao rolar ---------- */
  $$('[data-stagger]').forEach(parent => {
    [...parent.children].forEach((child, idx) => {
      if (child.hasAttribute('data-reveal') && !child.style.getPropertyValue('--d')) {
        child.style.setProperty('--d', `${idx * 0.08}s`);
      }
    });
  });

  const onVisible = (els, cb, opts = {}) => {
    if (!('IntersectionObserver' in window)) { els.forEach(cb); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { cb(e.target); io.unobserve(e.target); }
      });
    }, { rootMargin: opts.margin || '0px 0px -8% 0px', threshold: opts.threshold ?? 0.12 });
    els.forEach(el => io.observe(el));
  };

  const revealEls = $$('[data-reveal], [data-split]');
  if (reduce) revealEls.forEach(el => el.classList.add('is-in'));
  else onVisible(revealEls, el => el.classList.add('is-in'));

  /* ---------- 3. Rolagem suave nos links internos ---------- */
  const nav = $('#nav');
  const burger = $('.nav-burger');
  const closeMenu = () => { if (!nav || !burger) return; nav.classList.remove('menu-open'); burger.setAttribute('aria-expanded', 'false'); };
  if (burger) burger.addEventListener('click', () => {
    const open = !nav.classList.contains('menu-open');
    nav.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
  $$('[data-scroll]').forEach(a => {
    a.addEventListener('click', e => {
      const id = (a.getAttribute('href') || '').replace('#', '');
      if (!id) return;
      e.preventDefault();
      closeMenu();
      scrollToId(id);
    });
  });

  /* ---------- 4. Números animados ---------- */
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.dec || '0', 10);
    const prefix = el.dataset.prefix || '';
    if (reduce) { el.textContent = prefix + nf(target, dec); return; }
    const dur = 1700;
    const t0 = performance.now();
    const step = now => {
      const t = clamp((now - t0) / dur, 0, 1);
      const e = 1 - Math.pow(2, -10 * t);
      el.textContent = prefix + nf(target * (t === 1 ? 1 : e), dec);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  onVisible($$('[data-count]'), countUp, { threshold: 0.6 });

  /* ---------- 5. Spotlight e botões magnéticos ---------- */
  if (finePointer) {
    document.addEventListener('pointermove', e => {
      const card = e.target.closest && e.target.closest('.spot');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });

    if (!reduce) {
      $$('[data-magnetic]').forEach(btn => {
        btn.addEventListener('pointermove', e => {
          const r = btn.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.22;
          const y = (e.clientY - r.top - r.height / 2) * 0.32;
          btn.style.translate = `${x}px ${y}px`;
        });
        btn.addEventListener('pointerleave', () => { btn.style.translate = '0px 0px'; });
      });
    }
  }

  /* ---------- 6. Hero: profundidade com o mouse ---------- */
  const hero = $('.hero');
  const heroVisual = $('.hero-visual');
  if (finePointer && !reduce && heroVisual) {
    const layers = $$('[data-depth]', heroVisual);
    const obj = $('.hv-object', heroVisual);
    let raf = 0;
    hero.addEventListener('pointermove', e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = heroVisual.getBoundingClientRect();
        const nx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2), -1.4, 1.4);
        const ny = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2), -1.4, 1.4);
        layers.forEach(l => {
          const d = parseFloat(l.dataset.depth);
          l.style.translate = `${nx * d * 7}px ${ny * d * 7}px`;
        });
        obj.style.transform = `rotateY(${nx * 9}deg) rotateX(${-ny * 7}deg)`;
      });
    });
    hero.addEventListener('pointerleave', () => {
      layers.forEach(l => { l.style.translate = '0px 0px'; });
      obj.style.transform = '';
    });
  }

  // batimento cardíaco "ao vivo"
  const bpm = $('[data-bpm]');
  if (bpm && !reduce) {
    let v = 142;
    setInterval(() => {
      v = clamp(v + Math.round((Math.random() - 0.45) * 4), 134, 156);
      bpm.textContent = v;
    }, 1400);
  }

  /* ---------- 7. Faixas de marquee (velocidade reage à rolagem) ---------- */
  const bands = $$('[data-marquee]').map(band => {
    const track = $('.ticker-track', band);
    const set = document.createElement('div');
    set.className = 'ticker-set';
    while (track.firstChild) set.appendChild(track.firstChild);
    track.appendChild(set);
    track.classList.add('is-sets');
    const setW = set.offsetWidth || 1;
    const copies = Math.ceil(band.offsetWidth / setW) + 2;
    for (let i = 0; i < copies; i++) track.appendChild(set.cloneNode(true));
    return { track, setW, dir: parseFloat(band.dataset.marquee), off: 0 };
  });
  let boost = 0;
  let marqueeOn = false;
  if (bands.length && !reduce) {
    const ticker = $('.ticker');
    let last = performance.now();
    const loop = now => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      boost *= 0.92;
      bands.forEach(b => {
        b.off = (b.off + dt * 55 * (1 + boost)) % b.setW;
        const x = b.dir > 0 ? -b.off : b.off - b.setW;
        b.track.style.transform = `translate3d(${x}px,0,0)`;
      });
      if (marqueeOn) requestAnimationFrame(loop);
    };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        const was = marqueeOn;
        marqueeOn = e.isIntersecting;
        if (marqueeOn && !was) { last = performance.now(); requestAnimationFrame(loop); }
      }).observe(ticker);
    }
  }

  /* ---------- 8. Depoimentos em loop ---------- */
  $$('[data-tmarquee]').forEach(row => {
    const track = $('.t-track', row);
    [...track.children].forEach(card => {
      const c = card.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    });
    const half = track.scrollWidth / 2;
    track.style.setProperty('--dur', `${Math.round(half / 38)}s`);
  });

  /* ---------- 9. Diagnóstico de dores ---------- */
  const pains = $$('.pain');
  const meter = $('.pain-meter');
  const gauge = $('.g-fg');
  const painCount = $('[data-pain-count]');
  const painPct = $('[data-pain-pct]');
  const painMsg = $('[data-pain-msg]');
  if (meter && pains.length) meter.classList.add('is-idle');
  const painText = n => {
    if (n === 0) return 'Marque os itens para ver o seu diagnóstico.';
    if (n === 1) return 'Já é um sinal. Um plano feito para a sua rotina resolve isso.';
    if (n <= 3) return 'Você tem o perfil ideal para a consultoria VOLT.';
    if (n <= 5) return 'Seu treino precisa de estratégia. É exatamente isso que o Método VOLT entrega.';
    return 'Todos os itens. A boa notícia é que cada um tem solução, e ela começa na avaliação.';
  };
  pains.forEach(p => p.addEventListener('click', () => {
    p.setAttribute('aria-checked', String(p.getAttribute('aria-checked') !== 'true'));
    const n = pains.filter(x => x.getAttribute('aria-checked') === 'true').length;
    if (painCount) painCount.textContent = n;
    if (painPct) painPct.textContent = `${Math.round((n / pains.length) * 100)}%`;
    if (gauge) gauge.style.strokeDashoffset = String(282.8 * (1 - n / pains.length));
    if (painMsg) painMsg.textContent = painText(n);
    if (meter) { meter.classList.toggle('is-ready', n > 0); meter.classList.toggle('is-idle', n === 0); }
  }));

  /* ---------- 10. Pilares do método ---------- */
  const pillars = $$('.pillar');
  pillars.forEach(p => {
    const activate = () => pillars.forEach(q => q.classList.toggle('is-active', q === p));
    p.addEventListener('mouseenter', activate);
    p.addEventListener('focus', activate);
    p.addEventListener('click', activate);
  });

  /* ---------- 11. Abas acessíveis (setas do teclado) ---------- */
  function tablist(tabs, select) {
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(i));
      tab.addEventListener('keydown', e => {
        let n = null;
        if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') n = 0;
        if (e.key === 'End') n = tabs.length - 1;
        if (n === null) return;
        e.preventDefault();
        select(n);
        tabs[n].focus();
      });
    });
  }
  const moveIndicator = (ind, el) => {
    if (!ind || !el) return;
    ind.style.width = `${el.offsetWidth}px`;
    ind.style.transform = `translateX(${el.offsetLeft}px)`;
  };

  /* ---------- 12. Gráficos em SVG ---------- */
  function drawChart(svg, values, o = {}, animate = true) {
    const box = svg.getBoundingClientRect();
    const W = Math.round(box.width);
    const H = Math.round(box.height) || 240;
    if (W < 40) return false;
    const f = o.fmt || (v => nf(v, 1));
    const labels = o.labels || values.map((_, i) => `S${i}`);
    const every = o.every || 4;
    const p = { t: 36, r: 14, b: 28, l: 50 };
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = (max - min) || 1;
    const lo = min - span * 0.18;
    const hi = max + span * 0.18;
    const x = i => p.l + i * (W - p.l - p.r) / (values.length - 1);
    const y = v => p.t + (hi - v) / (hi - lo) * (H - p.t - p.b);
    const id = `g${Math.random().toString(36).slice(2, 8)}`;

    let grid = '';
    for (let k = 0; k < 4; k++) {
      const v = lo + (hi - lo) * k / 3;
      const yy = y(v).toFixed(1);
      grid += `<line class="grid-line" x1="${p.l}" x2="${W - p.r}" y1="${yy}" y2="${yy}"/>`;
      grid += `<text class="axis-txt" x="${p.l - 10}" y="${(+yy + 4).toFixed(1)}" text-anchor="end">${f(v)}</text>`;
    }
    let xl = '';
    labels.forEach((l, i) => {
      if (i % every === 0) xl += `<text class="axis-txt" x="${x(i).toFixed(1)}" y="${H - 6}" text-anchor="middle">${l}</text>`;
    });

    const pts = values.map((v, i) => [x(i), y(v)]);
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1];
      const [x1, y1] = pts[i];
      const cx = ((x0 + x1) / 2).toFixed(1);
      d += ` C${cx},${y0.toFixed(1)} ${cx},${y1.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
    }
    const last = pts[pts.length - 1];
    const area = `${d} L${last[0].toFixed(1)},${H - p.b} L${pts[0][0].toFixed(1)},${H - p.b} Z`;

    const label = (i, kind) => {
      const [px, py] = pts[i];
      const txt = f(values[i]) + (o.unit ? ` ${o.unit}` : '');
      const w = txt.length * 7.2 + 18;
      const h = 22;
      let bx = kind === 'end' ? px - w + 10 : px - 10;
      bx = clamp(bx, 2, W - w - 2);
      let by = py - h - 12;
      if (by < 2) by = py + 12;
      const s = kind === 'start' ? ' c-lbl-bg-start' : '';
      const t = kind === 'start' ? ' c-lbl-start' : '';
      return `<rect class="c-lbl-bg${s}" x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${w.toFixed(1)}" height="${h}" rx="7"/>` +
        `<text class="c-lbl${t}" x="${(bx + w / 2).toFixed(1)}" y="${(by + 15).toFixed(1)}" text-anchor="middle">${txt}</text>`;
    };

    const run = animate && !reduce;
    if (run) svg.classList.remove('is-drawn');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML =
      `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c6f432" stop-opacity=".32"/><stop offset="1" stop-color="#c6f432" stop-opacity="0"/></linearGradient></defs>` +
      grid + xl +
      `<path class="c-area" d="${area}" fill="url(#${id})"/>` +
      `<path class="c-line" d="${d}"/>` +
      `<circle class="c-dot" cx="${pts[0][0].toFixed(1)}" cy="${pts[0][1].toFixed(1)}" r="5"/>` +
      `<circle class="c-dot c-dot-end" cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="5.5"/>` +
      label(0, 'start') + label(values.length - 1, 'end');

    const line = $('.c-line', svg);
    const len = line.getTotalLength();
    line.style.strokeDasharray = `${len}`;
    if (run) {
      line.style.strokeDashoffset = `${len}`;
      line.getBoundingClientRect();
      requestAnimationFrame(() => requestAnimationFrame(() => {
        line.style.strokeDashoffset = '0';
        svg.classList.add('is-drawn');
      }));
    } else {
      line.style.transition = 'none';
      line.style.strokeDashoffset = '0';
      svg.classList.add('is-drawn');
    }
    svg._chart = { values, o };
    return true;
  }
  const redrawCharts = () => $$('.chart').forEach(svg => {
    if (svg._chart && svg.getBoundingClientRect().width > 40) drawChart(svg, svg._chart.values, svg._chart.o, false);
  });

  /* ---------- 13. App: demonstração ---------- */
  const EX = [
    { name: 'Agachamento livre', sets: 4, reps: '8', load: '60 kg', rest: 90, rpe: 8, tip: 'Desça até a coxa passar da linha do joelho, com o peito aberto e os joelhos acompanhando a ponta dos pés.' },
    { name: 'Stiff com barra', sets: 3, reps: '10', load: '40 kg', rest: 75, rpe: 7, tip: 'Leve o quadril para trás e deixe a barra descer rente à perna. Coluna neutra do início ao fim.' },
    { name: 'Leg press 45°', sets: 4, reps: '12', load: '180 kg', rest: 90, rpe: 8, tip: 'Pés na largura do quadril. Não trave o joelho no topo do movimento.' },
    { name: 'Cadeira extensora', sets: 3, reps: '15', load: '35 kg', rest: 60, rpe: 9, tip: 'Segure 1 segundo no topo e controle a descida em 3 segundos.' },
    { name: 'Elevação pélvica', sets: 4, reps: '10', load: '70 kg', rest: 75, rpe: 8, tip: 'Queixo levemente para baixo e costelas fechadas. Contraia o glúteo no topo.' }
  ];
  const TOTAL_SETS = EX.reduce((a, e) => a + e.sets, 0);
  const done = EX.map(e => Array(e.sets).fill(false));
  let cur = 0;

  const exList = $('[data-ex-list]');
  const setList = $('[data-exd-setlist]');
  const setsDone = $('[data-sets-done]');
  const setsBar = $('[data-sets-bar]');

  const exStatus = i => {
    const n = done[i].filter(Boolean).length;
    if (n === EX[i].sets) return 'Concluído';
    if (n > 0) return `${n}/${EX[i].sets} séries`;
    return i === cur ? 'Agora' : 'Pendente';
  };

  function renderList() {
    exList.innerHTML = EX.map((e, i) => `
      <li><button type="button" class="ex-row" data-i="${i}" aria-pressed="${i === cur}">
        <span class="ex-idx">${String(i + 1).padStart(2, '0')}</span>
        <span class="ex-name">${e.name}<small>${e.sets} × ${e.reps} · ${e.load}</small></span>
        <span class="ex-status">${exStatus(i)}</span>
      </button></li>`).join('');
    $$('.ex-row', exList).forEach(row => row.addEventListener('click', () => selectEx(+row.dataset.i)));
    updateList();
  }
  function updateList() {
    $$('.ex-row', exList).forEach((row, i) => {
      row.classList.toggle('is-current', i === cur);
      row.classList.toggle('is-done', done[i].every(Boolean));
      row.setAttribute('aria-pressed', String(i === cur));
      $('.ex-status', row).textContent = exStatus(i);
    });
    const n = done.flat().filter(Boolean).length;
    setsDone.textContent = n;
    setsBar.style.setProperty('--w', `${(n / TOTAL_SETS) * 100}%`);
  }
  function renderDetail() {
    const e = EX[cur];
    $('[data-exd-idx]').textContent = cur + 1;
    $('[data-exd-name]').textContent = e.name;
    $('[data-exd-rpe]').textContent = `RPE ${e.rpe}`;
    $('[data-exd-sets]').textContent = e.sets;
    $('[data-exd-reps]').textContent = e.reps;
    $('[data-exd-load]').textContent = e.load;
    $('[data-exd-rest]').textContent = `${e.rest} s`;
    $('[data-exd-tip]').textContent = e.tip;
    setList.innerHTML = done[cur].map((d, s) => `
      <button type="button" class="set-btn" data-s="${s}" aria-pressed="${d}">
        <span>Série ${s + 1}</span>
        <b>${e.reps} × ${e.load}<svg><use href="#i-check"/></svg></b>
      </button>`).join('');
    $$('.set-btn', setList).forEach(btn => btn.addEventListener('click', () => toggleSet(+btn.dataset.s, btn)));
    if (!timer.running) timer.set(e.rest);
  }
  function selectEx(i) {
    cur = i;
    updateList();
    renderDetail();
  }
  function toggleSet(s, btn) {
    done[cur][s] = !done[cur][s];
    btn.setAttribute('aria-pressed', String(done[cur][s]));
    btn.classList.remove('pop');
    void btn.offsetWidth;
    btn.classList.add('pop');
    updateList();
    if (done[cur][s]) {
      timer.set(EX[cur].rest);
      timer.start();
      if (done[cur].every(Boolean)) {
        const next = EX.findIndex((_, i) => !done[i].every(Boolean));
        if (next !== -1) {
          const hadFocus = setList.contains(document.activeElement);
          setTimeout(() => {
            if (!done[cur].every(Boolean)) return;
            selectEx(next);
            if (hadFocus) { const first = $('.set-btn', setList); if (first) first.focus(); }
          }, 650);
        } else {
          const sub = $('.kpi-sub'); if (sub) sub.textContent = 'Treino concluído. Mande o check-in!';
        }
      }
    }
  }

  const timer = (() => {
    const box = $('[data-timer]');
    if (!box || !$('[data-timer-btn]') || !$('[data-timer-display]')) return { running: false, set() {}, start() {}, stop() {} };
    const disp = $('[data-timer-display]');
    const btn = $('[data-timer-btn]');
    const label = $('span', btn);
    const icon = $('use', btn);
    let left = 90, total = 90, id = null;
    const paint = () => { disp.textContent = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`; };
    const api = {
      running: false,
      set(sec) { api.stop(); left = total = sec; paint(); },
      start() {
        if (id) return;
        api.running = true;
        box.classList.add('is-running');
        label.textContent = 'Pausar';
        icon.setAttribute('href', '#i-pause');
        id = setInterval(() => {
          left -= 1;
          paint();
          if (left <= 0) {
            api.stop();
            left = total;
            paint();
            box.classList.remove('is-done');
            void box.offsetWidth;
            box.classList.add('is-done');
          }
        }, 1000);
      },
      stop() {
        clearInterval(id);
        id = null;
        api.running = false;
        box.classList.remove('is-running');
        label.textContent = 'Iniciar';
        icon.setAttribute('href', '#i-play');
      }
    };
    btn.addEventListener('click', () => (api.running ? api.stop() : api.start()));
    return api;
  })();

  if (exList) { renderList(); renderDetail(); }

  const appTabs = $$('.app-tab');
  const appInd = $('.app-tab-ind');
  const appChart = $('[data-chart="app"]');
  const APP_SERIES = { values: [72.0, 71.4, 70.9, 70.1, 69.6, 68.8, 68.3, 67.5, 66.9, 66.0, 65.4, 64.8, 64.2], o: { unit: 'kg', every: 4 } };
  function selectAppTab(i) {
    appTabs.forEach((t, k) => {
      const on = k === i;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      panel.hidden = !on;
      panel.classList.toggle('is-active', on);
    });
    moveIndicator(appInd, appTabs[i]);
    if (appTabs[i].id === 'tab-evolucao') requestAnimationFrame(() => drawChart(appChart, APP_SERIES.values, APP_SERIES.o, true));
  }
  if (appTabs.length) tablist(appTabs, selectAppTab);

  // check-in
  const sono = $('#ci-sono');
  const sonoOut = $('#ci-sono-out');
  const paintRange = () => {
    const pct = ((sono.value - sono.min) / (sono.max - sono.min)) * 100;
    sono.style.setProperty('--fill', `${pct}%`);
    sonoOut.textContent = `${nf(parseFloat(sono.value), 1)} h`;
  };
  if (sono) { sono.addEventListener('input', paintRange); paintRange(); }
  const ci = $('[data-checkin]');
  if (ci) {
    ci.addEventListener('submit', e => {
      e.preventDefault();
      const msg = $('[data-ci-msg]');
      const peso = parseFloat(String($('#ci-peso').value).replace(',', '.'));
      if (!(peso >= 30 && peso <= 250)) {
        msg.style.color = '#ff9f7a';
        msg.textContent = 'Informe um peso entre 30 e 250 kg.';
        $('#ci-peso').focus();
        return;
      }
      const energia = (ci.querySelector('input[name="energia"]:checked') || {}).value || '-';
      msg.style.color = '';
      msg.textContent = `Check-in registrado: ${nf(peso, 1)} kg · ${nf(parseFloat(sono.value), 1)} h de sono · energia ${energia}/5. Resposta do personal em até 24h.`;
    });
  }

  /* ---------- 14. Resultados: casos ---------- */
  const CASES = [
    {
      name: 'Mariana, 34', goal: 'Emagrecimento', time: '12 semanas · VOLT Pro',
      quote: '“Pela primeira vez eu não desisti. O check-in de segunda virou compromisso.”',
      chartTitle: 'Peso corporal (kg)',
      series: { values: [72.0, 71.4, 70.9, 70.1, 69.6, 68.8, 68.3, 67.5, 66.9, 66.0, 65.4, 64.8, 64.2], o: { unit: 'kg', every: 4 } },
      metrics: [
        { label: 'Peso', before: 72.0, after: 64.2, unit: 'kg', dec: 1 },
        { label: 'Gordura corporal', before: 30.4, after: 24.1, unit: '%', dec: 1, dUnit: 'p.p.' },
        { label: 'Cintura', before: 86, after: 74, unit: 'cm', dec: 0 }
      ]
    },
    {
      name: 'Diego, 41', goal: 'Hipertrofia', time: '16 semanas · Elite Presencial',
      quote: '“Ganhei quase 5 kg de massa magra sem ganhar barriga junto. O supino saiu de 60 para 85 kg.”',
      chartTitle: 'Massa magra (kg)',
      series: { values: [58.1, 58.6, 59.4, 60.0, 60.9, 61.5, 62.1, 62.6, 63.0], o: { unit: 'kg', every: 2, labels: ['S0', 'S2', 'S4', 'S6', 'S8', 'S10', 'S12', 'S14', 'S16'] } },
      metrics: [
        { label: 'Peso', before: 74.5, after: 79.8, unit: 'kg', dec: 1 },
        { label: 'Massa magra', before: 58.1, after: 63.0, unit: 'kg', dec: 1 },
        { label: 'Supino (carga máxima)', before: 60, after: 85, unit: 'kg', dec: 0 }
      ]
    },
    {
      name: 'Camila, 28', goal: 'Performance', time: '10 semanas · Essencial',
      quote: '“Baixei mais de 5 minutos nos 5 km treinando força 3 vezes por semana.”',
      chartTitle: 'Tempo nos 5 km (min:s)',
      series: { values: [1900, 1872, 1850, 1811, 1780, 1752, 1718, 1690, 1650, 1612, 1575], o: { every: 2, fmt: secs } },
      metrics: [
        { label: 'Tempo nos 5 km', before: 1900, after: 1575, fmt: secs },
        { label: 'VO₂ máx. estimado', before: 38, after: 44, unit: 'ml/kg/min', dec: 0 },
        { label: 'Agachamento', before: 40, after: 65, unit: 'kg', dec: 0 }
      ]
    }
  ];
  const caseView = $('[data-case-view]');
  const caseChart = $('[data-chart="case"]');
  const caseTabs = $$('.case-tab');
  let caseIdx = 0;
  let caseChartReady = false;

  function renderCase(i, animate) {
    const c = CASES[i];
    $('[data-case-goal]').textContent = c.goal;
    $('[data-case-time]').textContent = c.time;
    $('[data-case-name]').textContent = c.name;
    $('[data-case-quote]').textContent = c.quote;
    $('[data-case-chart-title]').textContent = c.chartTitle;
    caseChart.setAttribute('aria-label', `Gráfico de ${c.chartTitle.toLowerCase()} de ${c.name}`);
    $('[data-case-metrics]').innerHTML = c.metrics.map(m => {
      const f = m.fmt || (v => `${nf(v, m.dec)}${m.unit === '%' ? '%' : ` ${m.unit}`}`);
      const diff = m.after - m.before;
      const abs = Math.abs(diff);
      const dTxt = m.fmt ? m.fmt(abs) : `${nf(abs, m.dec)} ${m.dUnit || m.unit}`;
      const mx = Math.max(m.before, m.after);
      return `<li class="metric">
        <div class="metric-top">
          <span class="metric-label">${m.label}</span>
          <span class="metric-vals">${f(m.before)}<svg><use href="#i-arrow-r"/></svg><b>${f(m.after)}</b><span class="delta">${diff < 0 ? '−' : '+'}${dTxt}</span></span>
        </div>
        <div class="metric-bars">
          <span class="bar before"><span data-w="${(m.before / mx) * 100}"></span></span>
          <span class="bar"><span data-w="${(m.after / mx) * 100}"></span></span>
        </div>
      </li>`;
    }).join('');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      $$('[data-case-metrics] [data-w]').forEach(b => b.style.setProperty('--w', `${b.dataset.w}%`));
    }));
    if (caseChartReady) drawChart(caseChart, c.series.values, c.series.o, animate);
  }
  function selectCase(i) {
    if (i === caseIdx) return;
    caseIdx = i;
    caseTabs.forEach((t, k) => {
      const on = k === i;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    if (reduce) { renderCase(i, false); return; }
    caseView.classList.add('is-switching');
    setTimeout(() => {
      renderCase(i, true);
      caseView.classList.remove('is-switching');
    }, 320);
  }
  if (caseView) {
    tablist(caseTabs, selectCase);
    renderCase(0, false);
    onVisible([caseChart], () => {
      caseChartReady = true;
      const c = CASES[caseIdx];
      drawChart(caseChart, c.series.values, c.series.o, true);
    }, { threshold: 0.3 });
  }

  /* ---------- 15. Quiz ---------- */
  const quiz = $('[data-quiz]');
  if (quiz) {
    const qs = $$('.quiz-q', quiz);
    const result = $('[data-quiz-result]', quiz);
    const back = $('[data-quiz-back]', quiz);
    const stepEl = $('[data-quiz-step]', quiz);
    const bar = $('[data-quiz-bar]', quiz);
    const top = $('.quiz-top', quiz);
    const answers = [];
    let step = 0;
    const PLAN = { essencial: 'Essencial', pro: 'VOLT Pro', elite: 'Elite Presencial' };
    const GOAL = { emagrecer: 'emagrecer e definir', massa: 'ganhar massa muscular', condicionamento: 'melhorar o condicionamento', saude: 'cuidar da saúde e das dores' };
    const PLACE = { academia: 'na academia', casa: 'em casa', livre: 'ao ar livre', indefinido: 'onde for melhor para você' };
    const WHY = {
      essencial: 'um treino profissional no app, renovado a cada 4 semanas, para você seguir no seu ritmo',
      pro: 'check-in semanal, correção de execução por vídeo e ajustes constantes para o resultado não travar',
      elite: 'treinos presenciais comigo, bioimpedância todo mês e todo o acompanhamento online'
    };

    const show = s => {
      step = s;
      qs.forEach((q, i) => { q.hidden = i !== s; });
      result.hidden = s < qs.length;
      top.hidden = s >= qs.length;
      back.hidden = s === 0 || s >= qs.length;
      if (s < qs.length) {
        stepEl.textContent = s + 1;
        bar.style.width = `${((s + 1) / qs.length) * 100}%`;
        $$('.qopt', qs[s]).forEach(o => o.classList.toggle('is-picked', o.dataset.v === answers[s]));
      } else {
        const plan = answers[2];
        $('[data-qr-plan]', quiz).textContent = PLAN[plan];
        $('[data-qr-text]', quiz).textContent = `Para ${GOAL[answers[0]]} ${PLACE[answers[1]]}, o ${PLAN[plan]} entrega ${WHY[plan]}.`;
        $('[data-quiz-go]', quiz).dataset.plan = plan;
      }
    };
    qs.forEach((q, i) => {
      $$('.qopt', q).forEach(opt => opt.addEventListener('click', () => {
        answers[i] = opt.dataset.v;
        $$('.qopt', q).forEach(o => o.classList.toggle('is-picked', o === opt));
        setTimeout(() => {
          show(i + 1);
          const firstFocus = i + 1 < qs.length ? $('.qopt', qs[i + 1]) : $('[data-quiz-go]', quiz);
          if (firstFocus) firstFocus.focus({ preventScroll: true });
        }, reduce ? 0 : 320);
      }));
    });
    back.addEventListener('click', () => show(Math.max(0, step - 1)));
    $('[data-quiz-reset]', quiz).addEventListener('click', () => { answers.length = 0; show(0); });
    $('[data-quiz-go]', quiz).addEventListener('click', e => {
      e.preventDefault();
      const card = $(`.plan[data-plan="${e.currentTarget.dataset.plan}"]`);
      scrollToId('planos');
      setTimeout(() => {
        if (!card) return;
        card.classList.remove('is-highlight');
        void card.offsetWidth;
        card.classList.add('is-highlight');
      }, reduce ? 0 : 900);
    });
  }

  /* ---------- 16. Planos: período de cobrança ---------- */
  const billingBtns = $$('[data-billing]');
  const billingInd = $('.billing-ind');
  const plans = $$('.plan');
  const DISC = { 1: 0, 3: 0.15, 6: 0.25 };
  const PERIOD = { 1: 'mensal', 3: 'trimestral', 6: 'semestral' };
  function tween(el, to) {
    const from = parseInt(el.textContent.replace(/\D/g, ''), 10) || 0;
    if (reduce || from === to) { el.textContent = nf(to); return; }
    const t0 = performance.now();
    const d = 550;
    el.classList.remove('tick');
    void el.offsetWidth;
    el.classList.add('tick');
    const step = now => {
      const t = clamp((now - t0) / d, 0, 1);
      const e = 1 - Math.pow(1 - t, 3);
      el.textContent = nf(Math.round(from + (to - from) * e));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function setBilling(m, animate = true) {
    billingBtns.forEach(b => {
      const on = +b.dataset.billing === m;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-checked', String(on));
      b.tabIndex = on ? 0 : -1;
      if (on) moveIndicator(billingInd, b);
    });
    plans.forEach(pl => {
      const monthly = Math.floor(+pl.dataset.price * (1 - DISC[m]));
      const amount = $('[data-amount]', pl);
      if (animate) tween(amount, monthly); else amount.textContent = nf(monthly);
      $('[data-note]', pl).textContent = m === 1 ? 'cobrado todo mês' : `R$ ${nf(monthly * m)} a cada ${m} meses`;
      $('[data-day]', pl).textContent = `≈ R$ ${nf(monthly / 30, 2)} por dia`;
      const name = $('h3', pl).textContent.trim();
      $('[data-plan-cta]', pl).href = WA + encodeURIComponent(`Olá, Bruno! Quero o plano ${name} (${PERIOD[m]}).`);
    });
  }
  if (billingBtns.length) {
    billingBtns.forEach((b, i) => {
      b.addEventListener('click', () => setBilling(+b.dataset.billing));
      b.addEventListener('keydown', e => {
        const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        const n = billingBtns[(i + dir + billingBtns.length) % billingBtns.length];
        setBilling(+n.dataset.billing);
        n.focus();
      });
    });
    setBilling(3, false);
  }

  /* ---------- 17. FAQ ---------- */
  const accItems = $$('.acc-item');
  accItems.forEach(item => {
    const btn = $('button', item);
    item.classList.toggle('is-open', btn.getAttribute('aria-expanded') === 'true');
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      accItems.forEach(other => {
        const ob = $('button', other);
        const on = other === item ? open : false;
        ob.setAttribute('aria-expanded', String(on));
        other.classList.toggle('is-open', on);
      });
    });
  });

  /* ---------- 18. Vagas e contagem regressiva ---------- */
  const slots = $('[data-slots]');
  if (slots) {
    const filled = 23;
    slots.innerHTML = Array.from({ length: 30 }, () => '<i></i>').join('');
    const cells = $$('i', slots);
    const fill = () => cells.forEach((c, i) => {
      if (i < filled) setTimeout(() => c.classList.add('on'), reduce ? 0 : i * 45);
      if (i === filled) setTimeout(() => c.classList.add('last'), reduce ? 0 : filled * 45);
    });
    onVisible([slots], fill, { threshold: 0.5 });
  }
  const cd = $('[data-countdown]');
  if (cd) {
    const now = new Date();
    const daysToSunday = (7 - now.getDay()) % 7;
    let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysToSunday, 23, 59, 59);
    if (end <= now) end = new Date(end.getTime() + 7 * 864e5);
    const parts = { d: $('[data-cd="d"]', cd), h: $('[data-cd="h"]', cd), m: $('[data-cd="m"]', cd), s: $('[data-cd="s"]', cd) };
    const tick = () => {
      const diff = Math.max(0, end - new Date());
      const d = Math.floor(diff / 864e5);
      const h = Math.floor(diff / 36e5) % 24;
      const m = Math.floor(diff / 6e4) % 60;
      const s = Math.floor(diff / 1e3) % 60;
      parts.d.textContent = String(d).padStart(2, '0');
      parts.h.textContent = String(h).padStart(2, '0');
      parts.m.textContent = String(m).padStart(2, '0');
      parts.s.textContent = String(s).padStart(2, '0');
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- 18b. Partículas de fundo ---------- */
  const cvs = $('#particles');
  if (cvs && cvs.getContext) {
    const ctx = cvs.getContext('2d');
    let W = 0, H = 0, dpr = 1, parts = [], running = false, t0 = performance.now();
    const make = () => {
      const n = Math.round(clamp((W * H) / 26000, 18, 60));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.4, v: Math.random() * 0.18 + 0.05,
        a: Math.random() * 0.5 + 0.15, ph: Math.random() * Math.PI * 2, tw: Math.random() * 1.5 + 0.5
      }));
    };
    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cvs.width = Math.round(W * dpr); cvs.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      make();
    };
    const draw = now => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      parts.forEach(p => {
        if (!reduce) { p.y -= p.v; p.x += Math.sin(t * 0.4 + p.ph) * 0.08; if (p.y < -6) { p.y = H + 6; p.x = Math.random() * W; } }
        const al = p.a * (0.55 + 0.45 * Math.sin(t * p.tw + p.ph));
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2); ctx.fillStyle = `rgba(198,244,50,${(al * 0.12).toFixed(3)})`; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(214,255,120,${al.toFixed(3)})`; ctx.fill();
      });
      if (running) requestAnimationFrame(draw);
    };
    size();
    window.addEventListener('resize', () => { clearTimeout(cvs._rz); cvs._rz = setTimeout(size, 200); });
    if (reduce) draw(performance.now());
    else {
      const start = () => { if (!running) { running = true; requestAnimationFrame(draw); } };
      const stop = () => { running = false; };
      document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
      start();
    }
  }

  /* ---------- 19. Rolagem: progresso, nav, timeline, texto grande ---------- */
  const progress = $('.scroll-progress span');
  const navLinks = $$('[data-nav-link]');
  const navInd = $('.nav-ind');
  const sections = $$('main > section');
  const steps = $('[data-steps]');
  const stepItems = steps ? $$('.step', steps) : [];
  const railFill = $('.rail-fill');
  const procNum = $('[data-proc-num]');
  const procTitle = $('[data-proc-title]');
  const procRing = $('.pr-fg');
  const bigText = $('[data-bigtext]');
  const btLines = bigText ? $$('.bt-line', bigText) : [];
  const mbar = $('[data-mbar]');
  const waFloat = $('.wa-float');
  const finalSec = $('#contato');
  let lastY = window.scrollY;
  let ticking = false;
  let navCurrent = undefined;

  function setNav(id) {
    if (id === navCurrent || !navInd) return;
    navCurrent = id;
    const link = navLinks.find(l => l.dataset.navLink === id);
    navLinks.forEach(l => l.classList.toggle('is-active', l === link));
    if (link) { moveIndicator(navInd, link); navInd.style.opacity = '1'; }
    else navInd.style.opacity = '0';
  }

  function onScroll() {
    ticking = false;
    const y = window.scrollY;
    const vh = window.innerHeight;
    const docH = document.documentElement.scrollHeight - vh;

    boost = Math.min(boost + Math.abs(y - lastY) * 0.02, 5);
    lastY = y;

    if (progress) progress.style.transform = `scaleX(${docH > 0 ? y / docH : 0})`;
    if (nav) nav.classList.toggle('is-scrolled', y > 20);

    let curNav = null;
    sections.forEach(s => { if (s.getBoundingClientRect().top <= vh * 0.4) curNav = s.dataset.nav || null; });
    setNav(curNav);

    if (steps && railFill && procNum && procTitle && procRing) {
      const r = steps.getBoundingClientRect();
      const mid = vh * 0.55;
      railFill.style.setProperty('--p', clamp((mid - r.top - 20) / (r.height - 40), 0, 1).toFixed(3));
      let active = 0;
      stepItems.forEach((s, i) => { if (s.getBoundingClientRect().top < mid) active = i; });
      stepItems.forEach((s, i) => s.classList.toggle('is-active', i <= active));
      procNum.textContent = String(active + 1).padStart(2, '0');
      procTitle.textContent = $('h3', stepItems[active]).textContent;
      procRing.style.strokeDashoffset = String(439.8 * (1 - (active + 1) / stepItems.length));
    }

    if (bigText && !reduce) {
      const r = bigText.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) {
        const t = (vh - r.top) / (vh + r.height) - 0.5;
        btLines.forEach(l => {
          const dir = parseFloat(l.dataset.btDir);
          l.style.transform = `translate3d(calc(-12% + ${(t * dir * window.innerWidth * 0.45).toFixed(1)}px),0,0)`;
        });
      }
    }

    const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 600;
    const finalTop = finalSec ? finalSec.getBoundingClientRect().top : Infinity;
    const show = y > heroBottom - vh * 0.3 && finalTop > vh * 0.6;
    if (mbar) mbar.classList.toggle('is-visible', show);
    if (waFloat) waFloat.classList.toggle('is-visible', y > heroBottom - vh * 0.3);
  }
  const requestTick = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
  window.addEventListener('scroll', requestTick, { passive: true });

  let rz;
  window.addEventListener('resize', () => {
    clearTimeout(rz);
    rz = setTimeout(() => {
      const activeLink = navLinks.find(l => l.classList.contains('is-active'));
      if (activeLink) moveIndicator(navInd, activeLink);
      moveIndicator(appInd, appTabs.find(t => t.classList.contains('is-active')));
      moveIndicator(billingInd, billingBtns.find(b => b.classList.contains('is-active')));
      redrawCharts();
      requestTick();
    }, 150);
  });

  // posiciona indicadores depois que as fontes carregam (larguras mudam)
  const settle = () => {
    bands.forEach(b => { b.setW = b.track.firstElementChild.offsetWidth || b.setW; });
    moveIndicator(appInd, appTabs.find(t => t.classList.contains('is-active')));
    moveIndicator(billingInd, billingBtns.find(b => b.classList.contains('is-active')));
    navCurrent = undefined;
    onScroll();
  };
  settle();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(settle);
  window.addEventListener('load', settle);
})();
