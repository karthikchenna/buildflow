import Seo from '../components/ui/Seo'
import { PrimaryButton, SecondaryButton } from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you requested does not exist." path="/404" />
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">404</p>
        <h1 className="mt-3 text-4xl font-extrabold">This route is not in the system</h1>
        <p className="mt-4 max-w-md text-muted">The page may have moved, or the URL is incomplete. Head home or jump to services.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton to="/">Back home</PrimaryButton>
          <SecondaryButton to="/services">View services</SecondaryButton>
        </div>
      </section>
    </>
  )
}
