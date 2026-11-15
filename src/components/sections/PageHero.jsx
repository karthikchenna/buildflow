import Breadcrumb from '../ui/Breadcrumb'

export default function PageHero({ eyebrow, title, description, crumbs }) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-bg">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {crumbs && <Breadcrumb items={crumbs} />}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>}
      </div>
    </header>
  )
}
