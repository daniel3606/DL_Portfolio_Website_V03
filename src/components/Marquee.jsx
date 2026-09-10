import './Marquee.css';

/**
 * An infinite ticker. The track is duplicated so the translation can loop
 * seamlessly; the copy is hidden from assistive tech.
 */
export default function Marquee({ items, speed = 46 }) {
  return (
    <div className="marquee" aria-label={items.join(', ')}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
            {items.map((item) => (
              <span className="marquee-item" key={item}>
                {item}
                <i className="marquee-rule" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
