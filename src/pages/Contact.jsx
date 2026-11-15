import { Mail, MessageCircle, MapPin } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'
import ContactForm from '../components/ui/ContactForm'
import { SITE } from '../data/site'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Request a quote from Build Flow Studio for automation, lead generation, websites, or custom applications."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us the bottleneck"
        description="Share a little context. We reply within one business day with next questions or a proposed first slice of work."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="space-y-4">
          <a href={`mailto:${SITE.email}`} className="block rounded-2xl border border-line bg-card p-5 hover:border-cyan/40">
            <Mail className="h-5 w-5 text-cyan" />
            <p className="mt-3 font-semibold">Email</p>
            <p className="mt-1 text-sm text-muted">{SITE.email}</p>
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-line bg-card p-5 hover:border-cyan/40"
          >
            <MessageCircle className="h-5 w-5 text-cyan" />
            <p className="mt-3 font-semibold">WhatsApp</p>
            <p className="mt-1 text-sm text-muted">Message the studio</p>
          </a>
          <div className="rounded-2xl border border-line bg-card p-5">
            <MapPin className="h-5 w-5 text-cyan" />
            <p className="mt-3 font-semibold">Coverage</p>
            <p className="mt-1 text-sm text-muted">{SITE.location}</p>
          </div>
        </aside>
        <div className="rounded-3xl border border-line bg-card p-6 sm:p-8 card-glow">
          <h2 className="text-xl font-bold">Project enquiry</h2>
          <p className="mt-2 mb-6 text-sm text-muted">Fields marked by validation are required. Budget is optional.</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
