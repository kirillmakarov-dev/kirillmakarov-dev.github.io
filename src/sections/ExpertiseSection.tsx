import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Wifi, Database, Globe, Package, Gauge, Rocket, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseAreas = [
  {
    icon: Layers,
    title: 'Unity Architecture',
    description: 'Modular gameplay systems, maintainable project structure, ScriptableObject workflows, event-driven communication, and scalable engineering practices.',
    color: 'var(--cyan)',
  },
  {
    icon: Wifi,
    title: 'Photon Multiplayer',
    description: 'Real-time synchronization, room/session flow, network-aware gameplay systems, and multiplayer architecture design.',
    color: 'var(--magenta)',
  },
  {
    icon: Database,
    title: 'Firebase Integration',
    description: 'Authentication systems, save/load pipelines, Firestore integration, and connected gameplay workflows.',
    color: 'var(--neon-green)',
  },
  {
    icon: Globe,
    title: 'WebGL & JavaScript Bridge',
    description: 'Browser integration, JavaScript interoperability, runtime messaging, and handling WebGL platform limitations.',
    color: 'var(--cyan)',
  },
  {
    icon: Package,
    title: 'Addressables & Delivery',
    description: 'Remote content delivery, asset streaming, build optimization, patch-ready structures, and scalable deployment pipelines.',
    color: 'var(--magenta)',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Profiling, memory optimization, load-time improvements, compression workflows, and platform-specific tuning.',
    color: 'var(--neon-green)',
  },
  {
    icon: Rocket,
    title: 'Standalone Launcher',
    description: 'Desktop bootstrap tools, authentication flow, patch systems, update delivery, and external process orchestration.',
    color: 'var(--cyan)',
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    description: 'Mentoring developers, code reviews, architecture planning, onboarding workflows, and production pipeline management.',
    color: 'var(--magenta)',
  },
];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.exp-card', {
        scrollTrigger: { trigger: '.exp-grid', start: 'top 80%', toggleActions: 'play none none none' },
        immediateRender: false,
        y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="exp-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.08em] uppercase mb-6 text-center" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]">
            CORE EXPERTISE
          </span>
        </h2>
        <p className="exp-title text-center text-[var(--text-secondary)] text-lg mb-14 max-w-2xl mx-auto">
          Core areas I bring to Unity production teams.
        </p>

        <div className="exp-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="exp-card group p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 hover:-translate-y-2 transition-all duration-500"
              style={{ '--hover-color': area.color } as React.CSSProperties}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg border mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: `${area.color}40`,
                  backgroundColor: `${area.color}10`,
                }}
              >
                <area.icon size={22} style={{ color: area.color }} />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {area.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {area.description}
              </p>
              <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
