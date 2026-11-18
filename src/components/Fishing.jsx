import { useEffect, useRef } from 'react';
import { catchRoster } from '../data/catch';
import MiniDan from './minidan/MiniDan';
import './Fishing.css';

/* ==========================================================================
   The home page is a lake you fish in.

   Why this is imperative inside a React component: the scene is a character
   grid of ~5000 cells redrawn 18 times a second. Driving that through state
   would reconcile the whole tree every frame for no benefit, so the engine
   owns two plain DOM nodes — the <pre> and the panel — and writes to them
   directly. React still owns the shell, the refs and the teardown.
   ========================================================================== */

/* 5x7 glyphs for the name in the sky. Only the letters of "DANIEL LIM" are
   here; a different name needs its missing letters added, and `word` skips
   anything it cannot draw rather than failing loudly. */
const GLYPH = {
  A: '.###.|#...#|#...#|#####|#...#|#...#|#...#',
  D: '####.|#...#|#...#|#...#|#...#|#...#|####.',
  E: '#####|#....|#....|####.|#....|#....|#####',
  I: '#####|..#..|..#..|..#..|..#..|..#..|#####',
  L: '#....|#....|#....|#....|#....|#....|#####',
  M: '#...#|##.##|#.#.#|#.#.#|#...#|#...#|#...#',
  N: '#...#|##..#|#.#.#|#.#.#|#..##|#...#|#...#',
  ' ': '.....|.....|.....|.....|.....|.....|.....',
};
const GLYPH_ROWS = Object.fromEntries(
  Object.entries(GLYPH).map(([k, v]) => [k, v.split('|')]),
);

const ODDS = { Common: 30, Uncommon: 13, Rare: 5, Legendary: 2 };

/* Anything already in the logbook has its weight cut hard, so the reward for
   casting again is meeting something new rather than grinding the odds.
   Relative rarity survives even once everything is logged, because every
   weight shrinks by the same factor. */
const REPEAT = 0.06;

/* Setting the hook: a marker sweeps a track and you stop it inside the
   window. Rarer catches get a narrower window and a faster sweep, so the
   thing you want most is the thing you are most likely to lose. */
const FIGHT = {
  Common: { w: 0.32, speed: 1.05, hint: 'Light on the line.' },
  Uncommon: { w: 0.22, speed: 1.45, hint: 'Decent weight.' },
  Rare: { w: 0.14, speed: 1.95, hint: 'Something strong down there.' },
  Legendary: { w: 0.08, speed: 2.5, hint: 'Whatever this is, it is big.' },
};

/* Rarity reads as escalating log severity: the tag, the line it prints, and
   how many pips are filled. The colour comes from the --r-* tokens. */
const TIER = {
  Common: { tag: 'log', what: 'common drop', pips: 1 },
  Uncommon: { tag: 'info', what: 'uncommon drop', pips: 2 },
  Rare: { tag: 'warn', what: 'rare drop', pips: 3 },
  Legendary: { tag: 'ship', what: 'one of his own', pips: 4 },
};

/* Generous on purpose: this is a toy on a portfolio, not a reflex test. */
const BITE_WINDOW = 2.6;
const FIGHT_TIMEOUT = 7;
const CAST_TIME = 0.75;

/* The angler is MiniDan, with Claude (the previous angler) at half size
   beside him on the pier. Both are drawn as square-pixel sprites laid over
   the grid rather than as characters in it: a text cell is twice as tall as
   it is wide, so a character grid cannot hold MiniDan's face. The engine
   still reserves their cells, so waves and clouds never show through.

   Footprints in grid cells. MiniDan's fishing pose is 18 x 14 pixels at one
   cell-width per pixel, so 14 pixels make 7 rows; Claude is 20 x 16 pixels
   at half that size. */
const MD = { w: 18, h: 7 };
const CL = { w: 10, h: 4, gap: 2 };
/* The rod leaves MiniDan's left nub, which sits on pixel rows 6-7. */
const HAND = { x: 0, y: 3 };
const ROD_CLS = 'c-rod';

