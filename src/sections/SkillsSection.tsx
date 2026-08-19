import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Technology = {
  name: string;
  emphasis?: 'primary' | 'specialization';
};

type TechnologyGroup = {
  label: string;
  technologies: Technology[];
};

const technologyGroups: TechnologyGroup[] = [
  {
    label: 'Core development',
    technologies: [
      { name: 'Unity', emphasis: 'primary' },
      { name: 'C#', emphasis: 'primary' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Rider' },
    ],
  },
  {
    label: 'Game development',
    technologies: [
      { name: 'Photon Fusion', emphasis: 'specialization' },
      { name: 'Addressables' },
      { name: 'Unity Input System' },
      { name: 'Unity Physics' },
      { name: 'ScriptableObject' },
      { name: 'Custom Editor Tools' },
    ],
  },
  {
    label: 'Platforms',
    technologies: [
      { name: 'WebGL', emphasis: 'specialization' },
      { name: 'Desktop' },
      { name: 'Mobile' },
    ],
  },
  {
    label: 'Art & content pipeline',
    technologies: [
      { name: 'Blender' },
      { name: 'Photoshop' },
      { name: 'Illustrator' },
      { name: 'Figma' },
    ],
  },
  {
    label: 'AI & development tools',
    technologies: [
      { name: 'Codex' },
      { name: 'OpenAI' },
      { name: 'Whisper' },
      { name: 'AI-assisted Development' },
    ],
  },
  {
    label: 'Web & integration',
    technologies: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'ASP.NET Core' },
    ],
  },
];

const workingPrinciples = [
  {
    title: 'System-oriented development',
    description: 'Build features as maintainable systems rather than isolated scripts.',
  },
  {
    title: 'Clear ownership & responsibilities',
    description: 'Keep gameplay, networking, UI, and presentation responsibilities explicit.',
  },
  {
    title: 'Tools before repetition',
    description: 'Automate repetitive setup and validation when tooling can reduce mistakes.',
  },
  {
    title: 'Iterate & validate',
    description: 'Prototype quickly, validate in-game, then refine where the project actually needs it.',
  },
  {
    title: 'AI-augmented workflow',
    description: 'Use AI to accelerate implementation, debugging, refactoring, and research while retaining engineering responsibility.',
  },
  {
    title: 'Cross-discipline collaboration',
    description: 'Work comfortably across code, gameplay, UI, assets, networking, and technical integration.',
  },
];

const chipStyles = {
  primary: 'border-[var(--cyan)]/55 bg-[var(--cyan)]/10 text-[var(--cyan)]',
  specialization: 'border-[var(--magenta)]/45 bg-[var(--magenta)]/10 text-[var(--text-primary)]',
  supporting: 'border-[var(--border-color)]/80 bg-[var(--bg-primary)]/40 text-[var(--text-primary)]',
};

const chipDotStyles = {
  primary: 'bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)]',
  specialization: 'bg-[var(--magenta)] shadow-[0_0_8px_var(--magenta)]',
  supporting: 'bg-[var(--text-secondary)]/45',
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.skills-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.tech-chip', {
        scrollTrigger: { trigger: '.tech-grid', start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 16,
        opacity: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: 'power3.out',
      });

      gsap.from('.quality-item', {
        scrollTrigger: { trigger: '.qualities-list', start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false,
        x: -16,
        opacity: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="skills-title mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
            Stack and working style
          </div>
          <h2
            className="skills-title text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--magenta)] to-[var(--neon-green)]">
              Technical stack & workflow
            </span>
          </h2>
        </div>

        <div className="mt-12">
          <div className="tech-grid relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-[var(--border-color)] bg-[var(--bg-secondary)]/45 backdrop-blur-sm">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/80 to-transparent"
            />

            {technologyGroups.map((group, index) => (
              <article
                key={group.label}
                className={`tech-group relative grid gap-4 px-5 py-6 sm:px-7 md:grid-cols-[minmax(11rem,0.34fr)_1fr] md:gap-8 lg:px-9 ${
                  index < technologyGroups.length - 1 ? 'border-b border-[var(--border-color)]/70' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="pt-0.5 text-[10px] font-semibold tracking-[0.14em] text-[var(--cyan)]/70"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[var(--text-secondary)]"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      {group.label}
                    </h3>
                    <div
                      aria-hidden="true"
                      className="mt-2 h-px w-10 bg-gradient-to-r from-[var(--cyan)]/80 to-transparent"
                    />
                  </div>
                </div>

                <ul className="flex flex-wrap content-start gap-2" aria-label={`${group.label} technologies`}>
                  {group.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className={`tech-chip inline-flex min-h-9 items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:px-3.5 sm:text-sm ${
                        chipStyles[technology.emphasis ?? 'supporting']
                      }`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                          chipDotStyles[technology.emphasis ?? 'supporting']
                        }`}
                      />
                      {technology.name}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h3
              className="skills-title text-2xl font-bold uppercase tracking-[0.08em] text-[var(--text-primary)] sm:text-3xl"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Working style
            </h3>
          </div>

          <div className="qualities-list mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {workingPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="quality-item rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/40 p-5"
              >
                <h4
                  className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-primary)]"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {principle.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
