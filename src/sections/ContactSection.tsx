import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

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
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.contact-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2,
      });
      gsap.from('.social-icon', {
        scrollTrigger: { trigger: '.social-links', start: 'top 90%', toggleActions: 'play none none none' },
        immediateRender: false,
        scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.5,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="contact-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.08em] uppercase mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]">
            OPEN TO
          </span>
          <br />
          <span className="text-[var(--text-primary)]">OPPORTUNITIES</span>
        </h2>

        <p className="contact-content text-lg text-[var(--text-secondary)] mb-4 max-w-xl mx-auto">
          Senior Unity / Tech Lead opportunities.
        </p>
        <p className="contact-content text-base text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
          Focused on multiplayer systems, scalable architecture, performance optimization,
          and production-ready Unity applications.
        </p>

        {/* Email CTA */}
        <div className="contact-content mb-10">
          <a
            href="mailto:kirill.makarov301@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-[var(--cyan)] text-[var(--cyan)] font-bold tracking-[0.15em] text-sm uppercase rounded-lg pulse-glow transition-all duration-300 hover:bg-[var(--cyan)] hover:text-[var(--bg-primary)] hover:scale-105"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <Mail size={20} />
            GET IN TOUCH
          </a>
        </div>

        {/* Email display */}
        <div
          className="contact-content mb-10 flex items-center justify-center gap-3 text-[var(--text-secondary)]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <Mail size={18} className="text-[var(--cyan)]" />
          <a
            href="mailto:kirill.makarov301@gmail.com"
            className="text-[var(--text-primary)] hover:text-[var(--cyan)] transition-colors duration-300"
          >
            kirill.makarov301@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-all duration-500"
              aria-label={link.label}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] group-hover:border-[var(--cyan)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:rotate-[360deg] transition-all duration-500">
                {link.label === 'LinkedIn' ? <Linkedin size={22} /> : link.label === 'GitHub' ? <Github size={22} /> : <Mail size={22} />}
              </div>
              <span className="text-xs tracking-wider opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* CV download */}
        <div className="contact-content mt-10">
          <a
            href="/Kirill-Makarov-CV.pdf"
            download="Kirill-Makarov-CV.pdf"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--magenta)] transition-colors duration-300"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ExternalLink size={14} />
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
}
