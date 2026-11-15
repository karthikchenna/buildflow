export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
      {description && <p className="mt-4 text-muted text-base sm:text-[17px] leading-relaxed">{description}</p>}
    </div>
  )
}
