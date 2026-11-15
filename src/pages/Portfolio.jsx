import { useMemo, useState } from 'react'
import Seo from '../components/ui/Seo'
import PageHero from '../components/sections/PageHero'
import ProjectCard from '../components/ui/ProjectCard'
import CTASection from '../components/ui/CTASection'
import { projects } from '../data/projects'

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'ai-automation', label: 'Automation' },
  { id: 'lead-generation', label: 'Lead gen' },
  { id: 'web-development', label: 'Web' },
  { id: 'app-development', label: 'Apps' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.service === filter)),
    [filter],
  )

  return (
    <>
      <Seo
        title="Portfolio"
        description="Selected Build Flow Studio work across AI automation, lead generation, websites, and custom applications."
        path="/portfolio"
      />
      <PageHero
        eyebrow="Portfolio"
        title="Selected engagements"
        description="A cross-section of systems we have designed and shipped. Detailed narratives live in case studies."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Portfolio' },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === item.id
                  ? 'border-accent bg-accent text-white'
                  : 'border-line text-muted hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <div className="pb-16">
        <CTASection />
      </div>
    </>
  )
}
