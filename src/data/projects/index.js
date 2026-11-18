/*
 * Every project on the site, in one place.
 *
 * One file per project in this folder; this index only orders them and sorts
 * them into tiers. The Work page, the home page, the case-study template, the
 * pager and the sitemap all read from here, so adding a project means adding
 * one file and one line below.
 *
 * Record shape (fields marked * are required):
 *
 *   slug*, name*, tier*        'featured' | 'more' | 'lab'
 *   kind*                      what it is, in two or three words ('iOS app')
 *   year*, period              '2026', 'Oct — Nov 2026'
 *   status*                    { label, tone }  tone: live | beta | release | prototype | award
 *   summary*                   the one line a visitor reads in five seconds
 *   hook                       the single most distinguishing fact, for the card
 *   tech*                      3–4 headline technologies (cards show these)
 *   theme                      { tint, tintDark } — the plate behind its imagery
 *   cover                      { layout, screens, url } — see ProjectMedia
 *   hero                       same shape; the case-study hero (defaults to cover)
 *   links                      [{ label, href, kind }] kind: appstore | site | repo | figma
 *   repoNote                   shown when the code is private
 *   facts                      [{ label, value }] — role, timeline, platform, team
 *
 *   Level 2 — the overview
 *   overview                   { problem, solution, role }
 *   numbers                    [{ value, label }] — only figures the repo can back
 *   features                   [{ title, body }]
 *   gallery                    [{ src, w, h, caption, frame: 'phone' | 'browser' | 'window', url }]
 *
 *   Level 3 — the engineering deep dive
 *   stack                      [{ group, items }] — the full list, not the headline
 *   architecture               { intro, columns: [{ label, nodes: [{ title, detail }] }], notes }
 *   challenges                 [{ title, problem, solution, where }]
 *   code                       { title, lang, file, href, code, note } — public repos only
 *   process                    [paragraphs] — how it was built, tested, shipped
 *   outcome                    { now, lessons: [], next: [] }
 *
 * Lab entries need only slug, name, tier, kind, year, summary, tech and links;
 * they render as rows and do not get a page.
 */

import dopaminezero from './dopaminezero.js';
import marshmallow from './marshmallow.js';
import rustyfinder from './rustyfinder.js';
import quadly from './quadly.js';
import daylog from './daylog.js';
import orbit from './orbit.js';
import ari from './ari.js';
import fishandtalk from './fishandtalk.js';
import sidequest from './sidequest.js';
import { lab } from './lab.js';

export const projects = [
  dopaminezero,
  marshmallow,
  rustyfinder,
  quadly,
  daylog,
  orbit,
  ari,
  fishandtalk,
  sidequest,
  ...lab,
];

export const featured = projects.filter((p) => p.tier === 'featured');
export const more = projects.filter((p) => p.tier === 'more');
export const labProjects = projects.filter((p) => p.tier === 'lab');

/** Projects that have a case-study page, in reading order. */
export const caseStudies = projects.filter((p) => p.tier !== 'lab');

export const getProject = (slug) => caseStudies.find((p) => p.slug === slug);
