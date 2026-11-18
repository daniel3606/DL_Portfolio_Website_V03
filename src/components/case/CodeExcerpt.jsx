import { Arrow } from '../work/meta';
import './case.css';

/* Comments are the only thing worth setting apart in a short excerpt: they
   carry the reasoning. A full highlighter would be a dependency for colour. */
const isComment = (line) => /^\s*(\/\/|#|\/\*|\*)/.test(line);

export default function CodeExcerpt({ code }) {
  if (!code) return null;
  const lines = code.code.split('\n');

  return (
    <figure className="code">
      <div className="code-head">
        <span className="code-file">{code.file}</span>
        {code.href ? (
          <a className="code-src" href={code.href} target="_blank" rel="noreferrer">
            View on GitHub
            <span className="visually-hidden"> (opens in a new tab)</span>
            <Arrow />
          </a>
        ) : null}
      </div>
      <pre className="code-body" tabIndex={0} aria-label={`Code excerpt from ${code.file}`}>
        <code>
          {lines.map((line, i) => (
            <span className={isComment(line) ? 'code-line code-comment' : 'code-line'} key={i}>
              {line || ' '}
              {'\n'}
            </span>
          ))}
        </code>
      </pre>
      {code.note ? <figcaption className="code-note">{code.note}</figcaption> : null}
    </figure>
  );
}