/* Shadows under the surface. The ambient ones just make the lake look
   occupied; a separate one swims in to meet the float while you wait, so the
   bite is something you watch coming rather than a surprise. */
const FISH_ART = { r: ['><>', '>))>', '>-=))>'], l: ['<><', '<((<', '<((=-<'] };
const SHADOWS = [
  { depth: 5, speed: 3.4, size: 0, dir: -1 },
  { depth: 9, speed: 2.0, size: 1, dir: 1 },
  { depth: 14, speed: 4.1, size: 0, dir: 1 },
  { depth: 7, speed: 1.5, size: 2, dir: -1 },
  { depth: 17, speed: 2.7, size: 1, dir: -1 },
];

const CLOUDS = [
  { art: ['  .--.   ', ' (    )_ ', '(________)'], row: 2, speed: 1.9 },
  { art: [' .-.  ', '(___)_'], row: 7, speed: 1.2 },
  { art: ['   .---.    ', ' _(     )__ ', '(___________)'], row: 11, speed: 2.6 },
  { art: ['  .--.  ', ' (_____)'], row: 16, speed: 1.5 },
];

const STORE_KEY = 'dl-fishing';

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };

/* --------------------------------------------------------------------------
   Icon markup. The roster carries five shapes; see src/data/catch.js.
   -------------------------------------------------------------------------- */
let gradN = 0;

function iconHTML(ic, size) {
  if (ic.img) {
    return `<img src="${ic.img}" width="${size}" height="${size}" alt="">`;
  }
  if (ic.mark) {
    return (
      `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">` +
      `<rect x="1" y="1" width="22" height="22" rx="5" fill="${ic.c}"/>` +
      '<text x="12" y="16" text-anchor="middle" font-size="9" font-weight="700" ' +
      `font-family="var(--font-sans)" fill="#fff">${ic.mark}</text></svg>`
    );
  }
  // A multi-colour mark carries its own paths and canvas; "meet" keeps a
  // non-square logo (Figma is 2:3) from stretching to fill the box.
  if (ic.p) {
    return (
      `<svg viewBox="${ic.vb || '0 0 24 24'}" width="${size}" height="${size}" ` +
      'preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
      ic.p.map((q) => `<path d="${q.d}" fill="${q.c}"/>`).join('') +
      '</svg>'
    );
  }
  // A gradient mark needs a <defs> of its own. The id is counted up rather
  // than fixed, so two icons on screen at once can never share one.
  if (ic.g) {
    const gid = `ig${++gradN}`;
    const v = ic.gv || [0, 12, 24, 12];
    return (
      `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">` +
      `<defs><linearGradient id="${gid}" gradientUnits="userSpaceOnUse" ` +
      `x1="${v[0]}" y1="${v[1]}" x2="${v[2]}" y2="${v[3]}">` +
      ic.g.map((s) => `<stop offset="${s[0]}" stop-color="${s[1]}"/>`).join('') +
      `</linearGradient></defs><path d="${ic.d}" fill="url(#${gid})"/></svg>`
    );
  }
  const fill = ic.adaptive ? 'currentColor' : ic.c || 'currentColor';
  return (
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${fill}"` +
    `${ic.eo ? ' fill-rule="evenodd"' : ''} aria-hidden="true">` +
    `<path d="${ic.d}"/></svg>`
  );
}

/* --------------------------------------------------------------------------
   The engine. Takes the mounted nodes, returns a teardown.
   -------------------------------------------------------------------------- */
