import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'PROJECTS', href: '#projects' },
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,10,15,0.95)] backdrop-blur-md border-b border-[var(--border-color)]'
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
            className="md:hidden text-[var(--text-primary)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-[rgba(10,10,15,0.98)] z-40 transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-2xl font-bold tracking-[0.15em] text-[var(--text-primary)] hover:text-[var(--cyan)] transition-colors duration-300"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
