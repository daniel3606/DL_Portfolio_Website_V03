/* Project data. One record per case study; ProjectDetail renders it. */

import marshmallowHome from '../assets/projects/marshmallow-home.png';
import marshmallowFocus from '../assets/projects/marshmallow-focus.png';
import marshmallowCustomize from '../assets/projects/marshmallow-customize.png';
import marshmallowTimedBlock from '../assets/projects/marshmallow-timed-block.png';

import quadlyFeatured from '../assets/projects/quadly-featured.png';
import quadlyWeb from '../assets/projects/quadly-05.jpg';
import quadly01 from '../assets/projects/quadly-01.png';
import quadly02 from '../assets/projects/quadly-02.png';
import quadly03 from '../assets/projects/quadly-03.png';
import quadly04 from '../assets/projects/quadly-04.png';

import sidequest from '../assets/projects/sidequest.jpg';
import artfit01 from '../assets/projects/artfit-01.jpg';
import artfit02 from '../assets/projects/artfit-02.jpg';
import artfit03 from '../assets/projects/artfit-03.jpg';
import scribbleai from '../assets/projects/scribbleai.webp';
import kelsey from '../assets/projects/kelsey.jpg';

export const categories = [
  { key: 'all', label: 'All work' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'product', label: 'Product' },
  { key: 'design', label: 'Design' },
  { key: 'xr', label: 'XR & 3D' },
];

