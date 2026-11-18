/* Facts here mirror public/Daniel_Lim_Resume.pdf (refreshed Nov 18, 2026). Keep them in step. */

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
      'React Native and TypeScript across iOS and Android, Swift for the parts of iOS that React Native cannot reach, and Rust where speed matters — with Node, Django, Supabase and PostgreSQL behind them. Most of my recent work has been production mobile: state sync, native build systems, and the defects that only show up on a real device.',
    tags: ['TypeScript', 'React Native', 'Swift', 'Rust', 'Next.js', 'Supabase', 'PostgreSQL'],
  },
  {
    key: 'product',
    title: 'Product',
    line: 'Scope, spec, and the metric',
    body:
      'I write the requirements before the code — problem, user, scope, success metric, and what is deliberately out of scope. On Quadly and Marshmallow I carried the product decisions as well as the build, and at SPAN I shipped internal tooling that paid for itself.',
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

export const education = {
  school: 'University of Michigan — Ann Arbor',
  detail: 'B.S.E. in Computer Science, Minor in User Experience Design',
  period: 'Expected Dec 2027',
  place: 'Ann Arbor, MI',
};

export const skills = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Swift', 'Rust', 'Java', 'C/C++', 'C#', 'SQL (PostgreSQL)', 'HTML', 'CSS'],
  },
  {
    group: 'Frameworks',
    items: ['React Native (Expo)', 'React', 'Next.js', 'Vue.js', 'Node.js', 'Django', 'Flask', 'PyTorch', 'Tailwind CSS'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Supabase', 'PostgreSQL', 'Figma', 'Jira', 'REST APIs', 'Three.js', 'Unity', 'Lens Studio'],
  },
];
