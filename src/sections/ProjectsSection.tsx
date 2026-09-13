import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import ElectricBorder from '@/components/ElectricBorder';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [...projects].sort((a, b) => a.id - b.id);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.project-card', {
        scrollTrigger: { trigger: '.projects-grid', start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.14,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative scroll-mt-24 py-20 px-4 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="projects-title mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
            Featured work
          </div>
          <h2
            className="projects-title text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] via-[var(--magenta)] to-[var(--cyan)]">
              Personal Unity case studies
            </span>
          </h2>
          <p className="projects-title mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Four focused projects with playable demonstrations and public engineering evidence,
            ordered for gameplay, multiplayer, WebGL, and AI-integrated Unity roles.
          </p>
        </div>

        <div className="projects-grid mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {featuredProjects.map((project) => (
            <ElectricBorder
              key={project.id}
              color={project.accent}
              speed={0.55}
              chaos={0.05}
              borderRadius={10}
              className="project-card rounded-[18px]"
            >
              <article className="group h-full overflow-hidden rounded-[18px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-transform duration-500 hover:-translate-y-1">
                {project.heroImage ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/55 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
                      Case study {project.id}
                    </div>
                  </div>
                ) : null}

                <div className="flex h-full flex-col p-6">
                  <div>
                    {!project.heroImage ? (
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/40 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                        Case study {project.id}
                      </div>
                    ) : null}
                    <h3
                      className="text-lg font-bold uppercase tracking-[0.08em] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--cyan)]"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      {project.subtitle}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]">
                      <span className="rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/10 px-3 py-1 text-[var(--cyan)]">
                        {project.projectType}
                      </span>
                      <span className="text-[var(--text-secondary)]">{project.period} · {project.status}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {project.shortDescription}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      <span className="font-bold uppercase tracking-[0.12em] text-[var(--text-primary)]">My contribution: </span>
                      {project.cardContribution}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(project.technicalHighlights ?? project.tags).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/60 px-3 py-1 text-xs text-[var(--text-primary)]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--border-color)] pt-5">
                    <Link
                      to={`/case-studies/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--cyan)] bg-[var(--cyan)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--cyan)] transition-all duration-300 hover:bg-[var(--cyan)] hover:text-[var(--bg-primary)]"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      Read case study
                      <ArrowUpRight size={14} />
                    </Link>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--magenta)]/40 hover:text-[var(--magenta)]"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </article>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
