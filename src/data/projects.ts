export type ProjectSlug = 'english-quest' | 'fluent' | 'webgl-game';

export interface EngineeringChallenge {
  title: string;
  problem: string;
  decision: string;
  result: string;
}

export interface ArchitectureLane {
  title: string;
  description: string;
  nodes: string[];
  optional?: boolean;
}

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
  heroImage?: string;
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
  futureAiDirection?: string;
  nextSteps: string[];
  videoSlot?: { path: string; caption: string };
  repositoryUrl?: string;
  architectureUrl?: string;
  status?: string;
  myRole?: string[];
  technicalHighlights?: string[];
  tradeoffs?: string[];
  engineeringChallenges?: EngineeringChallenge[];
  architectureFlow?: ArchitectureLane[];
  currentCapabilities?: string[];
  plannedDirection?: string[];
  boundaries?: string[];
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'english-quest',
    id: 1,
    title: 'English Quest',
    subtitle: 'Educational Unity Slice with Optional Multiplayer',
    shortDescription:
      'A playable educational slice that turns three English activities into a guided quest chain inside one open-world scene. The core learning flow works solo; Fusion adds two-player presence without taking ownership of quest progression.',
    heroDescription:
      'English Quest is a Unity vertical slice built around a complete Ada to Ben to Nora quest chain, three educational mini-games, and an optional Photon Fusion Shared Mode layer for two players.',
    summary:
      'The engineering focus is predictable local progression: authored quest data feeds an event-driven runtime, while networking owns presence, spawning, input, and camera binding rather than the learning state.',
    stack: ['Unity', 'C#', 'Photon Fusion', 'Shared Mode', 'Cinemachine 3', 'ScriptableObject', 'Custom Editor Tools'],
    accent: '#00F0FF',
    heroImage: '/images/case-studies/english-quest/hero.webp',
    gallery: [
      '/images/case-studies/english-quest/gallery-1.webp',
      '/images/case-studies/english-quest/gallery-2.webp',
      '/images/case-studies/english-quest/gallery-3.webp',
      '/images/case-studies/english-quest/gallery-4.webp',
      '/images/case-studies/english-quest/gallery-5.webp',
      '/images/case-studies/english-quest/gallery-6.webp',
      '/images/case-studies/english-quest/gallery-7.webp',
    ],
    tags: ['Unity', 'Photon Fusion', 'Educational Gameplay', 'Vertical Slice'],
    technicalHighlights: ['Photon Fusion', 'Data-Driven Quests', 'Ownership-Safe Multiplayer', 'Editor Tooling'],
    quickFacts: [
      { label: 'Playable scope', value: 'One open-world vertical slice' },
      { label: 'Quest chain', value: 'Ada -> Ben -> Nora' },
      { label: 'Learning content', value: 'Three educational mini-games' },
      { label: 'Multiplayer', value: 'Two-player Fusion Shared Mode' },
      { label: 'Progress ownership', value: 'Local quest state per player' },
    ],
    whatIDid: [
      'Designed and implemented the gameplay architecture and data-driven quest pipeline.',
      'Integrated Fusion Shared Mode, player spawning, ownership-safe input, and local camera binding.',
      'Built the runner-aware camera collision path for Fusion Multi-Peer physics scenes.',
      'Created editor tooling for scene validation, rebuilding, and scene-authored HUD maintenance.',
    ],
    myRole: [
      'Gameplay architecture and runtime composition',
      'Quest pipeline, objective events, and unlock flow',
      'Photon Fusion integration and ownership boundaries',
      'Local-player camera and input infrastructure',
      'Editor validation and scene maintenance tools',
    ],
    challenge:
      'The slice needed to preserve a clear educational flow while supporting a second networked player without turning local quest state into shared co-op progression.',
    approach:
      'Quest content is authored through ScriptableObjects and composed explicitly in the scene. Mini-games publish objective events, the local quest runtime owns progression, and Fusion remains a separate presence layer.',
    architecture: [
      'ScriptableObject data defines quest lines, lesson order, dialogue configuration, and mini-game bindings.',
      'An explicit composition root wires the scene-authored runtime and presentation objects.',
      'Objective events decouple mini-game completion from the quest state machine.',
      'UnityServiceLocator is intentionally limited to a boundary for decoupled runtime contracts.',
      'Scene-authored HUD and prefab-driven UI keep presentation visible and maintainable in the editor.',
      'Validation tools check the authored scene and help rebuild or materialize required objects.',
    ],
    architectureFlow: [
      { title: 'Authored data', description: 'Editor-owned configuration', nodes: ['Quest lines', 'Dialogue config', 'Mini-game bindings'] },
      { title: 'Solo runtime', description: 'The authoritative learning flow', nodes: ['Interaction', 'Dialogue + player lock', 'Mini-game bootstrap', 'Objective events', 'Local quest state', 'NPC unlock + HUD'] },
      { title: 'Optional multiplayer', description: 'Presence without shared quest progression', nodes: ['Fusion session', 'Spawn + ownership', 'Local input + camera', 'Remote presence + status'], optional: true },
      { title: 'Study Circle', description: 'Optional shared world moment; not required by the core quest chain', nodes: ['Shared world trigger', 'Optional group moment'], optional: true },
    ],
    uxNotes: [
      'Solo-first flow keeps the lesson chain available when no second player joins.',
      'Scene-authored UI improves editor visibility but requires validation to protect serialized references.',
      'Local quest ownership avoids synchronization complexity at the cost of shared co-op progression.',
      'The optional Study Circle creates a shared moment without becoming an MVP dependency.',
    ],
    tradeoffs: [
      'Local quest state keeps each learner independent, so the current build does not synchronize quest completion between players.',
      'Scene-authored presentation is transparent in the editor, but serialized scene links need explicit validation tooling.',
      'The limited Service Locator reduces coupling at runtime boundaries without replacing direct references throughout the project.',
      'Multiplayer is deliberately a presence layer; tightly coupled cooperative objectives are outside the current slice.',
    ],
    details: [],
    engineeringChallenges: [
      {
        title: 'Fusion Multi-Peer camera collision',
        problem: 'A camera query can hit the wrong physics scene or collide with the local network hierarchy in Multi-Peer testing.',
        decision: 'Run collision queries against the active runner physics scene and exclude the locally owned NetworkObject hierarchy.',
        result: 'Cinemachine Third Person Follow keeps wall collision aligned with the correct local player context.',
      },
      {
        title: 'Independent quest progression',
        problem: 'Shared network presence could accidentally imply or force shared educational progress.',
        decision: 'Keep quest state local and give Fusion responsibility for session presence, spawning, and ownership only.',
        result: 'Two players can share the scene while completing the Ada, Ben, and Nora chain independently.',
      },
      {
        title: 'Decoupled mini-game completion',
        problem: 'Direct mini-game calls into the quest state machine would tightly couple lesson content to progression code.',
        decision: 'Publish completion through objective events consumed by the quest runtime.',
        result: 'Line Match, Letter Ordering, and Word Ordering can report outcomes through one progression boundary.',
      },
      {
        title: 'Scene reliability',
        problem: 'Scene-authored HUD and composition objects are readable in the editor but vulnerable to broken serialized setup.',
        decision: 'Add editor validation, rebuild, and HUD materialization tools around the authored scene.',
        result: 'Maintenance checks can surface missing bindings before they become hidden runtime failures.',
      },
    ],
    outcome:
      'The verified slice completes the Ada to Ben to Nora sequence with all three mini-games in solo runtime. The implemented multiplayer layer supports two-player Shared Mode presence with ownership-safe local input and camera binding.',
    nextSteps: [],
    boundaries: [
      'Quest progress is local per player and is not synchronized.',
      'Multiplayer adds presence rather than mandatory cooperative progression.',
      'Study Circle is optional and does not gate the main quest chain.',
      'The portfolio scope is one authored open-world slice, not a complete game.',
    ],
    repositoryUrl: 'https://github.com/kirillmakarov-dev/English-Quest-Online',
    architectureUrl: 'https://github.com/kirillmakarov-dev/English-Quest-Online/blob/main/Assets/_PortfolioSlice/Docs/Architecture.md',
    videoSlot: {
      path: '/videos/case-studies/english-quest/english-quest-demo.mp4',
      caption: 'Gameplay capture of the authored world, quest interactions, learning activities, and two-player presence.',
    },
  },
  {
    slug: 'fluent',
    id: 2,
    title: 'Fluent',
    subtitle: 'Local Speech-Practice Prototype',
    shortDescription:
      'A Unity speech-practice prototype that records microphone input, transcribes it through a local Whisper service, and returns a transparent heuristic practice estimate against authored lesson content.',
    heroDescription:
      'Fluent explores a local-first speech workflow in Unity: microphone and model selection, scene-owned UI, local transcription, lesson-driven practice, and saved progress without a required cloud transcription service.',
    summary:
      'The current scorer is intentionally bounded. It estimates transcript similarity for practice and is not a phoneme, stress, accent, or clinical pronunciation assessment.',
    stack: ['Unity', 'C#', 'Whisper', 'ScriptableObject', 'Scene-Owned UI', 'Edit Mode Tests'],
    accent: '#FF00A0',
    heroImage: '/images/case-studies/fluent/hero.jpg',
    gallery: [
      '/images/case-studies/fluent/hero.jpg',
      '/images/case-studies/fluent/gallery-1.jpg',
      '/images/case-studies/fluent/gallery-2.jpg',
      '/images/case-studies/fluent/gallery-3.jpg',
      '/images/case-studies/fluent/gallery-4.jpg',
      '/images/case-studies/fluent/gallery-5.jpg',
    ],
    tags: ['Local Speech Recognition', 'Unity', 'Whisper', 'Privacy Boundary'],
    technicalHighlights: ['Local Whisper', 'Scene-Owned UI', 'ScriptableObject Lessons', 'Transparent Scoring'],
    quickFacts: [
      { label: 'Transcription', value: 'Local Whisper service' },
      { label: 'Content', value: 'ScriptableObject lesson catalog' },
      { label: 'Profiles', value: 'Fast, Balanced, and Accurate trade-off presets' },
      { label: 'Persistence', value: 'Saved practice progress' },
      { label: 'Coverage', value: 'Edit Mode tests for core settings and logic' },
    ],
    whatIDid: [
      'Built the microphone-to-local-transcription practice flow.',
      'Separated presenter, domain, services, and authored lesson content.',
      'Implemented model profiles, saved progress, heuristic scoring, and edit-mode coverage.',
    ],
    myRole: [
      'Speech-practice flow and Unity integration',
      'Presenter, domain, and service boundaries',
      'Scene-owned UI binding and authored lesson catalog',
      'Whisper configuration profiles and validation tests',
    ],
    challenge:
      'Speech interaction needs clear recording and processing states, while recognition behaviour varies with model choice, input quality, and clip duration.',
    approach:
      'The prototype uses scene-authored presentation over separated runtime services. Three model profiles expose practical latency and recognition trade-offs instead of implying that one profile is universally best.',
    currentCapabilities: [
      'Local Whisper transcription from microphone input',
      'Microphone and model-profile selection',
      'Scene-owned UI with presenter-driven state changes',
      'ScriptableObject lesson catalog and saved progress',
      'Heuristic transcript-based practice estimate',
      'Edit Mode coverage for core configuration and scoring behaviour',
    ],
    architecture: [
      'Scene-owned UI keeps the presentation hierarchy inspectable and explicit.',
      'Presenter, domain, services, and lesson content have separate responsibilities.',
      'ScriptableObject assets define lesson content and Whisper model profiles.',
      'Progress persistence remains separate from transcription and scoring services.',
    ],
    uxNotes: [
      'Fast, Balanced, and Accurate profiles trade latency, resource use, and recognition behaviour; they are not a simple quality ladder.',
      'Local processing improves the privacy boundary but depends on available hardware and model setup.',
      'Transcript similarity is understandable and testable, but it cannot diagnose phonemes, stress, or accent quality.',
    ],
    tradeoffs: [
      'Model profiles expose different latency and recognition behaviour rather than promising one universally superior setting.',
      'Local transcription avoids a required cloud speech service but places model and compute requirements on the device.',
      'The heuristic score is transparent and useful for repetition, but it is not phoneme-, stress-, or accent-level assessment.',
    ],
    details: [
      'The UI remains authored in the scene while presenters bind runtime state to the existing hierarchy.',
      'Lesson content and profile configuration are assets rather than hard-coded screen data.',
      'Edit Mode tests cover core configuration and scoring behaviour; microphone and model runtime still require device-level validation.',
    ],
    outcome:
      'The current prototype demonstrates a complete local transcription practice loop with explicit UI states, authored lessons, saved progress, and honestly bounded scoring.',
    futureAiDirection:
      'Future work may explore deeper coaching, but it is not part of the current implementation.',
    plannedDirection: [
      'AI-assisted coaching with richer feedback',
      'Optional cloud scoring experiments',
      'Conversational speaking practice',
      'Generated practice scenarios',
    ],
    nextSteps: [],
    boundaries: [
      'The scorer does not assess individual phonemes, stress, or accent quality.',
      'Recognition results depend on model profile, microphone quality, and usable clip duration.',
      'Planned coaching and conversational features are not present in the current build.',
    ],
    videoSlot: {
      path: '/videos/case-studies/fluent/fluent-demo.mp4',
      caption: 'Current prototype flow from microphone input to local transcription and practice review.',
    },
  },
  {
    slug: 'webgl-game',
    id: 3,
    title: '2D WebGL Game',
    subtitle: 'Source Project Selection Pending',
    status: 'Case Study In Preparation',
    shortDescription:
      'A reserved case-study route for a future 2D Unity WebGL project. Technical claims will be added only after the source project is selected and audited.',
    heroDescription:
      'This page intentionally remains incomplete. No source project has been selected, so implementation details, performance claims, and optimization results are not presented as current evidence.',
    summary:
      'The final case study will be based on inspected Unity source, build configuration, and reproducible browser validation.',
    stack: [],
    accent: '#39FF14',
    gallery: [],
    tags: ['WebGL', 'Source Audit Pending'],
    technicalHighlights: ['Case Study In Preparation'],
    quickFacts: [
      { label: 'Status', value: 'Source project not yet selected' },
      { label: 'Claims', value: 'Deferred until code and build audit' },
      { label: 'Media', value: 'Not yet available' },
    ],
    whatIDid: [],
    challenge:
      'A credible WebGL case study requires a specific project, verified source, and browser evidence.',
    approach:
      'Select the real Unity project first, then document implementation ownership, platform constraints, and measured results from evidence.',
    architecture: [],
    uxNotes: [],
    details: ['No gameplay, architecture, performance, asset-budget, or optimization claims are made before the source audit.'],
    outcome: 'Current status: case-study structure reserved; implementation evidence not yet available.',
    nextSteps: [],
    boundaries: [
      'No source project is currently attached to this case study.',
      'No performance or optimization claims have been verified.',
      'Technical highlights and media will follow a source and browser audit.',
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
