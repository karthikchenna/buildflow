import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'
import CTASection from '../components/ui/CTASection'
import { LogoMark } from '../components/ui/Logo'

const values = [
  {
    title: 'Precision over theatre',
    body: 'We would rather ship a smaller system that operators trust than a dashboard nobody opens.',
  },
  {
    title: 'Integration as craft',
    body: 'CRMs, inboxes, calendars, and internal tools only create leverage when the handoffs are explicit.',
  },
  {
    title: 'Commercial honesty',
    body: 'If the bottleneck is positioning, we will say so before selling another landing page or sequence.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Build Flow Studio is a digital solutions and AI automation agency for startups, SMBs, and growing organisations."
        path="/about"
      />
      <PageHero
        eyebrow="About"
        title="A studio for operators who have outgrown patchwork tools"
        description="Build Flow Studio exists to simplify operations, improve efficiency, generate qualified leads, and grow businesses digitally — without the noise of a generic agency pitch."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center rounded-3xl border border-line bg-card py-12 card-glow">
          <LogoMark className="h-40 w-40" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold">Who we serve</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Startups, small and medium businesses, established organisations, and founders who need a partner that can
            connect automation, acquisition, and product. We work best when there is a real operating constraint — not a
            desire for “more digital.”
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The cube-and-network mark is the point: we build the structure, then we wire the flow that runs through it.
          </p>
        </div>
      </section>
      <section className="border-y border-line bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold">How we think</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="py-16">
        <CTASection />
      </div>
    </>
  )
}
