import community from '../../assets/work/quadly/community.webp';
import post from '../../assets/work/quadly/post.webp';
import marketplace from '../../assets/work/quadly/marketplace.webp';
import site from '../../assets/work/quadly/site.webp';
import { shot, wide } from './shot.js';

const q = (src, alt) => shot(src, 720, 1565, alt);

export default {
  slug: 'quadly',
  name: 'Quadly',
  mascot: 'starstruck',
  tier: 'featured',
  kind: 'iOS app + web',
  year: '2026',
  period: 'Jan — Mar 2026',
  status: { label: 'On the App Store', tone: 'live' },
  summary: 'A closed community for University of Michigan students: boards, a marketplace with live chat, and a class schedule.',
  hook: 'A Turborepo monorepo shipping an iOS app, a Next.js site and a course-catalog ingest service.',
  tech: ['React Native', 'Next.js', 'Supabase', 'PostgreSQL'],
  theme: { tint: '#e3e7ec', tintDark: '#161a20' },

  cover: {
    layout: 'phones',
    screens: [
      q(community, 'Community tab with boards for Engineering, LSA and General'),
      q(marketplace, 'Marketplace listings with prices'),
      q(post, 'An anonymous post with a comment'),
    ],
  },

  hero: {
    layout: 'duo',
    url: 'quadly.org',
    screens: [wide(site, 'quadly.org landing page'), q(marketplace, 'Marketplace on iOS')],
  },

  links: [
    { label: 'App Store', href: 'https://apps.apple.com/app/id6759175162', kind: 'appstore' },
    { label: 'quadly.org', href: 'https://quadly.org', kind: 'site' },
  ],
  repoNote: 'Private repository.',

  facts: [
    { label: 'Role', value: 'Solo — product and full-stack engineering' },
    { label: 'Timeline', value: 'Jan 29 — Mar 3, 2026' },
    { label: 'Platform', value: 'iOS, web' },
    { label: 'Released', value: 'Feb 26, 2026 · v1.1 Mar 5' },
  ],

  overview: {
    problem:
      'Campus life at Michigan runs through dozens of group chats nobody can search and public forums where you cannot tell who is actually a student.',
    solution:
      'Quadly puts discussion boards, a student marketplace and a class schedule in one app that only university accounts can enter. Posts can be anonymous to other students while every account is still tied to a real school email.',
    role:
      'I built it alone in five weeks: the mobile app, the web app, the database and its policies, the course-catalog importer, moderation tools, and the App Store release.',
  },

  numbers: [
    { value: '5 wks', label: 'from first commit to App Store release' },
    { value: '3', label: 'apps and a shared package in one monorepo' },
    { value: '19', label: 'Postgres RPCs behind the app' },
    { value: '6', label: 'tables scoped per university with RLS' },
  ],

  features: [
    { title: 'School-only sign-in', body: 'Google sign-in restricted to the university domain, with PKCE on native and wrong-domain accounts signed straight back out.' },
    { title: 'Boards', body: 'General, private and info boards plus a board per school, with a per-post anonymous toggle, pins, likes and a “Hot today” ranking.' },
    { title: 'Marketplace and chat', body: 'Listings with photos and real-time conversations between buyer and seller over Supabase Realtime.' },
    { title: 'Schedule', body: 'A weekly grid with a live current-time line and search over the real Winter 2026 course catalog.' },
    { title: 'Moderation', body: 'Post and listing reports, bans and role management — on mobile and in a web admin panel — from the first release.' },
  ],

  gallery: [
    { ...q(community), frame: 'phone', caption: 'Boards by school, plus shortcuts to your own posts and comments.' },
    { ...q(post), frame: 'phone', caption: 'Posts can be anonymous to students; every account is still verified.' },
    { ...q(marketplace), frame: 'phone', caption: 'The marketplace, with real-time chat behind every listing.' },
    { ...wide(site), frame: 'browser', url: 'quadly.org', caption: 'quadly.org, the Next.js web app.' },
  ],

  stack: [
    { group: 'Mobile', items: ['Expo 54', 'React Native 0.81', 'expo-router', 'Zustand', 'TanStack Query'] },
    { group: 'Web', items: ['Next.js 16', '@supabase/ssr', 'Tailwind CSS', 'Vercel'] },
    { group: 'Backend', items: ['Supabase Postgres', 'Auth', 'Realtime', 'Storage', 'SQL RPCs'] },
    { group: 'Ingest', items: ['Node + Express', 'papaparse', 'Registrar CSV → terms, courses, sections'] },
    { group: 'Shared', items: ['Turborepo', 'Zod schemas', 'TypeScript'] },
  ],

  architecture: {
    intro: 'Two clients, one database, and the database is where the rules live: access is decided by row-level policies and RPCs rather than by whichever client is asking.',
    columns: [
      {
        label: 'Clients',
        nodes: [
          { title: 'iOS app', detail: 'Expo, React Native' },
          { title: 'Web app', detail: 'Next.js on Vercel' },
        ],
      },
      {
        label: 'Shared',
        nodes: [{ title: 'packages/shared', detail: 'Zod schemas, hot score, anon handles' }],
      },
      {
        label: 'Supabase',
        nodes: [
          { title: 'Postgres + RLS', detail: 'Per-university row scoping' },
          { title: 'Realtime', detail: 'One channel per conversation' },
          { title: 'Auth & Storage', detail: 'Domain-gated OAuth, avatars' },
        ],
      },
      {
        label: 'Ingest',
        nodes: [{ title: 'course-ingest', detail: 'Registrar CSV → normalized catalog' }],
      },
    ],
  },

  challenges: [
    {
      title: 'Domain-gated Google sign-in on a phone',
      problem: 'Google’s hosted-domain hint is only a hint, and a native OAuth redirect cannot land on a web callback directly.',
      solution:
        'The app runs PKCE in an ephemeral auth session, cleans up stale code verifiers, and returns through a small HTTPS bridge page on the web app. After sign-in, any account outside the university domain is signed out before it reaches a screen.',
      where: 'apps/mobile/app/(auth)/login.tsx · apps/web/src/app/auth/mobile-callback',
    },
    {
      title: 'Adding a second university to live data',
      problem: 'The schema started single-campus. Making it multi-tenant could not break a production database with existing posts.',
      solution:
        'One migration in five steps: add a nullable university column, backfill Michigan, make it required, index it, then add “own school” read policies to six tables.',
      where: 'supabase/migrations/20260210_add_university_id.sql',
    },
    {
      title: 'Policies that failed for signed-in users',
      problem: 'Moderator policies queried auth.users, which ordinary sessions cannot read, so moderation silently failed for everyone but the service role.',
      solution: 'I rewrote them to read role claims from the JWT instead, which every session carries.',
      where: 'supabase/migrations/20260220_fix_moderation_rls_policies.sql',
    },
    {
      title: 'A real course catalog',
      problem: 'The registrar publishes the term as a 6 MB CSV with its own day and time formats.',
      solution: 'A small ingest service parses it, normalizes meeting days and times, upserts terms, courses, sections and meetings, and logs each run.',
      where: 'apps/course-ingest/src/services',
    },
  ],

  outcome: {
    now: 'Live on the App Store since February 2026 and on the web at quadly.org. Course reviews are designed but not built; Android is not released.',
    lessons: [
      'Put the rules in the database. Two clients meant every check written in app code had to be written twice — and only the policy version could not be bypassed.',
      'Ship moderation with the first version. An anonymous board is only usable if reporting works on day one.',
    ],
    next: ['Course reviews', 'Tenant and role claims from server-controlled metadata', 'Automated tests and CI'],
  },
};
