import Reveal from '../Reveal';
import '../media/ProjectMedia.css';
import './case.css';

/**
 * Screens from the product, on the same plate as the cover. Phones sit in a
 * row on one band; wide captures each get their own band. Frames are the
 * same CSS frames ProjectMedia draws, so a screen looks identical on a card
 * and in a case study.
 */
/* Rows of at most four; five or six phones read better as two rows of three. */
const cols = (n) => (n <= 4 ? n : n <= 6 ? 3 : 4);

function PhoneBand({ items, theme }) {
  return (
    <Reveal className="gal-band gal-phones" style={{ '--plate': theme?.tint, '--plate-dark': theme?.tintDark }}>
      <div className="gal-phones-row" role="list" style={{ '--cols': cols(items.length) }}>
        {items.map((item) => (
          <figure className="gal-phone-fig" role="listitem" key={item.src}>
            <div className="pm-phone gal-phone">
              <div className="pm-phone-screen">
                <img src={item.src} alt={item.caption} width={item.w} height={item.h} loading="lazy" decoding="async" />
              </div>
            </div>
            <figcaption className="gal-caption">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Reveal>
  );
}

function WideBand({ item, theme }) {
  const isBrowser = item.frame === 'browser';
  return (
    <Reveal as="figure" className="gal-wide-fig">
      <div className="gal-band gal-wide" style={{ '--plate': theme?.tint, '--plate-dark': theme?.tintDark }}>
        <div className={isBrowser ? 'pm-browser gal-device' : 'pm-window gal-device'}>
          {isBrowser ? (
            <div className="pm-browser-bar" aria-hidden="true">
              <span className="pm-browser-url">{item.url}</span>
            </div>
          ) : null}
          <img src={item.src} alt={item.caption} width={item.w} height={item.h} loading="lazy" decoding="async" />
        </div>
      </div>
      <figcaption className="gal-caption gal-caption-wide">{item.caption}</figcaption>
    </Reveal>
  );
}

export default function Gallery({ items, theme }) {
  if (!items?.length) return null;
  const phones = items.filter((i) => i.frame === 'phone');
  const wides = items.filter((i) => i.frame !== 'phone');

  return (
    <div className="gal">
      {phones.length ? <PhoneBand items={phones} theme={theme} /> : null}
      {wides.map((item) => (
        <WideBand item={item} theme={theme} key={item.src} />
      ))}
    </div>
  );
}
