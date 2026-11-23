import { POSES, PAL, CLAUDE } from './poses';
import './MiniDan.css';

/* The character's own colours are tokens (see base.css) so they can be tuned
   in one place; shading, outline and prop colours come from the kit. */
const SELF = { B: 'var(--md-hood)', S: 'var(--md-face)', E: 'var(--md-eye)' };
const CLAUDE_FILL = { C: 'var(--claude, #d97757)', E: 'var(--md-eye)' };
const SKIN = new Set(['S', 's', 'p']);

/* Runs of one colour on a row become one rect, so a 26x36 sprite is a few
   hundred nodes instead of ~900. Eyes go in their own group (blink) and
   everything above the shoes in another (the idle bob), which is all the
   animation needs. An eye is an E pixel touching skin, so a prop's dark
   pixel (a fish eye) does not blink. */
function build(rows, fills) {
  const body = [];
  const eyes = [];
  const feet = [];
  const at = (x, y) => (rows[y] ? rows[y][x] : undefined);
  const shoes = rows.findIndex((r, y) => y >= rows.length - 6 && r.includes('K'));
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      let j = x;
      while (j < row.length && row[j] === c) j++;
      if (c !== '.') {
        const rect = <rect key={`${x}-${y}`} x={x} y={y} width={j - x} height={1} fill={fills[c] || PAL[c]} />;
        const eye =
          c === 'E' &&
          [at(x - 1, y), at(j, y), at(x, y - 1), at(x, y + 1)].some((n) => SKIN.has(n));
        (eye ? eyes : shoes >= 0 && y >= shoes ? feet : body).push(rect);
      }
      x = j;
    }
  });
  return { body, eyes, feet };
}

const cache = new Map();
function parts(name) {
  if (!cache.has(name)) {
    cache.set(name, name === 'claude' ? build(CLAUDE, CLAUDE_FILL) : build(POSES[name] || POSES.idle, SELF));
  }
  return cache.get(name);
}

/**
 * One MiniDan pose as crisp square pixels.
 *
 * px       size of one pixel in CSS px
 * animate  a small idle loop: a one-pixel breath and a blink. Only worth it
 *          on the bigger sprites; at 1–1.5px a blink is just flicker.
 * label    pass for a sprite that means something; omit for decoration.
 */
export default function MiniDan({ pose = 'idle', px = 4, animate = false, label, className = '', style }) {
  const rows = pose === 'claude' ? CLAUDE : POSES[pose] || POSES.idle;
  const w = rows[0].length;
  const h = rows.length;
  const { body, eyes, feet } = parts(pose);

  return (
    <svg
      className={`md ${animate ? 'md-anim' : ''} ${className}`}
      width={w * px}
      height={h * px}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={style}
    >
      <g className="md-body">
        {body}
        <g className="md-eyes">{eyes}</g>
      </g>
      {feet}
    </svg>
  );
}
