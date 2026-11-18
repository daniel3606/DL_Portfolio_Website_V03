import home from '../../assets/work/ari/home.webp';
import projects from '../../assets/work/ari/projects.webp';
import meetings from '../../assets/work/ari/meetings.webp';
import editor from '../../assets/work/ari/editor-update.webp';
import mHome from '../../assets/work/ari/m-home.webp';
import mProjects from '../../assets/work/ari/m-projects.webp';
import { shot, wide } from './shot.js';

const m = (src, alt) => shot(src, 720, 1561, alt);

export default {
  slug: 'ari-website',
  name: 'ARI Website',
  tier: 'more',
  kind: 'Website + CMS',
  year: '2026',
  period: 'Nov 2026',
  status: { label: 'Redesign in review', tone: 'prototype' },
  summary: 'A rebuild of the University of Michigan XR club’s site, with an editor where project leads post weekly updates.',
  hook: '17 row-level security policies, tested by running the migrations in Postgres compiled to WebAssembly.',
  tech: ['React', 'three.js', 'Supabase', 'Tailwind'],
  theme: { tint: '#dfe4ea', tintDark: '#0f1219' },

  cover: {
    layout: 'duo',
    url: 'ari-web · redesign preview',
    screens: [wide(home, 'ARI home page with a wireframe headset model'), m(mHome, 'ARI home page on a phone')],
  },

  links: [
    { label: 'Source (redesign branch)', href: 'https://github.com/altrealityinitiative/ari-web/tree/feat/blueprint-redesign', kind: 'repo' },
  ],

  facts: [
    { label: 'Role', value: 'Website lead — design and build' },
    { label: 'Organization', value: 'Augmented Reality Initiative, UMich' },
    { label: 'Stack', value: 'React 19, Vite, three.js, Supabase' },
    { label: 'Status', value: 'On a branch; the live site is the previous version' },
  ],

  overview: {
    problem: 'The club runs three projects a semester, but the site only changed when someone who knew the code had time to edit it — so it was always a semester behind.',
    solution:
      'The redesign turns the site into a projects hub fed by the people running the projects. Leads sign in with their university Google account, fill in a weekly update in under two minutes — summary, what shipped, media, an optional 3D model — and it appears on the public page.',
    role: 'As the club’s website lead I designed the “Blueprint” visual system and built the site, the editor and the data layer.',
  },

  numbers: [
    { value: '17', label: 'RLS policies, each covered by a test' },
    { value: '4', label: 'roles tested: visitor, outsider, lead, admin' },
  ],

  features: [
    { title: 'Projects hub', body: 'Every project, filterable by semester, status and tier, with a week-by-week record of what each team built.' },
    { title: 'Leader editor', body: 'Google sign-in limited to a roster of umich.edu leads, autosaving drafts, Markdown, image and .glb upload, and a live preview.' },
    { title: 'A 3D hero that degrades', body: 'A lazy-loaded three.js wireframe of the club’s headset mark, with a static fallback when WebGL is unavailable or motion is reduced.' },
  ],

  gallery: [
    { ...wide(home), frame: 'browser', url: 'ari-web · redesign preview', caption: 'Home, with the drag-to-orbit wireframe model.' },
    { ...wide(projects), frame: 'browser', url: 'ari-web · preview /projects', caption: 'The projects hub: three projects a semester, one per skill tier.' },
    { ...wide(editor, '', 1050), frame: 'browser', url: 'ari-web · preview /editor', caption: 'The weekly update form, with a checklist and a live preview of the public card.' },
    { ...wide(meetings), frame: 'browser', url: 'ari-web · preview /meetings', caption: 'Meetings, with a live countdown to the next session.' },
    { ...m(mProjects), frame: 'phone', caption: 'The projects hub on a phone.' },
  ],

  stack: [
    { group: 'Front end', items: ['React 19', 'Vite 7', 'Tailwind 4', 'three.js', 'model-viewer'] },
    { group: 'Data', items: ['Supabase Postgres', 'Auth', 'Storage', 'Row Level Security'] },
    { group: 'Testing', items: ['Vitest', 'PGlite (Postgres in WASM)'] },
  ],

  challenges: [
    {
      title: 'Testing access rules without a server',
      problem: 'Row-level policies are the only thing between an anonymous visitor and a lead’s drafts, and they usually go untested because testing them needs a running Postgres.',
      solution:
        'The test suite boots PGlite — Postgres compiled to WebAssembly — applies the real migrations, and checks what an anonymous visitor, a signed-in outsider, a lead and an admin can each read and write.',
      where: 'supabase/tests/rls.test.mjs',
    },
    {
      title: 'A site that works before the backend exists',
      problem: 'Contributors needed to run the site locally without Supabase credentials.',
      solution: 'A repository-pattern data layer with two implementations — Supabase and a local seed store — chosen at startup, so the whole site and editor run on seed data with no keys.',
      where: 'src/data/repo.js · localRepo.js · supabaseRepo.js',
    },
  ],

  outcome: {
    now: 'Complete on the feat/blueprint-redesign branch and waiting on club review before it replaces the current site.',
    lessons: ['The best CMS for a student club is a form that takes two minutes. Everything else in the editor exists to protect that number.'],
    next: ['Merge and deploy', 'Move the club’s live content into Supabase'],
  },
};
