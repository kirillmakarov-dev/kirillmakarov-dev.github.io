import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  'Event-driven gameplay architecture',
  'ScriptableObject-based data layer',
  'Modular systems using interfaces',
  'Separation between UI, logic, and data',
  'Multiplayer synchronization flow',
  'WebGL and backend integration',
  'Scalable deployment pipelines',
  'Maintainable production-oriented workflows',
];

export default function ArchitectureSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.arch-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.arch-item', {
        scrollTrigger: { trigger: '.arch-list', start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false,
        x: -30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="architecture" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="arch-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.08em] uppercase mb-14 text-center" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-green)] to-[var(--cyan)]">
            HOW I BUILD
          </span>
          <br />
          <span className="text-[var(--text-primary)]">UNITY SYSTEMS</span>
        </h2>

        <div className="arch-list grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((item) => (
            <div
              key={item}
              className="arch-item flex items-center gap-3 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 hover:border-[var(--cyan)]/30 hover:bg-[var(--bg-secondary)]/60 transition-all duration-300 group"
            >
              <ChevronRight size={16} className="text-[var(--cyan)] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="text-sm sm:text-base text-[var(--text-primary)]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
