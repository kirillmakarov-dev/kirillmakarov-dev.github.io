import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  'Unity',
  'C#',
  'Photon',
  'Firebase',
  'WebGL',
  'Addressables',
  'ScriptableObjects',
  'SOLID',
  'Event-driven architecture',
  'Git',
  'Figma',
  'Photoshop',
];

const qualities = [
  'Scans well on desktop and mobile',
  'Supports recruiter-friendly case studies',
  'Keeps supporting sections shorter than the main work',
  'Balances cinematic feel with readable UX',
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
              Tools that support the work
            </span>
          </h2>
        </div>

        <div className="mt-12">
          <div className="tech-grid flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="tech-chip cursor-default rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-sm text-[var(--text-primary)] transition-colors duration-300 hover:border-[var(--cyan)]/40 hover:text-[var(--cyan)]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tech}
              </span>
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

          <div className="qualities-list mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {qualities.map((quality) => (
              <div
                key={quality}
                className="quality-item rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/40 p-4 text-sm text-[var(--text-secondary)]"
              >
                {quality}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
