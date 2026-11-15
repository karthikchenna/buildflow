export const SITE = {
  name: 'Build Flow Studio',
  shortName: 'BuildFlow',
  tagline: 'Automate. Accelerate. Achieve.',
  description:
    'Build Flow Studio helps businesses simplify operations, improve efficiency, generate qualified leads, and grow digitally through AI-powered workflow automation, lead generation, website development, and custom application development.',
  email: 'hello@buildflowstudio.com',
  phone: '+91 90000 00000',
  whatsapp: 'https://wa.me/919000000000',
  linkedin: 'https://www.linkedin.com/company/buildflowstudio',
  instagram: 'https://www.instagram.com/buildflowstudio',
  location: 'Serving startups and businesses worldwide',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'AI & Workflow Automation', to: '/services/ai-automation' },
      { label: 'Lead Generation', to: '/services/lead-generation' },
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'Application Development', to: '/services/app-development' },
    ],
  },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About Us', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]
