import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <Link
      to="/case-studies"
      className="group overflow-hidden rounded-2xl border border-line bg-card card-glow"
    >
      <div className="relative h-44 bg-surface">
        <div className="absolute inset-0 bg-mesh opacity-80" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="rounded-full border border-line bg-bg/70 px-3 py-1 text-[11px] font-medium text-muted backdrop-blur">
            {project.category}
          </span>
          <ArrowUpRight className="h-4 w-4 text-white/70 transition group-hover:text-cyan" />
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          {project.client} · {project.year}
        </p>
        <h3 className="mt-2 text-lg font-bold text-white group-hover:text-cyan transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-4 text-sm font-semibold text-cyan">{project.result}</p>
      </div>
    </Link>
  )
}
