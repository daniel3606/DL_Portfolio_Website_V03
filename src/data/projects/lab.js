/* Smaller builds and experiments. Rows only — no case-study page. Each line
   says what the thing does and the one technically interesting part of it. */

export const lab = [
  {
    slug: 'dleditor',
    name: 'DLEditor',
    tier: 'lab',
    kind: 'macOS app',
    year: '2026',
    summary: 'A short-form video editor where you edit the transcript and the cut follows. One AVFoundation composition drives both preview and export, including music that ducks under detected speech.',
    tech: ['Swift', 'AVFoundation', 'WhisperKit'],
    links: [],
  },
  {
    slug: 'korean-txt-to-kindle',
    name: 'Korean TXT to Kindle',
    tier: 'lab',
    kind: 'Desktop app',
    year: '2026',
    summary: 'Turns Korean .txt books into Kindle-ready EPUBs. Detects the encoding — UTF-8, UTF-16 or the legacy CP949 and EUC-KR — splits chapters, and writes the EPUB archive by hand.',
    tech: ['Electron', 'TypeScript', 'Vitest'],
    links: [],
  },
  {
    slug: 'slidedrop',
    name: 'SlideDrop',
    tier: 'lab',
    kind: 'Web tool',
    year: '2026',
    summary: 'A browser-only maker for vertical slideshow posts. One canvas renderer draws the preview, the thumbnails and the export, so what you see is always what you get.',
    tech: ['React', 'Canvas', 'TypeScript'],
    links: [],
  },
  {
    slug: 'spectacles-face-capture',
    name: 'Spectacles Face Capture',
    tier: 'lab',
    kind: 'AR prototype',
    year: '2026',
    summary: 'A Lens for Snap Spectacles that captures faces when they enter view and streams them over WebSocket to a Node server and a React viewer; on-device matching by cosine similarity is prototyped but not wired to a model.',
    tech: ['Lens Studio', 'TypeScript', 'Node.js'],
    links: [{ label: 'Source', href: 'https://github.com/daniel3606/Spectacles_Face_Recongizer', kind: 'repo' }],
  },
];
