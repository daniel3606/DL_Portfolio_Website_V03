import recaps from '../../assets/work/daylog/recaps.webp';
import talkDark from '../../assets/work/daylog/talk-dark.webp';
import talkLight from '../../assets/work/daylog/talk-light.webp';
import recap from '../../assets/work/daylog/recap.webp';
import recapTop from '../../assets/work/daylog/recap-top.webp';
import history from '../../assets/work/daylog/history.webp';
import transcript from '../../assets/work/daylog/transcript.webp';
import settings from '../../assets/work/daylog/settings.webp';
import { shot } from './shot.js';

const d = (src, alt) => shot(src, 720, 1565, alt);

export default {
  slug: 'daylog',
  name: 'DayLog',
  mascot: 'phone',
  tier: 'more',
  kind: 'iOS app',
  year: '2026',
  period: 'Sep 2026',
  status: { label: 'Working prototype', tone: 'prototype' },
  summary: 'A voice journal: talk to it during the day, and each night the conversation becomes a written recap.',
  hook: 'Real-time duplex audio with barge-in, over a streaming WebSocket protocol.',
  tech: ['Swift 6', 'AVAudioEngine', 'WebSockets', 'Bun'],
  theme: { tint: '#e9e9e7', tintDark: '#161616' },

  cover: {
    layout: 'phones',
    screens: [
      d(recaps, 'Recaps: a grid of days'),
      d(talkDark, 'Talk: a white orb that follows the audio level'),
      d(recapTop, 'A written recap with summary, highlights and decisions'),
    ],
  },

  links: [],
  repoNote: 'Private repository. Screens captured in the simulator with the app’s built-in sample data.',

  facts: [
    { label: 'Role', value: 'Solo' },
    { label: 'Timeline', value: 'Sep 2026' },
    { label: 'Platform', value: 'iOS 18+' },
    { label: 'Backend', value: 'Bun + TypeScript proxy' },
  ],

  overview: {
    problem: 'Journaling apps ask for writing at the end of a day, which is exactly when nobody wants to write.',
    solution:
      'DayLog is a voice conversation you can have in a spare minute. You talk, it talks back, and at night everything you said that day is turned into a structured recap — summary, highlights, decisions, what you mentioned, and what is next.',
    role: 'I built the iOS app, the audio engine, the streaming client and the server proxy that keeps the API key off the device.',
  },

  numbers: [
    { value: '16 kHz', label: 'mic capture, played back at 24 kHz' },
    { value: '7', label: 'XCTest suites, plus a protocol-faithful fake server' },
  ],

  features: [
    { title: 'Barge-in', body: 'Speak over the reply and it stops. Voice processing cancels the app’s own output so the mic hears only you.' },
    { title: 'Turn detection', body: 'An energy-based detector against an adaptive noise floor that falls fast and rises slowly, with a separate 16 dB threshold while the app is speaking.' },
    { title: 'Resumable sessions', body: 'The WebSocket client keeps session-resumption handles and reconnects when the server announces it is going away.' },
    { title: 'Nightly recaps', body: 'A background task finds days with new conversations since their last recap and writes them, stopping at the first failure.' },
  ],

  gallery: [
    { ...d(talkLight), frame: 'phone', caption: 'Talk. The orb tracks what is audible now, not what was queued.' },
    { ...d(history), frame: 'phone', caption: 'History of conversations, by day.' },
    { ...d(transcript), frame: 'phone', caption: 'The transcript a recap is written from.' },
    { ...d(recap), frame: 'phone', caption: 'A recap, stored as one Markdown file per day.' },
    { ...d(settings), frame: 'phone', caption: 'Recap time, voice, export and local data.' },
  ],

  stack: [
    { group: 'App', items: ['Swift 6', 'SwiftUI', 'Swift actors for storage', 'BackgroundTasks', 'XcodeGen'] },
    { group: 'Audio', items: ['AVAudioEngine', 'Voice processing I/O', 'PCM16 streaming'] },
    { group: 'Server', items: ['Bun', 'TypeScript', 'WebSocket relay', 'bun test'] },
  ],

  architecture: {
    intro: 'The phone never holds a model key. It streams audio to a small proxy that authenticates the app, pins the model and relays the session.',
    columns: [
      { label: 'iPhone', nodes: [{ title: 'Audio engine', detail: 'Capture, playback, echo cancel' }, { title: 'Turn detector', detail: 'Adaptive-floor VAD' }] },
      { label: 'Session', nodes: [{ title: 'Live client', detail: 'WebSocket, resumable' }] },
      { label: 'Proxy', nodes: [{ title: 'Bun server', detail: 'Token auth, key, model pin' }] },
      { label: 'Recaps', nodes: [{ title: 'Recap pipeline', detail: 'Background task, Markdown files' }] },
    ],
  },

  challenges: [
    {
      title: 'An orb that matches what you hear',
      problem: 'Audio is queued ahead of playback, so animating to the buffer made the orb pulse before the voice arrived.',
      solution: 'The output level follows a playback timeline — what is audible now — rather than what was most recently scheduled, and the raw level is smoothed before it scales the circle.',
      where: 'Services/Voice/VoiceAudioEngine.swift',
    },
    {
      title: 'Testing a protocol without a model',
      problem: 'Resumption and reconnect paths only happen when the server decides to go away, which you cannot schedule against a real service.',
      solution: 'The proxy ships with a protocol-faithful fake, including a setting that sends GOAWAY on demand, so reconnection is a test case instead of a hope.',
      where: 'backend/src/fake-gemini.ts',
    },
  ],

  outcome: {
    now: 'A working prototype that runs end to end against mock, loopback and live voice backends. Not released.',
    lessons: ['Most of the work in a voice app is the audio pipeline, not the model.'],
    next: ['Device testing across Bluetooth routes', 'TestFlight'],
  },
};
