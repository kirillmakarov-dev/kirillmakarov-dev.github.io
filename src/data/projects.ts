export type ProjectSlug = 'english-quest' | 'fluent' | 'webgl-game';

export interface ProjectCaseStudy {
  slug: ProjectSlug;
  id: number;
  title: string;
  subtitle: string;
  shortDescription: string;
  heroDescription: string;
  summary: string;
  stack: string[];
  accent: string;
  heroImage: string;
  gallery: string[];
  tags: string[];
  quickFacts: Array<{ label: string; value: string }>;
  whatIDid: string[];
  challenge: string;
  approach: string;
  architecture: string[];
  uxNotes: string[];
  details: string[];
  outcome: string;
  nextSteps: string[];
  videoSlot?: {
    path: string;
    caption: string;
  };
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'english-quest',
    id: 1,
    title: 'English Quest',
    subtitle: 'Multiplayer Educational RPG MVP',
    shortDescription:
      'A learning RPG MVP that combines quest flow, optional multiplayer, and guided practice loops so players can progress through English activities without losing the game feel.',
    heroDescription:
      'English Quest is the most product-like of the three headline projects. It presents a solo-first educational RPG where the core loop is built around structured quests, clear feedback, and reusable lesson states, with optional multiplayer support rather than multiplayer dependency.',
    summary:
      'A solo-first educational RPG MVP that uses quest flow, progression, and session-based play to turn English practice into a guided and repeatable game loop.',
    stack: ['Unity', 'C#', 'Photon Fusion', 'Firebase Auth', 'Unity Cloud Save', 'UniTask', 'Service Locator', 'ScriptableObjects'],
    accent: '#00F0FF',
    heroImage: '/images/project-2.jpg',
    gallery: ['/images/project-2.jpg', '/images/project-1.jpg', '/images/project-4.jpg'],
    tags: ['Unity', 'Multiplayer', 'Education', 'MVP'],
    quickFacts: [
      { label: 'Focus', value: 'Quest flow and progression' },
      { label: 'System', value: 'Photon Fusion Shared Mode with solo-first unlocks' },
      { label: 'UX', value: 'Fast feedback and repeatable lesson sessions' },
    ],
    whatIDid: [
      'Designed the core MVP loop around onboarding, quest flow, and repeatable practice sessions.',
      'Structured the multiplayer layer so one player can always progress independently while co-op remains optional.',
      'Shaped the feedback model so players always understand what changed after each action.',
    ],
    challenge:
      'The main challenge was keeping the learning flow understandable while still feeling like an RPG and not a worksheet, while also keeping solo progression independent from co-op availability.',
    approach:
      'I shaped the interaction around short quest beats, clear progression, and multiplayer states that stay visible without overwhelming the learner. The architecture uses service-driven systems, quest-line registries, and ScriptableObject-backed content so the learning path stays predictable.',
    architecture: [
      'Quest states drive the player journey from onboarding to completion.',
      'Photon Fusion Shared Mode coordinates optional multiplayer without blocking solo missions.',
      'Firebase Authentication and Unity Cloud Save support identity and persistent progress.',
      'UniTask keeps async flows light for loading, session transitions, and UI updates.',
      'A custom Service Locator keeps systems decoupled and easy to wire in the inspector.',
      'Lesson content is organized through ScriptableObjects so the quest chain stays editable.',
    ],
    uxNotes: [
      'Use immediate feedback after each action so the student always knows what changed.',
      'Keep menu depth shallow and let quest flow carry the experience forward.',
      'Favor readable success states over noisy effects in learning moments.',
      'Make solo progression obvious so players never feel blocked by the social layer.',
    ],
    details: [
      'The game is positioned as a learning product, so each screen has to answer a simple question: what should the player do next?',
      'The multiplayer layer exists to support shared sessions and synchronized progress, not to dominate the experience.',
      'The MVP framing is useful because it shows product judgment: the system can be expanded, but the first version is already understandable.',
      'The solo-first quest chain is important because it proves the learning loop works even before another player joins.',
      'The portfolio version should present this as a systems case study, not as an asset dump.',
    ],
    outcome:
      'The result is a portfolio piece that clearly communicates educational intent, multiplayer structure, and a production-minded approach to gameplay.',
    nextSteps: [
      'Add a short vertical slice video or GIF for onboarding and quest completion.',
      'Show the quest-state diagram if you want to make the architecture even more explicit.',
      'Include one screenshot focused on teacher/admin controls if those exist later.',
    ],
    videoSlot: {
      path: '/videos/case-studies/english-quest/english-quest-demo.mp4',
      caption: 'Drop a short MP4 here for the English Quest demo reel.',
    },
  },
  {
    slug: 'fluent',
    id: 2,
    title: 'Fluent',
    subtitle: 'Local Speech Recognition and Pronunciation Analysis',
    shortDescription:
      'An offline-first speech practice experience focused on fast microphone capture, clear pronunciation feedback, and privacy-friendly processing.',
    heroDescription:
      'Fluent is the most UX-heavy of the three main projects. It focuses on local speech recognition, pronunciation analysis, and a practice flow that feels calm, fast, and trustworthy.',
    summary:
      'A private, offline speech-practice app that uses local Whisper transcription and honest scoring to coach pronunciation without cloud dependency.',
    stack: ['Unity', 'Whisper', 'C#', 'ScriptableObjects', 'Scene-owned UI'],
    accent: '#FF00A0',
    heroImage: '/images/case-studies/fluent/hero.jpg',
    gallery: [
      '/images/case-studies/fluent/hero.jpg',
      '/images/case-studies/fluent/gallery-1.jpg',
      '/images/case-studies/fluent/gallery-2.jpg',
      '/images/case-studies/fluent/gallery-3.jpg',
      '/images/case-studies/fluent/gallery-4.jpg',
    ],
    tags: ['Speech', 'UX', 'Local', 'Analysis'],
    quickFacts: [
      { label: 'Focus', value: 'Local speech analysis loop' },
      { label: 'System', value: 'Microphone capture and response states' },
      { label: 'UX', value: 'Low-friction practice and clear cues' },
    ],
    whatIDid: [
      'Built the offline speech-practice loop around local Whisper transcription.',
      'Separated presentation, domain, services, and content for maintainable iteration.',
      'Designed the result flow to explain confidence, word match, and rhythm without overclaiming phoneme scoring.',
    ],
    challenge:
      'Speech tools fail quickly when users cannot tell whether the app is listening, analyzing, or waiting for another attempt.',
    approach:
      'I would present the flow as a calm, state-driven practice loop with very clear visual transitions between recording, analyzing, and review.',
    architecture: [
      'Microphone capture needs stable states and predictable permission handling.',
      'Local processing keeps privacy concerns low and makes the loop feel responsive.',
      'Pronunciation analysis should surface actionable feedback, not just a score.',
      'The interface should encourage repetition without feeling heavy or clinical.',
    ],
    uxNotes: [
      'Make the listening state obvious with one dominant visual cue.',
      'Keep error messages friendly and actionable for repeated practice.',
      'Prioritize speed from recording to feedback so users stay in rhythm.',
    ],
    details: [
      'This project benefits from a very strong state model because speech interaction is subtle by nature and users need reassurance.',
      'The design should reduce hesitation: the user should instantly know when the microphone is active and when analysis is complete.',
      'Because the product is local-first, the privacy story is also a UX story; that should be visible in the copy and the structure of the page.',
    ],
    outcome:
      'The case study becomes a clear demonstration of product thinking, state clarity, and a calm interface for a potentially repetitive workflow.',
    nextSteps: [
      'Add a simple state timeline for idle, recording, analyzing, and review.',
      'Show one screen dedicated to pronunciation feedback details.',
      'Include a short note about local-first privacy and why it matters.',
    ],
    videoSlot: {
      path: '/videos/case-studies/fluent/fluent-demo.mp4',
      caption: 'Drop a short MP4 here for the Fluent demo reel.',
    },
  },
  {
    slug: 'webgl-game',
    id: 3,
    title: '2D WebGL Game',
    subtitle: 'Animation, Gameplay and Web Optimization',
    shortDescription:
      'A browser-ready action game tuned for WebGL constraints, smooth animation, and stable frame pacing on the open web.',
    heroDescription:
      'This project is the best place to show that the game can survive in a browser. The case study should lean into animation timing, readable action, and technical optimization, because that is where the product differentiation lives.',
    summary:
      'A 2D browser game built for WebGL delivery, focused on responsive controls, readable combat, and performance-aware animation.',
    stack: ['Unity', 'WebGL', 'C#', '2D Gameplay', 'Optimization'],
    accent: '#39FF14',
    heroImage: '/images/project-6.jpg',
    gallery: ['/images/project-6.jpg', '/images/project-1.jpg', '/images/project-5.jpg'],
    tags: ['WebGL', '2D', 'Optimization', 'Gameplay'],
    quickFacts: [
      { label: 'Focus', value: 'Browser-first gameplay' },
      { label: 'System', value: 'Animation and frame pacing' },
      { label: 'UX', value: 'Readable controls and combat beats' },
    ],
    whatIDid: [
      'Shaped the game for browser delivery and stable frame pacing.',
      'Tuned animation and combat readability so action stays easy to follow.',
      'Optimized the UX around performance constraints instead of treating them as an afterthought.',
    ],
    challenge:
      'The challenge is to keep the game feeling fast and polished without letting WebGL constraints damage responsiveness or visual readability.',
    approach:
      'I would frame this as a performance-aware action game where animation, input, and build optimization are all treated as part of the same experience.',
    architecture: [
      'Gameplay systems should be lightweight and keep update loops focused.',
      'Animation timing needs to support readable player actions and enemy responses.',
      'WebGL delivery requires careful attention to memory, assets, and loading behavior.',
      'The UI must stay legible even when the game gets visually dense.',
    ],
    uxNotes: [
      'Keep combat feedback immediate and easy to parse in motion.',
      'Use strong contrast and clear silhouettes in screenshots and in-game UI.',
      'Show performance choices as deliberate design decisions, not technical afterthoughts.',
    ],
    details: [
      'This project gives you the strongest opportunity to talk about optimization without sounding abstract.',
      'It also helps the site feel more balanced because it shows a different kind of technical depth from the speech and learning projects.',
      'The page should make it obvious that browser performance was a core part of the creative process, not a postscript.',
    ],
    outcome:
      'The case study presents a clean mix of animation craft, WebGL awareness, and gameplay UX under real platform constraints.',
    nextSteps: [
      'Add a small performance callout with frame budget or loading notes if you have them.',
      'Include a mini architecture diagram for input -> logic -> render.',
      'Show one screenshot that highlights how the UI stays readable in motion.',
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
