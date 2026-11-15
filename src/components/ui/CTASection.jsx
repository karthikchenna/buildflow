import { ArrowRight } from 'lucide-react'
import { PrimaryButton, SecondaryButton } from './Button'

export default function CTASection({
  title = 'Ready to put the business on a cleaner operating system?',
  description = 'Tell us where work is leaking time, leads, or clarity. We will come back with a practical path — not a generic pitch deck.',
}) {
  return (
    <section className="px-4 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Start a conversation</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-muted leading-relaxed">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton to="/contact" size="lg">
              Get a quote <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton to="/case-studies" size="lg">
              View case studies
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
