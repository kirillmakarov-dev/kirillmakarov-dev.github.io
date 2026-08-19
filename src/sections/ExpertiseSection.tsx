import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AudioLines, Braces, Globe, Network, Wrench, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseAreas = [
  {
    icon: Users,
    title: 'Gameplay systems',
    description: 'Quest systems, interactions, progression, player mechanics, game flow, and reusable gameplay features.',
    color: 'var(--cyan)',
  },
  {
    icon: Network,
    title: 'Multiplayer & networking',
    description: 'Photon Fusion, player ownership, spawning, synchronization, local-player systems, and multiplayer gameplay architecture.',
    color: 'var(--magenta)',
  },
  {
    icon: Braces,
    title: 'Game architecture',
    description: 'Modular C# systems, ScriptableObject data, event-based communication, clear runtime boundaries, and maintainable gameplay architecture.',
    color: 'var(--neon-green)',
  },
  {
    icon: Globe,
    title: 'WebGL development',
    description: 'Unity WebGL development, browser constraints, deployment workflows, platform debugging, and performance-aware delivery.',
    color: 'var(--cyan)',
  },
  {
    icon: AudioLines,
    title: 'AI & interactive systems',
    description: 'Local Whisper integration, model-driven features, and AI-assisted implementation, debugging, and technical exploration.',
    color: 'var(--magenta)',
  },
  {
    icon: Wrench,
    title: 'Tools & production workflow',
    description: 'Unity editor tools, validation, debugging workflows, Git-based development, automated setup, and maintainability tooling.',
    color: 'var(--neon-green)',
  },
];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.exp-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.exp-card', {
        scrollTrigger: { trigger: '.exp-grid', start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="exp-title mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
            Core strengths
          </div>
          <h2
            className="exp-title text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]">
              What I bring to the team
            </span>
          </h2>
          <p className="exp-title mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            I build gameplay systems from prototype to production &mdash; combining Unity
            architecture, multiplayer, WebGL, AI integration, and practical development tooling.
          </p>
        </div>

        <div className="exp-grid mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="exp-card group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--cyan)]/30"
            >
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border"
                style={{
                  borderColor: `${area.color}40`,
                  backgroundColor: `${area.color}10`,
                }}
              >
                <area.icon size={22} style={{ color: area.color }} />
              </div>
              <h3
                className="text-base font-bold uppercase tracking-[0.12em] text-[var(--text-primary)]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
