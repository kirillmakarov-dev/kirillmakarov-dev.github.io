import { useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft, CheckCircle2, Github, Layers3, PlayCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getProjectBySlug } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = useMemo(() => (slug ? getProjectBySlug(slug) : undefined), [slug]);
  const heroImageClassName = project?.slug === 'fluent'
    ? 'aspect-[4/3] w-full rounded-[18px] bg-[#091016] object-contain p-3'
    : 'aspect-[4/3] w-full rounded-[18px] object-cover';
  const galleryImageClassName = project?.slug === 'fluent'
    ? 'aspect-video w-full rounded-2xl border border-[var(--border-color)] bg-[#091016] object-contain p-2'
    : 'aspect-video w-full rounded-2xl border border-[var(--border-color)] object-cover';

  useEffect(() => {
    if (!project) return;

    document.title = `${project.title} | Kirill Makarov`;

    const ctx = gsap.context(() => {
      gsap.from('.case-hero', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.case-panel', {
        scrollTrigger: { trigger: '.case-grid', start: 'top 80%', toggleActions: 'play none none none' },
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28" style={{ zIndex: 1 }}>
      <div className="mx-auto max-w-7xl">
        <div className="case-hero mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--cyan)]/40 hover:text-[var(--cyan)]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Case study {project.id}
          </div>
        </div>

        <section className="case-hero grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
              {project.subtitle}
            </div>
            <h1
              className="text-4xl font-black uppercase leading-[0.95] tracking-[0.04em] sm:text-5xl lg:text-7xl"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${project.accent}, #ffffff)` }}>
                {project.title}
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {project.heroDescription}
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--text-primary)] sm:text-base">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-3 py-1 text-xs text-[var(--text-primary)]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/kirillmakarov-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--magenta)]/40 hover:text-[var(--magenta)]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/70 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <img
              src={project.heroImage}
              alt={project.title}
              className={heroImageClassName}
            />
          </div>
        </section>

        <section className="case-grid mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Overview
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {project.shortDescription}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {project.challenge}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {project.approach}
              </p>
            </div>

            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                What I used
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/60 px-3 py-1 text-xs text-[var(--text-primary)]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.videoSlot ? (
              <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
                <div className="flex items-center gap-2 text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  <PlayCircle size={16} className="text-[var(--magenta)]" />
                  Demo video
                </div>
                <div className="mt-5 overflow-hidden rounded-[22px] border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-3">
                  <video
                    className="aspect-video w-full rounded-[18px] bg-black object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={project.heroImage}
                  >
                    <source src={project.videoSlot.path} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="mt-3 px-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.videoSlot.caption}
                  </p>
                </div>
              </div>
            ) : null}

            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Core decisions
              </h2>
              <div className="mt-5 grid gap-3">
                {project.architecture.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/55 p-4 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[var(--neon-green)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                UX notes
              </h2>
              <ul className="mt-5 space-y-3">
                {project.uxNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: project.accent }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Story and context
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {project.details.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                What I did
              </h2>
              <div className="mt-5 space-y-3">
                {project.whatIDid.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/55 p-4 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[var(--cyan)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Quick facts
              </h2>
              <div className="mt-5 space-y-4">
                {project.quickFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-secondary)]">{fact.label}</div>
                    <div className="mt-2 text-sm text-[var(--text-primary)]">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <div className="flex items-center gap-2 text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                <Layers3 size={16} className="text-[var(--cyan)]" />
                Gallery
              </div>
              <div className="mt-5 grid gap-3">
                {project.gallery.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.title} gallery`}
                    className={galleryImageClassName}
                  />
                ))}
              </div>
            </div>

            <div className="case-panel rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Outcome
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{project.outcome}</p>
            </div>
          </aside>
        </section>

        <section className="case-panel mt-10 rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
          <div className="flex items-center gap-2 text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <Layers3 size={16} className="text-[var(--magenta)]" />
            Next steps for the case study
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {project.nextSteps.map((step) => (
              <div key={step} className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {step}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex justify-end rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]/50 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--cyan)]/40 hover:text-[var(--cyan)]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
