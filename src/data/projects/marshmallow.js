import home from '../../assets/work/marshmallow/home.webp';
import quickBlock from '../../assets/work/marshmallow/quick-block.webp';
import timedBlock from '../../assets/work/marshmallow/timed-block.webp';
import customize from '../../assets/work/marshmallow/customize.webp';
import site from '../../assets/work/marshmallow/site.webp';
import { shot, wide } from './shot.js';

const mm = (src, alt) => shot(src, 720, 1565, alt);

export default {
  slug: 'marshmallow',
  name: 'Marshmallow',
  mascot: 'inlove',
  tier: 'featured',
  kind: 'iOS app',
  year: '2026',
  period: 'May — Oct 2026',
  status: { label: 'On the App Store', tone: 'live' },
  summary: 'A screen-time app where every finished focus block grows a marshmallow, measured against real objects.',
  hook: 'Shipped to the App Store in five languages, with six native extensions behind a React Native app.',
  tech: ['React Native', 'Swift', 'Screen Time API', 'Supabase'],
  theme: { tint: '#fbe9d7', tintDark: '#2a201a' },

  cover: {
    layout: 'phones',
    screens: [
      mm(timedBlock, 'Timed Blocks: recurring schedules for sleep and classes'),
      mm(home, 'Home: the marshmallow at 27.6 cm next to a cat and a basketball'),
      mm(quickBlock, 'A Quick Block counting down from 29:58'),
    ],
  },

  hero: {
    layout: 'phones',
    screens: [
      mm(customize, 'Customize: colours and headwear'),
      mm(home, 'Home: the marshmallow at 27.6 cm'),
      mm(timedBlock, 'Timed Blocks'),
    ],
  },

  links: [
    { label: 'App Store', href: 'https://apps.apple.com/us/app/marshmallow-focus-grow/id6811528566', kind: 'appstore' },
    { label: 'themarshmallow.app', href: 'https://www.themarshmallow.app', kind: 'site' },
  ],
  repoNote: 'Private repository.',

  facts: [
    { label: 'Role', value: 'Founder — product, design, engineering' },
    { label: 'Timeline', value: 'May — Oct 2026' },
    { label: 'Platform', value: 'iPhone and iPad, iOS 16+' },
    { label: 'Released', value: 'Sep 29, 2026 · v1.0.1 Oct 10' },
  ],

  overview: {
    problem:
      'Streak-based focus apps punish a bad day: miss once and the number you were proud of resets. For most people that is the moment they stop opening the app.',
    solution:
      'In Marshmallow, progress only goes up. Each completed block grows your marshmallow by centimetres, and its size is shown next to real objects — a blueberry at 2 cm, a cat at 30, a house at 900 — so effort you cannot otherwise feel becomes something you can see. A missed block costs nothing; it just doesn’t grow anything.',
    role:
      'I wrote the PRD, designed the product and brand, built the React Native app and the Swift layer under it, set up the Supabase backend, and took it through App Review — including a rejection and resubmission.',
  },

  numbers: [
    { value: '6', label: 'native iOS extensions, each added by a config plugin' },
    { value: '660', label: 'Jest tests across 56 suites at release 1.0.1' },
    { value: '27', label: 'RLS policies across 8 Postgres tables' },
    { value: '5', label: 'languages at launch' },
  ],

  features: [
    { title: 'Quick Block', body: 'Pick a length and the apps that pull you in; iOS shields them until the timer ends, with a Live Activity on the Lock Screen.' },
    { title: 'Timed Blocks', body: 'Recurring schedules — sleep, classes — that start and end through DeviceActivity with the app closed.' },
    { title: 'Growth model', body: 'Growth per block scales with the square root of its length and a streak multiplier, with a daily soft cap so a 24-hour block cannot break the curve.' },
    { title: 'Never Allowed', body: 'A list of apps that stay shielded and are never offered an “Open App” button, kept in its own settings store.' },
    { title: 'Friends', body: 'Usernames, friend codes and a leaderboard of marshmallows — without turning focus into a competition you can lose.' },
    { title: 'Premium', body: 'Deep Focus and cosmetics through RevenueCat: $3.99 a month or $24.99 a year with a seven-day trial.' },
  ],

  gallery: [
    { ...mm(home), frame: 'phone', caption: 'Home. Size is shown against the next real-world milestone.' },
    { ...mm(quickBlock), frame: 'phone', caption: 'A Quick Block in progress. The growth it will earn is shown before it ends.' },
    { ...mm(timedBlock), frame: 'phone', caption: 'Timed Blocks run on DeviceActivity schedules with the app closed.' },
    { ...mm(customize), frame: 'phone', caption: 'Customization unlocked through the growth loop.' },
    { ...wide(site), frame: 'browser', url: 'themarshmallow.app', caption: 'The Next.js marketing site.' },
  ],

  stack: [
    { group: 'App', items: ['Expo SDK 55', 'React Native 0.83', 'TypeScript', 'expo-router', 'Reanimated 4', 'i18next'] },
    { group: 'Native', items: ['Swift module', 'FamilyControls', 'ManagedSettings', 'DeviceActivity', 'WidgetKit', 'ActivityKit'] },
    { group: 'Backend', items: ['Supabase Postgres', 'Supabase Auth', 'Row Level Security', 'SQL functions'] },
    { group: 'Business', items: ['RevenueCat', 'PostHog', 'Sign in with Apple / Google'] },
    { group: 'Delivery', items: ['Jest', 'GitHub Actions', 'Xcode Cloud', 'Next.js site on Vercel'] },
  ],

  architecture: {
    intro:
      'React Native owns every screen; Swift owns everything Screen Time touches. The two meet in a native module, and the six extensions never talk to JavaScript at all — they read and write a shared App Group store.',
    columns: [
      {
        label: 'React Native',
        nodes: [
          { title: 'Screens & flows', detail: '5 tabs, 13-step onboarding' },
          { title: 'Growth & ledger', detail: 'Per-day ledger, upload outbox' },
        ],
      },
      {
        label: 'Swift',
        nodes: [
          { title: 'ScreenTimeModule', detail: 'Authorization, picker, shields' },
          { title: 'App Group store', detail: 'Block state shared with extensions' },
        ],
      },
      {
        label: 'Extensions',
        nodes: [
          { title: 'Shield & Shield Action', detail: 'Custom block screen' },
          { title: 'Timed Block Monitor', detail: 'Wakes at block boundaries' },
          { title: 'Report · Widget · Live Activity', detail: 'Usage, size, countdown' },
        ],
      },
      {
        label: 'Supabase',
        nodes: [
          { title: 'Postgres + RLS', detail: '8 tables, 14 migrations' },
          { title: 'Auth', detail: 'Guest mode with account linking' },
        ],
      },
    ],
    notes: [
      'The ios/ folder is never committed. Nine config plugins generate the extension targets, copy their Swift sources in, and stamp every target with the app’s version so uploads pass validation.',
    ],
  },

  challenges: [
    {
      title: 'An app identity that survives a re-pick',
      problem:
        'Screen Time tokens are opaque, and the first version identified apps by their position in a selection. Re-picking apps silently shifted the positions, so a saved schedule could shield the wrong app.',
      solution:
        'Each app now gets a content-addressed ID — a hash of the token’s bytes — and every screen keeps its own named selection context, so a change in one place cannot reorder another.',
      where: 'modules/screen-time/ios/SelectionRegistry.swift',
    },
    {
      title: 'Extensions that are killed mid-write',
      problem:
        'iOS terminates a DeviceActivity extension right after its callback. Writes from the monitor were being lost because synchronize() flushed a different UserDefaults instance than the one written to.',
      solution:
        'One shared defaults instance for every writer, and asynchronous completion work awaited with a three-second timeout before the callback returns.',
      where: 'SharedBlockState.swift · BlockCompletion.swift',
    },
    {
      title: 'One way for a block to end',
      problem:
        'A block can end in the monitor extension, from the shield’s button, or in the app. Each path cleaned up slightly differently, and the shield, Live Activity and notification drifted out of step.',
      solution: 'All three now call a single teardown function, so every ending clears the same state in the same order.',
      where: 'BlockCompletion.swift · TimedBlockMonitorExtension.swift',
    },
    {
      title: 'A marshmallow that never shrinks',
      problem:
        'Size was summed from a capped history list. When old sessions fell off the end, users watched their marshmallow get smaller — the one thing the product promised would never happen.',
      solution:
        'Growth is now recorded in a per-day ledger, with unconfirmed uploads kept in an outbox until Supabase acknowledges them. The growth formula itself is tuned by a simulation test that runs months of synthetic usage.',
      where: 'lib/sessionLedger.ts · lib/growthModel.simulation.test.ts',
    },
  ],

  process: [
    'Every change ships through a branch and a pull request — 127 of them by release 1.0.1 — with lint, type-check and expo-doctor in CI and Xcode Cloud archiving builds.',
    'Version 1.0 was rejected once for subscription metadata. I rewrote the paywall disclosures against the two guidelines cited and it was approved on resubmission.',
  ],

  outcome: {
    now: 'Live on the App Store as version 1.0.1, in English, Spanish, Korean, Japanese and Chinese.',
    lessons: [
      'React Native and native code are a good split when the boundary is narrow. Everything Screen Time touches lives in Swift; everything the user reads lives in TypeScript.',
      'App Review is part of the product. The rejection taught me more about subscription UX than any guideline page.',
    ],
    next: ['Update the marketing site from waitlist to App Store', 'Android is out of scope: the Screen Time layer is iOS-only'],
  },
};
