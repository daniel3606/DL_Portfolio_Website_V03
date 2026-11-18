import sunset from '../../assets/work/fishandtalk/sunset.webp';
import night from '../../assets/work/fishandtalk/night.webp';
import minigame from '../../assets/work/fishandtalk/minigame.webp';
import caught from '../../assets/work/fishandtalk/catch.webp';
import sheet from '../../assets/work/fishandtalk/fish-sheet.webp';
import { shot } from './shot.js';

const g = (src, alt) => shot(src, 1684, 1080, alt);

export default {
  slug: 'fish-and-talk',
  name: 'Fish & Talk',
  mascot: 'showfish',
  tier: 'more',
  kind: 'Roblox game',
  year: '2026',
  period: 'Nov 2026',
  status: { label: 'Playable, unpublished', tone: 'prototype' },
  summary: 'A social fishing hangout on a sunset island, where the map and all 108 fish are generated from code.',
  hook: 'A deterministic minigame both client and server simulate, so the server can verify every catch.',
  tech: ['Luau', 'Rojo', 'Python', 'Blender'],
  theme: { tint: '#efe0de', tintDark: '#1d1619' },

  cover: { layout: 'window', screens: [g(minigame, 'The Tide Ring minigame at night, reeling in a mythic fish')] },

  hero: { layout: 'window', zoom: 0.9, screens: [g(sunset, 'The generated lagoon at sunset')] },

  links: [],
  repoNote: 'Private repository.',

  facts: [
    { label: 'Role', value: 'Solo' },
    { label: 'Timeline', value: 'Nov 14 — 15, 2026' },
    { label: 'Platform', value: 'Roblox' },
    { label: 'Scale', value: '~22k lines of strict Luau' },
  ],

  overview: {
    problem: 'Most Roblox fishing games are grind loops. I wanted a place where fishing is what your hands do while you talk to people.',
    solution:
      'Cast, then play a short timing game — the Tide Ring — to reel in. 108 creatures across six baits and seven rarities, a codex, shops, a day-night cycle, leaderboards and saved progress.',
    role: 'I built the game, the island generator and the fish pipeline.',
  },

  numbers: [
    { value: '108', label: 'procedurally modelled creatures' },
    { value: '0', label: 'hand-placed map parts — the island is code' },
  ],

  features: [
    { title: 'Server-verified minigame', body: 'Client and server run the same seeded simulation from the same press times; the server’s result is the one that counts.' },
    { title: 'Honest odds', body: 'One odds table drives both the server’s roll and the odds the player sees, so the display can never disagree with the game.' },
    { title: 'Safe saves', body: 'Session locking, retries, and saves on leave and on server shutdown.' },
    { title: 'Fish from a script', body: 'A Python and headless-Blender generator builds every species — body, fins, paint — and writes the models the game loads.' },
  ],

  gallery: [
    { ...g(minigame), frame: 'window', caption: 'The Tide Ring: press when the marker is in the green. The server replays the same simulation.' },
    { ...g(sunset), frame: 'window', caption: 'The lagoon at sunset. Terrain, docks and lights are all generated.' },
    { ...g(night), frame: 'window', caption: 'Night. The cycle changes which fish bite.' },
    { ...g(caught), frame: 'window', caption: 'A mythic catch card.' },
    { ...shot(sheet, 1800, 873), frame: 'window', caption: 'Part of one generated species sheet.' },
  ],

  stack: [
    { group: 'Game', items: ['Luau (--!strict)', 'Rojo', 'Wally', 'selene', 'StyLua'] },
    { group: 'Content pipeline', items: ['Python', 'Blender (headless)', 'Generated Luau model tables'] },
  ],

  outcome: {
    now: 'Playable in Roblox Studio. Not yet published, which also means saved data has not run at scale.',
    lessons: ['Determinism is the cheapest anti-cheat. If the server can replay the input, it never has to trust the result.'],
    next: ['Publish the place', 'Playtest with real groups'],
  },
};
