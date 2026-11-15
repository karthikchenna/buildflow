import { useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'
import CTASection from '../components/ui/CTASection'
import { services } from '../data/services'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <NotFound />

  return (
    <>
      <Seo title={service.title} description={service.summary} path={service.path} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-extrabold">What we deliver</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.offerings.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-2xl border border-line bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Outcomes</p>
          <ul className="mt-4 space-y-3">
            {service.outcomes.map((item) => (
              <li key={item} className="border-b border-line pb-3 text-sm text-muted last:border-0">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <section className="border-y border-line bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold">Engagement path</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-line bg-card p-5">
                <p className="text-xs font-semibold text-cyan">0{index + 1}</p>
                <h3 className="mt-3 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="py-16">
        <CTASection title={`Talk to us about ${service.title.toLowerCase()}`} />
      </div>
    </>
  )
}
