import { Link } from 'react-router-dom'
import { Mail, MessageCircle } from 'lucide-react'
import Logo from '../ui/Logo'
import { FOOTER_QUICK_LINKS, SITE } from '../../data/site'
import { services } from '../../data/services'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Digital systems for teams that need automation, qualified pipeline, and software that matches how they actually work.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Quick links</h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted hover:text-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h3>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={service.path} className="text-sm text-muted hover:text-cyan">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-muted hover:text-cyan">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-cyan"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-cyan"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center text-[11px] font-bold">in</span> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-cyan"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-current text-[9px] font-bold">ig</span> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Build Flow Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-cyan">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cyan">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
