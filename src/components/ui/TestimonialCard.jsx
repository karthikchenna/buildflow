export default function TestimonialCard({ quote, name, role, company }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 card-glow">
      <blockquote className="text-[15px] leading-relaxed text-white/90">“{quote}”</blockquote>
      <figcaption className="mt-8">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-muted">
          {role}, {company}
        </p>
      </figcaption>
    </figure>
  )
}
