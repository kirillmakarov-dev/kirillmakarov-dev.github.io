import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BadgeCheck, Layers3, MonitorPlay } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: BadgeCheck,
    title: 'Product mindset',
    description: 'I shape MVPs so the first build is already understandable, usable, and worth reviewing.',
  },
  {
    icon: Layers3,
    title: 'System design',
    description: 'I prefer modular systems, clear ownership boundaries, and workflows that stay maintainable.',
  },
  {
    icon: MonitorPlay,
    title: 'Delivery focus',
    description: 'I care about the playable result, the technical notes, and how the work is presented.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.about-copy', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.about-image', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        immediateRender: false,
        x: 24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="about-title mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
            About me
          </div>

          <h2
            className="about-title text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]">
              Technical ownership
            </span>
            <span className="block text-[var(--text-primary)]">from concept to delivery</span>
          </h2>

          <p className="about-copy mt-6 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            I am a Unity developer and technical lead focused on experiences that need
            both strong interaction design and reliable engineering. The work here
            centers on three main case studies: English Quest, Fluent, and a 2D WebGL game.
          </p>

          <p className="about-copy mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            My preferred shape of project is one where the player or learner quickly
            understands the loop, the architecture stays modular, and the final result
            still feels presentable to a recruiter or stakeholder.
          </p>

          <div className="about-copy mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-4"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/70 text-[var(--cyan)]">
                    <Icon size={18} />
                  </div>
                  <h3
                    className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--text-primary)]"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-image relative">
          <div className="absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-[var(--cyan)]" />
          <div className="absolute -right-3 -top-3 h-8 w-8 border-r-2 border-t-2 border-[var(--cyan)]" />
          <div className="absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-[var(--magenta)]" />
          <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-[var(--magenta)]" />

          <div className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <img
              src="/images/about.jpg"
              alt="Kirill Makarov portrait"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
