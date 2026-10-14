import { PlayCircle } from 'lucide-react';
import type { ProjectCaseStudy } from '../data/projects';

interface ProjectVideoProps {
  project: ProjectCaseStudy;
  className?: string;
}

export default function ProjectVideo({ project, className = '' }: ProjectVideoProps) {
  const video = project.videoSlot;
  if (!video) return null;

  return (
    <section className={`${video.featured ? 'case-hero' : 'case-panel'} rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/55 p-4 sm:p-6 ${className}`}>
      <h2 className="flex items-center gap-2 text-lg font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        <PlayCircle size={18} className="shrink-0 text-[var(--magenta)]" aria-hidden="true" />
        {video.featured ? 'Gameplay showcase' : 'Demo video'}
      </h2>
      <div className="mt-5 overflow-hidden rounded-[22px] border border-[var(--border-color)] bg-[var(--bg-primary)]/60 p-2 sm:p-3">
        <video
          className="aspect-video w-full rounded-[18px] bg-black object-contain"
          aria-label={`${project.title} gameplay demonstration`}
          controls
          playsInline
          preload="metadata"
          poster={video.poster ?? project.heroImage}
        >
          <source src={video.path} type="video/mp4" />
          Your browser does not support video playback. <a href={video.path}>Open the gameplay video</a>.
        </video>
        <p className="mt-3 px-1 text-sm leading-relaxed text-[var(--text-secondary)]">{video.caption}</p>
        {video.credit ? (
          <p className="mt-2 px-1 text-sm leading-relaxed text-[var(--text-secondary)]">
            Music: <a className="text-[var(--cyan)] underline underline-offset-4 hover:text-[var(--text-primary)]" href={video.credit.url} target="_blank" rel="noreferrer">{video.credit.title}</a>
            {' · '}
            <a className="underline underline-offset-4 hover:text-[var(--text-primary)]" href={video.credit.licenseUrl} target="_blank" rel="noreferrer">{video.credit.license}</a>
            {' · edited excerpt'}
          </p>
        ) : null}
      </div>
    </section>
  );
}