function startLake(els) {
  const { grid, scene, state, tally, seen: seenEl, seenWrap, pop, popBox, stage, md, claude } = els;
  const CATCH = catchRoster;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W = 140;
  const H = 38;
  const HORIZON = 21;
  let ch = [];
  let col = [];

  function alloc() {
    ch = Array.from({ length: H }, () => new Array(W));
    col = Array.from({ length: H }, () => new Array(W));
  }
  function clear() {
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        ch[y][x] = ' ';
        col[y][x] = '';
      }
    }
  }
  function put(x, y, c, cls) {
    const rx = Math.round(x);
    const ry = Math.round(y);
    if (rx < 0 || rx >= W || ry < 0 || ry >= H || c === undefined) return;
    ch[ry][rx] = c;
    col[ry][rx] = cls || '';
  }
  function write(x, y, s, cls) {
    for (let i = 0; i < s.length; i++) put(x + i, y, s.charAt(i), cls);
  }
  function sprite(x, y, lines, cls, over) {
    for (let r = 0; r < lines.length; r++) {
      for (let c = 0; c < lines[r].length; c++) {
        const g = lines[r].charAt(c);
        if (g === ' ') continue;
        const o = over && over[g];
        put(x + c, y + r, (o && o.g) || g, (o && o.c) || cls);
      }
    }
  }
  /* A character cell is about twice as tall as it is wide, so the horizontal
     scale has to run ahead of the vertical one or the letters come out
     squeezed into tall slivers. */
  function word(x, y, text, sx0, sy0, mark, cls) {
    for (let i = 0; i < text.length; i++) {
      const rows = GLYPH_ROWS[text.charAt(i)];
      if (!rows) continue;
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 5; c++) {
          if (rows[r].charAt(c) !== '#') continue;
          for (let sy = 0; sy < sy0; sy++) {
            for (let sx = 0; sx < sx0; sx++) {
              put(x + i * (6 * sx0) + c * sx0 + sx, y + r * sy0 + sy, mark, cls);
            }
          }
        }
      }
    }
  }

  /* Sprites sit on top of the <pre>, positioned in grid cells. */
  let cellW = 6;
  let cellH = 12;
  function placeActors(ax, top, cx, deck) {
    const ox = grid.offsetLeft;
    const oy = grid.offsetTop;
    md.style.transform = `translate(${ox + ax * cellW}px, ${oy + top * cellH}px)`;
    md.style.width = `${MD.w * cellW}px`;
    md.style.height = `${MD.h * cellH}px`;
    md.classList.toggle('is-bite', mode === 'bite' || mode === 'fight');
    claude.hidden = !withClaude();
    claude.style.transform = `translate(${ox + cx * cellW}px, ${oy + (deck - CL.h) * cellH}px)`;
    claude.style.width = `${CL.w * cellW}px`;
    claude.style.height = `${CL.h * cellH}px`;
  }

  function render() {
    let html = '';
    for (let y = 0; y < H; y++) {
      let run = '';
      let runCls = col[y][0];
      for (let x = 0; x < W; x++) {
        const c = col[y][x];
        if (c !== runCls) {
          html += runCls ? `<span class="${runCls}">${run}</span>` : run;
          run = '';
          runCls = c;
        }
        const g = ch[y][x];
        run += ESCAPES[g] || g;
      }
      html += runCls ? `<span class="${runCls}">${run}</span>` : run;
      html += '\n';
    }
    grid.innerHTML = html;
  }

  /* ---------- panels ---------- */
  function openPanel(html) {
    popBox.innerHTML = html;
    pop.hidden = false;
    stage.classList.add('is-dim');
  }
  function closePanel() {
    pop.hidden = true;
    stage.classList.remove('is-dim');
  }
  function bar(tag, what, esc) {
    return (
      `<div class="lake-bar"><span class="lake-tag">${tag}</span>` +
      `<span class="lake-what">${what}</span>` +
      `<span class="lake-esc">${esc}</span></div>`
    );
  }
  function fightPanel(f) {
    // Neutral accent here: naming the tier before the reveal would spoil it.
    pop.style.setProperty('--rar', 'var(--ink-2)');
    openPanel(
      `${bar('hook', 'something is on', 'click')}<div class="lake-body">` +
        `<p class="lake-say lake-say--hint">${f.hint}</p>` +
        '<div class="lake-track"><div class="lake-zone"></div>' +
        '<div class="lake-mark"></div></div>' +
        '<p class="lake-close">click while the marker is inside the band</p>' +
        '</div>',
    );
    const z = popBox.querySelector('.lake-zone');
    z.style.left = `${f.zs * 100}%`;
    z.style.width = `${f.zw * 100}%`;
  }
  function catchPanel(f) {
    const t = TIER[f.rar];
    pop.style.setProperty('--rar', `var(--r-${f.rar.toLowerCase()})`);
    const pips = '▮▮▮▮'.slice(0, t.pips) + '▯▯▯▯'.slice(0, 4 - t.pips);
    // Called before `seen` records this catch, so count it in by hand.
    const logged = Object.keys(seen).length + (seen[f.id] ? 0 : 1);
    openPanel(
      `${bar(t.tag, t.what, 'esc')}<div class="lake-body">` +
        `<div class="lake-icon">${iconHTML(f.icon, 64)}</div>` +
        `<p class="lake-name">${f.name}</p>` +
        '<dl class="lake-kv">' +
        `<div><dt>rarity</dt><dd><span class="lake-pips">${pips}</span>&nbsp; ` +
        `${f.rar.toLowerCase()}</dd></div>` +
        `<div><dt>type</dt><dd>${f.cat.toLowerCase()}</dd></div>` +
        `<div><dt>logged</dt><dd>${logged} / ${CATCH.length}</dd></div>` +
        '</dl>' +
        (f.say ? `<p class="lake-say"><b>// </b>${f.say}</p>` : '') +
        '<p class="lake-close"><b>$</b> click anywhere to cast again</p>' +
        '</div>',
    );
  }

  /* ---------- game state ---------- */
  let fight = null;
  let pending = null;
  let mode = 'idle'; // idle | cast | wait | bite | fight | reveal
  let t = 0;
  let modeAt = 0;
  let biteAt = 0;
  let bobX = 0;
  let bobY = 0;
  let castFrom = 0;
  let caught = 0;
  let seen = {};
  let fightAt = 0;
  let lastNow = 0;

  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    if (saved && typeof saved === 'object') {
      seen = saved.seen || {};
      caught = saved.caught || 0;
    }
  } catch {
    /* private window, or storage blocked — the logbook is a convenience */
  }
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ seen, caught }));
    } catch {
      /* same */
    }
  }

  // Claude only stands on the pier when there is room for both without the
  // pair crowding the name on a phone.
  const withClaude = () => W >= 96;
  // Constant right margin whatever the figures' widths.
  const anglerX = () => W - 6 - MD.w - (withClaude() ? CL.w + CL.gap : 0);
  const lerp = (a, b, p) => a + (b - a) * Math.max(0, Math.min(1, p));

  /* Elevation of the rod above horizontal, in degrees. The cast is a windup
     back past vertical, then a whip forward — that swing is the whole tell
     that the angler threw something. */
  function rodElevation() {
    if (mode === 'cast') {
      const p = (t - modeAt) / CAST_TIME;
      return p < 0.34 ? lerp(56, 88, p / 0.34) : lerp(88, 17, (p - 0.34) / 0.66);
    }
    if (mode === 'wait' || mode === 'bite') return 28;
    return 56;
  }
  function handPos() {
    const deck = HORIZON - 1;
    const top = deck - MD.h;
    // The body leans forward through the forward half of the swing.
    let lean = 0;
    if (mode === 'cast') lean = (t - modeAt) / CAST_TIME < 0.34 ? 1 : -1;
    return { x: anglerX() + HAND.x + lean, y: top + HAND.y, top, lean, deck };
  }
  /* The marker ping-pongs 0 -> 1 -> 0 along the bar, once per two seconds at
     speed 1. Driven by the real clock rather than the 18fps grid tick so it
     moves smoothly. */
  function markerPos(now) {
    if (!fight) return 0;
    const phase = (now - fightAt) * fight.speed;
    return 1 - Math.abs((((phase % 2) + 2) % 2) - 1);
  }
  function rodTip() {
    const h = handPos();
    const e = (rodElevation() * Math.PI) / 180;
    const L = 10;
    // A cell is about twice as tall as it is wide, so the horizontal step is
    // doubled to keep the drawn angle looking like the angle we asked for.
    return { x: h.x - 2 * L * Math.cos(e), y: h.y - L * Math.sin(e) };
  }

  function drawScene() {
    clear();

    // Sun and birds sit furthest back.
    const sunX = W - 32;
    sprite(sunX, 2, ['  .-.  ', ' (   ) ', "  '-'  "], 'c-sky');
    const flap = reduced ? 0 : Math.round(Math.sin(t * 0.8));
    write(sunX - 20, 5 + flap, '\\/', 'c-faint');
    write(sunX - 13, 7 - flap, '\\/', 'c-faint');

    // Clouds drift right to left and wrap; drawn before the name so they pass
    // behind it rather than over it.
    const span = W + 26;
    CLOUDS.forEach((cl, i) => {
      const drift = reduced ? i * 31 : t * cl.speed + i * 31;
      const cx = W - 4 - (drift % span);
      sprite(cx, cl.row, cl.art, 'c-sky');
      if (cx < 0) sprite(cx + span, cl.row, cl.art, 'c-sky');
    });

    // The name, solid and on top: it is the only thing telling a visitor
    // whose site this is, so it wins every overlap in the sky.
    /* Cells are twice as tall as they are wide, so sx is what keeps the
       letters from coming out as tall slivers. "DANIEL" at sx 2 ends at
       column 72, so 76 is the lowest this step can go without clipping the
       name — and a phone lands near 86 columns, so it still gets sx 2. */
    const sx = W >= 136 ? 3 : W >= 76 ? 2 : 1;
    word(3, 3, 'DANIEL', sx, 1, '█', 'c-name');
    word(3, 12, 'LIM', sx, 1, '█', 'c-name');

    // Far shore and horizon.
    for (let x = 0; x < W; x++) put(x, HORIZON - 1, '_', 'c-sky');

    // Water: three bands, each drifting at its own speed.
    for (let y = HORIZON; y < H; y++) {
      const depth = (y - HORIZON) / (H - HORIZON);
      const speed = 0.6 + depth * 1.6;
      const cls = depth > 0.55 ? 'c-deep' : 'c-sky';
      for (let wx = 0; wx < W; wx++) {
        const ph = wx * 0.26 + y * 0.7 - (reduced ? 0 : t * speed);
        const s = Math.sin(ph) + Math.sin(ph * 0.47 + 1.3) * 0.6;
        put(wx, y, s > 0.95 ? '~' : s > 0.1 ? '-' : s > -0.9 ? ' ' : '.', cls);
      }
    }

    // Fish shadows, over the waves but under the pier and the angler.
    SHADOWS.forEach((f, i) => {
      const art = FISH_ART[f.dir > 0 ? 'r' : 'l'][f.size];
      const spanF = W + art.length + 24;
      const travel = (reduced ? i * 37 : t * f.speed + i * 37) % spanF;
      const fx = f.dir > 0 ? travel - art.length - 12 : W + 12 - travel;
      const wob = reduced ? 0 : Math.round(Math.sin(t * 0.9 + i * 1.7));
      const fy = HORIZON + f.depth + wob;
      if (fy > HORIZON && fy < H) write(Math.round(fx), fy, art, 'c-fish');
    });

    // The one that is actually interested: it closes on the float over the
    // whole wait and is alongside it the moment the bite lands.
    if (mode === 'wait' || mode === 'bite' || mode === 'fight') {
      const near =
        mode === 'wait'
          ? Math.min(1, Math.max(0, (t - modeAt) / Math.max(0.3, biteAt - modeAt)))
          : 1;
      const fromX = bobX - 38;
      const cfx = fromX + (bobX - 5 - fromX) * near;
      const cfy = bobY + 3 - Math.round(near * 3);
      if (cfy > HORIZON && cfy < H) write(Math.round(cfx), cfy, '>-=))>', 'c-fish');
    }

    // The pier sits just above the waterline and runs off the right edge; its
    // pilings drop into the water below.
    const hand = handPos();
    const ax = anglerX() + hand.lean;
    const { deck, top } = hand;
    for (let dx = anglerX() - 8; dx < W; dx++) put(dx, deck, '=', 'c-faint');
    for (let p = 0; p < 3; p++) {
      for (let q = 1; q <= 4; q++) put(anglerX() - 5 + p * 13, deck + q, '|', 'c-faint');
    }

    // Reserve the figures' cells so nothing in the grid shows through the
    // gaps in the sprites (between the feet, around the hood).
    for (let by = 0; by < MD.h; by++) {
      for (let bx = -1; bx <= MD.w; bx++) put(ax + bx, top + by, ' ', '');
    }
    const cx = anglerX() + MD.w + CL.gap;
    if (withClaude()) {
      for (let by = deck - CL.h; by < deck; by++) {
        for (let bx = 0; bx < CL.w; bx++) put(cx + bx, by, ' ', '');
      }
    }
    placeActors(ax, top, cx, deck);

    // Rod: a straight line from the hand, at whatever angle the swing is at.
    const tip = rodTip();
    const hx = hand.x;
    const hy = hand.y;
    const steps = Math.max(Math.abs(tip.x - hx), Math.abs(tip.y - hy));
    for (let i = 0; i <= steps; i++) {
      put(hx + ((tip.x - hx) * i) / steps, hy + ((tip.y - hy) * i) / steps, '/', ROD_CLS);
    }

    // Line and float, once something is in the water. Nothing is in the air
    // during the windup — the lure leaves the rod only on the forward swing.
    const swing = mode === 'cast' ? (t - modeAt) / CAST_TIME : 1;
    const inAir =
      (mode === 'cast' && swing > 0.34) ||
      mode === 'wait' ||
      mode === 'bite' ||
      mode === 'fight';
    if (inAir) {
      const prog = mode === 'cast' ? Math.min(1, (swing - 0.34) / 0.66) : 1;
      const tx = castFrom + (bobX - castFrom) * prog;
      const arc = mode === 'cast' ? -Math.sin(prog * Math.PI) * 5 : 0;
      const ty = tip.y + (bobY - tip.y) * prog + arc;
      const n = Math.max(Math.abs(tx - tip.x), Math.abs(ty - tip.y));
      for (let j = 0; j <= n; j++) {
        const lx = tip.x + ((tx - tip.x) * j) / n;
        const ly = tip.y + ((ty - tip.y) * j) / n;
        if (Math.round(ly) < HORIZON - 1 || mode === 'cast') put(lx, ly, '.', 'c-faint');
      }
      const dip = mode === 'bite' ? Math.round(Math.abs(Math.sin(t * 14)) * 1.6) : 0;
      put(tx, ty + dip, 'o', 'c-accent');
      if (mode === 'bite') {
        // A bite has to be unmissable from across the page, so it gets a
        // splash, rings and a shout rather than a one-character twitch.
        const bx = Math.round(tx);
        const by = Math.round(ty) + dip;
        write(bx - 2, by - 3, '\\ | /', 'c-accent');
        write(bx - 3, by - 2, ' !!! ', 'c-accent');
        write(bx - 5, by + 1, '~~~~~~~~~~', 'c-accent');
        write(bx - 7, by + 2, '~~~', 'c-accent');
        write(bx + 6, by + 2, '~~~', 'c-accent');
      }
      if (mode === 'fight') {
        // A line under tension while you try to set the hook.
        write(Math.round(tx) - 4, Math.round(ty) + 1, '~~~~~~~~', 'c-accent');
      }
    }

    render();
  }

  /* ---------- flow ---------- */
  function paintHud() {
    state.innerHTML =
      mode === 'fight'
        ? `<b>Set the hook</b> · ${fight.hint}`
        : {
            idle: 'Click the water to cast',
            cast: 'Casting',
            wait: 'Waiting for a bite',
            bite: '<b>Now! Click to reel in</b>',
            reveal: 'Click to close',
          }[mode];
    // Score and logbook stay out of the way until there is something in them;
    // an empty tally on arrival is just noise.
    const any = caught > 0;
    tally.hidden = !any;
    seenWrap.hidden = !any;
    if (any) {
      tally.textContent = `${caught} caught · ${Object.keys(seen).length}/${CATCH.length} logged`;
    }
  }
  function setMode(m) {
    mode = m;
    modeAt = t;
    paintHud();
  }
  function paintSeen() {
    seenEl.innerHTML = '';
    CATCH.forEach((f) => {
      const s = document.createElement('span');
      const got = !!seen[f.id];
      s.className = got ? 'is-got' : '';
      s.textContent = got ? f.name : '?????';
      seenEl.appendChild(s);
    });
  }
  function roll() {
    let total = 0;
    const w = CATCH.map((f) => {
      const x = ODDS[f.rar] * (seen[f.id] ? REPEAT : 1);
      total += x;
      return x;
    });
    if (!(total > 0)) return CATCH[(Math.random() * CATCH.length) | 0];
    let r = Math.random() * total;
    for (let i = 0; i < CATCH.length; i++) {
      r -= w[i];
      if (r < 0) return CATCH[i];
    }
    return CATCH[CATCH.length - 1];
  }
  function showCatch(f) {
    catchPanel(f);
    caught++;
    seen[f.id] = true;
    save();
    paintSeen();
  }

  function act() {
    if (mode === 'reveal') {
      // Closing the panel is its own press; the next one casts.
      closePanel();
      setMode('idle');
      return;
    }
    if (mode === 'idle') {
      castFrom = rodTip().x;
      bobX = Math.round(W * (0.26 + Math.random() * 0.22));
      bobY = HORIZON + 3 + Math.round(Math.random() * 4);
      setMode('cast');
    } else if (mode === 'bite') {
      // The catch is decided here, but you still have to land it.
      pending = roll();
      const cfg = FIGHT[pending.rar];
      fight = {
        speed: cfg.speed,
        hint: cfg.hint,
        zw: cfg.w,
        zs: 0.05 + Math.random() * (0.9 - cfg.w),
      };
      fightAt = lastNow;
      setMode('fight');
      fightPanel(fight);
    } else if (mode === 'fight') {
      const pos = markerPos(lastNow);
      if (pos >= fight.zs && pos <= fight.zs + fight.zw) {
        showCatch(pending);
        setMode('reveal');
      } else {
        closePanel();
        setMode('idle');
        state.innerHTML = '<b>Hook slipped.</b> Cast again.';
      }
      fight = null;
      pending = null;
    } else if (mode === 'wait') {
      // Struck too early: the fish is gone and you start over. setMode
      // repaints the HUD, so the message has to be written after it — the
      // prototype wrote it first and the line never actually appeared.
      setMode('idle');
      state.innerHTML = '<b>Too early.</b> It spooked.';
    }
  }

  /* The grid's spans are rebuilt every frame, so a mousedown target is
     usually gone by the time the button is released and the browser never
     synthesises a click. Acting on the press itself is both correct and
     snappier. */
  function onPointer(e) {
    e.preventDefault();
    act();
  }
  function onKey(e) {
    if (e.key === ' ' || e.key === 'Enter') {
      act();
      e.preventDefault();
      return;
    }
    // The catch panel advertises "esc", so esc has to dismiss it. It only
    // closes the panel: unlike a click it never casts the next line.
    if (e.key === 'Escape' && mode === 'reveal') {
      act();
      e.preventDefault();
    }
  }

  function step() {
    if (mode === 'cast' && t - modeAt > CAST_TIME) {
      setMode('wait');
      biteAt = t + 1.4 + Math.random() * 3.6;
    } else if (mode === 'wait' && t > biteAt) {
      setMode('bite');
    } else if (mode === 'bite' && t - modeAt > BITE_WINDOW) {
      setMode('idle');
      state.innerHTML = '<b>It got away.</b> Cast again.';
    } else if (mode === 'fight' && t - modeAt > FIGHT_TIMEOUT) {
      fight = null;
      pending = null;
      closePanel();
      setMode('idle');
      state.innerHTML = '<b>It shook loose.</b> Cast again.';
    }
  }

  /* Measure the real character advance instead of assuming 0.6em: browsers
     enforce a minimum font size, so on a phone the cells come out wider than
     requested and an assumed width overflows the page sideways. */
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;left:-9999px;';
  grid.appendChild(probe);
  const REF = '0123456789'.repeat(10);

  function fit() {
    const box = scene.clientWidth - 20;
    /* The floor is 6px, not the 4px the width alone would ask for on a
       phone. Below that the art is a smudge, and — the reason it is a hard
       floor — 38 rows of 4px leave the stage shorter than the catch panel,
       which then spills over the HUD underneath it. */
    const want = Math.max(6, Math.min(11, box / 84));
    grid.style.fontSize = `${want.toFixed(2)}px`;
    probe.textContent = REF;
    const adv = probe.getBoundingClientRect().width / 100 || want * 0.6;
    probe.textContent = '';
    cellW = adv;
    cellH = parseFloat(getComputedStyle(grid).lineHeight) || want * 1.2;
    const cols = Math.max(52, Math.min(170, Math.floor(box / adv)));
    if (cols !== W) {
      W = cols;
      alloc();
    }
  }
  function onResize() {
    fit();
    drawScene();
  }

  scene.addEventListener('pointerdown', onPointer);
  document.addEventListener('keydown', onKey);
  window.addEventListener('resize', onResize);

  alloc();
  fit();
  paintSeen();
  paintHud();
  drawScene();

  /* The scene ticks at ~18fps, which suits character animation and keeps the
     cost down; the fight marker reads the real clock every frame so it still
     moves smoothly. */
  let raf = 0;
  let prev = 0;
  let start = 0;
  function loop(time) {
    if (!start) start = time;
    lastNow = (time - start) / 1000;
    if (mode === 'fight' && fight) {
      const m = popBox.querySelector('.lake-mark');
      if (m) m.style.left = `${markerPos(lastNow) * 100}%`;
    }
    if (time - prev > 55) {
      prev = time;
      t = lastNow;
      step();
      drawScene();
    }
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    scene.removeEventListener('pointerdown', onPointer);
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('resize', onResize);
    probe.remove();
  };
}

