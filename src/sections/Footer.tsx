export default function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-[var(--border-color)]" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          © 2024{' '}
          <span className="text-[var(--cyan)]">Kirill Makarov</span>
          . Unity Developer & Tech Lead.
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <span>Built with</span>
          <span className="text-[var(--magenta)]">❤</span>
          <span>and</span>
          <span className="text-[var(--cyan)]">precision</span>
          <span className="ml-2 w-2 h-2 rounded-full bg-[var(--neon-green)] pulse-dot inline-block" />
        </div>
      </div>
    </footer>
  );
}
