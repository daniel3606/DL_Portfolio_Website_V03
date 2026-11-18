import main from '../../assets/work/rustyfinder/main.webp';
import columns from '../../assets/work/rustyfinder/columns.webp';
import icons from '../../assets/work/rustyfinder/icons.webp';
import { shot } from './shot.js';

const win = (src, alt) => shot(src, 1800, 1129, alt);

export default {
  slug: 'rustyfinder',
  name: 'RustyFinder',
  tier: 'featured',
  kind: 'macOS app',
  year: '2026',
  period: 'Nov 2026',
  status: { label: 'v0.1.0 released', tone: 'release' },
  summary: 'A native dual-pane file manager for macOS: AppKit on top, a Rust core underneath.',
  hook: '35k lines of Rust behind an AppKit UI, bridged with UniFFI, with 535 Rust tests.',
  tech: ['Rust', 'Swift', 'AppKit', 'UniFFI'],
  theme: { tint: '#e6e4e0', tintDark: '#1b1b1c' },

  cover: { layout: 'window', zoom: 1.45, screens: [win(main, 'RustyFinder: list pane with folders and tags beside an icon pane')] },
  hero: { layout: 'window', zoom: 0.9, screens: [win(main, 'RustyFinder: list pane with folders and tags beside an icon pane')] },

  links: [
    { label: 'Source on GitHub', href: 'https://github.com/daniel3606/rustyfinder', kind: 'repo' },
    { label: 'Release v0.1.0', href: 'https://github.com/daniel3606/rustyfinder/releases', kind: 'site' },
  ],

  facts: [
    { label: 'Role', value: 'Solo — architecture, spec, review' },
    { label: 'Timeline', value: 'Nov 16 — 17, 2026' },
    { label: 'Platform', value: 'macOS 26, Apple silicon' },
    { label: 'License', value: 'MIT, open source' },
  ],

  overview: {
    problem:
      'Finder is good at looking at files and slow at working with them: no second pane, no transfer queue, no real batch rename, and remote servers bolted on through the kernel.',
    solution:
      'RustyFinder is a keyboard-first, dual-pane file manager. Every filesystem — local disk, archives, SFTP, FTP, WebDAV, S3 — implements one Rust trait, so tabs, previews, search and the copy engine work the same everywhere. It is local-first: no account, no telemetry, and no network traffic unless you open a server.',
    role:
      'I designed and engineered RustyFinder end to end: the architecture, a set of 24 behaviour specs written before any code, a strict boundary between the Rust core and the Swift UI, and a scripted UI test harness that verifies every milestone.',
  },

  numbers: [
    { value: '35k', label: 'lines of Rust across three crates' },
    { value: '535', label: 'Rust unit tests, plus 288 scripted UI checks' },
    { value: '0.2s', label: 'to list 100,000 files in the benchmark' },
    { value: '10 MB', label: 'release build, down from 61 MB' },
  ],

  features: [
    { title: 'Panes, tabs and views', body: 'Dual or single pane with tabs; list, icon and column views; per-folder view settings.' },
    { title: 'Transfer queue', body: 'Pause, resume, retry and bandwidth limits; conflict prompts; undo and redo; transfers that resume after a relaunch.' },
    { title: 'Remote filesystems', body: 'SFTP through the system’s own ssh, FTP/FTPS, WebDAV and S3 — all browsed like local folders.' },
    { title: 'Archives as folders', body: 'zip, tar, 7z and rar open in place, with the same preview and copy behaviour as a directory.' },
    { title: 'Batch tools', body: 'Multi-Rename with collision-free reordering, folder Sync, checksums, tags and git status.' },
    { title: 'Fast navigation', body: 'Fuzzy Quick Open, its own search engine or Spotlight, Quick Look and a preview pane.' },
  ],

  gallery: [
    { ...win(main), frame: 'window', caption: 'Dual pane: a list view with expanded folders and tags beside an icon view.' },
    { ...win(columns), frame: 'window', caption: 'Column view with the preview pane.' },
    { ...win(icons), frame: 'window', caption: 'Icon view, single pane.' },
  ],

  stack: [
    { group: 'Core (Rust)', items: ['notify (FSEvents)', 'kqueue via libc', 'serde', 'regex', 'flate2 · lzma-rs · zstd', 'sevenz-rust2 · unrar'] },
    { group: 'Remote (Rust)', items: ['russh-sftp (vendored, patched)', 'suppaftp', 'ureq + roxmltree', 'aws-sdk-s3', 'tokio'] },
    { group: 'Bridge', items: ['UniFFI 0.32', 'Static library → XCFramework', 'Generated Swift bindings'] },
    { group: 'UI (Swift)', items: ['AppKit', 'NSTableView', 'NSSplitView', 'XcodeGen'] },
    { group: 'Quality', items: ['cargo test', 'clippy -D warnings', 'Scripted UI smoke suite', 'GitHub Actions on macOS 26'] },
  ],

  architecture: {
    intro:
      'One process, three layers. Rust owns every byte that touches a disk or a socket; Swift owns every pixel. UniFFI generates the boundary, so neither side hand-writes FFI.',
    columns: [
      {
        label: 'AppKit UI',
        nodes: [
          { title: 'Window & panes', detail: 'NSTableView, pulls rows on demand' },
          { title: 'Sheets & palettes', detail: 'Quick Open, Multi-Rename, Sync' },
        ],
      },
      {
        label: 'UniFFI bridge',
        nodes: [
          { title: 'rustyfinder-ffi', detail: 'Exported types and callbacks' },
          { title: 'Main-thread hop', detail: 'Rust calls back on background threads' },
        ],
      },
      {
        label: 'Rust core',
        nodes: [
          { title: 'Snapshot', detail: 'Immutable, paged, lazily enriched' },
          { title: 'Watcher', detail: 'FSEvents + kqueue' },
          { title: 'Copy engine', detail: 'Queue, partials, throttle' },
        ],
      },
      {
        label: 'Filesystems',
        nodes: [
          { title: 'Vfs trait', detail: 'Local · archive · SFTP · FTP · DAV · S3' },
          { title: 'Network guard', detail: '15 s ceiling on hung mounts' },
        ],
      },
    ],
    notes: [
      'Every filesystem implements a blocking Vfs trait. Network backends run their own tokio runtime and block on it, which keeps async out of the rest of the core.',
      'Moving the UniFFI binding generator into its own crate took the static library from 61 MB to 10 MB.',
    ],
  },

  challenges: [
    {
      title: 'A folder of 100,000 files',
      problem: 'Handing a large listing across an FFI boundary in one piece is slow, and re-sorting it copies everything again.',
      solution:
        'A listing becomes an immutable, reference-counted snapshot that Swift never holds directly. The table pulls rows in pages of 256 and caches at most 48 pages. Re-sorting builds a new index order over the same entries, and costly attributes — date added, tags — are read once, the first time a view needs them. Sorting by date added dropped from 1.6 s to 0.28 s.',
      where: 'crates/rustyfinder-core/src/snapshot.rs',
    },
    {
      title: 'Noticing when the folder itself disappears',
      problem:
        'FSEvents reports changes inside a folder but stays silent when the folder you are looking at is deleted, renamed or unmounted — leaving a pane showing a directory that no longer exists.',
      solution:
        'Two sources feed one callback: FSEvents for the children, and a kqueue vnode watch on the folder itself. Events are filtered to direct children, so a write deep in ~/Library does not reload your home folder, and load generations drop results that arrive after you have moved on.',
      where: 'crates/rustyfinder-core/src/watch.rs · pane.rs',
    },
    {
      title: 'A copy engine you can trust with your files',
      problem: 'File managers lose data at the edges: overwrites, interrupted moves, symlinks that point somewhere unexpected.',
      solution:
        'Nothing is overwritten without consent. A replaced file survives until its replacement is fully written, symlinks are never followed, and a move deletes its source only after the copy has succeeded. Stopped transfers resume after a relaunch.',
      where: 'src/ops/engine.rs · partials.rs · throttle.rs',
    },
    {
      title: 'SFTP that respects your ssh config',
      problem: 'Pure-Rust SSH clients ignore ~/.ssh/config, ProxyJump and the agent — the setup power users actually rely on.',
      solution:
        'SFTP runs over the system’s own ssh. An askpass helper relays password and host-key prompts back into the app over a Unix socket, and a patch to the vendored SFTP crate round-trips non-UTF-8 filenames through private-use codepoints instead of mangling them.',
      where: 'crates/rustyfinder-remote/src/sftp.rs · askpass.rs',
    },
  ],

  code: {
    title: 'Two watchers, one callback',
    lang: 'rust',
    file: 'crates/rustyfinder-core/src/watch.rs',
    href: 'https://github.com/daniel3606/rustyfinder/blob/main/crates/rustyfinder-core/src/watch.rs',
    note: 'Either source alone misses a class of change, so the watcher only fails if both do.',
    code: `//! Two sources feed the same callback, because neither is enough alone:
//! - FSEvents (via \`notify\`) reports content and metadata changes of the
//!   children, but stays silent when the watched folder itself is deleted,
//!   renamed or unmounted.
//! - A kqueue vnode watch on the folder reports exactly that, plus entries
//!   being added or removed, but not changes inside existing files.

impl DirWatcher {
    pub fn new(dir: &str, on_change: impl Fn() + Send + Sync + 'static) -> Option<Self> {
        let on_change: Arc<dyn Fn() + Send + Sync> = Arc::new(on_change);
        let vnode = VnodeWatch::new(dir, Arc::clone(&on_change));
        let events = Self::fs_events(dir, on_change);
        if vnode.is_none() && events.is_none() {
            return None;
        }
        Some(Self { _watcher: events, _vnode: vnode })
    }
}

fn concerns(path: &Path, roots: &[PathBuf]) -> bool {
    roots.iter().any(|root| path == root || path.parent() == Some(root.as_path()))
}`,
  },

  process: [
    'The build was spec-first: 24 behaviour specs describe exactly what each feature should do, and the implementation followed them strictly, milestone by milestone (M1 through M8).',
    'Each milestone had to pass the Rust suite, clippy with warnings as errors, and a scripted UI suite that drives the real app in-process — feeding key presses, dumping pane state and drawing the window to a PNG — so it runs without Screen Recording permission or a display.',
    'Remote backends are tested against scripted FTP, WebDAV and S3 servers shipped as examples in the crate, plus a throwaway local sshd.',
  ],

  outcome: {
    now: 'v0.1.0 is public on GitHub as a 10 MB ad-hoc-signed build for Apple silicon. It is not notarized yet.',
    lessons: [
      'Specs first is what kept a 35k-line codebase reviewable. When the code disagreed with the spec, the spec decided.',
      'A UI you can drive from the command line is worth building early. The smoke suite caught regressions no unit test could see.',
    ],
    next: ['Notarized, universal build', 'Verify FTPS, WebDAV over TLS and SMB against real servers', 'Large remote folders'],
  },
};
