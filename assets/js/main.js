/* =========================================================
   MÉTODO VOLT — interações e animações (vanilla JS, sem libs)
   ========================================================= */
(() => {
  'use strict';

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const lerp = (a, b, t) => a + (b - a) * t;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const fmt = (n, decimals = 0) =>
    n.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  /* ---------- Preloader ---------- */
  const preloader = $('.preloader');
  const preCount = $('[data-preload-count]');
  const preBar = $('.preloader__bar');
  document.body.classList.add('is-loading');

  const finishLoading = () => {
    if (document.body.classList.contains('is-loaded')) return;
    preloader && preloader.classList.add('is-done');
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-loaded');
  };

  if (reduceMotion || !preloader) {
    finishLoading();
  } else {
    const dur = 1100;
    const t0 = performance.now();
    const tick = (now) => {
      const p = clamp((now - t0) / dur, 0, 1);
      const e = 1 - Math.pow(1 - p, 3);
      preCount.textContent = Math.round(e * 100);
      preBar.style.setProperty('--p', e);
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(finishLoading, 180);
    };
    requestAnimationFrame(tick);
    setTimeout(finishLoading, 3000); // segurança
  }

  /* ---------- Count up ---------- */
  const countUp = (el) => {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = prefix + fmt(target, decimals) + suffix; return; }
    const dur = 1800;
    const t0 = performance.now();
    const step = (now) => {
      const p = clamp((now - t0) / dur, 0, 1);
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = prefix + fmt(target * e, decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ---------- Reveal on scroll ---------- */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-in');
      $$('[data-count]', el).forEach((c) => {
        if (!c.closest('.dash__panel:not(.is-active)')) countUp(c);
      });
      revealIO.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  $$('[data-reveal]').forEach((el) => revealIO.observe(el));

  const tabletWrap = $('[data-tablet]');
  if (tabletWrap) revealIO.observe(tabletWrap);

  // Contadores fora de [data-reveal] (ex: dentro do dashboard)
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (!entry.target.closest('.dash__panel:not(.is-active)')) {
        countUp(entry.target);
        countIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  $$('[data-count]').forEach((el) => countIO.observe(el));

  /* ---------- Header: scrolled / hide on scroll down / active link ---------- */
  const header = $('[data-header]');
  const progressBar = $('.scroll-progress i');
  const whats = $('.whats');
  let lastY = window.scrollY;

  const nav = $('.nav');
  const navPill = $('.nav__pill');
  const navLinks = $$('.nav__link');
  const movePill = (link) => {
    if (!navPill) return;
    if (!link) { navPill.style.opacity = '0'; return; }
    navPill.style.opacity = '1';
    navPill.style.width = link.offsetWidth + 'px';
    navPill.style.transform = `translateX(${link.offsetLeft}px)`;
  };
  let activeLink = null;
  navLinks.forEach((l) => {
    l.addEventListener('mouseenter', () => movePill(l));
  });
  nav && nav.addEventListener('mouseleave', () => movePill(activeLink));

  const sections = navLinks
    .map((l) => ({ link: l, section: $(l.getAttribute('href')) }))
    .filter((x) => x.section);

  const updateActive = () => {
    const mid = window.innerHeight * 0.35;
    let current = null;
    sections.forEach(({ link, section }) => {
      const r = section.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) current = link;
    });
    if (current !== activeLink) {
      navLinks.forEach((l) => l.classList.toggle('is-active', l === current));
      activeLink = current;
      if (!nav.matches(':hover')) movePill(current);
    }
  };

  /* ---------- Scroll-linked effects ---------- */
  const scrub = $('[data-scrub]');
  let scrubWords = [];
  if (scrub) {
    // Divide o texto em palavras preservando <em>
    const wrap = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const s = document.createElement('span');
            s.className = 'w';
            s.textContent = part;
            frag.appendChild(s);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) {
          wrap(child);
        }
      });
    };
    wrap(scrub);
    scrubWords = $$('.w', scrub);
  }

  const stepsList = $('[data-steps]');
  const stepsFill = $('[data-steps-fill]');
  const steps = $$('[data-step]');
  const tablet = $('.tablet');

  const onScroll = () => {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const docH = document.documentElement.scrollHeight - vh;

    // progress bar
    if (progressBar) progressBar.style.transform = `scaleX(${docH > 0 ? y / docH : 0})`;

    // header
    header.classList.toggle('is-scrolled', y > 30);
    const menuOpen = document.body.classList.contains('menu-open');
    header.classList.toggle('is-hidden', !menuOpen && y > lastY && y > 600);
    lastY = y;

    // whatsapp
    whats && whats.classList.toggle('is-visible', y > vh * 0.8);

    updateActive();

    // scrub text
    if (scrub && scrubWords.length) {
      const r = scrub.getBoundingClientRect();
      const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0, 1);
      const n = Math.floor(p * scrubWords.length * 1.05);
      scrubWords.forEach((w, i) => w.classList.toggle('on', i < n));
    }

    // steps progress line
    if (stepsList && stepsFill) {
      const r = stepsList.getBoundingClientRect();
      const p = clamp((vh * 0.6 - r.top) / r.height, 0, 1);
      stepsFill.style.transform = `scaleY(${p})`;
      steps.forEach((s) => {
        const sr = s.getBoundingClientRect();
        s.classList.toggle('is-active', sr.top + 40 < vh * 0.6);
      });
    }

    // tablet 3D entrance
    if (tablet && !reduceMotion) {
      const r = tablet.getBoundingClientRect();
      const p = clamp((r.top - vh * 0.15) / (vh * 0.75), 0, 1);
      tablet.style.setProperty('--p', p.toFixed(3));
    }
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScroll(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', () => { onScroll(); movePill(activeLink); positionPills(); });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = $('[data-burger]');
  const mobileMenu = $('[data-mobile-menu]');
  const toggleMenu = (force) => {
    const open = typeof force === 'boolean' ? force : !mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger && burger.addEventListener('click', () => toggleMenu());
  $$('a', mobileMenu).forEach((a) => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleMenu(false); });

  /* ---------- Cursor glow + spotlight cards + parallax ---------- */
  if (finePointer && !reduceMotion) {
    const glow = $('.cursor-glow');
    let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      glow.classList.add('is-on');
    }, { passive: true });
    document.addEventListener('mouseleave', () => glow.classList.remove('is-on'));
    const loop = () => {
      gx = lerp(gx, mx, 0.12); gy = lerp(gy, my, 0.12);
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();

    // spotlight
    $$('.spot').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });

    // magnetic buttons
    $$('[data-magnetic]').forEach((el) => {
      const strength = 0.28;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)';
        el.style.transform = '';
        setTimeout(() => { el.style.transition = ''; }, 600);
      });
    });

    // hero parallax / tilt
    const heroVisual = $('[data-tilt]');
    if (heroVisual) {
      const layers = $$('[data-depth]', heroVisual);
      let tx = 0, ty = 0, cx = 0, cy = 0, running = false;
      const animate = () => {
        cx = lerp(cx, tx, 0.08); cy = lerp(cy, ty, 0.08);
        layers.forEach((l) => {
          const d = parseFloat(l.dataset.depth);
          const extra = l.classList.contains('phone') ? ` rotateY(${cx * 10}deg) rotateX(${-cy * 10}deg)` : '';
          l.style.transform = `translate3d(${cx * d}px, ${cy * d}px, 0)${extra}`;
        });
        if (Math.abs(cx - tx) > 0.001 || Math.abs(cy - ty) > 0.001) requestAnimationFrame(animate);
        else running = false;
      };
      const hero = $('.hero');
      hero.addEventListener('mousemove', (e) => {
        tx = (e.clientX / innerWidth - 0.5) * 2;
        ty = (e.clientY / innerHeight - 0.5) * 2;
        if (!running) { running = true; requestAnimationFrame(animate); }
      });
      hero.addEventListener('mouseleave', () => {
        tx = 0; ty = 0;
        if (!running) { running = true; requestAnimationFrame(animate); }
      });
    }

    // soft tilt on portrait
    $$('[data-tilt-soft]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Marquee: duplica conteúdo para loop contínuo ---------- */
  $$('[data-marquee], [data-t-row]').forEach((track) => {
    const clone = track.innerHTML;
    track.insertAdjacentHTML('beforeend', clone);
    $$(':scope > *', track).slice(track.children.length / 2).forEach((c) => c.setAttribute('aria-hidden', 'true'));
  });

  /* ---------- Dores: checklist interativo ---------- */
  const painInputs = $$('.pain input');
  const painBar = $('[data-pain-bar]');
  const painMsg = $('[data-pain-msg]');
  const painMessages = [
    'Toque nos cards que combinam com você.',
    'Uma já é suficiente para mudar o jogo. <b>Continua…</b>',
    'Você não está sozinho — <b>72% dos alunos</b> chegaram assim.',
    'Isso tem solução, e ela tem nome: <b>método.</b>',
    'Você precisa de acompanhamento de verdade. <b>Rola até o final.</b>',
    'Está decidido: o Método VOLT foi feito <b>pra você.</b>',
    'Todas? Então chegou a hora. <b>Bora mudar isso juntos.</b>',
  ];
  painInputs.forEach((inp) => inp.addEventListener('change', () => {
    const n = painInputs.filter((i) => i.checked).length;
    painBar.style.transform = `scaleX(${n / painInputs.length})`;
    painMsg.innerHTML = painMessages[n];
  }));

  /* ---------- Pilares: destaque segue o hover ---------- */
  const pillarsWrap = $('[data-pillars]');
  if (pillarsWrap) {
    const pillars = $$('.pillar', pillarsWrap);
    const defaultActive = pillars.find((p) => p.classList.contains('is-active'));
    const setActive = (p) => pillars.forEach((x) => x.classList.toggle('is-active', x === p));
    pillars.forEach((p) => {
      p.addEventListener('mouseenter', () => setActive(p));
      p.addEventListener('click', () => setActive(p));
    });
    pillarsWrap.addEventListener('mouseleave', () => setActive(defaultActive));
  }

  /* ---------- Objetivos (tabs) ---------- */
  const GOALS = {
    emagrecer: {
      kicker: 'Foco principal',
      title: 'Queima de gordura sem perder massa magra',
      stat: '−7,8 kg', statLabel: 'média em 12 semanas',
      desc: 'Treino de força + condicionamento metabólico, com déficit calórico inteligente e ajustes semanais para manter o ritmo sem passar fome.',
      week: ['f', 'c', 'f', 'r', 'f', 'c', 'r'],
      list: ['Treinos de 40–55 min, 4 a 5× por semana', 'Cardio estratégico (nada de horas na esteira)', 'Guia alimentar flexível com substituições'],
    },
    hipertrofia: {
      kicker: 'Foco principal',
      title: 'Ganho de massa muscular com progressão de carga',
      stat: '+4,2 kg', statLabel: 'massa magra em 6 meses',
      desc: 'Divisão otimizada por grupo muscular, controle de volume e intensidade, e progressão registrada no app a cada treino.',
      week: ['f', 'f', 'f', 'r', 'f', 'f', 'r'],
      list: ['Periodização por blocos de 4 semanas', 'Técnicas avançadas na hora certa', 'Estratégia de superávit calórico limpo'],
    },
    condicionamento: {
      kicker: 'Foco principal',
      title: 'Mais fôlego, energia e performance no dia a dia',
      stat: '+38%', statLabel: 'VO₂ estimado em 10 semanas',
      desc: 'Combinação de força, HIIT e treino aeróbio progressivo para você render mais no esporte, no trabalho e na vida.',
      week: ['f', 'c', 'f', 'c', 'f', 'c', 'r'],
      list: ['Protocolos de HIIT e zona 2', 'Treinos de força funcional', 'Metas de corrida, bike ou esporte'],
    },
    saude: {
      kicker: 'Foco principal',
      title: 'Força, mobilidade e longevidade depois dos 40',
      stat: '−62%', statLabel: 'relatos de dores articulares',
      desc: 'Treino seguro e progressivo, com foco em densidade óssea, mobilidade e controle de doenças metabólicas — adaptado a lesões e limitações.',
      week: ['f', 'c', 'r', 'f', 'c', 'f', 'r'],
      list: ['Mobilidade e prevenção de lesões', 'Adaptação a limitações e exames', 'Acompanhamento próximo e sem pressa'],
    },
  };
  const DAYS = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
  const goalTabs = $$('[data-goal]');
  const goalCard = $('.goal-card');
  const renderGoal = (key, animate = true) => {
    const g = GOALS[key];
    if (!g) return;
    const set = (k, v) => { const el = $(`[data-g="${k}"]`, goalCard); if (el) el.textContent = v; };
    set('kicker', g.kicker); set('title', g.title); set('stat', g.stat); set('statLabel', g.statLabel); set('desc', g.desc);
    $('[data-g="week"]', goalCard).innerHTML = g.week
      .map((t, i) => `<div class="wd ${t}" style="--i:${i}"><div class="wd__bar"></div><small>${DAYS[i]}</small></div>`)
      .join('');
    $('[data-g="list"]', goalCard).innerHTML = g.list.map((li) => `<li>${li}</li>`).join('');
    if (animate) {
      goalCard.classList.remove('is-swapping');
      void goalCard.offsetWidth;
      goalCard.classList.add('is-swapping');
    }
  };
  goalTabs.forEach((tab) => tab.addEventListener('click', () => {
    goalTabs.forEach((t) => { t.classList.toggle('is-active', t === tab); t.setAttribute('aria-selected', String(t === tab)); });
    renderGoal(tab.dataset.goal);
  }));
  if (goalCard) renderGoal('emagrecer', false);

  /* ---------- Pílulas deslizantes (dashboard + billing) ---------- */
  const pillGroups = [
    { wrap: $('[data-dash-tabs]'), pill: $('.dash__tabs-pill'), btn: 'button' },
    { wrap: $('[data-billing]'), pill: $('.billing__pill'), btn: 'button' },
  ];
  function positionPills() {
    pillGroups.forEach(({ wrap, pill, btn }) => {
      if (!wrap || !pill) return;
      const active = $(`${btn}.is-active`, wrap);
      if (!active) return;
      pill.style.width = active.offsetWidth + 'px';
      pill.style.transform = `translateX(${active.offsetLeft}px)`;
    });
  }
  positionPills();
  document.fonts && document.fonts.ready.then(positionPills);
  window.addEventListener('load', positionPills);

  /* ---------- Dashboard tabs ---------- */
  const dashTabs = $$('[data-dash]');
  const panels = $$('[data-panel]');
  dashTabs.forEach((tab) => tab.addEventListener('click', () => {
    const key = tab.dataset.dash;
    dashTabs.forEach((t) => { t.classList.toggle('is-active', t === tab); t.setAttribute('aria-selected', String(t === tab)); });
    panels.forEach((p) => p.classList.toggle('is-active', p.dataset.panel === key));
    positionPills();
    const panel = panels.find((p) => p.dataset.panel === key);
    $$('[data-count]', panel).forEach(countUp);
    if (key === 'evolucao') drawChart();
  }));

  /* ---------- Check-ins (lista -> detalhe) ---------- */
  const CHECKINS = {
    12: { week: '12', waist: '71 cm', waistD: '−1,5', hip: '98 cm', hipD: '−0,8', energy: '9/10', energyD: '+1', msg: '“Mari, semana excelente! Vamos subir 2,5 kg no agachamento e incluir um bloco extra de glúteo na sexta. Segue firme 🔥”' },
    11: { week: '11', waist: '72,5 cm', waistD: '−1,0', hip: '98,8 cm', hipD: '−0,5', energy: '8/10', energyD: '+0', msg: '“Ótima consistência! Percebi que o sono caiu um pouco — tenta dormir 30 min mais cedo essa semana, vai refletir no treino.”' },
    10: { week: '10', waist: '73,5 cm', waistD: '−0,8', hip: '99,3 cm', hipD: '−1,2', energy: '8/10', energyD: '+1', msg: '“Nova fase começando! Trocamos a divisão para ABC com mais volume em inferiores. Assiste os vídeos novos antes do treino.”' },
    8: { week: '8', waist: '75 cm', waistD: '−1,2', hip: '100,5 cm', hipD: '−0,9', energy: '7/10', energyD: '+2', msg: '“Metade do caminho e já são −5,3 kg! Vamos manter o plano e ajustar só o pré-treino para você ter mais energia.”' },
  };
  const ciItems = $$('[data-ci]');
  const ciDetail = $('[data-ci-detail]');
  ciItems.forEach((item) => item.addEventListener('click', () => {
    const d = CHECKINS[item.dataset.ci];
    if (!d) return;
    ciItems.forEach((i) => i.classList.toggle('is-active', i === item));
    Object.entries(d).forEach(([k, v]) => {
      const el = $(`[data-ci-f="${k}"]`, ciDetail);
      if (el) el.textContent = v;
    });
    ciDetail.classList.remove('is-swapping');
    void ciDetail.offsetWidth;
    ciDetail.classList.add('is-swapping');
  }));

  /* ---------- Gráfico de evolução ---------- */
  const chartData = [72.6, 71.9, 71.2, 70.1, 69.4, 68.8, 67.9, 67.3, 66.4, 65.8, 64.9, 64.2];
  const chart = $('[data-chart]');
  const tip = $('[data-chart-tip]');
  let chartDrawn = false;
  function drawChart() {
    if (!chart) return;
    const W = 600, H = 240, pad = 20;
    const min = Math.min(...chartData) - 1, max = Math.max(...chartData) + 1;
    const pts = chartData.map((v, i) => [
      pad + (i * (W - pad * 2)) / (chartData.length - 1),
      pad + ((max - v) / (max - min)) * (H - pad * 2),
    ]);
    // curva suave (Catmull-Rom -> Bézier)
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${p2[0]},${p2[1]}`;
    }
    const line = $('.chart__line', chart);
    const area = $('.chart__area', chart);
    line.setAttribute('d', d);
    area.setAttribute('d', `${d} L${pts[pts.length - 1][0]},${H} L${pts[0][0]},${H} Z`);

    const dots = $('.chart__dots', chart);
    dots.innerHTML = pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="5" data-i="${i}"/>`).join('');

    if (!reduceMotion) {
      // dash 2× maior que o comprimento: compensa o vector-effect (non-scaling-stroke)
      const len = line.getTotalLength() * 2;
      line.style.strokeDasharray = `${len} ${len}`;
      line.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: 1600, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
      area.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1200, delay: 500, easing: 'ease-out', fill: 'both' });
      $$('circle', dots).forEach((c, i) => {
        c.style.transformBox = 'view-box';
        c.style.transformOrigin = `${c.getAttribute('cx')}px ${c.getAttribute('cy')}px`;
        c.animate([{ opacity: 0, transform: 'scale(0)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 400, delay: 300 + i * 90, fill: 'both', easing: 'cubic-bezier(.22,1,.36,1)' });
      });
    }

    if (!chartDrawn) {
      chartDrawn = true;
      const wrap = chart.parentElement;
      const showTip = (circle) => {
        const i = +circle.dataset.i;
        $$('circle', dots).forEach((c) => c.classList.toggle('is-hot', c === circle));
        const cr = circle.getBoundingClientRect();
        const wr = wrap.getBoundingClientRect();
        tip.textContent = `S${i + 1} · ${fmt(chartData[i], 1)} kg`;
        tip.style.left = `${cr.left - wr.left + cr.width / 2}px`;
        tip.style.top = `${cr.top - wr.top}px`;
        tip.classList.add('is-on');
      };
      chart.addEventListener('mouseover', (e) => { if (e.target.tagName === 'circle') showTip(e.target); });
      chart.addEventListener('click', (e) => { if (e.target.tagName === 'circle') showTip(e.target); });
      chart.addEventListener('mouseleave', () => { tip.classList.remove('is-on'); $$('circle', dots).forEach((c) => c.classList.remove('is-hot')); });
    }
  }

  /* ---------- Resultados: drag + setas ---------- */
  const track = $('[data-res-track]');
  if (track) {
    const cardStep = () => {
      const card = $('.res-card', track);
      return card ? card.offsetWidth + 16 : 300;
    };
    $('[data-res-prev]').addEventListener('click', () => track.scrollBy({ left: -cardStep(), behavior: 'smooth' }));
    $('[data-res-next]').addEventListener('click', () => track.scrollBy({ left: cardStep(), behavior: 'smooth' }));

    let down = false, startX = 0, startScroll = 0, moved = false;
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false; startX = e.clientX; startScroll = track.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) { moved = true; track.classList.add('is-dragging'); }
      track.scrollLeft = startScroll - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      track.classList.remove('is-dragging');
      if (moved) {
        const s = cardStep();
        track.scrollTo({ left: Math.round(track.scrollLeft / s) * s, behavior: 'smooth' });
      }
    });
  }

  /* ---------- Preços: mensal / trimestral / semestral ---------- */
  const billingBtns = $$('[data-period]');
  const plans = $$('[data-plan]');
  const PERIOD = { m: { months: 1, label: '' }, t: { months: 3, label: 'no trimestre' }, s: { months: 6, label: 'no semestre' } };
  const animateNumber = (el, from, to) => {
    if (reduceMotion || from === to) { el.textContent = to; return; }
    const t0 = performance.now(), dur = 700;
    const step = (now) => {
      const p = clamp((now - t0) / dur, 0, 1);
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    el.classList.remove('is-bump'); void el.offsetWidth; el.classList.add('is-bump');
  };
  billingBtns.forEach((btn) => btn.addEventListener('click', () => {
    const period = btn.dataset.period;
    billingBtns.forEach((b) => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-selected', String(b === btn)); });
    positionPills();
    plans.forEach((plan) => {
      const priceEl = $('[data-price]', plan);
      const totalEl = $('[data-total]', plan);
      const value = parseInt(plan.dataset[period], 10);
      animateNumber(priceEl, parseInt(priceEl.textContent, 10) || value, value);
      const { months, label } = PERIOD[period];
      totalEl.textContent = months === 1
        ? 'Cobrança mensal · cancele quando quiser'
        : `Total de R$ ${fmt(value * months)} ${label}`;
    });
  }));

  /* ---------- FAQ: acordeão animado (um aberto por vez) ---------- */
  const accs = $$('.acc');
  const animateAcc = (acc, open) => {
    const body = $('.acc__body', acc);
    if (reduceMotion) { acc.open = open; return; }
    if (open) {
      acc.open = true;
      const h = body.scrollHeight;
      body.animate([{ height: '0px', opacity: 0 }, { height: `${h}px`, opacity: 1 }], { duration: 450, easing: 'cubic-bezier(.22,1,.36,1)' });
    } else {
      const h = body.scrollHeight;
      const a = body.animate([{ height: `${h}px`, opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 350, easing: 'cubic-bezier(.65,0,.35,1)' });
      a.onfinish = () => { acc.open = false; };
    }
  };
  accs.forEach((acc) => {
    $('summary', acc).addEventListener('click', (e) => {
      e.preventDefault();
      const willOpen = !acc.open;
      if (willOpen) accs.forEach((o) => { if (o !== acc && o.open) animateAcc(o, false); });
      animateAcc(acc, willOpen);
    });
  });

  /* ---------- Countdown (fim da turma: próximo domingo 23:59) ---------- */
  const cd = $('[data-countdown]');
  if (cd) {
    const end = new Date();
    end.setDate(end.getDate() + ((7 - end.getDay()) % 7 || 7));
    end.setHours(23, 59, 59, 0);
    const fields = { d: $('[data-cd="d"]', cd), h: $('[data-cd="h"]', cd), m: $('[data-cd="m"]', cd), s: $('[data-cd="s"]', cd) };
    const pad = (n) => String(n).padStart(2, '0');
    const update = () => {
      let diff = Math.max(0, end - new Date());
      const d = Math.floor(diff / 864e5); diff -= d * 864e5;
      const h = Math.floor(diff / 36e5); diff -= h * 36e5;
      const m = Math.floor(diff / 6e4); diff -= m * 6e4;
      const s = Math.floor(diff / 1e3);
      fields.d.textContent = pad(d); fields.h.textContent = pad(h);
      fields.m.textContent = pad(m); fields.s.textContent = pad(s);
    };
    update();
    setInterval(update, 1000);
  }

  /* ---------- Smooth anchor com offset do header ---------- */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) { e.preventDefault(); return; }
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (id === '#inicio' ? 0 : 70);
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });
})();
