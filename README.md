# Daniel Lim — Portfolio v04

An editorial portfolio built with React and Vite. Serif display type, mono for
the record, warm paper instead of screen grey, and a project index that reveals
its covers as you move through it.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## The design system

Everything lives in `src/styles/base.css` as custom properties.

**Type** — three faces, each with one job:

| Role | Face | Used for |
| --- | --- | --- |
| Display | Instrument Serif | Headlines, project names, metrics, form fields. Its italic is the emphasis of the whole system. |
| Body | Inter Tight | Running prose and UI copy. |
| Record | JetBrains Mono | Labels, dates, numbers, categories, buttons. |

**Palette** — warm paper (`#f2f0ea`) and near-black ink (`#16150f`), with a
single saturated voice: vermilion `#c33f1c`, which brightens to `#ff6a3d` in
dark mode. Dark theme redefines only the token values under `[data-theme='dark']`.

**No dots.** Separators are hairlines (`.sep`), list markers are em rules or
mono numerals (`.list-dash`, `.list-num`), and the active nav marker is an
underline. Nothing in the system is a filled circle.

**Structure** — sections are numbered `(01)`, divided by 1px rules, and set on
an asymmetric grid: the hero's second line indents 12vw, the case-study overview
sets right of the measure, and the statement column drops below its portrait.

## Structure

```
src/
├── main.jsx              # entry — base.css loads before any component CSS
├── App.jsx               # routes
├── styles/base.css       # tokens, reset, type scale, shared primitives
├── data/
│   ├── profile.js        # bio, disciplines, experience, education, skills, resume entries
│   └── projects.js       # every case study, as data
├── components/
│   ├── Nav.jsx           # numbered nav, theme toggle, mobile sheet
│   ├── Footer.jsx
│   ├── WorkIndex.jsx     # the numbered project index + cursor-following cover
│   ├── Marquee.jsx       # infinite ticker
│   ├── Reveal.jsx        # scroll-in wrapper
│   └── ScrollToTop.jsx
└── pages/
    ├── Home.jsx          # hero, ticker, statement, practice, work, experience, closing
    ├── Work.jsx          # filterable index + "also built"
    ├── ProjectDetail.jsx # one template renders every case study
    ├── About.jsx         # story, process, point of view, capabilities
    ├── Resume.jsx        # typeset resume with a real print stylesheet
    └── Contact.jsx       # EmailJS form with underline fields
```

## The work index

`WorkIndex.jsx` is the signature interaction. On a pointer device it floats the
hovered project's cover near the cursor — trailed by a lerp, so it lags rather
than pins — and dims every other row. On touch, or under 861px, it drops the
float entirely and renders inline thumbnails instead; the media query gates the
listener so no pointer work happens where it cannot be seen.

## Adding a project

Project pages are generated from data — there is no per-project component. Add a
record to the `projects` array in `src/data/projects.js` and the index row, the
`/work/:slug` page, the filters, and the prev/next pager all pick it up.

| Field | Purpose |
| --- | --- |
| `slug`, `name`, `tagline`, `summary` | Identity and index copy |
| `year`, `status`, `discipline` | `discipline` is an array; the index sets its own separators |
| `categories` | Filter keys: `engineering`, `product`, `design`, `xr` |
| `featured` | Shows in the home index |
| `cover`, `coverMode` | `wide`, `device`, `contain`, or `text` for a typographic plate |
| `tint`, `tintDark` | Backdrop behind the cover, per theme |
| `tags`, `meta`, `metrics` | Tag list, the facts strip, the stat row |
| `overview` | The large serif opening statement |
| `sections` | Body blocks: `kind` of `prose`, `bullets`, or `columns` |
| `gallery` | `kind` of `wide`, `device`, or `mixed` |
| `links` | Buttons; one may set `primary: true` |

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
