// Matches public/Daniel_Lim_Resume.pdf, the downloadable resume.
// Source of truth: internship-autopilot facts/ (website_resume/), refreshed 2026-11-18.
export const resumeExperience = [
  {
    org: 'SPAN',
    role: 'Mobile Engineering Intern',
    period: 'Jun 2026 – Sep 2026',
    place: 'San Francisco, CA',
    points: [
      'Shipped production React Native features for SPAN’s energy app, fixing 50+ QA-flagged rendering and state-sync defects',
      'Built an in-app Jira bug-reporting tool that auto-attaches diagnostic context, saving an estimated $27K+/year',
      'Fixed iOS/Android build failures in a multi-app React Native monorepo by tracing dependency and native-module conflicts',
    ],
  },
  {
    org: 'Nalara Corporation',
    role: 'Web Engineering Intern',
    period: 'Jun 2025 – Aug 2025',
    place: 'Livonia, MI',
    points: [
      'Shipped a 100+ page full-stack Vue.js platform for logistics and workforce management, used across departments',
      'Built real-time inventory dashboards and automated HR workflows in Django and PostgreSQL, cutting processing time 35%',
    ],
  },
];

export const resumeSkills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Swift', 'Rust', 'Java', 'C/C++', 'C#', 'SQL'] },
  {
    group: 'Frameworks',
    items: ['React Native (Expo)', 'React', 'Next.js', 'Node.js', 'Vue.js', 'Django', 'SwiftUI', 'AppKit', 'PyTorch', 'Tailwind CSS', 'Three.js'],
  },
  {
    group: 'Data & Tools',
    items: ['PostgreSQL', 'Supabase', 'SpacetimeDB', 'Row Level Security', 'Jest', 'XCTest', 'Vitest', 'Git', 'GitHub', 'CI/CD', 'Jira', 'Figma'],
  },
];

export const resumeProjects = [
  {
    name: 'Marshmallow',
    role: 'Founder & Product Engineer',
    stack: 'React Native, Swift, Supabase, PostgreSQL',
    period: 'May 2026 – Oct 2026',
    points: [
      'Founded and shipped a screen-time app to the App Store in five languages, owning product, design, and engineering',
      'Bridged React Native to Swift over Apple’s Screen Time APIs, shipping six native iOS extensions via Expo config plugins',
      'Secured Supabase with 27 Row Level Security policies across 8 tables; covered the app with 660 Jest tests in 56 suites',
    ],
  },
  {
    name: 'Quadly',
    role: 'Founder & Full-Stack Engineer',
    stack: 'React Native, Next.js, Supabase, PostgreSQL',
    period: 'Jan 2026 – Mar 2026',
    points: [
      'Shipped Quadly solo in five weeks from first commit to App Store: campus boards, a marketplace, and real-time chat',
      'Built a Turborepo monorepo (React Native, Next.js) on Supabase with 19 Postgres RPCs and per-university RLS',
    ],
  },
  {
    name: 'Dopamine Zero',
    role: 'Founder & iOS Engineer',
    stack: 'Swift 6, SwiftUI, Screen Time API, WebKit',
    period: 'Oct 2026 – Present',
    points: [
      'Engineered a Swift 6 iOS app (34K+ lines, no dependencies) that moves an iPhone between Full, Reduced, and Zero modes',
      'Architected one app and seven app extensions that share state through an App Group under Swift 6 strict concurrency',
    ],
  },
  {
    name: 'RustyFinder',
    role: 'Solo Developer',
    stack: 'Rust, Swift, AppKit, UniFFI',
    period: 'Nov 2026',
    points: [
      'Designed a 35K-line Rust core where disk, archives, SFTP, WebDAV, and S3 share one filesystem trait, bridged via UniFFI',
      'Verified with 535 Rust unit tests and 288 scripted UI checks; lists 100,000 files in 0.2s, release build cut from 61MB to 10MB',
    ],
  },
];

export const resumeLeadership = [
  {
    org: 'Orbit, Winner, Figma Best Design Track (MHacks 2026)',
    role: 'Solo Developer',
    period: 'Oct 2026',
    place: 'React Native, SpacetimeDB, Python',
    points: ['Built a beginner investing app solo in React Native, SpacetimeDB, and Python, with an AI assistant that must cite every figure'],
  },
  {
    org: 'Alternate Reality Initiative (ARI)',
    role: 'Hackathon & Website Lead',
    period: 'Mar 2026 – Present',
    place: 'Ann Arbor, MI',
    points: [
      'Lead the ARI website redesign (React, three.js, Supabase) with 17 Row Level Security policies, each covered by a test',
      'Organize the XR track for hackathons including MHacks, coordinating mentorship, judging, and technical direction',
    ],
  },
  {
    org: 'Imagine Software Club',
    role: 'UI/UX Lead',
    period: 'Sep 2024 – Dec 2024',
    place: 'East Lansing, MI',
    points: ['Led 4 designers to 1st Place, Best UI/UX at the MSU Imagine Software Fall 2024 Showcase with SideQuest (100+ screens)'],
  },
];
