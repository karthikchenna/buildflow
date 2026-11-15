import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'

const sections = [
  {
    title: 'Information we collect',
    body: 'When you submit an enquiry, we collect the details you provide: name, email, company, service interest, budget range, and project notes. Analytics may record anonymised usage data such as pages viewed.',
  },
  {
    title: 'How we use it',
    body: 'Enquiry data is used to respond to your request, scope work, and — if we work together — to deliver the engagement. We do not sell personal information.',
  },
  {
    title: 'Storage and future systems',
    body: 'Enquiries may be stored in a database (including Supabase once connected), emailed to the studio, and processed by automation tools such as n8n for notifications. Access is limited to people who need it to respond.',
  },
  {
    title: 'Retention',
    body: 'We keep enquiry records for as long as needed to manage the relationship and our legal obligations, then delete or anonymise them.',
  },
  {
    title: 'Your choices',
    body: 'Email hello@buildflowstudio.com to request access, correction, or deletion of personal data we hold about you.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy" description="How Build Flow Studio collects and uses enquiry and website data." path="/privacy-policy" />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy describes how Build Flow Studio handles information collected through the website and enquiry form."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Privacy Policy' },
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
