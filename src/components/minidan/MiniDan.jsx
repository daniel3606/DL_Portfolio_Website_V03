import { POSES, PROP, CLAUDE } from './poses';
import './MiniDan.css';

/* The character's own colours are tokens (see base.css) so they can be tuned
   in one place; prop colours are fixed because they only ever appear on
   props. */
const SELF = { b: 'var(--md-hood)', a: 'var(--md-face)', f: 'var(--md-face)', E: 'var(--md-eye)', e: 'var(--md-eye)' };
const CLAUDE_FILL = { C: 'var(--claude, #d97757)', E: 'var(--md-eye)' };

/* Runs of one colour on a row become one rect, so a 20x14 sprite is ~60
   nodes instead of ~200. Eyes go in their own group (blink) and everything
   but the feet in another (the idle bob), which is all the animation needs. */
function build(rows, fills) {
  const body = [];
  const eyes = [];
  const feet = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      let j = x;
      while (j < row.length && row[j] === c) j++;
      if (c !== '.') {
        const rect = <rect key={`${x}-${y}`} x={x} y={y} width={j - x} height={1} fill={fills[c] || PROP[c]} />;
        (c === 'E' ? eyes : c === 'f' ? feet : body).push(rect);
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
 *          on the bigger sprites; at 2–3px a blink is just flicker.
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
