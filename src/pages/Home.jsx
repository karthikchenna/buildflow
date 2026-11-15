import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { PrimaryButton, SecondaryButton } from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import ProjectCard from '../components/ui/ProjectCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import CTASection from '../components/ui/CTASection'
import WorkflowVisual from '../components/sections/WorkflowVisual'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { testimonials } from '../data/testimonials'

const principles = [
  {
    title: 'Operating systems, not one-off scripts',
    body: 'Every workflow has an owner, an exception path, and a way to see what failed.',
  },
  {
    title: 'Clarity before volume',
    body: 'Lead work starts with ICP and offer, not a purchased list and a sequence template.',
  },
  {
    title: 'Interfaces people will actually use',
    body: 'Websites and internal tools are designed around the job to be done, then the visual polish.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Digital Solutions & AI Automation"
        description="Build Flow Studio helps businesses automate operations, generate qualified leads, and grow with premium websites and custom applications."
        path="/"
      />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Automate. Accelerate. Achieve.</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Digital systems that <span className="gradient-text">move work forward</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Build Flow Studio helps startups and growing businesses simplify operations, generate qualified leads, and
              ship websites and applications that look as considered as they perform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/contact" size="lg">
                Get a quote <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton to="/services" size="lg">
                Explore services
              </SecondaryButton>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
              {[
                ['4', 'core practices'],
                ['n8n', 'first automation'],
                ['B2B', 'pipeline work'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-xl font-extrabold text-white">{value}</p>
                  <p className="mt-1 text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <WorkflowVisual />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="What we build"
          title="Four capabilities, one studio"
          description="Automation, pipeline, websites, and applications — designed to work as a connected system instead of four disconnected vendors."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} index={index + 1} {...service} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="How we work"
            title="Diagnose the bottleneck, then instrument the flow"
            description="We start with the operating problem: a slow handoff, a quiet pipeline, a website that cannot explain the offer, or a team living in spreadsheets."
          />
          <ul className="space-y-5">
            {principles.map((item) => (
              <li key={item.title} className="flex gap-3 rounded-2xl border border-line bg-card p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Proof in the operating numbers"
          description="A sample of engagements across automation, lead generation, web, and product."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <SectionHeading eyebrow="Client notes" title="Teams we have worked alongside" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      <div className="py-8">
        <CTASection />
      </div>
    </>
  )
}
