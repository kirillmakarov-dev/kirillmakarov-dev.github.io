import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const decisions = [
  'Component responsibilities separate weapons, ammo storage, health, damage, and enemy behaviours',
  'Magazine-based ammo keeps loaded rounds distinct from reserve ammunition',
  'NavMesh movement works alongside separate enemy vision, hearing, and shooting components',
  'UI reacts to gameplay events instead of polling weapon and health state',
  'Animation presentation remains separate from gameplay decisions and damage logic',
];

const flow = [
  'Player Input',
  'Weapon / Ammo',
  'Damage / Health',
  'Enemy AI',
  'UI / Animation Events',
];

export default function ArchitectureSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.arch-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.arch-panel', {
        scrollTrigger: { trigger: '.arch-layout', start: 'top 82%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="arch-title mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
            Supporting course project
          </div>
          <h2
            className="arch-title text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--neon-green)]">
              Shooter systems and structure
            </span>
          </h2>
          <p className="arch-title mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            A course and teaching project used to practice component boundaries across
            player combat, weapon state, damage, NavMesh enemies, UI, and animation.
          </p>
        </div>

        <div className="arch-layout mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="arch-panel space-y-4">
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-5">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                <Layers3 size={16} className="text-[var(--cyan)]" />
                Architecture flow
              </div>

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                {flow.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="min-w-[110px] rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/70 px-4 py-3 text-center text-sm text-[var(--text-primary)]">
                      {step}
                    </div>
                    {index < flow.length - 1 && (
                      <ArrowRight className="hidden text-[var(--text-secondary)] md:block" size={16} aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="arch-panel rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 p-6">
            <h3
              className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--text-primary)]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Key decisions
            </h3>

            <ul className="mt-5 space-y-4">
              {decisions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--magenta)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--magenta)]/40 hover:text-[var(--magenta)]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <ArrowUpRight size={14} />
                Request Technical Notes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
