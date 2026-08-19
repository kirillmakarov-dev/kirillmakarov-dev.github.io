import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'WORK', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'ARCHITECTURE', href: '#architecture' },
  { label: 'STACK', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const handleDesktopLayout = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };

    desktopQuery.addEventListener('change', handleDesktopLayout);
    return () => desktopQuery.removeEventListener('change', handleDesktopLayout);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'border-b border-[var(--border-color)] bg-[var(--bg-primary)] md:bg-[rgba(10,10,15,0.95)] md:backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-mono text-xl font-bold tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-[var(--cyan)]">&lt;</span>
            <span className="text-[var(--text-primary)]">KM</span>
            <span className="text-[var(--magenta)]">/</span>
            <span className="text-[var(--text-primary)]">&gt;</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative text-sm font-medium tracking-[0.12em] text-[var(--text-secondary)] hover:text-[var(--cyan)] transition-colors duration-300 group"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--cyan)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-transparent text-[var(--text-primary)] transition-colors duration-300 hover:border-[var(--border-color)] hover:bg-[var(--bg-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!mobileOpen}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-[var(--bg-primary)] px-4 py-5 transition-[opacity,visibility] duration-300 md:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`mx-auto max-w-sm overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-[0_20px_70px_rgba(0,0,0,0.45)] transition-all duration-300 ${
            mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
          }`}
        >
          <div className="flex items-center justify-between border-b border-[var(--border-color)] px-5 py-3">
            <span
              className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-secondary)]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Navigation
            </span>
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)]"
            />
          </div>

          <div className="divide-y divide-[var(--border-color)]">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="group flex min-h-14 items-center gap-4 px-5 py-4 text-lg font-bold tracking-[0.12em] text-[var(--text-primary)] transition-colors duration-300 hover:bg-[var(--bg-primary)] hover:text-[var(--cyan)] focus-visible:bg-[var(--bg-primary)] focus-visible:text-[var(--cyan)] focus-visible:outline-none"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <span
                  aria-hidden="true"
                  className="text-[10px] tracking-[0.14em] text-[var(--cyan)]/70"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className="ml-auto text-sm text-[var(--text-secondary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--cyan)]"
                >
                  /&gt;
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
