import ParticleCanvas from './sections/ParticleCanvas';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExpertiseSection from './sections/ExpertiseSection';
import ProjectsSection from './sections/ProjectsSection';
import ArchitectureSection from './sections/ArchitectureSection';
import ArchiveSection from './sections/ArchiveSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
      {/* Particle background */}
      <ParticleCanvas />

      {/* Scanline overlay */}
      <div className="scanlines" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative" style={{ zIndex: 1 }}>
        <HeroSection />

        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <AboutSection />

        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ExpertiseSection />

        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ProjectsSection />

        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ArchitectureSection />

        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ArchiveSection />

        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <SkillsSection />

        <div className="max-w-7xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </div>

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
}

export default App;
