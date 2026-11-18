import './ProjectMedia.css';

/**
 * The project plate: one composition system for every preview on the site.
 *
 * Every plate shares the same rules, so a phone app, a website and a desktop
 * tool read as one body of work:
 *   - a fixed aspect ratio (16:10 for covers, wider for case-study heroes),
 *   - the project's own tint as the ground, lit from the top,
 *   - devices sized in container units, so the composition scales as a unit,
 *   - and every device bleeds off the bottom edge, never floats mid-plate.
 *
 * Screens are authentic captures. Frames are drawn here in CSS, so a capture
 * never carries a baked-in mockup and every frame on the site is identical.
 */

function Phone({ screen, className = '', eager }) {
  return (
    <div className={`pm-phone ${className}`}>
      <div className="pm-phone-screen">
        <img
          src={screen.src}
          alt={screen.alt || ''}
          width={screen.w}
          height={screen.h}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </div>
  );
}

function Browser({ screen, url, className = '', eager }) {
  return (
    <div className={`pm-browser ${className}`}>
      <div className="pm-browser-bar" aria-hidden="true">
        <span className="pm-browser-url">{url}</span>
      </div>
      <div className="pm-browser-screen">
        <img
          src={screen.src}
          alt={screen.alt || ''}
          width={screen.w}
          height={screen.h}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </div>
  );
}

function Window({ screen, className = '', eager }) {
  return (
    <div className={`pm-window ${className}`}>
      <img
        src={screen.src}
        alt={screen.alt || ''}
        width={screen.w}
        height={screen.h}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}

/**
 * @param {object}  props.media    { layout, screens, url }
 * @param {object}  props.theme    { tint, tintDark }
 * @param {'cover'|'hero'} props.ratio
 * @param {boolean} props.eager    load immediately (above the fold)
 */
export default function ProjectMedia({ media, theme, ratio = 'cover', eager = false, label }) {
  if (!media) return null;
  const { layout, screens = [], url } = media;
  const style = {
    '--plate': theme?.tint,
    '--plate-dark': theme?.tintDark,
    // A dense desktop UI can ask to be shown closer: zoom widens the device
    // past the plate so more of it bleeds and what remains reads larger.
    '--solo-w': media.zoom ? `${100 * media.zoom}cqw` : undefined,
  };

  let body = null;
  switch (layout) {
    case 'phones': {
      // One, two or three phones. The middle one leads; the others step down.
      const n = Math.min(screens.length, 3);
      body = (
        <div className={`pm-phones pm-phones-${n}`}>
          {screens.slice(0, n).map((s, i) => (
            <Phone key={s.src} screen={s} className={`pm-phone-${i}`} eager={eager} />
          ))}
        </div>
      );
      break;
    }
    case 'browser':
      body = <Browser screen={screens[0]} url={url} className="pm-solo" eager={eager} />;
      break;
    case 'window':
      body = <Window screen={screens[0]} className="pm-solo" eager={eager} />;
      break;
    case 'duo':
      // A web surface behind, the phone in front: one product, two surfaces.
      body = (
        <div className="pm-duo">
          <Browser screen={screens[0]} url={url} className="pm-duo-back" eager={eager} />
          <Phone screen={screens[1]} className="pm-duo-front" eager={eager} />
        </div>
      );
      break;
    case 'window-phone':
      body = (
        <div className="pm-duo">
          <Window screen={screens[0]} className="pm-duo-back" eager={eager} />
          <Phone screen={screens[1]} className="pm-duo-front" eager={eager} />
        </div>
      );
      break;
    case 'system':
      // For work with no honest screenshot: the system itself, drawn as a
      // row of lanes on the same plate every other project sits on.
      body = (
        <div className="pm-system" aria-hidden="true">
          <span className="pm-system-title">{media.system.title}</span>
          <div className="pm-system-lanes">
            {media.system.lanes.map((lane, i) => (
              <div className="pm-system-lane" key={lane.label}>
                <span className="pm-system-label">
                  {String(i + 1).padStart(2, '0')} {lane.label}
                </span>
                {lane.items.map((item) => (
                  <span className="pm-system-node" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    default:
      body = null;
  }

  return (
    <div
      className={`pm pm-${ratio} pm-layout-${layout}`}
      style={style}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      <div className="pm-stage">{body}</div>
    </div>
  );
}
