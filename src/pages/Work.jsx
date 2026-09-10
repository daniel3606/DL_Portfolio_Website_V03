import { useMemo, useState } from 'react';
import WorkIndex from '../components/WorkIndex';
import { projects, categories } from '../data/projects';
import './Work.css';

export default function Work() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <main className="work-page page-top">
      <div className="shell">
        <header className="work-head">
          <span className="eyebrow">Index</span>
          <h1 className="h1 work-title">Things I&rsquo;ve shipped.</h1>
          <p className="lede work-lede">
            Mobile, web, and XR — each one written up as a full case study rather than a screenshot with a caption.
          </p>
        </header>

        <div className="work-filters" role="tablist" aria-label="Filter projects">
          {categories.map((cat) => {
            const count =
              cat.key === 'all'
                ? projects.length
                : projects.filter((p) => p.categories.includes(cat.key)).length;
            return (
              <button
                key={cat.key}
                role="tab"
                aria-selected={filter === cat.key}
                className={`work-filter ${filter === cat.key ? 'is-active' : ''}`}
                onClick={() => setFilter(cat.key)}
              >
                {cat.label}
                <sup>{count}</sup>
              </button>
            );
          })}
        </div>

        {visible.length ? (
          <WorkIndex projects={visible} key={filter} />
        ) : (
          <p className="work-empty">Nothing in this category yet.</p>
        )}
      </div>

    </main>
  );
}
