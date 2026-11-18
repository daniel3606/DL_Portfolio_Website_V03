import { Arrow, TechList } from './meta';
import './work.css';

/** Experiments: a name, what it does, what it is built with. No page, no plate. */
export default function LabList({ items }) {
  return (
    <ul className="lab">
      {items.map((item) => {
        const link = item.links?.[0];
        return (
          <li className="lab-row" key={item.slug}>
            <div className="lab-head">
              <h3 className="lab-name">{item.name}</h3>
              <span className="lab-kind">
                {item.kind}
                <i className="sep" aria-hidden="true" />
                {item.year}
              </span>
            </div>
            <p className="lab-summary">{item.summary}</p>
            <div className="lab-foot">
              <TechList items={item.tech} />
              {link ? (
                <a className="lab-link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span className="visually-hidden"> for {item.name} (opens in a new tab)</span>
                  <Arrow />
                </a>
              ) : (
                <span className="lab-private">Private</span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
