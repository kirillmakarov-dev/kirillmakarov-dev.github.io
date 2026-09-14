import type { ProjectSlug } from './projectSlugs';

export type { ProjectSlug } from './projectSlugs';

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
  projectType: string;
  period: string;
  status: string;
  cardContribution: string;
  shortDescription: string;
  heroDescription: string;
  summary: string;
  stack: string[];
  accent: string;
  heroImage?: string;
  gallery: string[];
  tags: string[];
  quickFacts: Array<{ label: string; value: string }>;
  architecture: string[];
  outcome: string;
  videoSlot?: { path: string; caption: string };
  repositoryUrl?: string;
  architectureUrl?: string;
  setupUrl?: string;
  myRole: string[];
  technicalHighlights?: string[];
  engineeringChallenges?: EngineeringChallenge[];
  architectureFlow?: ArchitectureLane[];
  currentCapabilities?: string[];
  plannedDirection?: string[];
  boundaries?: string[];
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'english-quest',
    id: 2,
    title: 'English Quest',
    subtitle: 'Educational Unity Slice with Optional Multiplayer',
    projectType: 'Personal vertical slice',
    period: '2026',
    status: 'Playable slice',
    cardContribution: 'Built the quest pipeline, three mini-game integrations, Fusion ownership flow, local-player camera path, and scene validation tools.',
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
    myRole: [
      'Gameplay architecture and runtime composition',
      'Quest pipeline, objective events, and unlock flow',
      'Photon Fusion integration and ownership boundaries',
      'Local-player camera and input infrastructure',
      'Editor validation and scene maintenance tools',
    ],
    architecture: [
      'ScriptableObjects define quest order, dialogue, and mini-game bindings; objective events report completion without direct quest-state calls.',
      'An explicit scene composition root wires gameplay and prefab-authored presentation, with service lookup limited to runtime contracts.',
      'Fusion owns session presence, spawning, input, and cameras while each player retains independent quest state.',
    ],
    architectureFlow: [
      { title: 'Authored data', description: 'Editor-owned configuration', nodes: ['Quest lines', 'Dialogue config', 'Mini-game bindings'] },
      { title: 'Solo runtime', description: 'The authoritative learning flow', nodes: ['Interaction', 'Dialogue + player lock', 'Mini-game bootstrap', 'Objective events', 'Local quest state', 'NPC unlock + HUD'] },
      { title: 'Optional multiplayer', description: 'Presence without shared quest progression', nodes: ['Fusion session', 'Spawn + ownership', 'Local input + camera', 'Remote presence + status'], optional: true },
      { title: 'Study Circle', description: 'Optional shared world moment; not required by the core quest chain', nodes: ['Shared world trigger', 'Optional group moment'], optional: true },
    ],
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
    ],
    outcome:
      'The verified slice completes the Ada to Ben to Nora sequence with all three mini-games in solo runtime. The implemented multiplayer layer supports two-player Shared Mode presence with ownership-safe local input and camera binding.',
    boundaries: [
      'Quest progress is local per player and is not synchronized.',
      'Multiplayer adds presence rather than mandatory cooperative progression.',
      'Study Circle is optional and does not gate the main quest chain.',
      'The portfolio scope is one authored open-world slice, not a complete game.',
    ],
    repositoryUrl: 'https://github.com/kirillmakarov-dev/English-Quest-Online',
    architectureUrl: 'https://github.com/kirillmakarov-dev/English-Quest-Online/blob/main/English%20Quest%20online/Assets/_PortfolioSlice/Docs/Architecture.md',
    setupUrl: 'https://github.com/kirillmakarov-dev/English-Quest-Online#running-the-project',
    videoSlot: {
      path: '/videos/case-studies/english-quest/english-quest-demo.mp4',
      caption: 'Gameplay capture of the authored world, quest interactions, learning activities, and two-player presence.',
    },
  },
  {
    slug: 'fluent',
    id: 4,
    title: 'Fluent',
    subtitle: 'Local Speech-Practice Prototype',
    projectType: 'Personal prototype',
    period: '2026',
    status: 'Working prototype',
    cardContribution: 'Built the microphone-to-transcription flow, local Whisper profiles, lesson data, saved progress, and transparent practice scoring.',
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
    myRole: [
      'Speech-practice flow and Unity integration',
      'Presenter, domain, and service boundaries',
      'Scene-owned UI binding and authored lesson catalog',
      'Whisper configuration profiles and validation tests',
    ],
    currentCapabilities: [
      'Local Whisper transcription from microphone input',
      'Microphone and model-profile selection',
      'Scene-owned UI with presenter-driven state changes',
      'ScriptableObject lesson catalog and saved progress',
      'Heuristic transcript-based practice estimate',
      'Edit Mode coverage for core configuration and scoring behaviour',
    ],
    architecture: [
      'Presenters bind the scene-authored UI to separate microphone, transcription, scoring, and progress services.',
      'ScriptableObjects define lessons and Whisper profiles without placing mutable practice state in content assets.',
      'Progress persistence remains independent from transcription and the bounded scoring heuristic.',
    ],
    outcome:
      'The current prototype demonstrates a complete local transcription practice loop with explicit UI states, authored lessons, saved progress, and honestly bounded scoring.',
    plannedDirection: [
      'AI-assisted coaching with richer feedback',
      'Optional cloud scoring experiments',
      'Conversational speaking practice',
      'Generated practice scenarios',
    ],
    engineeringChallenges: [
      {
        title: 'Make local processing understandable',
        problem: 'Recording, model loading, transcription, and scoring have different waiting and failure states.',
        decision: 'Expose the workflow through presenter-owned states while keeping microphone, transcription, and progress services separate.',
        result: 'The user can follow the path from recording to transcript and practice result without UI code owning speech logic.',
      },
      {
        title: 'Keep scoring claims honest',
        problem: 'Transcript similarity can look like pronunciation assessment even though it cannot evaluate phonemes, stress, or accent quality.',
        decision: 'Use a transparent heuristic estimate and state its limits directly in the product and case study.',
        result: 'The current feedback remains useful for repetition without overstating what the scorer measures.',
      },
      {
        title: 'Balance local model profiles',
        problem: 'Model choice changes latency, resource use, and recognition behaviour across different hardware and recordings.',
        decision: 'Provide Fast, Balanced, and Accurate profiles as explicit trade-offs rather than a universal quality ranking.',
        result: 'The prototype supports practical model selection while keeping device-dependent behaviour visible.',
      },
    ],
    boundaries: [
      'The scorer does not assess individual phonemes, stress, or accent quality.',
      'Recognition results depend on model profile, microphone quality, and usable clip duration.',
      'Planned coaching and conversational features are not present in the current build.',
    ],
    repositoryUrl: 'https://github.com/kirillmakarov-dev/Fluent-Echo',
    architectureUrl: 'https://github.com/kirillmakarov-dev/Fluent-Echo#architecture-at-a-glance',
    setupUrl: 'https://github.com/kirillmakarov-dev/Fluent-Echo#how-to-set-up-the-project',
    videoSlot: {
      path: '/videos/case-studies/fluent/fluent-demo.mp4',
      caption: 'Current prototype flow from microphone input to local transcription and practice review.',
    },
  },
  {
    slug: 'hurricane-emergency',
    id: 3,
    title: 'Hurricane Emergency',
    subtitle: 'Interactive Preparedness Simulation for WebGL',
    projectType: 'Personal prototype',
    period: '2026',
    status: 'Playable prototype',
    cardContribution: 'Built the reusable lesson flow, authored scenario model, plan validation, runtime assessment, and WebGL integration boundary.',
    shortDescription:
      'A 2D educational simulation that turns hurricane preparedness guidance into a complete decision-and-feedback loop. Learners select a scenario, build an action plan from correct choices and realistic distractors, then watch the selected sequence run in an animated scene.',
    heroDescription:
      'Hurricane Emergency is a Unity WebGL learning experience built around ten preparedness scenarios, data-authored lesson content, ordered plan validation, animated simulation modes, and runtime feedback.',
    summary:
      'The engineering focus is a reusable lesson pipeline: shared application flow owns navigation and assessment, while each scenario keeps control of its own animations, timing, and scene-specific behaviour.',
    stack: ['Unity 6', 'C#', 'WebGL', 'URP 2D', 'ScriptableObject', 'uGUI', 'Unity Test Framework'],
    accent: '#F6B73C',
    heroImage: '/images/case-studies/Hurricane-Emergency/Hurricane-Emergency.png',
    gallery: [
      '/images/case-studies/Hurricane-Emergency/Screenshot 2026-09-13 171316.png',
      '/images/case-studies/Hurricane-Emergency/Screenshot 2026-09-13 171409.png',
      '/images/case-studies/Hurricane-Emergency/Screenshot 2026-09-13 171538.png',
      '/images/case-studies/Hurricane-Emergency/Screenshot 2026-09-13 171709.png',
      '/images/case-studies/Hurricane-Emergency/Screenshot 2026-09-13 171801.png',
    ],
    tags: ['Unity', 'WebGL', 'Educational Simulation', 'Data-Driven Content'],
    technicalHighlights: ['10 Scenario Modes', 'Two-Stage Validation', 'Event-Driven Assessment', 'WebGL Bridge'],
    quickFacts: [
      { label: 'Learning scope', value: 'Ten hurricane-preparedness scenarios' },
      { label: 'Core interaction', value: 'Build, order, and simulate an action plan' },
      { label: 'Content model', value: 'ScriptableObject lesson catalog' },
      { label: 'Assessment', value: 'Plan validation plus runtime event evaluation' },
      { label: 'Platform', value: 'Unity WebGL with a JavaScript host bridge' },
    ],
    myRole: [
      'Application flow and simulation-mode architecture',
      'Lesson data, plan builder, and validation pipeline',
      'Runtime event assessment and user feedback states',
      'WebGL bridge and browser-host integration boundary',
      'Prefab-authored UI workflow, editor tools, and regression tests',
    ],
    currentCapabilities: [
      'Ten selectable preparedness lessons across home, supplies, shelter, garden, and post-storm cleanup',
      'Correct and distractor choices with explicit either-or relationships',
      'Ordered and order-independent lesson policies',
      'Animated execution of the learner-selected plan',
      'Live correct, incorrect, duplicate, and out-of-order feedback',
      'Unity-native flow with an optional JavaScript host integration path',
    ],
    architecture: [
      'Level definitions keep actions, distractors, ordering policies, and expected events outside the UI flow.',
      'The shared controller coordinates lesson selection and assessment while each simulation mode owns its scene-specific sequence.',
      'Plan validation, runtime event evaluation, and browser communication remain separate behind explicit contracts.',
    ],
    architectureFlow: [
      { title: 'Authored lesson data', description: 'Designer-editable educational content', nodes: ['Level catalog', 'Lesson definition', 'Rules + distractors', 'Expected events'] },
      { title: 'Application flow', description: 'One interaction pipeline for every lesson', nodes: ['Lesson selection', 'Briefing', 'Plan builder', 'Launch context', 'Result state'] },
      { title: 'Simulation runtime', description: 'Shared orchestration with mode-owned behaviour', nodes: ['Simulation manager', 'Mode factory', 'Scenario mode', 'Animator + coroutines'] },
      { title: 'Assessment boundary', description: 'Intent and execution are checked separately', nodes: ['Rule validator', 'Simulation events', 'Runtime evaluator', 'Live feedback'] },
      { title: 'WebGL integration', description: 'Browser-specific communication stays behind one bridge', nodes: ['WebGL bridge', 'C# event channel', 'JavaScript host'] },
    ],
    engineeringChallenges: [
      {
        title: 'One flow across ten scenarios',
        problem: 'Each lesson has different content and animation behaviour, but duplicating menu, rule, and result logic would make the experience difficult to maintain.',
        decision: 'Keep lesson data in ScriptableObjects and route every scenario through the same application flow and mode contract.',
        result: 'New lessons can reuse selection, briefing, validation, launch, feedback, and result states while preserving custom scene behaviour.',
      },
      {
        title: 'Validate decisions and execution',
        problem: 'Checking only the selected buttons would not prove that the animated sequence completed correctly.',
        decision: 'Validate the plan before launch, then evaluate meaningful simulation events during playback.',
        result: 'The system can report incorrect selections, ordering errors, duplicates, progress, and final completion through explicit states.',
      },
      {
        title: 'Isolate WebGL communication',
        problem: 'Browser callbacks could spread platform checks throughout gameplay and make Editor iteration dependent on a host page.',
        decision: 'Route browser calls through WebGLBridge and keep a safe internal C# event path for Editor and standalone use.',
        result: 'The same simulation flow can be developed in Unity and embedded in a larger web application through one controlled boundary.',
      },
    ],
    outcome:
      'The current repository and supplied capture show a complete lesson loop from scenario selection and plan construction to animated execution, live event feedback, and completion. Source coverage includes rule validation, ordered and unordered evaluation, lesson data, and exclusive choice behaviour.',
    boundaries: [
      'The portfolio presents an educational simulation prototype, not certified emergency guidance.',
      'The WebGL bridge expects host callbacks only when the build is embedded in the larger web application.',
      'Scenario visuals and timing remain authored per mode rather than generated from lesson data.',
    ],
    repositoryUrl: 'https://github.com/kirillmakarov-dev/Hurricane-Emergency-Simulation',
    architectureUrl: 'https://github.com/kirillmakarov-dev/Hurricane-Emergency-Simulation/blob/main/Hurricane-Emergency/ARCHITECTURE.md',
    videoSlot: {
      path: '/videos/case-studies/Hurricane-Emergency/Hurricane-Emergency video.mp4',
      caption: 'Portfolio capture of lesson selection, plan execution, live assessment, and the completed simulation flow.',
    },
  },
  {
    slug: 'everrealm-2d',
    id: 1,
    title: 'Everrealm',
    subtitle: '2D Action-Platformer Vertical Slice',
    projectType: 'Personal vertical slice',
    period: '2026',
    status: 'Active Development',
    cardContribution: 'Built the traversal, combat, loot, economy, profession progression, save flow, prefab UI, and supporting Editor tools.',
    shortDescription:
      'A Unity 6 action-platformer vertical slice combining responsive traversal, projectile combat, character progression, physical loot, trading, and a node-based skill tree in a frozen fantasy world.',
    heroDescription:
      'Everrealm is a local single-player vertical slice built around data-authored content, explicit gameplay contracts, prefab-first presentation, and custom Unity Editor tools.',
    summary:
      'The project demonstrates how a compact playable slice can keep movement, combat, progression, economy, persistence, and presentation independently maintainable while still forming one cohesive gameplay loop.',
    stack: ['Unity 6.3 LTS', 'C#', 'URP 2D', 'Physics2D', 'Input System', 'Cinemachine 3', 'ScriptableObject', 'Unity Test Framework'],
    accent: '#39FF14',
    heroImage: '/images/case-studies/Everrealm_2D_Platformer/Everrealm_2D_Platformer.png',
    gallery: [
      '/images/case-studies/Everrealm_2D_Platformer/gallery-1.webp',
      '/images/case-studies/Everrealm_2D_Platformer/gallery-2.webp',
      '/images/case-studies/Everrealm_2D_Platformer/gallery-3.webp',
      '/images/case-studies/Everrealm_2D_Platformer/gallery-4.webp',
      '/images/case-studies/Everrealm_2D_Platformer/gallery-5.webp',
      '/images/case-studies/Everrealm_2D_Platformer/gallery-6.webp',
    ],
    tags: ['Unity 2D', 'Action Platformer', 'Gameplay Architecture', 'Save + Progression'],
    technicalHighlights: ['Projectile Combat', 'Data-Driven Skills', 'Transactional Progression', 'Editor Tooling'],
    quickFacts: [
      { label: 'Scope', value: 'Playable portfolio vertical slice' },
      { label: 'World', value: 'One main level plus focused debug scenes' },
      { label: 'Combat', value: 'Projectile attacks and data-driven abilities' },
      { label: 'Progression', value: 'XP, levels, profession tree, and loadout' },
      { label: 'Regression focus', value: 'Combat, purchases, saves, loot, and skill-slot conflicts' },
    ],
    myRole: [
      'Gameplay architecture and character composition',
      'Combat, auto-attack, skills, buffs, and passive systems',
      'Inventory, loot, shop, wallet, and progression systems',
      'Skill-tree runtime, loadout, and save integration',
      'Editor authoring tools, validators, and EditMode regression coverage',
    ],
    currentCapabilities: [
      'Rigidbody2D traversal with sprinting, coyote time, input buffering, guarded jumps, landing states, and animation-aware collider resizing',
      'Projectile attacks, combo definitions, active skills, buffs, passives, empowers, cooldowns, Energy costs, and centralized damage resolution',
      'Skeleton and golem enemies with patrol, detection, chase, attack, damage aggro, grounded death, experience, and loot rewards',
      'Physical world drops, stack-based inventory, consumables, currency wallet, merchant catalogs, and transactional buy and sell operations',
      'XP and levels, ranked profession nodes, prerequisites, purchases, respec validation, learned abilities, and conflict-safe Skill Bar assignment',
      'Prefab-authored UI, JSON persistence, pooled feedback, audio routing, content validators, save inspection, and repeatable Editor builders',
    ],
    architecture: [
      'CharacterRoot composes input, Physics2D movement, animation, state, hit reaction, and combat through explicit dependencies.',
      'CombatService resolves damage once; UI, animation, audio, and VFX consume the result instead of recalculating gameplay truth.',
      'ScriptableObject content feeds transaction-oriented inventory and progression services, which persist committed state through stable IDs.',
    ],
    architectureFlow: [
      { title: 'Character traversal', description: 'Unity input and Physics2D adapted into explicit character state', nodes: ['Input router', 'Character root', 'Movement + jump', 'State + animation'] },
      { title: 'Combat + feedback', description: 'Rules produce results; presentation consumes them', nodes: ['Attack or skill', 'Damage request', 'Combat service', 'Damage result', 'Audio + VFX + UI'] },
      { title: 'Rewards + economy', description: 'Enemy outcomes become persistent player resources', nodes: ['Enemy death', 'Loot-table roll', 'World pickup', 'Inventory + wallet', 'Merchant transaction'] },
      { title: 'Progression + persistence', description: 'Committed changes flow into the player build and save data', nodes: ['XP + level', 'Profession node', 'Skill loadout', 'Stable IDs', 'JSON autosave'] },
    ],
    engineeringChallenges: [
      {
        title: 'Responsive platformer movement',
        problem: 'Physics, animation transitions, jump timing, and collider changes can make a 2D controller feel inconsistent at platform edges.',
        decision: 'Use buffered input, coyote time, guarded impulses, explicit airborne states, and collider-aware ground checks.',
        result: 'Traversal rules remain configurable and testable while animation and collision presentation stay aligned.',
      },
      {
        title: 'One authoritative combat route',
        problem: 'Animation, projectiles, VFX, HUD, and physics can become competing sources of damage and hit state.',
        decision: 'Route attacks through explicit requests and results owned by CombatService.',
        result: 'Feedback can change independently while defense, critical hits, tags, invulnerability, and death remain testable rules.',
      },
      {
        title: 'Commit connected progression safely',
        problem: 'A purchase can affect currency, node ranks, learned abilities, runtime effects, loadout slots, and persisted data.',
        decision: 'Validate the complete operation, resolve slot conflicts, then publish committed changes and autosave stable IDs.',
        result: 'Purchases, refunds, inventory changes, and loadout updates avoid exposing partially applied state.',
      },
    ],
    outcome:
      'The gameplay capture shows a continuous traversal, combat, loot, trading, and progression loop. Repository tests target damage rules, inventory transactions, save restoration, skill purchases, and ability-versus-consumable slot conflicts.',
    boundaries: [
      'The project is an active-development portfolio vertical slice with one main gameplay level and focused debug scenes.',
      'It is currently a local single-player project; multiplayer, prediction, and replication are future work.',
      'Full-tree respec UX and formal save-data versioning remain planned work.',
      'A locally licensed third-party presentation package is intentionally excluded from the public repository; the custom gameplay, UI contracts, and Editor integration code remain public.',
    ],
    repositoryUrl: 'https://github.com/kirillmakarov-dev/Everrealm_2D_Platformer',
    architectureUrl: 'https://github.com/kirillmakarov-dev/Everrealm_2D_Platformer/blob/main/Everrealm_2D/Assets/_Game/Docs/Architecture.md',
    setupUrl: 'https://github.com/kirillmakarov-dev/Everrealm_2D_Platformer#getting-started',
    videoSlot: {
      path: '/videos/case-studies/Everrealm_2D_Platformer/portfolio-video-everrealm_2026-09-13_18-58-18.mp4',
      caption: 'Gameplay capture featuring traversal, combat, loot, trading, profession progression, and the skill-tree flow.',
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
