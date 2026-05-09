import { useEffect, useState, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import gsap from 'gsap';

export default function HeroSection() {
  const { displayedText } = useTypewriter('Unity Developer | Tech Lead | Multiplayer | Scalable Systems', 50, 500);
  const [glitchActive, setGlitchActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Periodic glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3,
      });
      gsap.from('.hero-desc', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.2,
      });
      gsap.from('.hero-btn', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 1.8,
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
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      style={{ zIndex: 1 }}
    >
      {/* Title */}
      <div className="hero-line text-center mb-4 max-w-5xl">
        <h1
          className={`glitch-wrapper text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.05em] uppercase leading-tight ${
            glitchActive ? 'active' : ''
          }`}
          data-text="Multiplayer gameplay systems, WebGL pipelines, and scalable Unity architecture."
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-[var(--text-primary)]">
            Multiplayer gameplay systems, WebGL pipelines, and scalable Unity architecture
          </span>
        </h1>
      </div>

      {/* Typewriter subtitle */}
      <div
        className="hero-line text-center mb-6 h-8"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-[var(--cyan)] text-sm sm:text-base">
          {displayedText}
          {!displayedText.includes('Desktop') && (
            <span className="animate-pulse">_</span>
          )}
        </span>
      </div>

      {/* Description */}
      <p className="hero-desc text-center text-[var(--text-secondary)] text-base sm:text-lg max-w-3xl mb-10 leading-relaxed">
        I build production-ready Unity applications with a focus on multiplayer systems,
        performance optimization, scalable architecture, and real-world production constraints
        across WebGL, desktop, and mobile platforms.
      </p>

      {/* CTA Buttons */}
      <div className="hero-btn flex flex-wrap justify-center gap-4">
        <button
          onClick={handleScrollToProjects}
          className="group relative px-8 py-4 border border-[var(--cyan)] text-[var(--cyan)] font-bold tracking-[0.12em] text-sm uppercase transition-all duration-300 hover:bg-[var(--cyan)] hover:text-[var(--bg-primary)] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          VIEW PROJECTS
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </button>

        <a
          href="/Kirill-Makarov-CV.pdf"
          download="Kirill-Makarov-CV.pdf"
          className="hero-btn group relative px-8 py-4 border border-[var(--magenta)] text-[var(--magenta)] font-bold tracking-[0.12em] text-sm uppercase transition-all duration-300 hover:bg-[var(--magenta)] hover:text-[var(--bg-primary)] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,160,0.5)]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          DOWNLOAD CV
        </a>

        <button
          onClick={handleScrollToContact}
          className="hero-btn group relative px-8 py-4 border border-[var(--neon-green)] text-[var(--neon-green)] font-bold tracking-[0.12em] text-sm uppercase transition-all duration-300 hover:bg-[var(--neon-green)] hover:text-[var(--bg-primary)] hover:scale-105 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          CONTACT ME
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[var(--text-secondary)] rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[var(--cyan)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
