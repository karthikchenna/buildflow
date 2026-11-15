import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'

const sections = [
  {
    title: 'Engagements',
    body: 'Work begins only after a written proposal or statement of work is accepted. Timelines, deliverables, and fees are defined per project.',
  },
  {
    title: 'Intellectual property',
    body: 'Upon full payment, you own the agreed deliverables created specifically for your project. We retain the right to reuse general methods, components, and non-confidential know-how.',
  },
  {
    title: 'Client materials',
    body: 'You confirm you have the rights to content, data, and credentials you provide, and that they may be used to deliver the work.',
  },
  {
    title: 'Limitation',
    body: 'To the extent permitted by law, Build Flow Studio is not liable for indirect or consequential losses. Liability is limited to fees paid for the relevant engagement.',
  },
  {
    title: 'Website',
    body: 'Case studies and portfolio items may use representative names and figures. Contact details in the footer can be updated as the studio’s public channels go live.',
  },
]

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" description="Terms of using the Build Flow Studio website and engaging the studio." path="/terms" />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Terms & Conditions' },
        ]}
      />
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-14 sm:px-6">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-xl font-bold">{section.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
          </article>
        ))}
      </section>
    </>
  )
}
