import Navigation from '../sections/Navigation';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ExpertiseSection from '../sections/ExpertiseSection';
import ProjectsSection from '../sections/ProjectsSection';
import ArchitectureSection from '../sections/ArchitectureSection';
import SkillsSection from '../sections/SkillsSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="relative" style={{ zIndex: 1 }}>
        <HeroSection />

        <div className="mx-auto max-w-7xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ProjectsSection />

        <div className="mx-auto max-w-7xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <AboutSection />

        <div className="mx-auto max-w-7xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ExpertiseSection />

        <div className="mx-auto max-w-7xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ArchitectureSection />

        <div className="mx-auto max-w-7xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <SkillsSection />

        <div className="mx-auto max-w-7xl px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ContactSection />

        <Footer />
      </main>
    </>
  );
}
