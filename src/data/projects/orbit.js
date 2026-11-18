/* Orbit has no authentic product screenshots — the only image in the repo is
   a Figma mock with placeholder copy — so its plate is its system diagram. */

export default {
  slug: 'orbit',
  name: 'Orbit',
  tier: 'more',
  kind: 'Hackathon · fintech',
  year: '2026',
  period: 'MHacks, Oct 3 — 4, 2026',
  status: { label: 'Hackathon build', tone: 'prototype' },
  summary: 'Stock discovery and paper trading for beginners, with an AI assistant that is not allowed to make numbers up.',
  hook: 'A durable job queue inside SpacetimeDB and an assistant whose replies are rejected unless every figure is cited.',
  tech: ['SpacetimeDB', 'Python', 'React Native', 'TypeScript'],
  theme: { tint: '#e7e3ee', tintDark: '#16121e' },

  cover: {
    layout: 'system',
    system: {
      title: 'Orbit',
      lanes: [
        { label: 'App', items: ['Expo · React Native', 'Subscribes to views'] },
        { label: 'SpacetimeDB', items: ['Reducers', 'Durable job queue', 'Per-user views'] },
        { label: 'Worker', items: ['Python · leased jobs', 'Guard-railed assistant'] },
        { label: 'Providers', items: ['Market data', 'Paper trading', 'LLM'] },
      ],
    },
  },

  links: [{ label: 'Source on GitHub', href: 'https://github.com/daniel3606/Orbit_MHacks26', kind: 'repo' }],

  facts: [
    { label: 'Event', value: 'MHacks 2026, fintech track' },
    { label: 'Timeline', value: '~22 hours' },
    { label: 'Platform', value: 'iOS (Expo)' },
    { label: 'My role', value: 'All 18 pull requests' },
  ],

  overview: {
    problem: 'Investing apps assume you already know which ticker to search. Beginners do not, and the chatbots that offer to help will happily invent a price.',
    solution:
      'Orbit suggests three companies a day from a profile you set once, explains why they moved using classified news and a trend score, lets you ask questions grounded in that data, and lets you practise with paper trades.',
    role: 'I authored every pull request in the repository: the SpacetimeDB module, the Python worker, the assistant’s policy layer and the mobile app.',
  },

  numbers: [
    { value: '329', label: 'tests across backend, database module and app' },
    { value: '114', label: 'stocks in the curated universe' },
  ],

  features: [
    { title: 'Daily discovery', body: 'Three companies a day, matched to risk, horizon, style and sectors from onboarding.' },
    { title: 'Grounded assistant', body: 'The server builds an evidence packet; the model writes from it and has no tools that change state.' },
    { title: 'Paper trading', body: 'Swipe-to-confirm orders against a paper brokerage account, idempotent across timeouts.' },
  ],

  architecture: {
    intro: 'The app talks only to SpacetimeDB. Every user action is a reducer; slow work becomes a job that a Python worker leases, runs outside the transaction, and publishes back.',
    columns: [
      { label: 'App', nodes: [{ title: 'Expo app', detail: 'Subscribes; calls reducers' }] },
      { label: 'SpacetimeDB', nodes: [{ title: 'Reducers & views', detail: 'Private rows keyed on sender' }, { title: 'Job table', detail: 'Lease, backoff, fencing' }] },
      { label: 'Worker', nodes: [{ title: 'Python 3.14', detail: 'mypy strict, pytest' }, { title: 'Policy layer', detail: 'Validates every reply' }] },
      { label: 'Providers', nodes: [{ title: 'Market data · news', detail: 'Quotes, headlines' }, { title: 'Paper broker · LLM', detail: 'Orders, prose' }] },
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
    now: 'Built over the MHacks weekend. Sign-in is a device-bound guest and paper trading runs against one demo account; the trend-score features were not published in time.',
    lessons: ['Putting the queue in the database meant one less service to deploy and one transaction model to reason about.'],
    next: [],
  },
};
