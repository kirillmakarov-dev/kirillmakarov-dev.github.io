import { ArrowDown, ArrowRight } from 'lucide-react';
import type { ArchitectureLane } from '../data/projects';

interface ArchitectureFlowDiagramProps {
  lanes: ArchitectureLane[];
  accent: string;
}

export default function ArchitectureFlowDiagram({ lanes, accent }: ArchitectureFlowDiagramProps) {
  const hasOptionalLane = lanes.some((lane) => lane.optional);

  return (
    <section className="mt-6" aria-label="System architecture flow">
      <div className="grid min-w-0 gap-4">
        {lanes.map((lane) => (
          <article
            key={lane.title}
            className={`min-w-0 rounded-2xl border bg-[var(--bg-primary)]/55 p-4 ${
              lane.optional ? 'border-dashed border-[var(--border-color)]' : 'border-[var(--border-color)]'
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3
                className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--text-primary)]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {lane.title}
              </h3>
              {lane.optional ? (
                <span className="rounded-full border border-dashed border-[var(--border-color)] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  Optional
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">{lane.description}</p>

            <ol className="mt-4 flex min-w-0 flex-col gap-2 xl:flex-row xl:items-stretch">
              {lane.nodes.map((node, index) => (
                <li key={node} className="flex min-w-0 flex-col items-stretch gap-2 xl:flex-1 xl:flex-row xl:items-center">
                  <div
                    className="min-w-0 flex-1 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/70 px-3 py-3 text-center text-xs leading-relaxed text-[var(--text-primary)]"
                    style={{ boxShadow: `inset 3px 0 0 ${accent}` }}
                  >
                    {node}
                  </div>
                  {index < lane.nodes.length - 1 ? (
                    <>
                      <ArrowDown className="mx-auto text-[var(--text-secondary)] xl:hidden" size={14} aria-hidden="true" />
                      <ArrowRight className="hidden shrink-0 text-[var(--text-secondary)] xl:block" size={14} aria-hidden="true" />
                    </>
                  ) : null}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>

      {hasOptionalLane ? (
        <p className="mt-4 text-xs leading-relaxed text-[var(--text-secondary)]">
          Solid lanes show the authored and solo runtime path. Dashed lanes are optional and do not own shared quest progression.
        </p>
      ) : null}
    </section>
  );
}
