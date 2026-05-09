import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  'Unity (2D/3D, WebGL, Mobile, Desktop)',
  'C#',
  'Photon Multiplayer',
  'Firebase (Authentication, Firestore, Hosting)',
  'Addressables',
  'WebGL JavaScript Integration',
  'SOLID Principles',
  'Dependency Injection',
  'Observer, Strategy, Factory, State Machine, Object Pooling',
  'Git & Version Control',
  'Blender',
  'Figma',
  'Photoshop & Illustrator',
];

const qualities = [
  'Strong architectural thinking',
  'Problem-solving mindset',
  'Leadership and mentoring experience',
  'Focus on maintainability and scalability',
  'Production-oriented development mindset',
  'Ability to build systems from scratch',
  'Strong communication and collaboration skills',
  'Passion for gameplay systems and technical innovation',
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.tech-chip', {
        scrollTrigger: { trigger: '.tech-grid', start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false,
        scale: 0.8, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'back.out(1.7)',
      });
      gsap.from('.quality-item', {
        scrollTrigger: { trigger: '.qualities-list', start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false,
        x: -20, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="skills-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.08em] uppercase mb-6 text-center" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--neon-green)]">
              TECHNOLOGIES
            </span>
            <br />
            <span className="text-[var(--text-primary)]">& TOOLS</span>
          </h2>

          <div className="tech-grid flex flex-wrap justify-center gap-3 mt-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="tech-chip px-4 py-2 text-sm font-medium border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-[var(--text-primary)] rounded-md hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)] hover:shadow-[0_0_10px_rgba(0,240,255,0.15)] transition-all duration-300 cursor-default"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Personal Qualities */}
        <div>
          <h3 className="skills-title text-2xl sm:text-3xl font-bold tracking-[0.08em] uppercase mb-10 text-center" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--magenta)] to-[var(--neon-green)]">
              PROFESSIONAL APPROACH
            </span>
          </h3>

          <div className="qualities-list grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {qualities.map((quality) => (
              <div
                key={quality}
                className="quality-item flex items-center gap-3 p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 hover:border-[var(--magenta)]/30 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--magenta)] flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
