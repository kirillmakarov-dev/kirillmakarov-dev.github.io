import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import ParticleCanvas from './sections/ParticleCanvas';
import ClickSpark from './components/ClickSpark';
import HomePage from './pages/HomePage';
import ProjectCaseStudyPage from './pages/ProjectCaseStudyPage';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[var(--bg-secondary)] focus:px-4 focus:py-2 focus:text-[var(--cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]"
      >
        Skip to main content
      </a>

      <ScrollToTop />

      <ParticleCanvas />
      <div className="scanlines" />

      <main className="relative" style={{ zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies/:slug" element={<ProjectCaseStudyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function AppShell() {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={12}
      sparkRadius={24}
      sparkCount={10}
      duration={460}
      extraScale={1.15}
    >
      <App />
    </ClickSpark>
  );
}
