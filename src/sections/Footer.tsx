export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-color)] px-4 py-8" style={{ zIndex: 1 }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          (c) {new Date().getFullYear()} <span className="text-[var(--cyan)]">Kirill Makarov</span>. Unity Developer / Technical Game Developer.
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <span>React</span>
          <span className="text-[var(--magenta)]">·</span>
          <span>TypeScript</span>
          <span className="text-[var(--cyan)]">·</span>
          <span>Vite</span>
        </div>
      </div>
    </footer>
  );
}
