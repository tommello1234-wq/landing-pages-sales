import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export const SPAN = 2.7;      // largura aproximada do drone (ponta a ponta das hélices)
export const FOOT = 0.44;     // distância do centro até os pés

// ---------- texturas procedurais ----------
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const radialTex = (stops) => canvasTex(256, 256, (g, w) => {
  const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
  stops.forEach(([o, c]) => gr.addColorStop(o, c));
  g.fillStyle = gr; g.fillRect(0, 0, w, w);
});
function carbonTex() {
  const t = canvasTex(128, 128, (g, w) => {
    g.fillStyle = '#1a1b1e'; g.fillRect(0, 0, w, w);
    const s = 8;
    for (let y = 0; y < w; y += s) for (let x = 0; x < w; x += s) {
      const on = ((x / s + y / s) % 2) === 0;
      const gr = on ? g.createLinearGradient(x, y, x + s, y) : g.createLinearGradient(x, y, x, y + s);
      gr.addColorStop(0, '#16171a'); gr.addColorStop(.5, '#2c2e33'); gr.addColorStop(1, '#16171a');
      g.fillStyle = gr; g.fillRect(x, y, s, s);
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 6);
  return t;
}

// contorno "seixo" visto de cima: superelipse afinando na frente (+z)
function pebble(W, L, taper = .38, n = 2.7, zOff = 0) {
  const s = new THREE.Shape();
  const N = 80;
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2;
    const c = Math.cos(a), sn = Math.sin(a);
    let x = W * Math.sign(c) * Math.pow(Math.abs(c), 2 / n);
    const z = L * Math.sign(sn) * Math.pow(Math.abs(sn), 2 / n);
    x *= 1 - taper * Math.max(0, z / L);
    i ? s.lineTo(x, -(z + zOff)) : s.moveTo(x, -(z + zOff));
  }
  return s;
}
function slab(shape, depth, bevel, y) {
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel * .9, bevelSegments: 5, curveSegments: 8 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, y + bevel, 0);
  return g;
}

