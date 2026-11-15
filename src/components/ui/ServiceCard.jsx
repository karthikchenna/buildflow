import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ title, short, path, offerings = [], index }) {
  return (
    <Link
      to={path}
      className="group relative flex flex-col rounded-2xl border border-line bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 card-glow"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-muted">0{index}</span>
        <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-cyan" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{short}</p>
      <ul className="mt-6 space-y-2 text-sm text-muted">
        {offerings.slice(0, 4).map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-cyan" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <span className="mt-8 text-sm font-semibold text-accent group-hover:text-cyan">Explore service</span>
    </Link>
  )
}