export const projects = [
  /* ---------------------------------------------------------------- */
  {
    slug: 'marshmallow',
    name: 'Marshmallow',
    tagline: 'Spend less time on your phone. Grow something instead.',
    summary:
      'An iOS screen-time app that turns focus into a visible growth loop — built on Apple’s Family Controls stack, shipped with six app extensions.',
    year: '2026',
    status: 'In development',
    categories: ['product', 'engineering', 'design'],
    featured: true,
    discipline: ['Product', 'Engineering', 'Design'],
    tint: '#fff2e5',
    tintDark: '#2a211a',
    cover: marshmallowHome,
    coverMode: 'device',
    tags: ['React Native', 'Expo', 'Swift', 'SwiftUI', 'Supabase', 'PostgreSQL', 'StoreKit'],
    meta: [
      { label: 'Role', value: 'Founder, sole designer & engineer' },
      { label: 'Timeline', value: 'Mar 2026 — present' },
      { label: 'Platform', value: 'iOS 17+ (iPhone), Next.js marketing site' },
      { label: 'Stack', value: 'Expo, Swift extensions, Supabase' },
    ],
    metrics: [
      { value: '6', label: 'native iOS extensions' },
      { value: '24', label: 'growth milestones' },
      { value: '0', label: 'Screen Time bytes leaving the device' },
    ],
    overview:
      'Most screen-time tools punish you. They show a red bar chart, tell you the number went up, and leave. Marshmallow does the opposite: every focus session you finish grows a marshmallow character that gets measured against real objects — a golf ball, a backpack, a mini fridge — so progress you cannot otherwise feel becomes something you can see. I wrote the PRD, designed the product, and built the whole thing.',
    sections: [
      {
        title: 'The problem',
        kind: 'prose',
        body: [
          'Existing focus apps rely on restriction and guilt. They block your apps, then show you statistics about how badly you did. That framing works for the small group of people who were already disciplined and fails everyone else, because failure carries a penalty and success carries nothing.',
          'The design brief I set for myself was simple: make the reward visible, make failure cost nothing, and never let the app lecture the user. A missed session in Marshmallow does not reset anything — it just does not grow anything.',
        ],
      },
      {
        title: 'How it works',
        kind: 'bullets',
        items: [
          'Focus sessions — pick a duration, pick the apps that distract you, and iOS shields them until the timer ends.',
          'Timed Blocks — recurring schedules (work hours, a bedtime window) that start and end on their own through DeviceActivity, with no app running.',
          'Growth system — session length maps to centimeters of growth, multiplied by a consistency streak. 10 minutes is +0.2cm; a 24-hour block is +35cm.',
          'Milestones — 24 real-world objects from a jellybean at 3cm to a giraffe at 1000cm, locked as silhouettes until you pass them.',
          'Customization — coatings, accessories, and colors earned through the growth loop rather than bought outright.',
          'Friends — see how other people’s marshmallows are doing, with no leaderboard and no competitive ranking.',
          'Home screen widget and Live Activity — current size, streak, and a one-tap start.',
        ],
      },
      {
        title: 'Product decisions',
        kind: 'columns',
        items: [
          {
            head: 'No punishment',
            body:
              'Failed sessions have no penalty at all. The streak multiplier is upside-only, which keeps the app from becoming another source of guilt.',
          },
          {
            head: 'Real-world scale',
            body:
              'Abstract minutes do not motivate. Comparing against a basketball or an office chair converts effort into a picture you can hold in your head.',
          },
          {
            head: 'Free core, paid commitment',
            body:
              'Every productivity mechanic is free. Premium sells stricter accountability — Super Focus Mode, which cannot be cancelled mid-session — plus cosmetics, at $3.99/month.',
          },
          {
            head: 'Privacy as a constraint',
            body:
              'No Screen Time data leaves the device. Family Controls tokens live in the App Group container so extensions can read them; schedules sync with positional placeholders that cannot be resolved back to a real app.',
          },
        ],
      },
      {
        title: 'Engineering',
        kind: 'prose',
        body: [
          'The app is Expo React Native for everything the user navigates, with a Swift native module wrapping Apple’s Screen Time stack — FamilyControls for authorization and the app picker, ManagedSettings for the shield itself, and DeviceActivity for scheduled blocks that fire while the app is closed.',
          'Six separate app extensions ship alongside it: a shield configuration service that replaces Apple’s default block screen with the user’s own marshmallow, a shield action service, a device activity monitor, a usage report extension sandboxed away from the network, a home screen widget, and a Live Activity for quick blocks. Each one needed its own Family Controls distribution entitlement from Apple, filed per bundle ID.',
          'Supabase and PostgreSQL back accounts, growth state, friends, and schedule sync. StoreKit handles the subscription. A Next.js marketing site at themarshmallow.app carries the waitlist, privacy policy, and App Store copy.',
        ],
      },
    ],
    gallery: {
      kind: 'device',
      items: [
        { src: marshmallowHome, caption: 'Home — current size measured against the next milestone object.' },
        { src: marshmallowFocus, caption: 'An active focus session.' },
        { src: marshmallowTimedBlock, caption: 'Timed Blocks — recurring schedules that run without the app open.' },
        { src: marshmallowCustomize, caption: 'Customization earned through the growth loop.' },
      ],
    },
    links: [
      { label: 'Visit themarshmallow.app', href: 'https://www.themarshmallow.app', primary: true },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'quadly',
    name: 'Quadly',
    tagline: 'A campus community platform for verified UMich students.',
    summary:
      'Discussion boards, course reviews, and schedule planning behind university email verification — web, iOS, and Android from one monorepo.',
    year: '2026',
    status: 'Shipped',
    categories: ['engineering', 'product'],
    featured: true,
    discipline: ['Engineering', 'Product'],
    tint: '#dfe3e8',
    tintDark: '#171a1e',
    cover: quadlyWeb,
    coverMode: 'wide',
    tags: ['React Native', 'Firebase', 'PostgreSQL', 'TypeScript', 'Next.js'],
    meta: [
      { label: 'Role', value: 'Mobile & Product Engineer' },
      { label: 'Timeline', value: 'Jan 2026 — Jun 2026' },
      { label: 'Platform', value: 'iOS, Android, web' },
      { label: 'Stack', value: 'React Native, Firebase, PostgreSQL' },
    ],
    metrics: [
      { value: '100+', label: 'students on the platform' },
      { value: '2', label: 'app stores from one codebase' },
      { value: 'RLS', label: 'row-level tenant isolation' },
    ],
    overview:
      'Campus conversation is scattered across group chats nobody can search and forums nobody trusts. Quadly puts discussion, course insight, and schedule planning in one place, gated behind a real university email so students know who they are talking to.',
    sections: [
      {
        title: 'What it does',
        kind: 'bullets',
        items: [
          'University email verification — access requires a working umich.edu address.',
          'Discussion boards in four modes: Free, Secret, Info, and Hot, each with its own posting rules.',
          'Course reviews with rating, difficulty, and workload metrics students can sort by.',
          'A weekly schedule planner with a credit calculator.',
          'Marketplace listings and real-time messaging between verified students.',
          'A moderation dashboard, user reporting, and rate limiting built in from the first release.',
        ],
      },
      {
        title: 'Architecture',
        kind: 'prose',
        body: [
          'One React Native codebase serves iOS and Android, with Firebase handling authentication, real-time messaging, and push. A shared TypeScript layer holds the types and validation so a rule written once holds on every surface.',
          'The data layer is PostgreSQL, designed multi-tenant from the start. Row Level Security policies isolate each university’s data at the database rather than in application code, so a bug in a screen or a query cannot leak another campus’s posts.',
        ],
      },
      {
        title: 'Trust and safety',
        kind: 'prose',
        body: [
          'A pseudonymous campus forum fails the moment moderation is an afterthought, so reporting, rate limiting, and a moderation dashboard shipped with the first version rather than after the first incident. Verification ties every account to a real institutional identity, while posts stay pseudonymous to other students — the combination is what makes an anonymous board usable.',
        ],
      },
    ],
    gallery: {
      kind: 'mixed',
      wide: [
        { src: quadlyWeb, caption: 'Quadly on the web.' },
        { src: quadlyFeatured, caption: 'Brand lockup.' },
      ],
      items: [
        { src: quadly01, caption: 'Home and schedule.' },
        { src: quadly02, caption: 'Community boards.' },
        { src: quadly03, caption: 'Post detail and comments.' },
        { src: quadly04, caption: 'Course information.' },
      ],
    },
    links: [
      { label: 'Visit quadly.org', href: 'https://quadly.org/', primary: true },
      { label: 'View source', href: 'https://github.com/daniel3606/Quadly' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'sidequest',
    name: 'SideQuest',
    tagline: 'Turning a trip itinerary into something worth finishing.',
    summary:
      'A gamified travel companion designed end to end in Figma. 1st Place, Best UI/UX at the MSU Imagine Software Fall 2024 Showcase.',
    year: '2024',
    status: 'Award winner',
    categories: ['design', 'product'],
    featured: false,
    discipline: ['Design', 'Product'],
    tint: '#e0e9e1',
    tintDark: '#1a1f1b',
    cover: sidequest,
    coverMode: 'wide',
    tags: ['Figma', 'UI/UX', 'Design systems', 'Prototyping', 'HTML/CSS'],
    meta: [
      { label: 'Role', value: 'UI/UX Design Lead, team of 4' },
      { label: 'Timeline', value: 'Sep 2024 — Dec 2024' },
      { label: 'Deliverable', value: '100+ high-fidelity screens' },
      { label: 'Recognition', value: '1st Place, Best UI/UX' },
    ],
    metrics: [
      { value: '1st', label: 'Best UI/UX, MSU Imagine 2024' },
      { value: '100+', label: 'high-fidelity screens' },
      { value: '4', label: 'designers led' },
    ],
    overview:
      'Trip planning apps optimize for logistics — flights, hotels, a list. They are efficient and joyless, and the moments people actually remember from a trip are the detours. SideQuest reframes exploring a new city as a set of quests you complete, so the planning tool becomes part of the experience instead of homework you do before it.',
    sections: [
      {
        title: 'Leading the work',
        kind: 'prose',
        body: [
          'I led a team of four designers from research through final prototype. We started with journey mapping to find where travelers actually drop off — usually the gap between arriving somewhere and deciding what to do next — and built the quest mechanic to fill exactly that gap.',
          'To keep four people producing consistent work, I built a shared Figma component library first: type ramp, color, map pins, quest cards, and every state each one needed. It meant a screen designed by anyone on the team looked like it came from the same product, and it made the final 100+ screen deliverable assemble instead of accumulate.',
        ],
      },
      {
        title: 'The design',
        kind: 'bullets',
        items: [
          'Onboarding that learns a traveler’s interests without a fifteen-question survey.',
          'A dynamic map surfacing nearby quests instead of a flat list of attractions.',
          'Quest cards with difficulty, time cost, and reward, so a choice takes seconds.',
          'Itinerary building that folds completed quests into a trip record worth revisiting.',
          'Social sharing designed around what you found, not where you checked in.',
          'Offline map states — a traveler abroad frequently has no data.',
        ],
      },
      {
        title: 'Teaching alongside it',
        kind: 'prose',
        body: [
          'As UI/UX Lead for Imagine Software Club I also ran sessions teaching members from non-technical backgrounds to design and prototype their own applications in Figma. Explaining why a decision works to someone who has never opened a design tool is the fastest way I have found to test whether the decision actually works.',
        ],
      },
    ],
    gallery: {
      kind: 'wide',
      items: [{ src: sidequest, caption: 'SideQuest — high-fidelity screens from the Figma system.' }],
    },
    links: [
      {
        label: 'Open the Figma file',
        href: 'https://www.figma.com/design/FXXfsnlbR1YK03vDnxAZdQ/SideQuest-Updates?node-id=0-1&t=yKgNhbCSM5HeJ6wt-1',
        primary: true,
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'spectacles-face-recognizer',
    name: 'Spectacle Face Recognizer',
    tagline: 'Remembering a face, from inside the glasses.',
    summary:
      'An AR face recognition system for Snap Spectacles built in Lens Studio, with a PostgreSQL embedding store and 95.2% recognition accuracy.',
    year: '2026',
    status: 'Prototype',
    categories: ['xr', 'engineering'],
    featured: true,
    discipline: ['XR', 'Engineering'],
    tint: '#e9eaec',
    tintDark: '#17181a',
    cover: null,
    coverMode: 'text',
    tags: ['Lens Studio', 'Snap Spectacles', 'TypeScript', 'Computer Vision', 'PostgreSQL'],
    meta: [
      { label: 'Role', value: 'AI & Product Engineer' },
      { label: 'Timeline', value: 'Nov 2025 — Jan 2026' },
      { label: 'Platform', value: 'Snap Spectacles' },
      { label: 'Stack', value: 'Lens Studio, TypeScript, PostgreSQL' },
    ],
    metrics: [
      { value: '95.2%', label: 'recognition accuracy on the labeled test set' },
      { value: 'Real-time', label: 'detection from the headset feed' },
      { value: '1st-person', label: 'capture and matching' },
    ],
    overview:
      'Nobody admits how often they blank on a name. Face Recognizer runs on Snap Spectacles, detects faces in the wearer’s own field of view, stores what it learns, and surfaces the name the next time that person walks up — the use case smart glasses are actually good for, tested against the constraints of a real headset.',
    sections: [
      {
        title: 'How it works',
        kind: 'bullets',
        items: [
          'Real-time face detection off the Spectacles camera feed using Lens Studio’s Computer Vision APIs.',
          'Facial embeddings generated on capture and written to a PostgreSQL schema built for fast similarity search.',
          'Matching against the saved set, with a labeled result rendered in the wearer’s view.',
          'A fallback path for unknown faces that offers to create a new record instead of failing silently.',
          'TypeScript throughout, so the Lens logic stays type-checked against the data model.',
        ],
      },
      {
        title: 'What was hard',
        kind: 'prose',
        body: [
          'A headset gives you a moving camera, uneven light, and a compute budget far below a phone. The interesting engineering was not the recognition model — it was deciding what to run on-device versus off, sizing the embedding so similarity search stays fast as the saved set grows, and designing the unknown-face path so a miss reads as an offer rather than an error.',
          'The result held 95.2% accuracy on the labeled test dataset while staying responsive enough to feel like part of the wearer’s vision rather than a query they submitted.',
        ],
      },
    ],
    links: [],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'kelsey-museum',
    name: 'Kelsey Museum AR',
    tagline: 'Thirty artifacts, out of the case and into your hands.',
    summary:
      'A browser-based AR experience for the Kelsey Museum of Archaeology — 30+ interactive 3D artifacts, 40% faster scene loads.',
    year: '2025',
    status: 'Shipped',
    categories: ['xr', 'design'],
    featured: false,
    discipline: ['XR', 'Design'],
    tint: '#e2e1e6',
    tintDark: '#14131a',
    cover: kelsey,
    coverMode: 'wide',
    tags: ['8th Wall', 'TypeScript', 'Blender', 'WebAR', '3D optimization'],
    meta: [
      { label: 'Role', value: 'AR developer & 3D artist' },
      { label: 'Timeline', value: '2024 — 2025' },
      { label: 'Platform', value: 'Mobile web (no app install)' },
      { label: 'Stack', value: '8th Wall, TypeScript, Blender' },
    ],
    metrics: [
      { value: '30+', label: 'interactive 3D artifacts' },
      { value: '40%', label: 'faster scene load times' },
      { value: '0', label: 'app downloads required' },
    ],
    overview:
      'Museum artifacts are behind glass for good reason, which is also the reason they are hard to learn from. This experience puts 30+ pieces from the Kelsey Museum of Archaeology into a visitor’s hands through their phone browser — no app install, no download step between curiosity and the object.',
    sections: [
      {
        title: 'Approach',
        kind: 'prose',
        body: [
          'The whole thing runs on 8th Wall, so a visitor scans a code and the AR opens in mobile Safari or Chrome. Removing the install step matters more than any feature: a museum visitor will not download an app for a fifteen-minute exhibit, and the ones who would are not the ones the exhibit needs to reach.',
          'Artifacts were modeled and optimized in Blender, then wired to games and educational activities in TypeScript. Scene load time was the hard constraint — web AR loses people during the wait — and retopology, texture atlasing, and staged loading cut load times by 40% while preserving the polygon accuracy the artifacts needed to stay legible as historical objects.',
        ],
      },
      {
        title: 'What visitors get',
        kind: 'bullets',
        items: [
          '30+ artifacts from the collection, inspectable from every angle.',
          'Games and activities built per artifact rather than a single generic viewer.',
          'Web-based AR that works across iOS and Android without an install.',
          'Load performance tuned specifically for museum wi-fi and cellular.',
        ],
      },
    ],
    gallery: {
      kind: 'wide',
      items: [{ src: kelsey, caption: 'Kelsey Museum Cohort — AR artifact experience.' }],
    },
    links: [],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'artfit',
    name: 'ArtFit',
    tagline: 'Where developers find the designers they are missing.',
    summary:
      'A full-stack marketplace connecting 200+ developers with artists — React front end, Django REST API, and a tag system that cut search time by 60%.',
    year: '2025',
    status: 'Live',
    categories: ['engineering', 'design'],
    featured: false,
    discipline: ['Engineering', 'Design'],
    tint: '#e0dfe8',
    tintDark: '#101020',
    cover: artfit01,
    coverMode: 'wide',
    tags: ['React', 'Django', 'PostgreSQL', 'REST API', 'Figma'],
    meta: [
      { label: 'Role', value: 'Full-stack engineer & designer' },
      { label: 'Timeline', value: 'Jan 2025 — Oct 2025' },
      { label: 'Platform', value: 'Web' },
      { label: 'Stack', value: 'React, Django REST, PostgreSQL' },
    ],
    metrics: [
      { value: '200+', label: 'developers and artists connected' },
      { value: '60%', label: 'reduction in search time' },
      { value: 'End-to-end', label: 'Figma designs to shipped components' },
    ],
    overview:
      'Every developer building something eventually hits the wall where the code works and the product looks unfinished. ArtFit is the marketplace for that moment — a place where developers and artists find each other, show real work, and start a collaboration without going through a freelance platform built for a different kind of transaction.',
    sections: [
      {
        title: 'Build',
        kind: 'prose',
        body: [
          'React on the front end against a Django REST API, with PostgreSQL underneath. The interesting problem was discovery: a marketplace is only as good as its ability to answer "who here can do this specific thing." I designed a normalized schema with a tag-based indexing system that brought search time down by 60% compared to the naive query it replaced.',
          'I designed the interface in Figma first and translated it into a set of reusable React components — the same loop I use on every project, where the design system and the component library are the same artifact viewed from two directions.',
        ],
      },
      {
        title: 'Features',
        kind: 'bullets',
        items: [
          'Authentication and profile management for both sides of the marketplace.',
          'Portfolio showcase with project-level presentation rather than a flat gallery.',
          'Tag-based search and discovery across skills, styles, and availability.',
          'Real-time messaging between matched collaborators.',
          'A community feed for posts and work-in-progress updates.',
        ],
      },
    ],
    gallery: {
      kind: 'wide',
      items: [
        { src: artfit01, caption: 'ArtFit home.' },
        { src: artfit02, caption: 'Project creation flow.' },
        { src: artfit03, caption: 'Discovery and profiles.' },
      ],
    },
    links: [
      { label: 'Visit artfit.dev', href: 'https://www.artfit.dev/', primary: true },
      { label: 'View source', href: 'https://github.com/daniel3606/ArtFit' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'scribble-ai',
    name: 'Scribble A.I.',
    tagline: 'A neural network that reads your handwriting-grade doodles.',
    summary:
      'A convolutional network trained in PyTorch to classify hand-drawn sketches, at 89% accuracy across 50 classes, with a live drawing canvas.',
    year: '2026',
    status: 'Complete',
    categories: ['engineering'],
    featured: true,
    discipline: ['Engineering', 'ML'],
    tint: '#e3e3e6',
    tintDark: '#141418',
    cover: scribbleai,
    coverMode: 'contain',
    tags: ['Python', 'PyTorch', 'CNN', 'Streamlit', 'Flask'],
    meta: [
      { label: 'Role', value: 'AI Engineer' },
      { label: 'Timeline', value: 'Nov 2025 — Jan 2026' },
      { label: 'Platform', value: 'Web app' },
      { label: 'Stack', value: 'PyTorch, Streamlit, Flask' },
    ],
    metrics: [
      { value: '89%', label: 'accuracy across 50 classes' },
      { value: '40%', label: 'faster inference after optimization' },
      { value: 'Real-time', label: 'canvas prediction' },
    ],
    overview:
      'Scribble AI classifies rough sketches in real time — draw on the canvas and the model names what you drew, with confidence scores. It was my end-to-end machine learning project: data pipeline, training, evaluation, and a deployed interface, rather than a notebook that stops at a validation number.',
    sections: [
      {
        title: 'The model',
        kind: 'prose',
        body: [
          'A convolutional neural network trained in PyTorch on a 50-class hand-drawn sketch dataset, reaching 89% accuracy. Sketch classification is harder than it sounds — a cat drawn by two people shares almost no pixels, so the network has to learn stroke-level structure rather than appearance.',
          'I built a reproducible preprocessing pipeline so training runs could be compared honestly, then optimized inference time by 40% through batch processing to keep the canvas responsive while a user is still drawing.',
        ],
      },
      {
        title: 'The interface',
        kind: 'bullets',
        items: [
          'An interactive canvas that predicts continuously as you draw.',
          'Image upload for existing sketches.',
          'Confidence scores alongside every prediction, not just the top label.',
          'Training visualization and evaluation metrics exposed in the app.',
          'Configurable training runs against a chosen subset of categories.',
        ],
      },
    ],
    links: [{ label: 'View source', href: 'https://github.com/daniel3606/ScribbleAI', primary: true }],
  },


];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
