import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ArchiveSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.archive-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="archive" ref={sectionRef} className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto">
        <div className="archive-content flex items-start gap-5 p-6 sm:p-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]/30">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-[var(--text-secondary)]/20 bg-[var(--text-secondary)]/5 flex items-center justify-center">
            <FolderOpen size={22} className="text-[var(--text-secondary)]" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Earlier Projects
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              These projects remain part of my professional background and demonstrate gameplay mechanics,
              interactive systems, and simulation-driven experiences.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Pixel Art Games', 'Simulation Systems', 'Interactive Experiences', 'Educational Projects'].map((tag) => (
                <span key={tag} className="text-xs text-[var(--text-secondary)]/70 bg-[var(--bg-primary)] px-2 py-1 rounded" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
