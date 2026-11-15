import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { services } from '../../data/services'
import { PrimaryButton } from './Button'
import { useToast } from './Toast'

const budgets = ['Under $2k', '$2k – $8k', '$8k – $20k', '$20k+', 'Not sure yet']

export default function ContactForm() {
  const toast = useToast()
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (values) => {
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
    const existing = JSON.parse(localStorage.getItem('bfs-enquiries') || '[]')
    existing.push({ ...values, createdAt: new Date().toISOString() })
    localStorage.setItem('bfs-enquiries', JSON.stringify(existing))
    setSubmitting(false)
    reset()
    toast.show('Enquiry received. We will reply within one business day.')
  }

  const fieldClass =
    'w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/70 focus:border-cyan'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2" noValidate>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-sm font-medium">Full name</span>
        <input className={fieldClass} placeholder="Ada Okonkwo" {...register('name', { required: 'Name is required' })} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Work email</span>
        <input
          className={fieldClass}
          type="email"
          placeholder="you@company.com"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email' },
          })}
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Company</span>
        <input className={fieldClass} placeholder="Company name" {...register('company')} />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Service</span>
        <select className={fieldClass} defaultValue="" {...register('service', { required: 'Select a service' })}>
          <option value="" disabled>
            What do you need?
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Not sure">Not sure yet</option>
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-sm font-medium">Budget range</span>
        <select className={fieldClass} defaultValue="" {...register('budget')}>
          <option value="" disabled>
            Optional
          </option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-sm font-medium">Project notes</span>
        <textarea
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="What is slowing the team down, and what would a good outcome look like?"
          {...register('message', { required: 'Tell us a little about the project' })}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </label>
      <div className="sm:col-span-2 flex items-center justify-between gap-4">
        <p className="text-xs text-muted">We reply from hello@buildflowstudio.com. No automated spam sequences.</p>
        <PrimaryButton type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send enquiry'}
        </PrimaryButton>
      </div>
    </form>
  )
}
