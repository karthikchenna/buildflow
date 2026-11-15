import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTASection from '../components/ui/CTASection'
import { faqs } from '../data/faqs'

export default function FAQ() {
  return (
    <>
      <Seo title="FAQ" description="Answers about working with Build Flow Studio on automation, leads, websites, and applications." path="/faq" />
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before the kickoff call"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'FAQ' },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <FAQAccordion items={faqs} />
      </section>
      <div className="pb-16">
        <CTASection />
      </div>
    </>
  )
}
