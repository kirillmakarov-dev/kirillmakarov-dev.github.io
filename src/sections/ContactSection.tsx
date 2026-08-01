import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/kirill-makarov-13965222a/' },
  { icon: Github, label: 'GitHub', url: 'https://github.com/kirillmakarov-dev' },
  { icon: Mail, label: 'Email', url: 'mailto:kirill.makarov301@gmail.com' },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.contact-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 76%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 18,
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
      id="contact"
      ref={sectionRef}
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="contact-title mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
          Open to opportunities
        </div>

        <h2
          className="contact-title text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]">
            Let&apos;s talk about the next build
          </span>
        </h2>

        <p className="contact-content mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          If these case studies match the kind of team you are hiring for, I am happy to
          share code notes, implementation details, or talk through the architecture.
        </p>

        <div className="contact-content mt-10">
          <a
            href="mailto:kirill.makarov301@gmail.com"
            className="inline-flex items-center gap-3 rounded-full border-2 border-[var(--cyan)] bg-[var(--cyan)]/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[var(--cyan)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--cyan)] hover:text-[var(--bg-primary)]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <Mail size={18} />
            Email me
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div
          className="contact-content mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--text-secondary)]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <Mail size={16} className="text-[var(--cyan)]" />
          <a
            href="mailto:kirill.makarov301@gmail.com"
            className="text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--cyan)]"
          >
            kirill.makarov301@gmail.com
          </a>
        </div>

        <div className="social-links contact-content mt-10 flex items-center justify-center gap-5 sm:gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--cyan)]"
                aria-label={link.label}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-all duration-300 group-hover:border-[var(--cyan)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <Icon size={22} />
                </div>
                <span className="text-xs uppercase tracking-[0.18em] opacity-70 transition-opacity group-hover:opacity-100">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="contact-content mt-10">
          <a
            href="/Kirill-Makarov-CV.pdf"
            download="Kirill-Makarov-CV.pdf"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--magenta)]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Download full CV
          </a>
        </div>
      </div>
    </section>
  );
}
