import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  image: string;
  links: { type: string; url: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Photon Multiplayer System',
    description: 'Production-oriented multiplayer architecture focused on synchronization, room management, and scalable gameplay communication.',
    features: [
      'Real-time player synchronization',
      'Session and room flow',
      'Event-driven gameplay systems',
    ],
    tags: ['Unity', 'Photon', 'C#', 'Multiplayer'],
    image: '/images/project-1.jpg',
    links: [
      { type: 'github', url: 'https://github.com/kirillmakarov-dev' },
    ],
  },
  {
    id: 2,
    title: 'Firebase WebGL Integration',
    description: 'Cross-platform authentication and save/load system built around WebGL limitations and JavaScript interoperability.',
    features: [
      'Firebase Authentication',
      'Firestore save/load',
      'WebGL JavaScript bridge',
    ],
    tags: ['Unity', 'Firebase', 'WebGL', 'JavaScript'],
    image: '/images/project-3.jpg',
    links: [
      { type: 'github', url: 'https://github.com/kirillmakarov-dev' },
    ],
  },
  {
    id: 3,
    title: 'Scalable Unity Architecture',
    description: 'Modular gameplay framework using interfaces, event systems, factories, and ScriptableObject-based workflows.',
    features: [
      'Event-driven architecture',
      'Factory pattern',
      'Modular systems',
    ],
    tags: ['Unity', 'C#', 'Architecture', 'SOLID'],
    image: '/images/project-4.jpg',
    links: [
      { type: 'github', url: 'https://github.com/kirillmakarov-dev' },
    ],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.project-card', {
        scrollTrigger: { trigger: '.projects-grid', start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 50, opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="projects-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.08em] uppercase mb-6 text-center" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] via-[var(--magenta)] to-[var(--cyan)]">
            FEATURED PROJECTS
          </span>
        </h2>
        <p className="projects-title text-center text-[var(--text-secondary)] text-lg mb-14 max-w-2xl mx-auto">
          Selected work focused on gameplay systems and engineering ownership.
        </p>

        <div className="projects-grid grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-[var(--bg-secondary)] rounded-lg overflow-hidden border border-[var(--border-color)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--cyan)]/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors duration-300 mb-3 uppercase tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Check size={14} className="text-[var(--neon-green)] mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[var(--cyan)] bg-[var(--cyan)]/10 px-2 py-1 rounded border border-[var(--cyan)]/20" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--cyan)] transition-colors duration-300"
                    >
                      {link.type === 'github' && <Github size={16} />}
                      {link.type === 'external' && <ExternalLink size={16} />}
                      {link.type === 'github' ? 'GitHub' : 'View'}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
