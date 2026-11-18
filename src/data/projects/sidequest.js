import home from '../../assets/work/sidequest/home.webp';
import quests from '../../assets/work/sidequest/quests.webp';
import wyr from '../../assets/work/sidequest/would-you-rather.webp';
import detail from '../../assets/work/sidequest/quest-detail.webp';
import profile from '../../assets/work/sidequest/profile.webp';
import { shot } from './shot.js';

/* Exported straight from the Figma file at 1x (393 × 852). */
const f = (src, alt) => shot(src, 393, 852, alt);

export default {
  slug: 'sidequest',
  name: 'SideQuest',
  mascot: 'walk',
  tier: 'more',
  kind: 'Product design',
  year: '2024',
  period: 'Sep — Dec 2024',
  status: { label: '1st place, Best UI/UX', tone: 'award' },
  summary: 'A travel app that turns exploring a new city into quests. Designed end to end in Figma with a team of four.',
  hook: 'Won Best UI/UX at the MSU Imagine Software Fall 2024 showcase.',
  tech: ['Figma', 'Design systems', 'Prototyping'],
  theme: { tint: '#e2ebe1', tintDark: '#151b16' },

  cover: {
    layout: 'phones',
    screens: [f(quests, 'Past quests'), f(home, 'Home: travel your area'), f(wyr, 'A Would You Rather quest step')],
  },

  links: [
    { label: 'Open in Figma', href: 'https://www.figma.com/design/FXXfsnlbR1YK03vDnxAZdQ/SideQuest-Updates', kind: 'figma' },
  ],

  facts: [
    { label: 'Role', value: 'UI/UX design lead, team of 4' },
    { label: 'Timeline', value: 'Sep — Dec 2024' },
    { label: 'Deliverable', value: '100+ high-fidelity screens' },
    { label: 'Recognition', value: '1st Place, Best UI/UX' },
  ],

  overview: {
    problem: 'Trip planners optimize for logistics. They are efficient and joyless, and the moments people remember from a trip are the detours.',
    solution: 'SideQuest reframes a city as a set of quests — small, timed challenges with rewards — so planning becomes part of the trip instead of homework before it.',
    role:
      'I led four designers from research to final prototype. I built the shared component library first — type, colour, cards, map pins and their states — so any screen by anyone on the team looked like the same product.',
  },

  features: [
    { title: 'Quests, not attractions', body: 'Each card carries time, cost and reward, so choosing one takes seconds.' },
    { title: 'A trip record', body: 'Completed quests become a history of the trip, with badges earned along the way.' },
    { title: 'Light social play', body: 'Friends nearby and quick polls instead of a check-in feed.' },
  ],

  gallery: [
    { ...f(home), frame: 'phone', caption: 'Home, built around the city you are in.' },
    { ...f(detail), frame: 'phone', caption: 'A quest: when, how long, and what you earn.' },
    { ...f(quests), frame: 'phone', caption: 'Past quests become the record of a trip.' },
    { ...f(profile), frame: 'phone', caption: 'Profile and badges.' },
  ],

  outcome: {
    now: 'A design project — the Figma file is the deliverable. It won Best UI/UX at the MSU Imagine Software Fall 2024 showcase.',
    lessons: ['Build the component library before the screens. It is what let four people produce one product.'],
    next: [],
  },
};
