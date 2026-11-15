import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'
import ServiceCard from '../components/ui/ServiceCard'
import CTASection from '../components/ui/CTASection'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="AI automation, B2B lead generation, website development, and custom applications from Build Flow Studio."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Capabilities built for growing operators"
        description="Choose a practice area or start with the bottleneck: slow processes, thin pipeline, a site that does not convert, or tools that cannot keep up."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} index={index + 1} {...service} />
          ))}
        </div>
      </section>
      <div className="pb-16">
        <CTASection title="Not sure which service you need?" description="Describe the bottleneck. We will tell you whether the first move is automation, pipeline, web, or a custom app." />
      </div>
    </>
  )
}
