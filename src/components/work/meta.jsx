/* Small pieces of project metadata, shared by cards, rows and case studies. */

export const Arrow = ({ dir = 'ne', size = 14 }) => {
  const d = {
    ne: 'M4 12 12 4M12 4H6M12 4v6',
    right: 'M3 8h10M9 4l4 4-4 4',
    left: 'M13 8H3M7 4 3 8l4 4',
  }[dir];
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
    </svg>
  );
};

/**
 * Status is just the words. A dot or square in front of it read as
 * generated UI, and the label already says everything the mark did.
 */
export function StatusTag({ status }) {
  if (!status) return null;
  return <span className={`status status-${status.tone}`}>{status.label}</span>;
}

export function TechList({ items, className = '' }) {
  return (
    <ul className={`tech ${className}`} aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function ProjectLinks({ links, note, size = 'md' }) {
  if (!links?.length && !note) return null;
  return (
    <div className={`plinks plinks-${size}`}>
      {links?.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}
          aria-label={`${link.label} (opens in a new tab)`}
        >
          {link.label}
          <Arrow />
        </a>
      ))}
      {note ? <p className="plinks-note">{note}</p> : null}
    </div>
  );
}
