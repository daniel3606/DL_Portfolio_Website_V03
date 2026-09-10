import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="page-top" style={{ minHeight: '58vh' }}>
      <div className="shell" style={{ paddingBottom: '140px' }}>
        <span className="eyebrow">404</span>
        <h1 className="display" style={{ marginTop: 20, maxWidth: '11ch' }}>
          That page doesn&rsquo;t exist.
        </h1>
        <p className="lede" style={{ marginTop: 26, maxWidth: '42ch' }}>
          The link may be out of date. The work is all still here.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
          <Link to="/work" className="btn btn-primary">
            Browse the work
          </Link>
          <Link to="/" className="btn btn-secondary">
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
