export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-color)] px-4 py-8" style={{ zIndex: 1 }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          (c) 2024 <span className="text-[var(--cyan)]">Kirill Makarov</span>. Unity Developer & Tech Lead.
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <span>Built with</span>
          <span className="text-[var(--magenta)]">heart</span>
          <span>and</span>
          <span className="text-[var(--cyan)]">precision</span>
          <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[var(--neon-green)] pulse-dot" />
        </div>
      </div>
    </footer>
  );
}
