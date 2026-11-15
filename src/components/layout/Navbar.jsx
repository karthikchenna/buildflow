import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import { PrimaryButton } from '../ui/Button'
import { NAV_LINKS } from '../../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open ? 'border-line bg-bg/90 backdrop-blur-md' : 'border-transparent bg-bg/40 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Logo compact />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive || location.pathname.startsWith('/services')
                        ? 'text-white'
                        : 'text-muted hover:text-white'
                    }`
                  }
                >
                  {link.label}
                  <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
                </NavLink>
                <div
                  className={`absolute left-0 top-full w-72 origin-top pt-2 transition ${
                    servicesOpen ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <div className="rounded-2xl border border-line bg-card p-2 shadow-2xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block rounded-xl px-3 py-2.5 text-sm text-muted transition hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <PrimaryButton to="/contact">Get a Quote</PrimaryButton>
        </div>
        <button
          type="button"
          className="lg:hidden rounded-full border border-line p-2 text-white"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-2 py-3 text-left text-sm font-medium"
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="mb-2 ml-3 flex flex-col border-l border-line pl-3">
                      <Link to={link.to} className="py-2 text-sm text-muted">
                        All services
                      </Link>
                      {link.children.map((child) => (
                        <Link key={child.to} to={child.to} className="py-2 text-sm text-muted">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.to} to={link.to} className="px-2 py-3 text-sm font-medium">
                  {link.label}
                </Link>
              ),
            )}
            <PrimaryButton to="/contact" className="mt-3 w-full">
              Get a Quote
            </PrimaryButton>
          </nav>
        </div>
      )}
    </header>
  )
}
