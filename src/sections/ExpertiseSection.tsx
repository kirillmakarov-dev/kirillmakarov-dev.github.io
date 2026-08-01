import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AudioLines, Gamepad2, Globe, Layers3, Mic2, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseAreas = [
  {
    icon: Users,
    title: 'Educational gameplay',
    description: 'Quest loops, progression pacing, and multiplayer-friendly learning flow.',
    color: 'var(--cyan)',
  },
  {
    icon: Mic2,
    title: 'Speech UX',
    description: 'Microphone flow, pronunciation feedback, and low-friction practice states.',
    color: 'var(--magenta)',
  },
  {
    icon: Gamepad2,
    title: 'Browser games',
    description: '2D gameplay, readable animation, and controls that feel good in WebGL.',
    color: 'var(--neon-green)',
  },
  {
    icon: Globe,
    title: 'WebGL delivery',
    description: 'Asset budgets, build constraints, and stable performance on the open web.',
    color: 'var(--cyan)',
  },
  {
    icon: Layers3,
    title: 'Architecture',
    description: 'Modular systems, event flow, and interfaces that keep the codebase scalable.',
    color: 'var(--magenta)',
  },
  {
    icon: AudioLines,
    title: 'Production polish',
    description: 'Feedback timing, state clarity, and shipping-ready presentation details.',
    color: 'var(--neon-green)',
  },
];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
            This section is intentionally shorter and more specific, so it supports the
            three headline projects instead of repeating the same ideas in a different way.
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
