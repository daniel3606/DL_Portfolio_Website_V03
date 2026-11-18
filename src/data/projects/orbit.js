/* Screens are the TestFlight build's own screenshots from the Devpost gallery.
   Portfolio figures are the Alpaca paper account's virtual money. */
import home from '../../assets/work/orbit/home.webp';
import discovery from '../../assets/work/orbit/discovery.webp';
import stock from '../../assets/work/orbit/stock-detail.webp';
import search from '../../assets/work/orbit/search.webp';
import watchlist from '../../assets/work/orbit/watchlist.webp';
import buying from '../../assets/work/orbit/buying.webp';
import placing from '../../assets/work/orbit/placing-order.webp';
import portfolio from '../../assets/work/orbit/portfolio.webp';
import { shot } from './shot.js';

const o = (src, alt) => shot(src, 720, 1561, alt);

export default {
  slug: 'orbit',
  name: 'Orbit',
  tier: 'more',
  kind: 'Hackathon · iOS app',
  year: '2026',
  period: 'MHacks, Oct 3 — 4, 2026',
  status: { label: 'Winner, Figma Best Design', tone: 'award' },
  summary: 'Stock discovery and paper trading for beginners, with an AI assistant that is not allowed to make numbers up.',
  hook: 'A durable job queue inside SpacetimeDB and an assistant whose replies are rejected unless every figure is cited.',
  tech: ['SpacetimeDB', 'Python', 'React Native', 'TypeScript'],
  theme: { tint: '#e7e3ee', tintDark: '#16121e' },

  cover: {
    layout: 'phones',
    screens: [
      o(home, 'Home: an earnings update for Teradyne with a one-week chart and a plain-English explanation'),
      o(discovery, 'Discovery: the Pisces constellation over today’s theme, Tools for Creators'),
      o(stock, 'Apple stock detail with a six-month chart and Orbit Analysis'),
    ],
  },

  hero: {
    layout: 'phones',
    screens: [
      o(buying, 'Buying $2 of Apple with a keypad and swipe to confirm'),
      o(stock, 'Apple stock detail with a six-month chart and Orbit Analysis'),
      o(portfolio, 'Portfolio on the Alpaca paper account with $100,000 of virtual cash'),
    ],
  },

  links: [
    { label: 'Devpost', href: 'https://devpost.com/software/orbit-qrgmd8', kind: 'site' },
    { label: 'Source on GitHub', href: 'https://github.com/daniel3606/Orbit_MHacks26', kind: 'repo' },
    { label: 'Figma', href: 'https://www.figma.com/design/7NBdMK7SEg8gacOUjKNrk9/Orbit---MHacks?node-id=0-1', kind: 'design' },
  ],

  facts: [
    { label: 'Event', value: 'MHacks 2026, ~22 hours' },
    { label: 'Award', value: 'Winner, Figma Best Design Track' },
    { label: 'Platform', value: 'iOS, on TestFlight' },
    { label: 'Role', value: 'Solo' },
  ],

  overview: {
    problem: 'Investing apps assume you already know which ticker to search. Beginners do not, and the chatbots that offer to help will happily invent a price.',
    solution:
      'Orbit’s loop is discover, understand, ask, practise. It suggests companies each day from a profile you set once, explains why they moved using classified news and a trend score, answers questions grounded in that data, and lets you practise with paper trades.',
    role: 'I built Orbit solo: the design in Figma, the SpacetimeDB module, the Python worker, the assistant’s policy layer and the mobile app.',
  },

  numbers: [
    { value: '329', label: 'tests across backend, database module and app' },
    { value: '114', label: 'stocks in the curated universe' },
  ],

  features: [
    { title: 'Daily discovery', body: 'Companies matched to the risk, horizon, style and sectors you chose in onboarding, under a theme that rotates with your star sign.' },
    { title: 'Grounded assistant', body: 'The server builds an evidence packet; the model writes from it and has no tools that change state.' },
    { title: 'Paper trading', body: 'Swipe-to-confirm orders against an Alpaca paper account, idempotent across timeouts.' },
    { title: 'Shared market data', body: 'Quotes, history and signals are fetched once per stock and published to every user, not refetched per person.' },
  ],

  gallery: [
    { ...o(discovery), frame: 'phone', caption: 'Discovery. Today’s theme and why each company was picked for you.' },
    { ...o(home), frame: 'phone', caption: 'Home explains a move in plain English, with an assistant one tap away.' },
    { ...o(stock), frame: 'phone', caption: 'Stock detail: chart, Orbit Analysis, trend score and sourced news.' },
    { ...o(search), frame: 'phone', caption: 'Search with recent tickers.' },
    { ...o(watchlist), frame: 'phone', caption: 'Watchlist.' },
    { ...o(buying), frame: 'phone', caption: 'Buy by dollar amount, then swipe to confirm.' },
    { ...o(placing), frame: 'phone', caption: 'The order goes to the paper account. Virtual money only.' },
    { ...o(portfolio), frame: 'phone', caption: 'Portfolio on the Alpaca paper account.' },
  ],

  architecture: {
    intro: 'The app talks only to SpacetimeDB. Every user action is a reducer; slow work becomes a job that a Python worker leases, runs outside the transaction, and publishes back.',
    columns: [
      { label: 'App', nodes: [{ title: 'Expo app', detail: 'Subscribes; calls reducers' }] },
      { label: 'SpacetimeDB', nodes: [{ title: 'Reducers & views', detail: 'Private rows keyed on sender' }, { title: 'Job table', detail: 'Lease, backoff, fencing' }] },
      { label: 'Worker', nodes: [{ title: 'Python 3.14', detail: 'mypy strict, pytest' }, { title: 'Policy layer', detail: 'Validates every reply' }] },
      { label: 'Providers', nodes: [{ title: 'Finnhub · Jev', detail: 'Quotes, news, relevance' }, { title: 'Alpaca · OpenAI', detail: 'History, paper orders, prose' }] },
    ],
  },

  challenges: [
    {
      title: 'A job queue with no queue service',
      problem: 'Provider calls are slow and fail, and a hackathon has no time for another piece of infrastructure.',
      solution:
        'Jobs are rows. A worker claims one atomically with a 5–300 s lease; the attempt number is a fencing token, so a worker whose lease was reclaimed cannot commit. Failures back off exponentially from 2 s to 300 s, up to five attempts, with at most three active jobs per user.',
      where: 'spacetime/spacetimedb/src/jobs.ts',
    },
    {
      title: 'An assistant that cannot invent a number',
      problem: 'A finance assistant that hallucinates a price or says “buy” is worse than none.',
      solution:
        'Every reply passes a validator before it is stored. Directive language, risk-free wording, unsupported causes, citations to sources outside the packet, and any dollar or percent figure not present in a cited source are rejected — and the user gets a deterministic fallback instead.',
      where: 'backend/app/assistant/policy.py',
    },
    {
      title: 'Telling a question from a ticker',
      problem: '“Can you explain…” should not look up CAN. Naive ticker matching turns ordinary words into companies.',
      solution:
        'The order is fixed: classify the question, decide whether that intent needs a company at all, and only then look for one. A word becomes a company only with evidence — ticker form, a name or alias, or a slot like “X stock” — and follow-ups resolve to the company already being discussed.',
      where: 'backend/app/assistant/intent.py',
    },
  ],

  code: {
    title: 'Leasing a job inside a reducer',
    lang: 'ts',
    file: 'spacetime/spacetimedb/src/jobs.ts',
    href: 'https://github.com/daniel3606/Orbit_MHacks26/blob/main/spacetime/spacetimedb/src/jobs.ts',
    note: 'The attempt count doubles as a fencing token: a worker holding a stale attempt cannot commit its result.',
    code: `export const claimJob = spacetimedb.reducer(
  { jobId: t.u64(), leaseSeconds: t.u32() },
  (ctx, { jobId, leaseSeconds }) => {
    requireService(ctx);
    const row = ctx.db.job.jobId.find(jobId);
    if (!row) throw new SenderError('job_not_found');
    // … paper-trading jobs also check the account binding

    const now = ctx.timestamp.microsSinceUnixEpoch;
    const waiting =
      (row.status === JOB_STATUS.queued || row.status === JOB_STATUS.retryWait) &&
      row.availableAt.microsSinceUnixEpoch <= now;
    const leaseExpired =
      row.status === JOB_STATUS.running &&
      row.leaseUntil !== undefined &&
      row.leaseUntil.microsSinceUnixEpoch < now;
    if (!waiting && !leaseExpired) throw new SenderError('job_not_claimable');
    // … a job out of attempts is marked failed here instead

    const lease = Math.min(Math.max(leaseSeconds, MIN_LEASE_SECONDS), MAX_LEASE_SECONDS);
    ctx.db.job.jobId.update({
      ...row,
      status: JOB_STATUS.running,
      attemptCount: row.attemptCount + 1,
      leaseOwner: ctx.sender,
      leaseUntil: plusSeconds(ctx.timestamp, lease),
      errorCode: undefined,
      updatedAt: ctx.timestamp,
    });
  }
);`,
  },

  outcome: {
    now: 'Built over the MHacks weekend and moved off the laptop for the demo: SpacetimeDB Maincloud, a worker on Railway, and an EAS build on TestFlight. Won the Figma Best Design Track. Sign-in is a device-bound guest and paper trading runs against one demo account; trend-score coverage is partial.',
    lessons: [
      'An AI product is mostly deciding where not to trust the model. APIs supply the facts, deterministic code computes the metrics, and the model only explains.',
      'Putting the queue in the database meant one less service to deploy and one transaction model to reason about.',
    ],
    next: ['Personalisation from behaviour', 'Broader trend-score coverage', 'Guided lessons for first-time investors'],
  },
};
