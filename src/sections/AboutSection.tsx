import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.about-text', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });
      gsap.from('.about-image', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
        immediateRender: false,
        x: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="about-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.08em] uppercase mb-8" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              <span className="text-[var(--text-primary)]">ABOUT </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]">ME</span>
              <span className="block h-1 w-24 mt-4 bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]" />
            </h2>

            <div className="space-y-4 mb-8">
              <p className="about-text text-xl text-[var(--text-primary)] leading-relaxed" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Technical ownership from system design to production delivery.
              </p>
              <p className="about-text text-lg text-[var(--text-secondary)] leading-relaxed">
                I am a Unity Developer and Technical Lead focused on building scalable gameplay systems,
                multiplayer architecture, and production-ready applications across WebGL, desktop, and mobile platforms.
              </p>
              <p className="about-text text-lg text-[var(--text-secondary)] leading-relaxed">
                My experience spans gameplay programming, backend integration, performance optimization,
                and technical leadership. I specialize in designing modular and maintainable architectures
                using event-driven systems, ScriptableObject workflows, interfaces, and SOLID principles.
              </p>
              <p className="about-text text-lg text-[var(--text-secondary)] leading-relaxed">
                Over the years, I have led development from the ground up — building internal pipelines,
                mentoring developers, defining engineering standards, and solving complex production challenges
                related to WebGL limitations, multiplayer synchronization, remote content delivery, and platform scalability.
              </p>
              <p className="about-text text-lg text-[var(--text-secondary)] leading-relaxed">
                I have hands-on experience with Firebase integration, Photon multiplayer systems, Addressables,
                JavaScript bridges for WebGL, launcher development in C#, and cross-platform deployment workflows.
              </p>
              <p className="about-text text-lg text-[var(--cyan)] leading-relaxed">
                My approach combines technical problem-solving with long-term maintainability, focusing on
                clean architecture, scalability, and stable production delivery.
              </p>
            </div>
          </div>

          <div className="about-image relative">
            <div className="relative group">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--cyan)]" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[var(--cyan)]" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[var(--magenta)]" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--magenta)]" />
              <div className="overflow-hidden rounded-lg neon-border-cyan">
                <img src="/images/about.jpg" alt="Kirill Makarov — Unity Developer" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--cyan)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
