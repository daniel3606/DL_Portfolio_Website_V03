import './case.css';

/**
 * A system drawn from data: lanes left to right, the way a request or a
 * piece of state travels. Real boxes and real text, so it reads in both
 * themes, scales without a raster, and is searchable and accessible.
 */
export default function Architecture({ architecture }) {
  if (!architecture) return null;
  const { intro, columns, notes } = architecture;

  return (
    <div className="arch">
      {intro ? <p className="arch-intro">{intro}</p> : null}

      <ol className="arch-lanes" style={{ '--lanes': columns.length }}>
        {columns.map((col, i) => (
          <li className="arch-lane" key={col.label}>
            <span className="arch-label">
              <span className="arch-num">{String(i + 1).padStart(2, '0')}</span>
              {col.label}
            </span>
            <ul className="arch-nodes">
              {col.nodes.map((node) => (
                <li className="arch-node" key={node.title}>
                  <strong>{node.title}</strong>
                  {node.detail ? <span>{node.detail}</span> : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {notes?.length ? (
        <ul className="list-dash arch-notes">
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
