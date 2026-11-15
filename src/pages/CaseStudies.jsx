import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'
import CTASection from '../components/ui/CTASection'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies"
        description="How Build Flow Studio rebuilt operations, pipeline, and software for growing teams."
        path="/case-studies"
      />
      <PageHero
        eyebrow="Case studies"
        title="What changed after the system went live"
        description="Three engagements, written as operating stories rather than award-style recaps."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Case Studies' },
        ]}
      />
      <section className="mx-auto max-w-6xl space-y-8 px-4 py-14 sm:px-6">
        {caseStudies.map((study) => (
          <article key={study.slug} className="rounded-3xl border border-line bg-card p-6 sm:p-10 card-glow">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{study.service}</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-extrabold sm:text-3xl">{study.title}</h2>
            <p className="mt-3 text-sm text-muted">
              {study.client} · {study.industry} · {study.duration}
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">The constraint</h3>
                <p className="mt-3 leading-relaxed text-muted">{study.challenge}</p>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em]">What we did</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {study.approach.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {study.results.map((result) => (
                  <div key={result.label} className="rounded-2xl border border-line bg-bg px-5 py-4">
                    <p className="text-2xl font-extrabold text-white">{result.value}</p>
                    <p className="mt-1 text-sm text-muted">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
      <div className="pb-16">
        <CTASection />
      </div>
    </>
  )
}