export class Drone3D {
  constructor(canvas) {
    this.canvas = canvas;
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance', premultipliedAlpha: true });
    r.setClearColor(0, 0);
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    r.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    this.scene.environment = pm.fromScene(new RoomEnvironment(), .04).texture;
    this.camera = new THREE.PerspectiveCamera(28, 1, .01, 200);
    this.camera.position.set(0, 0, 14);

    const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(-4, 6, 5);
    const rim = this.rim = new THREE.DirectionalLight(0xff7a45, 3); rim.position.set(5, 2, -6);
    const fill = new THREE.HemisphereLight(0xffffff, 0x222222, .6);
    this.scene.add(key, rim, fill);

    this.stage = new THREE.Group();           // posição na tela, escala, inclinação de vista
    this.craft = new THREE.Group();           // atitude de voo
    this.pivot = new THREE.Group();           // deslocamento (pivô na lente)
    this.stage.add(this.craft); this.craft.add(this.pivot);
    this.scene.add(this.stage);

    this.parts = [];
    this.anchors = {};
    this.props = [];
    this.leds = [];
    this.build();

    // sombra de contato
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.4), new THREE.MeshBasicMaterial({ map: radialTex([[0, 'rgba(0,0,0,.55)'], [.45, 'rgba(0,0,0,.2)'], [1, 'rgba(0,0,0,0)']]), transparent: true, depthWrite: false, opacity: 0 }));
    this.shadow.rotation.x = -Math.PI / 2;
    this.stage.add(this.shadow);

    this.buildPad();

    this.state = { x: 0, y: 0, s: 400, yaw: 0, pitch: 0, roll: 0, tilt: .35, explode: 0, prop: 1, shadow: 0, lift: 0, lens: 0, vis: 1, pad: 0, padX: 0, padY: 0, padS: 0, padTilt: .5, padGlow: 0 };
    this.time = 0;
    this.propAngle = 0;
    this.flip = 0;
    this.color = new THREE.Color('#1b1c1f');
    this.targetColor = this.color.clone();
    this.ledColor = new THREE.Color('#ff4a17');
    this.resize();
  }

  // ---------- modelo ----------
  build() {
    const P = this.pivot;
    const M = this.mat = {
      shell: new THREE.MeshPhysicalMaterial({ color: '#1b1c1f', roughness: .32, metalness: .25, clearcoat: .8, clearcoatRoughness: .2 }),
      body: new THREE.MeshPhysicalMaterial({ color: '#111214', roughness: .55, metalness: .2 }),
      carbon: new THREE.MeshPhysicalMaterial({ map: carbonTex(), roughness: .38, metalness: .35, clearcoat: .5 }),
      accent: new THREE.MeshPhysicalMaterial({ color: '#ff4a17', roughness: .35, metalness: .1, emissive: '#ff2a00', emissiveIntensity: .08 }),
      metal: new THREE.MeshPhysicalMaterial({ color: '#2b2c30', roughness: .28, metalness: .9 }),
      glass: new THREE.MeshPhysicalMaterial({ color: '#050507', roughness: .04, metalness: 1 }),
      lens: new THREE.MeshPhysicalMaterial({ color: '#08080c', roughness: .02, metalness: .9, iridescence: 1, iridescenceIOR: 1.8, iridescenceThicknessRange: [180, 700], clearcoat: 1 }),
      blade: new THREE.MeshPhysicalMaterial({ color: '#16171a', roughness: .45, metalness: .1, transparent: true }),
      rubber: new THREE.MeshStandardMaterial({ color: '#0d0d0e', roughness: .9 })
    };
    const part = (name, obj, dir, rot) => {
      obj.userData.home = obj.position.clone();
      obj.userData.dir = dir || new THREE.Vector3();
      obj.userData.rot = rot || new THREE.Vector3();
      P.add(obj); this.parts.push(obj);
      return obj;
    };
    const anchor = (name, parent, x, y, z) => { const o = new THREE.Object3D(); o.position.set(x, y, z); parent.add(o); this.anchors[name] = o; };

    // núcleo
    const core = new THREE.Group();
    core.add(new THREE.Mesh(slab(pebble(.26, .58, .38), .12, .05, -.17), M.body));
    const belt = new THREE.Mesh(slab(pebble(.312, .632, .36), .012, 0, -.075), M.accent);
    core.add(belt);
    // sensores de visão
    const eye = new THREE.SphereGeometry(.03, 20, 16);
    [[-.075, -.05, .6], [.075, -.05, .6], [-.1, -.05, -.62], [.1, -.05, -.62], [.3, -.05, .02], [-.3, -.05, .02]].forEach(p => { const m = new THREE.Mesh(eye, M.glass); m.position.set(...p); core.add(m); });
    part('core', core);

    // carenagem superior
    const shell = new THREE.Group();
    shell.add(new THREE.Mesh(slab(pebble(.2, .34, .45, 2.6, .2), .03, .04, .03), M.shell));
    const visor = new THREE.Mesh(slab(pebble(.1, .1, .5, 2.4, .4), .004, .008, .14), M.glass); shell.add(visor);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(.07, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), M.glass); dome.position.set(0, .15, .1); shell.add(dome);
    const domeRing = new THREE.Mesh(new THREE.TorusGeometry(.072, .008, 8, 40), M.accent); domeRing.rotation.x = Math.PI / 2; domeRing.position.set(0, .152, .1); shell.add(domeRing);
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(.22, .055), new THREE.MeshBasicMaterial({ transparent: true, map: canvasTex(512, 128, (g) => { g.fillStyle = 'rgba(255,255,255,.9)'; g.font = '700 92px Geist, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('AERIS', 256, 68); }) }));
    logo.rotation.x = -Math.PI / 2; logo.position.set(0, .153, -.08); shell.add(logo);
    anchor('lidar', shell, 0, .2, .1);
    part('shell', shell, new THREE.Vector3(0, .9, .05), new THREE.Vector3(-.2, 0, 0));

    // bateria
    const bat = new THREE.Group();
    bat.add(new THREE.Mesh(new RoundedBoxGeometry(.34, .12, .36, 4, .035), M.shell));
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(.345, .018, .2), M.accent); stripe.position.set(0, 0, -.04); bat.add(stripe);
    for (let i = 0; i < 4; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(.03, .01, .012), new THREE.MeshBasicMaterial({ color: i < 3 ? '#2fd3ff' : '#333' })); l.position.set(-.06 + i * .04, .062, -.14); bat.add(l); }
    for (let i = 0; i < 3; i++) { const v = new THREE.Mesh(new THREE.BoxGeometry(.2, .006, .012), M.body); v.position.set(0, .062, .02 + i * .04); bat.add(v); }
    bat.position.set(0, .09, -.35);
    anchor('battery', bat, .17, .06, 0);
    part('battery', bat, new THREE.Vector3(0, .35, -1.05));

    // braços + motores + hélices
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(.035, -.016);
    bladeShape.quadraticCurveTo(.13, -.055, .31, -.032);
    bladeShape.quadraticCurveTo(.43, -.022, .43, 0);
    bladeShape.quadraticCurveTo(.42, .02, .31, .018);
    bladeShape.quadraticCurveTo(.13, .045, .035, .016);
    bladeShape.closePath();
    const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, { depth: .006, bevelEnabled: true, bevelThickness: .003, bevelSize: .003, bevelSegments: 2 });
    bladeGeo.rotateX(-Math.PI / 2);
    const bell = new THREE.LatheGeometry([[0, 0], [.1, 0], [.116, .02], [.116, .085], [.1, .11], [.045, .122], [0, .122]].map(p => new THREE.Vector2(p[0], p[1])), 40);
    const discMat = () => new THREE.MeshBasicMaterial({ map: radialTex([[0, 'rgba(255,255,255,0)'], [.16, 'rgba(255,255,255,0)'], [.2, 'rgba(255,255,255,.35)'], [.72, 'rgba(255,255,255,.18)'], [.9, 'rgba(255,255,255,.3)'], [.97, 'rgba(255,255,255,.08)'], [1, 'rgba(255,255,255,0)']]), transparent: true, depthWrite: false, opacity: 0, color: '#f4f4f4' });
    const glowTex = radialTex([[0, 'rgba(255,255,255,1)'], [.25, 'rgba(255,255,255,.45)'], [1, 'rgba(255,255,255,0)']]);

    const mounts = [[.2, .3, .86, .7, 1], [-.2, .3, -.86, .7, -1], [.22, -.3, .86, -.64, -1], [-.22, -.3, -.86, -.64, 1]];
    mounts.forEach(([ax, az, mx, mz, spin], i) => {
      const g = new THREE.Group();
      const a = new THREE.Vector3(ax, -.03, az), m = new THREE.Vector3(mx, .03, mz);
      const len = a.distanceTo(m);
      const armGeo = new THREE.CylinderGeometry(.034, .055, len, 20);
      armGeo.rotateX(Math.PI / 2); armGeo.scale(1, .7, 1);
      const arm = new THREE.Mesh(armGeo, M.carbon);
      arm.position.copy(a).lerp(m, .5); arm.lookAt(m); g.add(arm);
      // perna
      const lp = a.clone().lerp(m, .62);
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(.014, .022, .42, 12), M.body);
      leg.position.set(lp.x * 1.02, -.22, lp.z * 1.02); leg.rotation.z = Math.sign(lp.x) * .08; g.add(leg);
      const foot = new THREE.Mesh(new THREE.SphereGeometry(.03, 16, 12), M.rubber); foot.position.set(lp.x * 1.04, -.42, lp.z * 1.04); g.add(foot);
      // motor
      const base = new THREE.Mesh(new THREE.CylinderGeometry(.075, .085, .05, 32), M.carbon); base.position.set(mx, .03, mz); g.add(base);
      const b = new THREE.Mesh(bell, M.metal); b.position.set(mx, .055, mz); g.add(b);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .02, 32), M.accent); cap.position.set(mx, .185, mz); g.add(cap);
      // LED
      const led = new THREE.Mesh(new THREE.SphereGeometry(.022, 12, 10), new THREE.MeshBasicMaterial({ color: '#ff4a17', toneMapped: false }));
      led.position.set(mx, .0, mz + (mz > 0 ? .08 : -.08)); g.add(led);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ff4a17', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      glow.scale.set(.28, .28, 1); glow.position.copy(led.position); g.add(glow);
      this.leds.push({ led, glow, front: mz > 0 });
      // hélice
      const prop = new THREE.Group(); prop.position.set(mx, .2, mz);
      const blades = new THREE.Group();
      for (let k = 0; k < 2; k++) { const bl = new THREE.Mesh(bladeGeo, M.blade); bl.rotation.set(spin * .16, k * Math.PI, 0); blades.add(bl); }
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, .03, 20), M.metal);
      const disc = new THREE.Mesh(new THREE.CircleGeometry(.45, 64), discMat()); disc.rotation.x = -Math.PI / 2; disc.position.y = .004;
      prop.add(blades, hub, disc); g.add(prop);
      this.props.push({ blades, disc, spin });
      if (i === 0) { anchor('motor', g, mx, .12, mz); anchor('arm', g, (ax + mx) / 2 + .05, 0, (az + mz) / 2); }
      const out = new THREE.Vector3(mx, 0, mz).normalize().multiplyScalar(.75); out.y = .15;
      part('arm' + i, g, out);
      g.userData.propDir = new THREE.Vector3(0, .55, 0);
      g.userData.prop = prop;
    });

    // gimbal + câmera
    const gim = new THREE.Group();
    const yoke = new THREE.Mesh(new RoundedBoxGeometry(.06, .09, .06, 2, .015), M.body); yoke.position.set(0, -.2, .42); gim.add(yoke);
    const rollM = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .06, 24), M.metal); rollM.rotation.x = Math.PI / 2; rollM.position.set(0, -.25, .46); gim.add(rollM);
    const bar = new THREE.Mesh(new RoundedBoxGeometry(.34, .03, .05, 2, .012), M.body); bar.position.set(0, -.25, .5); gim.add(bar);
    [-1, 1].forEach(s => { const side = new THREE.Mesh(new RoundedBoxGeometry(.03, .1, .05, 2, .012), M.body); side.position.set(s * .155, -.3, .5); gim.add(side); const pm = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, .025, 20), M.metal); pm.rotation.z = Math.PI / 2; pm.position.set(s * .14, -.31, .5); gim.add(pm); });
    anchor('gimbal', gim, .16, -.3, .5);
    part('gimbal', gim, new THREE.Vector3(0, -.55, .45));

    const cam = new THREE.Group();
    cam.add(new THREE.Mesh(new RoundedBoxGeometry(.24, .17, .2, 4, .045), M.shell));
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(.078, .082, .07, 40, 1, true), M.metal); barrel.rotation.x = Math.PI / 2; barrel.position.z = .125; cam.add(barrel);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.078, .007, 10, 48), M.accent); ring.position.z = .16; cam.add(ring);
    const glass = new THREE.Mesh(new THREE.SphereGeometry(.2, 40, 20, 0, Math.PI * 2, 0, .38), M.lens);
    glass.rotation.x = Math.PI / 2; glass.position.z = .16 - .2 * Math.cos(.38) + .0; cam.add(glass);
    // "furo" transparente na lente (revela a página por trás do canvas)
    this.holeMat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.ZeroFactor, blendDst: THREE.ZeroFactor, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.ZeroFactor });
    const hole = this.hole = new THREE.Mesh(new THREE.CircleGeometry(.074, 48), this.holeMat);
    hole.position.z = .175; hole.renderOrder = 999; hole.scale.setScalar(.001); cam.add(hole);
    cam.position.set(0, -.31, .5);
    anchor('camera', cam, 0, 0, .17);
    anchor('lensEdge', cam, .074, 0, .17);
    part('camera', cam, new THREE.Vector3(0, -.45, 1.05));
    this.lensLocal = new THREE.Vector3(0, -.31, .67);
  }

  buildPad() {
    const g = this.padGroup = new THREE.Group();
    const mk = (geo, color, op) => { const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, depthWrite: false, side: THREE.DoubleSide })); m.rotation.x = -Math.PI / 2; g.add(m); return m; };
    this.padBase = mk(new THREE.CircleGeometry(1.25, 96), '#000000', .16);
    this.padRing = mk(new THREE.RingGeometry(1.18, 1.25, 96), '#ffffff', .95);
    mk(new THREE.RingGeometry(.86, .875, 96), '#ffffff', .5);
    this.padPulse = mk(new THREE.RingGeometry(1.25, 1.29, 96), '#ffffff', 0);
    const h = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, map: canvasTex(256, 256, (c) => { c.fillStyle = 'rgba(255,255,255,.95)'; c.font = '700 190px Geist, Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('H', 128, 140); }) }));
    h.rotation.x = -Math.PI / 2; h.position.y = .002; g.add(h);
    for (let i = 0; i < 4; i++) { const t = mk(new THREE.PlaneGeometry(.04, .22), '#ffffff', .9); const a = i * Math.PI / 2 + Math.PI / 4; t.position.set(Math.cos(a) * 1.42, 0, Math.sin(a) * 1.42); t.rotation.z = -a + Math.PI / 2; }
    g.visible = false;
    this.scene.add(g);
  }

  // ---------- API ----------
  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.w = w; this.h = h;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, w < 800 ? 1.5 : 2));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.wpp = 2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * this.camera.position.z / h; // unidades por pixel
  }
  setColor(hex) { this.targetColor.set(hex); }
  setLed(hex) { this.ledColor.set(hex); }
  doFlip() { this.flipT = 0; this.flipping = true; }

  project(obj) {
    const v = new THREE.Vector3();
    obj.getWorldPosition(v); v.project(this.camera);
    return { x: (v.x + 1) / 2 * this.w, y: (1 - v.y) / 2 * this.h };
  }
  anchorScreen(name) { return this.anchors[name] ? this.project(this.anchors[name]) : null; }
  lensScreen() {
    const c = this.project(this.anchors.camera), e = this.project(this.anchors.lensEdge);
    return { x: c.x, y: c.y, r: Math.hypot(e.x - c.x, e.y - c.y) };
  }

  update(dt) {
    const S = this.state;
    this.time += dt;
    const t = this.time;

    // cor da carenagem
    this.color.lerp(this.targetColor, 1 - Math.exp(-dt * 6));
    this.mat.shell.color.copy(this.color);
    const light = this.color.getHSL({}).l > .6;
    this.mat.shell.roughness = light ? .4 : .32;

    const scale = S.s * this.wpp / SPAN;
    this.stage.visible = S.vis > .01 && S.s > 1;
    this.stage.position.set(S.x * this.wpp, -S.y * this.wpp, 0);
    this.stage.scale.setScalar(scale);
    this.stage.rotation.set(S.tilt, 0, 0);

    // pivô na lente (para mergulhar na câmera)
    this.pivot.position.copy(this.lensLocal).multiplyScalar(-S.lens);

    // atitude + flutuação
    const hover = S.prop;
    const bob = Math.sin(t * 1.7) * .035 * hover * (1 - S.lens);
    this.craft.position.set(0, bob + S.lift, 0);
    if (this.flipping) { this.flipT += dt / .9; if (this.flipT >= 1) { this.flipping = false; this.flipT = 1; } }
    const f = this.flipping ? this.flipT : 0;
    const flipAng = f ? (1 - Math.pow(1 - f, 3)) * Math.PI * 2 : 0;
    this.craft.rotation.set(S.pitch + Math.sin(t * 1.3) * .02 * hover, S.yaw, S.roll + Math.sin(t * 1.1 + 1) * .02 * hover + flipAng, 'YXZ');

    // vista explodida
    const ex = S.explode;
    for (const p of this.parts) {
      p.position.copy(p.userData.home).addScaledVector(p.userData.dir, ex * .6);
      p.rotation.set(p.userData.rot.x * ex, p.userData.rot.y * ex, p.userData.rot.z * ex);
      if (p.userData.prop) p.userData.prop.position.y = .2 + p.userData.propDir.y * ex;
    }

    // hélices
    this.propAngle += dt * (4 + 36 * S.prop);
    this.props.forEach((p, i) => {
      p.blades.rotation.y = this.propAngle * p.spin + i;
      p.disc.material.opacity = Math.min(1, S.prop * 1.1) * .55;
      p.blades.children.forEach(b => b.material.opacity = 1 - S.prop * .55);
    });

    // LEDs
    const blink = (Math.sin(t * 6) > .6) ? 1 : .25;
    this.leds.forEach(l => {
      const c = l.front ? this.ledColor : new THREE.Color('#2fd3ff');
      l.led.material.color.copy(c);
      l.glow.material.color.copy(c);
      l.glow.material.opacity = (l.front ? .9 : blink) * (S.prop > .05 ? 1 : .35);
    });

    // abertura da lente
    const h = S.lens > .6 ? Math.min(1, (S.lens - .6) / .25) : 0;
    this.hole.scale.setScalar(Math.max(.001, h));

    // sombra
    this.shadow.position.y = -FOOT - S.lift;
    this.shadow.material.opacity = S.shadow;
    const sh = 1 + S.lift * .6;
    this.shadow.scale.set(sh, sh, sh);

    // plataforma de pouso
    const pg = this.padGroup;
    pg.visible = S.pad > .01;
    if (pg.visible) {
      const ps = S.padS * this.wpp / SPAN;
      pg.position.set(S.padX * this.wpp, -S.padY * this.wpp, -.01);
      pg.scale.setScalar(ps * (.9 + .1 * S.pad));
      pg.rotation.set(S.padTilt, 0, 0);
      this.padBase.material.opacity = .16 * S.pad;
      this.padRing.material.opacity = .95 * S.pad;
      const ph = (t * .8) % 1;
      this.padPulse.scale.setScalar(1 + ph * .35 * S.padGlow);
      this.padPulse.material.opacity = (1 - ph) * .7 * S.padGlow * S.pad;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
