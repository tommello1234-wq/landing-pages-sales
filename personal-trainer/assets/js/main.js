/* =========================================================
   Método VOLT · interações da página
   JavaScript puro, sem dependências.
   ========================================================= */
(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const fmt = (n, dec = 0) => n.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec });

  /* ---------- mês da turma e ano ---------- */
  const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth() + (now.getDate() > 20 ? 1 : 0), 1);
  $$('[data-month]').forEach((el) => { el.textContent = MONTHS[target.getMonth()]; });
  $$('[data-year]').forEach((el) => { el.textContent = String(now.getFullYear()); });

  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-loaded')));

  /* ---------- títulos com palavras animadas ---------- */
  function splitWords(el, wrapClass) {
    let index = 0;
    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const parts = child.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const outer = document.createElement('span');
            outer.className = wrapClass;
            if (wrapClass === 'w') {
              const inner = document.createElement('span');
              inner.textContent = part;
              outer.style.setProperty('--i', index);
              outer.appendChild(inner);
              inner.style.setProperty('--i', index);
            } else {
              outer.textContent = part;
            }
            index += 1;
            frag.appendChild(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    };
    walk(el);
    return index;
  }
  $$('[data-split]').forEach((el) => splitWords(el, 'w'));

  /* ---------- revelação ao rolar ---------- */
  const revealEls = $$('[data-reveal], [data-split]');
  revealEls.forEach((el) => {
    if (!el.hasAttribute('data-reveal')) return;
    const siblings = Array.from(el.parentElement.children).filter((c) => c.hasAttribute('data-reveal'));
    const i = siblings.indexOf(el);
    if (i > 0) el.style.setProperty('--rd', `${Math.min(i * 80, 480)}ms`);
  });

  const onReveal = new Map();
  const reveal = (el) => {
    el.classList.add('is-in');
    const fn = onReveal.get(el);
    if (fn) { fn(); onReveal.delete(el); }
  };

  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { reveal(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach((el) => io.observe(el));
    window.__observeReveal = (el, fn) => { if (fn) onReveal.set(el, fn); io.observe(el); };
  } else {
    revealEls.forEach(reveal);
    window.__observeReveal = (el, fn) => { el.classList.add('is-in'); if (fn) fn(); };
  }
  const whenVisible = (el, fn) => window.__observeReveal(el, fn);

  /* ---------- contadores ---------- */
  function animateCount(el) {
    const end = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || '0', 10);
    if (reduceMotion) { el.textContent = fmt(end, dec); return; }
    const dur = 1700;
    const t0 = performance.now();
    const tick = (t) => {
      const p = clamp((t - t0) / dur, 0, 1);
      const eased = 1 - Math.pow(2, -10 * p);
      el.textContent = fmt(end * (p === 1 ? 1 : eased), dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  $$('[data-count]').forEach((el) => {
    if (!reduceMotion) el.textContent = fmt(0, parseInt(el.dataset.decimals || '0', 10));
    const host = el.closest('[data-reveal]') || el.closest('.device') || el;
    if (host === el) { whenVisible(el, () => animateCount(el)); return; }
    const io = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) { animateCount(el); obs.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(host);
  });

  /* ---------- navegação ---------- */
  const nav = $('[data-nav]');
  const navLinks = $$('.nav__links a');
  const navPill = $('.nav__pill');
  const burger = $('.nav__burger');
  const menu = $('#menu-mobile');
  const sectionsForNav = navLinks
    .map((a) => ({ a, sec: document.querySelector(a.getAttribute('href')) }))
    .filter((x) => x.sec);

  function moveNavPill(link) {
    if (!navPill) return;
    if (!link || !link.offsetParent) { navPill.style.opacity = '0'; return; }
    navPill.style.opacity = '1';
    navPill.style.width = `${link.offsetWidth}px`;
    navPill.style.transform = `translateX(${link.offsetLeft}px)`;
  }

  function toggleMenu(open) {
    const isOpen = open ?? burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menu.hidden = !isOpen;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    nav.classList.toggle('is-menu', isOpen);
  }
  if (burger && menu) {
    burger.addEventListener('click', () => toggleMenu());
    $$('a', menu).forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) toggleMenu(false); });
  }

  /* ---------- faixas (marquee) com velocidade reativa ao scroll ---------- */
  const marquees = $$('[data-marquee]').map((track) => {
    const original = Array.from(track.children);
    const fill = () => {
      while (track.scrollWidth < window.innerWidth * 2.4) {
        original.forEach((n) => track.appendChild(n.cloneNode(true)));
      }
    };
    fill();
    // duplica tudo mais uma vez para o loop contínuo
    Array.from(track.children).forEach((n) => track.appendChild(n.cloneNode(true)));
    return { track, dir: parseFloat(track.dataset.marquee) || 1, x: 0, half: track.scrollWidth / 2 };
  });
  let scrollBoost = 0;
  let marqueeVisible = true;
  const bands = $('.bands');
  if (bands && 'IntersectionObserver' in window) {
    new IntersectionObserver((entries) => { marqueeVisible = entries[0].isIntersecting; }).observe(bands);
  }
  if (!reduceMotion && marquees.length) {
    let last = performance.now();
    const loop = (t) => {
      const dt = Math.min(64, t - last);
      last = t;
      scrollBoost *= 0.92;
      if (marqueeVisible) {
        marquees.forEach((m) => {
          const speed = (0.05 + Math.min(scrollBoost, 1) * 0.35) * m.dir;
          m.x -= speed * dt;
          if (m.x <= -m.half) m.x += m.half;
          if (m.x > 0) m.x -= m.half;
          m.track.style.transform = `translate3d(${m.x}px,0,0)`;
        });
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    window.addEventListener('resize', () => marquees.forEach((m) => { m.half = m.track.scrollWidth / 2; }));
  }

  /* ---------- dores (diagnóstico) ---------- */
  const pains = $$('.pain');
  const diagnosis = $('.diagnosis');
  const painCopy = [
    ['Toque nas frases que descrevem a sua rotina.', 'O diagnóstico aparece aqui na hora.'],
    ['Já é um sinal de alerta.', 'Uma frase marcada mostra que falta direção no seu treino. Marque as outras que também acontecem com você.'],
    ['A consultoria foi feita para você.', 'Você tem os sinais clássicos de quem treina sem estratégia. Com um plano sob medida isso muda nas primeiras semanas.'],
    ['Você precisa de acompanhamento.', 'Chega de tentar sozinho. O Método VOLT foi desenhado para resolver exatamente esses pontos.']
  ];
  function updateDiagnosis() {
    const count = pains.filter((p) => p.getAttribute('aria-pressed') === 'true').length;
    $('[data-pain-count]').textContent = count;
    $$('.diagnosis__meter i').forEach((seg, i) => seg.classList.toggle('is-on', i < count));
    const level = count === 0 ? 0 : count === 1 ? 1 : count <= 3 ? 2 : 3;
    $('[data-pain-title]').textContent = painCopy[level][0];
    $('[data-pain-text]').textContent = painCopy[level][1];
    diagnosis.classList.toggle('is-ready', count >= 2);
    diagnosis.classList.remove('is-bump');
    void diagnosis.offsetWidth;
    diagnosis.classList.add('is-bump');
  }
  pains.forEach((p) => p.addEventListener('click', () => {
    p.setAttribute('aria-pressed', String(p.getAttribute('aria-pressed') !== 'true'));
    updateDiagnosis();
  }));

  /* ---------- manifesto: palavras acendem com o scroll ---------- */
  const manifesto = $('.manifesto');
  const manifestoText = $('[data-words]');
  let manifestoWords = [];
  if (manifestoText) {
    splitWords(manifestoText, 'mw');
    manifestoWords = $$('.mw', manifestoText).map((el) => ({ el, o: -1 }));
  }
  function updateManifesto(vh) {
    if (!manifesto || reduceMotion) return;
    const r = manifesto.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) return;
    const total = r.height - vh;
    const p = clamp((-r.top + vh * 0.25) / (total + vh * 0.1), 0, 1);
    const lit = p * manifestoWords.length * 1.15;
    manifestoWords.forEach((w, i) => {
      const o = Math.round((0.14 + 0.86 * clamp(lit - i, 0, 1)) * 100) / 100;
      if (o !== w.o) { w.o = o; w.el.style.opacity = o; }
    });
  }

  /* ---------- pilares do método ---------- */
  const pillars = $$('.pillar');
  const activatePillar = (p) => pillars.forEach((x) => x.classList.toggle('is-active', x === p));
  pillars.forEach((p) => {
    p.addEventListener('click', () => activatePillar(p));
    p.addEventListener('focus', () => activatePillar(p));
    if (finePointer) p.addEventListener('mouseenter', () => activatePillar(p));
    p.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activatePillar(p); } });
  });

  /* ---------- como funciona: passos + telas do celular ---------- */
  const stepsList = $('[data-steps]');
  const steps = $$('.step');
  const screens = $$('.screen');
  let activeStep = 0;
  function updateSteps(vh) {
    if (!stepsList) return;
    const r = stepsList.getBoundingClientRect();
    if (r.bottom < -100 || r.top > vh + 100) return;
    const mid = vh * 0.52;
    let current = 0;
    steps.forEach((s, i) => {
      const sr = s.getBoundingClientRect();
      if (sr.top + sr.height * 0.35 < mid) current = i;
    });
    if (current !== activeStep) {
      activeStep = current;
      steps.forEach((s, i) => s.classList.toggle('is-active', i === current));
      screens.forEach((s, i) => s.classList.toggle('is-active', i === current));
    }
    const fill = clamp((mid - r.top - vh * 0.12) / (r.height - vh * 0.24), 0, 1);
    stepsList.style.setProperty('--fill', fill.toFixed(3));
  }

  /* ---------- treino: mapa muscular ---------- */
  const MUSCLE_NAMES = {
    chest: 'Peitoral', triceps: 'Tríceps', delts: 'Deltoides', biceps: 'Bíceps', forearms: 'Antebraço',
    traps: 'Trapézio', lats: 'Dorsais', abs: 'Abdômen', obliques: 'Oblíquos', lowerback: 'Lombar',
    glutes: 'Glúteos', quads: 'Quadríceps', adductors: 'Adutores', hamstrings: 'Posteriores', calves: 'Panturrilhas'
  };
  const DAYS = [
    { day: 'Segunda-feira', title: 'Peito e tríceps', time: '55 min', rpe: 'RPE 8', muscles: ['chest', 'triceps', 'delts'],
      list: [['Supino reto com barra', '4×8', '120s'], ['Supino inclinado com halteres', '3×10', '90s'], ['Crucifixo na polia', '3×12', '60s'], ['Tríceps na corda', '4×12', '60s'], ['Tríceps francês', '3×10', '60s']] },
    { day: 'Terça-feira', title: 'Costas e bíceps', time: '55 min', rpe: 'RPE 8', muscles: ['lats', 'traps', 'biceps', 'forearms'],
      list: [['Barra fixa pronada', '4×6', '120s'], ['Remada curvada com barra', '4×10', '90s'], ['Puxada com triângulo', '3×12', '60s'], ['Rosca direta', '3×10', '60s'], ['Rosca martelo', '3×12', '60s']] },
    { day: 'Quarta-feira', title: 'Quadríceps e panturrilha', time: '60 min', rpe: 'RPE 9', muscles: ['quads', 'adductors', 'calves'],
      list: [['Agachamento livre', '4×8', '150s'], ['Leg press 45°', '4×12', '90s'], ['Afundo búlgaro', '3×10', '90s'], ['Cadeira extensora', '3×15', '60s'], ['Panturrilha em pé', '4×15', '45s']] },
    { day: 'Quinta-feira', title: 'Ombros e core', time: '45 min', rpe: 'RPE 7', muscles: ['delts', 'traps', 'abs', 'obliques'],
      list: [['Desenvolvimento com halteres', '4×10', '90s'], ['Elevação lateral', '4×15', '45s'], ['Encolhimento', '3×12', '60s'], ['Prancha', '3×45s', '45s'], ['Abdominal infra', '3×15', '45s']] },
    { day: 'Sexta-feira', title: 'Posterior e glúteos', time: '55 min', rpe: 'RPE 8', muscles: ['hamstrings', 'glutes', 'lowerback', 'calves'],
      list: [['Levantamento terra romeno', '4×8', '120s'], ['Elevação pélvica', '4×10', '90s'], ['Mesa flexora', '3×12', '60s'], ['Cadeira abdutora', '3×15', '45s'], ['Panturrilha sentado', '4×15', '45s']] },
    { day: 'Sábado', title: 'HIIT metabólico', time: '30 min', rpe: 'RPE 9', muscles: ['quads', 'glutes', 'hamstrings', 'abs', 'obliques', 'delts', 'calves'],
      list: [['Tiros na esteira', '10×30s', '60s'], ['Kettlebell swing', '4×15', '45s'], ['Burpee', '4×12', '45s'], ['Mountain climber', '4×30s', '30s'], ['Prancha lateral', '3×30s', '30s']] },
    { day: 'Domingo', title: 'Descanso ativo', time: 'Livre', rpe: 'Leve', muscles: [],
      rest: ['Caminhada leve de 30 minutos', 'Alongamento e mobilidade por 15 minutos', 'Oito horas de sono: é aqui que o músculo cresce'] }
  ];
  const dayBtns = $$('.day');
  const muscleGroups = $$('.mg');
  const trainingPanel = $('.training__panel');
  const wDay = $('[data-w-day]');
  const wTitle = $('[data-w-title]');
  const wMeta = $('[data-w-meta]');
  const wList = $('[data-w-list]');
  const wMuscles = $('[data-w-muscles]');
  let currentDay = 0;
  let autoTimer = null;
  let userPickedDay = false;

  function renderDay(i) {
    const d = DAYS[i];
    currentDay = i;
    dayBtns.forEach((b, j) => {
      b.classList.toggle('is-active', j === i);
      b.setAttribute('aria-selected', String(j === i));
    });
    muscleGroups.forEach((g) => g.classList.toggle('is-on', d.muscles.includes(g.dataset.m)));
    wDay.textContent = d.day;
    wTitle.textContent = d.title;
    const count = d.list ? d.list.length : d.rest.length;
    wMeta.innerHTML = `
      <span><svg><use href="#i-clock"/></svg>${d.time}</span>
      <span><svg><use href="#i-dumbbell"/></svg>${d.list ? count + ' exercícios' : 'Recuperação'}</span>
      <span><svg><use href="#i-flame"/></svg>${d.rpe}</span>`;
    if (d.list) {
      wList.innerHTML = d.list.map((ex, j) => `
        <li style="--i:${j}">
          <span class="n">${String(j + 1).padStart(2, '0')}</span>
          <span>${ex[0]}</span>
          <span class="s">${ex[1]}</span>
          <span class="r">${ex[2]} desc.</span>
        </li>`).join('');
    } else {
      wList.innerHTML = d.rest.map((r, j) => `<li class="rest" style="--i:${j}"><span class="n">${String(j + 1).padStart(2, '0')}</span><span>${r}</span></li>`).join('');
    }
    wMuscles.innerHTML = d.muscles.length
      ? d.muscles.map((m) => `<span>${MUSCLE_NAMES[m]}</span>`).join('')
      : '<span>Recuperação muscular</span>';
    if (trainingPanel) {
      trainingPanel.classList.remove('is-auto');
      if (!userPickedDay && autoTimer) { void trainingPanel.offsetWidth; trainingPanel.classList.add('is-auto'); }
    }
  }
  function startAuto() {
    if (reduceMotion || userPickedDay || autoTimer) return;
    autoTimer = setInterval(() => renderDay((currentDay + 1) % DAYS.length), 4000);
    trainingPanel.classList.add('is-auto');
  }
  function stopAuto() {
    clearInterval(autoTimer);
    autoTimer = null;
    if (trainingPanel) trainingPanel.classList.remove('is-auto');
  }
  dayBtns.forEach((b, i) => b.addEventListener('click', () => { userPickedDay = true; stopAuto(); renderDay(i); }));
  const daysList = $('.days');
  if (daysList) {
    daysList.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = (currentDay + (e.key === 'ArrowRight' ? 1 : -1) + DAYS.length) % DAYS.length;
      userPickedDay = true; stopAuto(); renderDay(next); dayBtns[next].focus();
    });
  }
  if (wList) {
    renderDay(0);
    if (trainingPanel && 'IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) startAuto(); else stopAuto();
      }, { threshold: 0.35 }).observe(trainingPanel);
    }
  }

  /* ---------- painel do coach ---------- */
  const STUDENTS = [
    { id: 'CK-0612', name: 'Juliana Alves', short: 'Juliana A.', av: 1, ini: 'JA', age: 29, week: 12, goal: 'Emagrecimento', status: 'done', ago: 'há 2 dias', value: '−11,2 kg',
      tiles: [['−11,2', 'kg', 'Peso', 'down'], ['−7,8', 'p.p.', 'Gordura corporal', 'down'], ['−14', 'cm', 'Cintura', 'down']],
      series: [78.4, 77.2, 76.1, 74.6, 73.1, 71.4, 69.9, 68.3, 67.2], chart: 'Peso · 12 semanas',
      foot: [['Início', '78,4', 'kg'], ['Atual', '67,2', 'kg'], ['Meta', '65,0', 'kg']] },
    { id: 'CK-0615', name: 'Rafael Nunes', short: 'Rafael N.', av: 2, ini: 'RN', age: 34, week: 16, goal: 'Hipertrofia', status: 'new', ago: 'há 3 horas', value: '+6,6 kg',
      tiles: [['+6,6', 'kg', 'Peso', 'up'], ['+5,1', 'kg', 'Massa magra', 'up'], ['+3,5', 'cm', 'Braço', 'up']],
      series: [68.0, 68.9, 69.7, 70.6, 71.5, 72.4, 73.2, 74.0, 74.6], chart: 'Peso · 16 semanas',
      foot: [['Início', '68,0', 'kg'], ['Atual', '74,6', 'kg'], ['Meta', '76,0', 'kg']] },
    { id: 'CK-0598', name: 'Marina Costa', short: 'Marina C.', av: 3, ini: 'MC', age: 41, week: 20, goal: 'Emagrecimento', status: 'done', ago: 'há 5 dias', value: '−15,8 kg',
      tiles: [['−15,8', 'kg', 'Peso', 'down'], ['−9,1', 'p.p.', 'Gordura corporal', 'down'], ['−17', 'cm', 'Cintura', 'down']],
      series: [89.5, 87.6, 85.9, 83.8, 81.9, 79.7, 77.4, 75.2, 73.7], chart: 'Peso · 20 semanas',
      foot: [['Início', '89,5', 'kg'], ['Atual', '73,7', 'kg'], ['Meta', '70,0', 'kg']] },
    { id: 'CK-0621', name: 'Bruno Tavares', short: 'Bruno T.', av: 6, ini: 'BT', age: 38, week: 8, goal: 'Condicionamento', status: 'new', ago: 'há 1 hora', value: '26 min',
      tiles: [['26', 'min', 'Tempo nos 5 km', 'down'], ['−12', 'bpm', 'FC de repouso', 'down'], ['+38', '%', 'VO₂ estimado', 'up']],
      series: [34, 33, 31.5, 30.4, 29.1, 28.2, 27.3, 26.5, 26], chart: '5 km · 8 semanas',
      foot: [['Início', '34', 'min'], ['Atual', '26', 'min'], ['Meta', '24', 'min']] },
    { id: 'CK-0587', name: 'Diego Martins', short: 'Diego M.', av: 4, ini: 'DM', age: 27, week: 10, goal: 'Recomposição', status: 'done', ago: 'há 1 semana', value: '−6,3%',
      tiles: [['−6,3', 'p.p.', 'Gordura corporal', 'down'], ['+2,4', 'kg', 'Massa magra', 'up'], ['−7', 'cm', 'Cintura', 'down']],
      series: [21.8, 21.0, 20.1, 19.2, 18.4, 17.6, 16.8, 16.0, 15.5], chart: '% de gordura · 10 semanas',
      foot: [['Início', '21,8', '%'], ['Atual', '15,5', '%'], ['Meta', '13,0', '%']] },
    { id: 'CK-0574', name: 'Patrícia Lima', short: 'Patrícia L.', av: 5, ini: 'PL', age: 52, week: 24, goal: 'Saúde e mobilidade', status: 'done', ago: 'há 2 semanas', value: '−9,6 kg',
      tiles: [['−9,6', 'kg', 'Peso', 'down'], ['−12', 'cm', 'Cintura', 'down'], ['0', '/10', 'Dor lombar', 'down']],
      series: [82.1, 81.0, 79.8, 78.5, 77.1, 75.9, 74.6, 73.3, 72.5], chart: 'Peso · 24 semanas',
      foot: [['Início', '82,1', 'kg'], ['Atual', '72,5', 'kg'], ['Meta', '70,0', 'kg']] }
  ];
  const studentsEl = $('[data-students]');
  const detail = $('[data-detail]');
  let filter = 'all';
  let selected = STUDENTS[0].id;

  function sparkline(series, idSuffix) {
    const w = 160;
    const h = 54;
    const min = Math.min(...series);
    const max = Math.max(...series);
    const pts = series.map((v, i) => [
      (i / (series.length - 1)) * w,
      6 + (1 - (v - min) / (max - min || 1)) * (h - 12)
    ]);
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
    const last = pts[pts.length - 1];
    return `<svg class="mini" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="mini-fill-${idSuffix}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c3f53c" stop-opacity=".28"/><stop offset="1" stop-color="#c3f53c" stop-opacity="0"/></linearGradient></defs>
      <path d="${line} L${w} ${h} L0 ${h} Z" fill="url(#mini-fill-${idSuffix})"/>
      <path class="mini__line" d="${line}" pathLength="100"/>
      <circle class="mini__dot" cx="${last[0]}" cy="${last[1]}" r="4"/>
    </svg>`;
  }

  function renderStudents() {
    const list = STUDENTS.filter((s) => filter === 'all' || s.status === filter);
    if (!list.some((s) => s.id === selected)) selected = list[0].id;
    studentsEl.innerHTML = list.map((s, i) => `
      <li>
        <button class="student" type="button" aria-pressed="${s.id === selected}" data-id="${s.id}" style="--i:${i}">
          <span class="av av--${s.av}">${s.ini}</span>
          <span class="student__name"><b>${s.short} · #${s.id}</b><span>${s.ago}</span></span>
          <span class="status${s.status === 'new' ? ' status--new' : ''}">${s.status === 'new' ? 'Novo' : 'Respondido'}</span>
          <span class="student__val">${s.value}</span>
        </button>
      </li>`).join('');
    renderDetail();
  }

  function renderDetail() {
    const s = STUDENTS.find((x) => x.id === selected);
    if (!s || !detail) return;
    $('[data-d-id]', detail).textContent = s.id;
    const st = $('[data-d-status]', detail);
    st.textContent = s.status === 'new' ? 'Novo' : 'Respondido';
    st.className = `status${s.status === 'new' ? ' status--new' : ''}`;
    $('[data-d-goal]', detail).textContent = s.goal;
    const av = $('[data-d-av]', detail);
    av.className = `av av--${s.av}`;
    av.textContent = s.ini;
    $('[data-d-name]', detail).textContent = s.name;
    $('[data-d-meta]', detail).textContent = `${s.age} anos · Semana ${s.week}`;
    $('[data-d-tiles]', detail).innerHTML = s.tiles.map((t, i) => `
      <div class="tile-m" style="--i:${i}">
        <span class="tile-m__trend"><svg><use href="#i-trend-${t[3]}"/></svg></span>
        <p class="tile-m__val">${t[0]}<small>${t[1]}</small></p>
        <p class="tile-m__label">${t[2]}</p>
      </div>`).join('') + `
      <div class="tile-m tile-m--chart" style="--i:3">
        ${sparkline(s.series, s.id)}
        <p class="tile-m__label">${s.chart}</p>
      </div>`;
    $('[data-d-foot]', detail).innerHTML = s.foot.map((f) => `<p><small>${f[0]}</small><b>${f[1]} <span class="muted">${f[2]}</span></b></p>`).join('');
    detail.classList.remove('is-swapping');
    void detail.offsetWidth;
    detail.classList.add('is-swapping');
  }

  if (studentsEl) {
    renderStudents();
    studentsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.student');
      if (!btn || btn.dataset.id === selected) return;
      selected = btn.dataset.id;
      $$('.student', studentsEl).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      renderDetail();
    });
    $$('.sheet__tabs button').forEach((b) => b.addEventListener('click', () => {
      filter = b.dataset.filter;
      $$('.sheet__tabs button').forEach((x) => {
        x.classList.toggle('is-on', x === b);
        x.setAttribute('aria-selected', String(x === b));
      });
      renderStudents();
    }));
  }
  const device = $('[data-device]');
  if (device) whenVisible(device);
  function updateDevice(vh) {
    if (!device || reduceMotion) return;
    const r = device.getBoundingClientRect();
    if (r.top > vh || r.bottom < 0) return;
    const p = clamp((vh - r.top) / (vh * 0.9), 0, 1);
    const e = 1 - Math.pow(1 - p, 3);
    device.style.setProperty('--tilt', `${(1 - e) * 18}deg`);
    device.style.setProperty('--scale', (0.9 + e * 0.1).toFixed(4));
  }

  /* ---------- bento: brilho que segue o cursor, calendário e timer ---------- */
  if (finePointer) {
    $$('[data-spot]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }
  const calGrid = $('.tile-cal__grid');
  if (calGrid) {
    const y = target.getFullYear();
    const m = target.getMonth();
    const firstDow = (new Date(y, m, 1).getDay() + 6) % 7; // segunda = 0
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const checkins = [1, 16, Math.min(31, daysInMonth)];
    const today = now.getMonth() === m ? now.getDate() : 0;
    let html = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((h) => `<span class="h">${h}</span>`).join('');
    for (let i = 0; i < firstDow; i += 1) html += '<span></span>';
    for (let d = 1; d <= daysInMonth; d += 1) {
      const cls = checkins.includes(d) ? 'd ck' : d === today ? 'd today' : 'd';
      html += `<span class="${cls}">${d}</span>`;
    }
    calGrid.innerHTML = html;
    const month = document.createElement('p');
    month.className = 'tile-cal__month';
    month.innerHTML = `${MONTHS[m].charAt(0).toUpperCase() + MONTHS[m].slice(1)} ${y}<span>3 check-ins</span>`;
    calGrid.before(month);
  }
  $$('.tile').forEach((t) => whenVisible(t));
  const timerLabel = $('[data-timer]');
  const timerBar = $('.tile-app__timer-bar');
  if (timerLabel && timerBar && !reduceMotion) {
    let left = 90;
    setInterval(() => {
      left = left <= 0 ? 90 : left - 1;
      timerLabel.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
      timerBar.style.setProperty('--off', String(100 - (left / 90) * 100));
    }, 1000);
  }

  /* ---------- resultados: histórias arrastáveis ---------- */
  const track = $('[data-stories]');
  if (track) {
    const step = () => (track.querySelector('.story')?.offsetWidth || 360) + 16;
    $('[data-stories-prev]').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    $('[data-stories-next]').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4 && !moved) { moved = true; track.classList.add('is-dragging'); }
      if (moved) track.scrollLeft = startScroll - dx;
    });
    const end = () => {
      if (!down) return;
      down = false;
      if (moved) {
        track.classList.remove('is-dragging');
        const w = step();
        track.scrollTo({ left: Math.round(track.scrollLeft / w) * w, behavior: 'smooth' });
      }
    };
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
  }
  const stories = $('.stories');
  if (stories) whenVisible(stories);

  /* ---------- mensagens: duplica para loop infinito ---------- */
  $$('[data-chat-row]').forEach((row) => {
    Array.from(row.children).forEach((n) => {
      const c = n.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      row.appendChild(c);
    });
  });

  /* ---------- cartão do coach em 3D ---------- */
  const card = $('[data-tilt]');
  if (card && finePointer && !reduceMotion) {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.classList.add('is-tilting');
      card.style.setProperty('--ry', `${(x - 0.5) * 14}deg`);
      card.style.setProperty('--rx', `${(0.5 - y) * 12}deg`);
      card.style.setProperty('--gx', `${x * 100}%`);
      card.style.setProperty('--gy', `${y * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  }

  /* ---------- FAQ com altura animada ---------- */
  const faqItems = $$('.qa');
  function setOpen(item, open) {
    const body = $('.qa__body', item);
    if (reduceMotion || !body.animate) { item.open = open; return; }
    if (open) {
      item.open = true;
      const h = body.scrollHeight;
      body.animate([{ height: '0px', opacity: 0 }, { height: `${h}px`, opacity: 1 }], { duration: 480, easing: 'cubic-bezier(.22,1,.36,1)' });
    } else {
      const h = body.scrollHeight;
      const anim = body.animate([{ height: `${h}px`, opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 360, easing: 'cubic-bezier(.65,0,.35,1)' });
      anim.onfinish = () => { item.open = false; };
    }
  }
  faqItems.forEach((item) => {
    $('summary', item).addEventListener('click', (e) => {
      e.preventDefault();
      const willOpen = !item.open;
      if (willOpen) faqItems.forEach((o) => { if (o !== item && o.open) setOpen(o, false); });
      setOpen(item, willOpen);
    });
  });

  /* ---------- CTA final: texto gigante desliza com o scroll ---------- */
  const giant = $('.final__giant');
  const finalSec = $('.final');
  function updateGiant(vh) {
    if (!giant || reduceMotion) return;
    const r = finalSec.getBoundingClientRect();
    if (r.top > vh || r.bottom < 0) return;
    const p = clamp((vh - r.top) / (vh + r.height), 0, 1);
    giant.style.setProperty('--gx', `${lerp(12, -38, p)}%`);
  }
  $$('.final__slots').forEach((el) => whenVisible(el));

  /* ---------- botões magnéticos ---------- */
  if (finePointer && !reduceMotion) {
    $$('[data-magnetic]').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.translate = `${dx * 0.18}px ${dy * 0.3}px`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.translate = ''; });
    });
  }

  /* ---------- cursor personalizado ---------- */
  const cursor = $('.cursor');
  if (cursor && finePointer && !reduceMotion) {
    const dot = $('.cursor__dot', cursor);
    const ring = $('.cursor__ring', cursor);
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let running = false;
    const run = () => {
      rx = lerp(rx, mx, 0.18);
      ry = lerp(ry, my, 0.18);
      dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      if (Math.abs(rx - mx) > 0.1 || Math.abs(ry - my) > 0.1) requestAnimationFrame(run);
      else running = false;
    };
    window.addEventListener('pointermove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.classList.remove('is-hidden');
      if (!running) { running = true; requestAnimationFrame(run); }
    }, { passive: true });
    document.addEventListener('pointerleave', () => cursor.classList.add('is-hidden'));
    const hoverSel = 'a, button, summary, .pain, .pillar, .day, .student, [data-spot], [data-tilt]';
    document.addEventListener('pointerover', (e) => { if (e.target.closest(hoverSel)) cursor.classList.add('is-hover'); });
    document.addEventListener('pointerout', (e) => { if (e.target.closest(hoverSel)) cursor.classList.remove('is-hover'); });
  }

  /* ---------- parallax do hero com o mouse ---------- */
  const heroVisual = $('[data-parallax-root]');
  if (heroVisual && finePointer && !reduceMotion) {
    const layers = $$('[data-depth]', heroVisual).map((el) => ({ el, d: parseFloat(el.dataset.depth), x: 0, y: 0 }));
    let tx = 0;
    let ty = 0;
    let running = false;
    const run = () => {
      let moving = false;
      layers.forEach((l) => {
        l.x = lerp(l.x, tx * l.d, 0.08);
        l.y = lerp(l.y, ty * l.d, 0.08);
        if (Math.abs(l.x - tx * l.d) > 0.05 || Math.abs(l.y - ty * l.d) > 0.05) moving = true;
        l.el.style.translate = `${l.x.toFixed(2)}px ${l.y.toFixed(2)}px`;
      });
      if (moving) requestAnimationFrame(run); else running = false;
    };
    const hero = $('.hero');
    hero.addEventListener('pointermove', (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 36;
      ty = (e.clientY / window.innerHeight - 0.5) * 28;
      if (!running) { running = true; requestAnimationFrame(run); }
    });
    hero.addEventListener('pointerleave', () => {
      tx = 0; ty = 0;
      if (!running) { running = true; requestAnimationFrame(run); }
    });
  }

  /* ---------- CTA fixo (mobile) e dica do WhatsApp ---------- */
  const stickyCta = $('[data-sticky-cta]');
  const heroSec = $('.hero');
  const hideStickyOn = [$('#planos'), $('.final'), $('.footer')].filter(Boolean);
  function updateSticky(vh) {
    if (!stickyCta) return;
    const pastHero = heroSec.getBoundingClientRect().bottom < 0;
    const overHidden = hideStickyOn.some((el) => {
      const r = el.getBoundingClientRect();
      return r.top < vh && r.bottom > 0;
    });
    const show = pastHero && !overHidden;
    stickyCta.classList.toggle('is-visible', show);
    document.body.classList.toggle('has-sticky', show);
  }
  const waFloat = $('.wa-float');
  if (waFloat && !reduceMotion) {
    setTimeout(() => { waFloat.classList.add('is-tip'); setTimeout(() => waFloat.classList.remove('is-tip'), 4200); }, 9000);
  }

  /* ---------- loop de scroll ---------- */
  const toneSections = $$('[data-tone]');
  const progressBar = $('.progress span');
  let lastY = window.scrollY;
  let ticking = false;
  function onFrame() {
    ticking = false;
    const y = window.scrollY;
    const vh = window.innerHeight;
    const docH = document.documentElement.scrollHeight - vh;
    const delta = y - lastY;

    if (progressBar) progressBar.parentElement.style.setProperty('--p', docH > 0 ? (y / docH).toFixed(4) : 0);
    scrollBoost = Math.min(1.6, scrollBoost + Math.abs(delta) * 0.004);

    // navegação: fundo, esconder ao descer e mostrar ao subir
    nav.classList.toggle('is-scrolled', y > 24);
    if (!nav.classList.contains('is-menu')) {
      if (y > 480 && delta > 6) nav.classList.add('is-hidden');
      else if (delta < -6 || y < 480) nav.classList.remove('is-hidden');
    }

    // link ativo
    let active = null;
    sectionsForNav.forEach(({ a, sec }) => { if (sec.getBoundingClientRect().top <= vh * 0.42) active = a; });
    const lastSec = sectionsForNav[sectionsForNav.length - 1];
    if (lastSec && lastSec.sec.getBoundingClientRect().bottom < vh * 0.3) active = null;
    navLinks.forEach((a) => a.classList.toggle('is-active', a === active));
    moveNavPill(active);

    // tom do fundo por seção
    const mid = vh * 0.5;
    for (const sec of toneSections) {
      const r = sec.getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) {
        if (root.dataset.tone !== sec.dataset.tone) root.dataset.tone = sec.dataset.tone;
        break;
      }
    }

    updateManifesto(vh);
    updateSteps(vh);
    updateDevice(vh);
    updateGiant(vh);
    updateSticky(vh);
    lastY = y;
  }
  const requestFrame = () => { if (!ticking) { ticking = true; requestAnimationFrame(onFrame); } };
  window.addEventListener('scroll', requestFrame, { passive: true });
  window.addEventListener('resize', requestFrame);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(requestFrame);
  onFrame();
})();
