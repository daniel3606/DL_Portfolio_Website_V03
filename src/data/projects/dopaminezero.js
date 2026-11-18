import zeroMode from '../../assets/work/dopaminezero/zero-mode.webp';
import minimalHome from '../../assets/work/dopaminezero/minimal-home.webp';
import shieldInstagram from '../../assets/work/dopaminezero/shield-instagram.webp';
import shieldMaps from '../../assets/work/dopaminezero/shield-maps.webp';
import homeLook from '../../assets/work/dopaminezero/home-look-white.webp';
import paywall from '../../assets/work/dopaminezero/paywall.webp';
import site from '../../assets/work/dopaminezero/site.webp';
import { phone, wide } from './shot.js';

export default {
  slug: 'dopamine-zero',
  name: 'Dopamine Zero',
  tier: 'featured',
  kind: 'iOS app',
  year: '2026',
  period: 'Oct — Nov 2026',
  status: { label: 'TestFlight beta', tone: 'beta' },
  summary: 'One slider that moves an iPhone between Full, Reduced and Zero — keeping messages and maps, removing feeds.',
  hook: 'Seven app extensions and a WebKit layer that rebuilds social apps without their feeds.',
  tech: ['Swift 6', 'SwiftUI', 'Screen Time API', 'WebKit'],
  theme: { tint: '#ece8df', tintDark: '#1f1d1a' },

  cover: {
    layout: 'phones',
    screens: [
      phone(shieldInstagram, 'Shield shown when the original Instagram is opened in Reduced'),
      phone(zeroMode, 'Dopamine Zero home in Zero mode with the level slider'),
      phone(minimalHome, 'Minimal Home: a text-only home screen widget'),
    ],
  },

  hero: {
    layout: 'phones',
    screens: [
      phone(shieldMaps, 'In Zero mode, Google Maps is shielded unless you keep it'),
      phone(zeroMode, 'Dopamine Zero home in Zero mode'),
      phone(homeLook, 'A monochrome Minimal Home look'),
    ],
  },

  links: [{ label: 'dopaminezero.app', href: 'https://dopaminezero.app', kind: 'site' }],
  repoNote: 'Private repository — happy to walk through the code.',

  facts: [
    { label: 'Role', value: 'Solo — product, design, iOS engineering' },
    { label: 'Timeline', value: 'Oct 6 — present, 2026' },
    { label: 'Platform', value: 'iPhone, iOS 26.5+' },
    { label: 'Status', value: 'TestFlight; App Store review pending entitlements' },
  ],

  overview: {
    problem:
      'Blockers treat the whole phone as the problem, so people switch them off the first time they need a map or a message. The real problem is narrower: feeds, Reels and Shorts — the parts built to be hard to put down.',
    solution:
      'Dopamine Zero gives the phone three levels. Reduced shields the social apps and offers a “Zero” version of each instead: Instagram with only the people you follow, YouTube without Shorts or a home feed. Zero shields everything except the apps you choose to keep. Full is a timed step out, never the default.',
    role:
      'I designed and built it alone: the product spec, the “Paper” design system, the Swift app and all seven extensions, the WebKit filters, the marketing site, and the release work for TestFlight.',
  },

  numbers: [
    { value: '34k', label: 'lines of Swift across the app and extensions' },
    { value: '7', label: 'app extensions in one XcodeGen project' },
    { value: '~430', label: 'unit and UI test functions on main' },
    { value: '0', label: 'third-party dependencies, servers or analytics' },
  ],

  features: [
    {
      title: 'Three levels, one control',
      body: 'Full, Reduced and Zero map to named ManagedSettings stores. Full is a 15-minute-to-2-hour step out run by a DeviceActivity schedule, with a Live Activity counting it down.',
    },
    {
      title: 'Zero Apps',
      body: 'The mobile web version of a service inside a hardened WKWebView, with an injected filter that removes the feed surfaces and native tab bars that keep the app feeling native.',
    },
    {
      title: 'Shield handoff',
      body: 'Open the real Instagram in Reduced and the shield offers its Zero version instead of a dead end — one tap from the block screen into the quiet app.',
    },
    {
      title: 'Minimal Home',
      body: 'A text-only home screen widget in five monochrome looks, paged with App Intents, toggled by a Focus Filter, and set up with a generated Shortcut.',
    },
    {
      title: 'Sleep and statistics',
      body: 'A bedtime shield on a DeviceActivity schedule with an AlarmKit wake alarm, and usage charts drawn inside Apple’s sandboxed report extension.',
    },
    {
      title: 'Clean Web',
      body: 'A Safari Web Extension that runs the same filter script in Safari, so the feeds stay gone in the browser too.',
    },
  ],

  gallery: [
    { ...phone(zeroMode), frame: 'phone', caption: 'Zero mode. The slider is the only control the home screen needs.' },
    { ...phone(shieldInstagram), frame: 'phone', caption: 'In Reduced, the original app is shielded and its Zero version is offered instead.' },
    { ...phone(shieldMaps), frame: 'phone', caption: 'In Zero, only the apps you chose to keep stay open.' },
    { ...phone(minimalHome), frame: 'phone', caption: 'Minimal Home: apps as words, paged by App Intents.' },
    { ...phone(homeLook), frame: 'phone', caption: 'One of five monochrome home looks.' },
    { ...phone(paywall), frame: 'phone', caption: 'StoreKit 2 subscription with a free week.' },
    { ...wide(site), frame: 'browser', url: 'dopaminezero.app', caption: 'The product site, built as plain HTML and CSS on the app’s own design tokens.' },
  ],

  stack: [
    { group: 'App', items: ['Swift 6 (strict concurrency)', 'SwiftUI', '@Observable', 'XcodeGen'] },
    { group: 'Apple frameworks', items: ['FamilyControls', 'ManagedSettings', 'DeviceActivity', 'WidgetKit', 'ActivityKit', 'App Intents', 'AlarmKit', 'WeatherKit', 'StoreKit 2'] },
    { group: 'Web layer', items: ['WKWebView', 'Injected JS filter', 'Safari Web Extension'] },
    { group: 'Sync & storage', items: ['App Group defaults', 'iCloud key-value store', 'iCloud Keychain'] },
    { group: 'Quality', items: ['XCTest', 'XCUITest', 'jsdom filter tests', 'GitHub Actions'] },
  ],

  architecture: {
    intro:
      'Screen Time code cannot run in one process. Shields, schedules and reports each live in their own extension with their own sandbox, so the app is really eight programs that agree on state through an App Group.',
    columns: [
      {
        label: 'App',
        nodes: [
          { title: 'Levels & settings', detail: 'SwiftUI, @Observable state' },
          { title: 'Zero Apps', detail: 'WKWebView + route rules + filter' },
          { title: 'Purchases & sync', detail: 'StoreKit 2, iCloud KVS' },
        ],
      },
      {
        label: 'Shared state',
        nodes: [
          { title: 'App Group store', detail: 'Versioned property-list keys' },
          { title: 'ManagedSettings', detail: 'baseline · sleep · web · home' },
        ],
      },
      {
        label: 'Extensions',
        nodes: [
          { title: 'Shield UI & Action', detail: 'Custom block screen, handoff' },
          { title: 'Activity Monitor', detail: 'Schedules: step out, sleep' },
          { title: 'Report · Widget · Focus', detail: 'Charts, Minimal Home, Live Activity' },
          { title: 'Safari extension', detail: 'Same filter, in Safari' },
        ],
      },
    ],
    notes: [
      'No server. Settings sync through iCloud key-value storage; Zero App sign-ins stay in iCloud Keychain.',
      'Each extension reads a snapshot written by the app — never the app’s live objects — so a schedule firing while the app is closed still sees a consistent policy.',
    ],
  },

  challenges: [
    {
      title: 'Routing a shielded app to its quiet version',
      problem:
        'Screen Time hands apps to developers as opaque tokens. The app never learns which token is Instagram, and a shield extension cannot open another app.',
      solution:
        'The user matches each service to its token once, and that map is written to the App Group. When the shield’s button is tapped, the action extension writes a one-time “pending entry” and asks iOS to open the parent app. The app consumes the entry on activation and discards anything older than 120 seconds, so a stale tap can never reopen a Zero App later.',
      where: 'ShieldActionExtension.swift · PendingEntryStore',
    },
    {
      title: 'Turning a website into an app without letting it escape',
      problem:
        'A mobile site wants to deep-link into the native app, open new windows, and navigate client-side where native code cannot see it.',
      solution:
        'Routes are decided twice: native rules classify every full page load, and a mirrored JavaScript classifier catches single-page navigation. Scripts run in an isolated content world so the page cannot forge messages; navigations are allowed without app links; non-HTTP schemes are cancelled; message handlers are weak to avoid a retain cycle with the web view.',
      where: 'QuietBrowserModel.swift · QuietRoutes.swift · QuietFilter.js',
    },
    {
      title: 'A YouTube player that survives being minimized',
      problem:
        'Collapsing a video into a mini-player reloaded the page, and YouTube’s player swallows every touchmove inside WKWebView, so native drag gestures never fired.',
      solution:
        'Two web views: a browse layer, and a video layer that is never torn down, so minimizing is a layout change rather than a reload. Gestures attach to the window instead of the web view. Full screen animates with a snapshot view over a black backdrop, because a bitmap of the video’s compositing layer renders black.',
      where: 'PlayerFullScreenTransition.swift · docs/youtube-zero-audit',
    },
    {
      title: 'Working around what widgets cannot do',
      problem:
        'Widgets receive no swipes, a Focus cannot run arbitrary code, and iOS 27 draws a glass border around every widget that breaks a text-only home screen.',
      solution:
        'Paging is a tap-driven App Intent. A generated Shortcut accepts small text commands and carries its own automations. The glass border is hidden by glow masks measured on a device — and a CI job in the simulator measures how visible it still is, so a future iOS change shows up as a failing check.',
      where: 'WidgetPaging.swift · make_minimal_home_shortcut.py · home-screen-look.yml',
    },
  ],

  process: [
    'Every Zero App starts as a written native spec: measurements taken from iPhone screenshots of the real app, with anything I could not confirm marked UNVERIFIED rather than guessed.',
    'Each service is built on its own branch and worktree, then merged into a QA branch that runs the full suite together. On that branch the latest run is 444 unit tests with no failures; the release report still says “not yet releasable”, and I have kept it that way rather than ship around it.',
    'I use AI coding agents heavily and review everything they produce; 298 of the 344 commits on main are mine, and the specs, audits and test matrices are how I keep generated code honest.',
  ],

  outcome: {
    now: 'On TestFlight since Nov 2, 2026. App Store release is blocked on the Family Controls distribution entitlement, which Apple grants per extension.',
    lessons: [
      'Screen Time is a set of separate processes with a shared file between them. Designing the shared snapshot first made every extension simpler.',
      'Tests for a web filter belong next to the filter. The jsdom suite caught more regressions than any device run.',
    ],
    next: ['Finish the remaining Zero Apps on their branches', 'Privacy manifest and entitlement approval', 'App Store release'],
  },
};
