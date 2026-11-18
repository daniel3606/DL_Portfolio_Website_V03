# Daniel Lim — Portfolio v04

A portfolio built with React and Vite: a playable lake on the home page, then
the work — every project presented on one art-directed preview system and
opened into a case study that goes from the product down to the code.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## The design system

Everything lives in `src/styles/base.css` as custom properties: warm paper
(`#f7f5f2`) and near-black ink (`#22201c`), redefined under
`[data-theme='dark']`. Type is Archivo for everything you read and IBM Plex Mono
for the record layer — labels, dates, counts, file paths. The shell has no
accent colour: each project brings its own tint, and that tint only appears
behind the project's own imagery.

**No dots.** Separators are hairlines, list markers are rules or numerals, and
status marks are squares.

## Structure

```
src/
├── data/
│   ├── profile.js           # bio, disciplines, experience, skills
│   ├── resume.js            # the /resume page
│   └── projects/            # one file per project + index.js (tiers, order)
├── assets/work/<slug>/      # every project image, WebP, one width per role
├── components/
│   ├── media/ProjectMedia   # the preview plate (see below)
│   ├── work/                # ProjectCard, LabList, status/tech/link metadata
│   ├── case/                # Gallery, Architecture, CodeExcerpt
│   ├── Fishing.jsx          # the playable lake on the home page
│   └── Nav, Footer, Reveal, ScrollToTop
└── pages/                   # Home, Work, ProjectDetail, About, Resume, Contact
```

## Projects

`src/data/projects/index.js` documents the record shape and orders the
projects into three tiers:

| Tier | Where it shows | Page |
| --- | --- | --- |
| `featured` | Home grid, wide rows on /work | Full case study |
| `more` | Card grid on /work | Shorter case study |
| `lab` | Rows on /work | None |

A case study renders whatever the record carries, top to bottom: head and hero
(the five-second read), facts, overview, numbers, features and screens (the
one-minute read), then the engineering section — architecture, challenges, a
code excerpt, stack, process — and the outcome. Sections without data are
skipped, so a design project and a Rust codebase use the same template without
empty headings.

Rules the content follows: every number must be backed by the repository or a
public listing; private repositories get no code excerpts; work in progress says
so in its status.

### Adding a project

1. Put its images in `src/assets/work/<slug>/` — phone screens at 720px wide,
   desktop and browser captures at 1800px, WebP.
2. Add `src/data/projects/<slug>.js` (copy the closest existing one).
3. Import it in `src/data/projects/index.js` and place it in the list.

## The preview plate

`ProjectMedia` draws every project preview on the site — cards, case-study
heroes, the pager — from authentic screens plus a layout name:

| Layout | For |
| --- | --- |
| `phones` | 1–3 phone screens; the centre one leads |
| `browser` | a website, in a browser frame with an address bar |
| `window` | a desktop app or game capture (`zoom` crops in closer) |
| `duo` | a website with its phone version in front |
| `system` | an architecture drawn as lanes, for work with no honest screenshot |

The rules that make them read as one set: one aspect ratio (16:10 for covers,
16:9 for heroes, 4:3 on phones), the project tint lit from the top, devices
sized in container units so the composition scales as a unit, one shadow
recipe, and every device running off the bottom edge. Device frames are CSS,
not baked into images, so a screen looks identical everywhere it appears.

## Resume

`/resume` renders from `src/data/profile.js` (`experience`, `education`,
`skills`, `resumeProjects`) and carries a real `@media print` stylesheet — the
Print / Save as PDF button produces a clean document with the chrome stripped,
`break-inside: avoid` on entries, and black-on-white type at 10pt.

`public/Daniel_Lim_Resume.pdf` is a separate artifact behind the Download PDF
button. Update it alongside `resumeProjects` when the resume changes, or replace
it with a print-to-PDF export of this page.

## Deployment

`vercel.json` and `netlify.toml` both rewrite all routes to `index.html` for
client-side routing. Build command `npm run build`, output directory `dist`.
