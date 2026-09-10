// Matches public/Daniel_Lim_Resume.pdf, the downloadable resume.
export const resumeExperience = [
  {
    org: 'SPAN',
    role: 'Mobile Engineering Intern',
    period: 'Jun 2026 – Sep 2026',
    place: 'San Francisco, CA',
    points: [
      'Shipped production React Native features to SPAN’s homeowner energy app, fixing 50+ QA-flagged rendering and state-sync defects across iOS and Android',
      'Engineered an in-app Jira bug-reporting tool that auto-captured diagnostic context, cutting ticket-creation time and an estimated $20K/year in engineering and tooling costs',
      'Fixed cross-package iOS/Android build failures in a multi-app React Native monorepo, tracing dependency, native-module, and generated-project conflicts to restore reliable dev builds',
    ],
  },
  {
    org: 'Nalara Corporation',
    role: 'Web Engineering Intern',
    period: 'Jun 2025 – Aug 2025',
    place: 'Livonia, MI',
    points: [
      'Shipped a 100+ page full-stack Vue.js platform for logistics tracking and workforce management, adopted across internal departments',
      'Built real-time analytics dashboards with live inventory tracking and advanced filtering, improving operational visibility',
      'Automated HR workflows with Django ORM and PostgreSQL for candidate tracking and interview scheduling, cutting processing time 35%',
    ],
  },
];

export const resumeSkills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Swift', 'C/C++', 'C#', 'SQL (PostgreSQL)', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['React Native (Expo)', 'React', 'Next.js', 'Node.js', 'Vue.js', 'Django', 'Flask', 'PyTorch', 'Tailwind CSS'] },
  { group: 'Tools & Platforms', items: ['Git', 'PostgreSQL', 'Firebase', 'Supabase', 'REST APIs', 'Jira', 'Figma', 'Three.js', 'Jest'] },
];

export const resumeProjects = [
  {
    name: 'Marshmallow',
    role: 'Founder & Product Engineer',
    stack: 'React Native, Swift, Supabase, PostgreSQL',
    period: 'Jan 2026 – Jun 2026',
    points: [
      'Built a screen-time app that turns phone-free focus sessions into a growing virtual companion, authoring a custom Swift bridge over Apple’s FamilyControls, ManagedSettings, and DeviceActivity APIs to enforce real app blocking from React Native',
      'Shipped five native app extensions — interactive block shield, scheduled-block monitor, home-screen widget, and Live Activity — via custom Expo config plugins and App Group shared state',
      'Designed a session-growth model with diminishing returns, streak and quality multipliers, and a daily soft cap, verified by a 262-test Jest suite',
    ],
  },
  {
    name: 'Quadly',
    role: 'Mobile & Product Engineer',
    stack: 'React Native, Firebase, PostgreSQL',
    period: 'Jan 2026 – Jun 2026',
    points: [
      'Launched a cross-platform social app serving 100+ users with authentication, real-time messaging, and marketplace features',
      'Architected a multi-tenant PostgreSQL schema with migrations and Row Level Security to isolate university data',
    ],
  },
  {
    name: 'Spectacle Face Recognizer',
    role: 'AI & Product Engineer',
    stack: 'Lens Studio, React, PostgreSQL',
    period: 'Nov 2025 – Jan 2026',
    points: [
      'Published an AI facial-recognition system for Snapchat Spectacles with a PostgreSQL facial-embedding pipeline for vector similarity search and profile retrieval',
      'Achieved 95.2% recognition accuracy on a labeled test set by tuning similarity thresholds and adding unknown-face onboarding',
    ],
  },
];

export const resumeLeadership = [
  {
    org: 'Augmented Reality Initiative (ARI)',
    role: 'Hackathon & Website Lead',
    period: 'Mar 2026 – Present',
    place: 'Ann Arbor, MI',
    points: ['Organize the XR track for hackathons including MHacks; maintain the ARI website with Three.js and Unity WebGL builds'],
  },
  {
    org: 'Imagine Software Club',
    role: 'UI/UX Lead',
    period: 'Sep 2024 – Dec 2024',
    place: 'Ann Arbor, MI',
    points: ['Won 1st Place, Best UI/UX at the MSU Imagine Software Fall 2024 Showcase with SideQuest, a gamified travel app (100+ Figma screens)'],
  },
];
