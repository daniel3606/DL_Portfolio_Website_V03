/* Facts here mirror dl_resume_03.pdf (Sept 2026). Keep them in step. */

export const profile = {
  name: 'Daniel Lim',
  role: 'Software engineer, product',
  location: 'Ann Arbor, Michigan',
  email: 'daniel2060306@gmail.com',
  schoolEmail: 'dllim@umich.edu',
  resumeUrl: '/Daniel_Lim_Resume.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/daniel-lim0306/',
    github: 'https://github.com/daniel3606',
  },
  availability: 'Always up for a coffee chat',
  intro:
    'Computer Science at Michigan with a UX minor. I build mobile and web products end to end — scoping the problem, shipping the code, and staying for the parts that break after launch.',
};

/* Engineering and product lead; the design minor is framed as what it is —
   something that makes the first two better, not a third career. */
export const disciplines = [
  {
    key: 'engineering',
    title: 'Engineering',
    line: 'Full-Stack',
    body:
      'React Native and TypeScript across iOS and Android, with Node, Django, Firebase, and PostgreSQL behind them. Most of my recent work has been production mobile: state sync, native build systems, and the defects that only show up on a real device.',
    tags: ['TypeScript', 'React Native', 'React', 'Next.js', 'Node.js', 'Django', 'PostgreSQL'],
  },
  {
    key: 'product',
    title: 'Product',
    line: 'Scope, spec, and the metric',
    body:
      'I write the requirements before the code — problem, user, scope, success metric, and what is deliberately out of scope. On Quadly and Spectacle Face Recognizer I carried the product decisions as well as the build, and at SPAN I shipped internal tooling that paid for itself.',
    tags: ['Requirements', 'Scoping', 'Metrics', 'Trust & safety', 'Roadmapping', 'Jira'],
  },
  {
    key: 'design',
    title: 'Design literacy',
    line: 'The minor, put to work',
    body:
      'A UX minor is not a design career — it is why I can read a Figma file, argue about a flow, and catch the interaction problem before it becomes a ticket. It makes me faster on an engineering team and more useful in a product conversation.',
    tags: ['Figma', 'Interaction design', 'Design systems', 'Prototyping'],
  },
];

export const experience = [
  {
    org: 'SPAN',
    role: 'Mobile Engineering Intern',
    period: 'Jun 2026 — Sep 2026',
    place: 'San Francisco, CA',
    points: [
      'Shipped production React Native features to SPAN’s homeowner energy application, resolving 50+ rendering and state-sync defects flagged in QA and improving reliability across iOS and Android.',
      'Engineered an in-app Jira bug-reporting tool that automatically captured diagnostic context, cutting ticket-creation time and saving an estimated $20K/year in engineering productivity and software costs.',
      'Resolved cross-package iOS and Android build failures in a multi-application React Native monorepo by tracing dependency, native-module, and generated-project conflicts, restoring reliable development builds.',
    ],
  },
  {
    org: 'Nalara Corporation',
    role: 'Web Engineering Intern',
    period: 'Jun 2025 — Aug 2025',
    place: 'Livonia, MI',
    points: [
      'Shipped a 100+ page full-stack Vue.js platform for logistics tracking and workforce management, used by internal operations across multiple departments.',
      'Developed real-time analytics dashboards in Vue.js with live inventory tracking and advanced filtering, improving operational visibility for logistics teams.',
      'Automated HR workflows using Django ORM and PostgreSQL, including candidate tracking and interview scheduling, reducing manual processing time by 35%.',
    ],
  },
  {
    org: 'Augmented Reality Initiative',
    role: 'Hackathon & Website Lead',
    period: 'Mar 2026 — Present',
    place: 'Ann Arbor, MI',
    points: [
      'Organize the XR track for hackathons including MHacks, coordinating mentorship, judging criteria, and technical direction.',
      'Maintain the ARI website with Three.js components and Unity WebGL builds, and lead XR workshops supporting members building AR and VR projects.',
    ],
  },
];

export const education = {
  school: 'University of Michigan — Ann Arbor',
  detail: 'B.S.E. in Computer Science, Minor in User Experience Design',
  period: 'Expected Dec 2027',
  place: 'Ann Arbor, MI',
};

export const skills = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Swift', 'C/C++', 'C#', 'SQL (PostgreSQL)', 'HTML', 'CSS'],
  },
  {
    group: 'Frameworks',
    items: ['React Native (Expo)', 'React', 'Next.js', 'Vue.js', 'Node.js', 'Django', 'Flask', 'PyTorch', 'Tailwind CSS'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Firebase', 'Figma', 'Jira', 'REST APIs', 'Three.js', 'Unity', 'Lens Studio'],
  },
];

/* Mirrors the Projects section of the resume PDF. */
export const resumeProjects = [
  {
    name: 'Quadly',
    role: 'Mobile & Product Engineer',
    stack: 'React Native, Firebase, PostgreSQL',
    period: 'Jan 2026 — Jun 2026',
    points: [
      'Launched a cross-platform social application serving 100+ users with authentication, real-time messaging, and marketplace features using React Native and Firebase.',
      'Architected a multi-tenant PostgreSQL schema with migrations and Row Level Security policies to isolate university data and enforce access controls.',
    ],
  },
  {
    name: 'Spectacle Face Recognizer',
    role: 'AI & Product Engineer',
    stack: 'Lens Studio, React, PostgreSQL',
    period: 'Nov 2025 — Jan 2026',
    points: [
      'Published an AI-powered facial recognition system for Snapchat Spectacles using Lens Studio and React.',
      'Designed a PostgreSQL-based facial embedding pipeline for vector similarity search, identity matching, and user profile retrieval.',
      'Achieved 95.2% recognition accuracy on a labeled test dataset by evaluating similarity thresholds and implementing an unknown-face classification and profile-creation workflow.',
    ],
  },
  {
    name: 'Scribble A.I.',
    role: 'AI Engineer',
    stack: 'PyTorch, Flask, Python',
    period: 'Nov 2025 — Jan 2026',
    points: [
      'Trained a convolutional neural network using PyTorch, achieving 89% accuracy on a 50-class hand-drawn sketch dataset.',
      'Built a Flask real-time prediction API supporting both image uploads and interactive canvas-drawing inputs.',
      'Reduced model inference time by 40% through batch processing and implemented a reproducible data-preprocessing pipeline.',
    ],
  },
];
