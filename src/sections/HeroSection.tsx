import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker', {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.hero-line', {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.08,
      });

      gsap.from('.hero-chip', {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.45,
      });

      gsap.from('.hero-btn', {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.7,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8 scroll-mt-24"
      style={{ zIndex: 1 }}
    >
      <div className="hero-kicker mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)] backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-[var(--neon-green)]" />
        Unity Developer and Technical Owner
      </div>

      <div className="hero-line text-center max-w-5xl">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.02em] leading-[0.95] text-[var(--text-primary)]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          End-to-end Unity systems, from architecture to polished gameplay.
        </h1>
      </div>

      <p className="hero-line mt-6 max-w-3xl text-center text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
        I build production-minded Unity experiences with clear gameplay loops,
        modular architecture, and UX that helps players understand what to do
        in the first 10 seconds. The work here is owned end to end: design,
        implementation, polish, and presentation.
      </p>

      <div className="hero-line mt-8 flex flex-wrap justify-center gap-3">
        {['English Quest', 'Fluent', '2D WebGL Game'].map((item) => (
          <span
            key={item}
            className="hero-chip rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-sm text-[var(--text-primary)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="hero-btn mt-10 flex flex-wrap justify-center gap-4">
        <button
          onClick={handleScrollToProjects}
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--cyan)] bg-[var(--cyan)]/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--cyan)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--cyan)] hover:text-[var(--bg-primary)]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          View work
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <a
          href="/Kirill-Makarov-CV.pdf"
          download="Kirill-Makarov-CV.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--magenta)] bg-[var(--magenta)]/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--magenta)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--magenta)] hover:text-[var(--bg-primary)]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <Download size={16} />
          Download CV
        </a>

        <button
          onClick={handleScrollToContact}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--neon-green)] bg-[var(--neon-green)]/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--neon-green)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--neon-green)] hover:text-[var(--bg-primary)]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <Mail size={16} />
          Contact
        </button>
      </div>

      <div className="hero-line mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
        <span className="hidden h-px w-16 bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent sm:block" />
        recruiter-friendly case studies with full technical ownership
        <span className="hidden h-px w-16 bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent sm:block" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
          <span>Scroll</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[var(--text-secondary)] p-1">
            <div className="h-3 w-1.5 animate-bounce rounded-full bg-[var(--cyan)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