/* --------------------------------------------------------------------------
   The component: shell, refs, teardown.
   -------------------------------------------------------------------------- */
export default function Fishing() {
  const refs = {
    grid: useRef(null),
    scene: useRef(null),
    state: useRef(null),
    tally: useRef(null),
    seen: useRef(null),
    seenWrap: useRef(null),
    pop: useRef(null),
    popBox: useRef(null),
    stage: useRef(null),
    md: useRef(null),
    claude: useRef(null),
  };

  useEffect(() => {
    const nodes = Object.fromEntries(
      Object.entries(refs).map(([k, r]) => [k, r.current]),
    );
    if (Object.values(nodes).some((n) => !n)) return undefined;
    return startLake(nodes);
    // The engine is mounted once and owns its own nodes from then on.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="lake">
      <div className="lake-stage" ref={refs.stage}>
        <button
          className="lake-scene"
          ref={refs.scene}
          type="button"
          aria-describedby="lake-state"
        >
          {/* The grid is decoration; the live region below is what a screen
              reader follows, so the art itself stays out of the tree. */}
          <pre className="lake-grid" ref={refs.grid} aria-hidden="true" />
          <span className="lake-actor lake-md" ref={refs.md} aria-hidden="true">
            <MiniDan pose="fishing" px={1} animate className="lake-md-calm" />
            <MiniDan pose="fishing_bite" px={1} className="lake-md-bite" />
          </span>
          <span className="lake-actor lake-claude" ref={refs.claude} aria-hidden="true">
            <MiniDan pose="claude" px={1} animate style={{ '--md-delay': '-1.3s' }} />
          </span>
          <span className="lake-sr">
            Cast a line into the lake. Click, or press Enter, to play.
          </span>
        </button>

        <div className="lake-pop" ref={refs.pop} hidden>
          <div className="lake-halo" />
          <div className="lake-popbox" ref={refs.popBox} />
        </div>
      </div>

      <div className="lake-hud">
        <span className="lake-state" id="lake-state" ref={refs.state} aria-live="polite">
          Click the water to cast
        </span>
        <span className="lake-tally" ref={refs.tally} hidden />
      </div>

      <div className="lake-seen" ref={refs.seenWrap} hidden>
        <span className="lake-seen-h">Logbook</span>
        <div className="lake-seen-row" ref={refs.seen} />
      </div>
    </div>
  );
}
