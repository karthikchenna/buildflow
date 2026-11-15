export const caseStudies = [
  {
    slug: 'northline-ops',
    title: 'From inbox chaos to an operations desk that runs itself',
    client: 'Northline Logistics',
    industry: 'Logistics',
    service: 'AI & Workflow Automation',
    duration: '10 weeks',
    challenge:
      'Exception emails, WhatsApp screenshots, and spreadsheet trackers were the real operating system. Nothing was owned until someone noticed it was late.',
    approach: [
      'Mapped the exception lifecycle from first alert to closed loop.',
      'Built n8n workflows that ingested email, TMS events, and form submissions.',
      'Created assignment rules, SLA timers, and a lightweight ops dashboard.',
      'Added a chatbot for status questions so coordinators were not the search engine.',
    ],
    results: [
      { label: 'Exception cycle time', value: '-38%' },
      { label: 'Manual status checks', value: '-70%' },
      { label: 'Missed follow-ups', value: '-54%' },
    ],
  },
  {
    slug: 'helix-pipeline',
    title: 'A repeatable meeting engine for a specialist advisory firm',
    client: 'Helix Advisory',
    industry: 'Professional services',
    service: 'Lead Generation',
    duration: '12 weeks',
    challenge:
      'Growth depended on referrals. The team had no reliable way to open conversations with the right finance leaders in two new regions.',
    approach: [
      'Tightened ICP around company size, systems in use, and buying triggers.',
      'Built verified prospect lists with role-level context, not scraped dumps.',
      'Wrote sequence angles based on operating problems, not generic capability claims.',
      'Handed booked meetings into CRM with notes, source, and next-step templates.',
    ],
    results: [
      { label: 'Qualified meetings', value: '3.1x' },
      { label: 'Show rate', value: '91%' },
      { label: 'Pipeline created', value: 'New region live' },
    ],
  },
  {
    slug: 'meridian-portal',
    title: 'A clinic group that stopped running on phone tag',
    client: 'Meridian Clinic Group',
    industry: 'Healthcare operations',
    service: 'Application Development',
    duration: '16 weeks',
    challenge:
      'Front-desk teams spent their day on rescheduling calls. Patients had no self-serve view of appointments, and reminders were inconsistent.',
    approach: [
      'Designed a patient portal and staff admin around existing appointment rules.',
      'Integrated scheduling, reminder automation, and a simple records request flow.',
      'Built role-based access for clinicians, front desk, and group admins.',
      'Connected no-show patterns back into reminder timing.',
    ],
    results: [
      { label: 'No-show rate', value: '-61%' },
      { label: 'Phone volume', value: '-33%' },
      { label: 'Patient self-serve', value: 'Live in 4 clinics' },
    ],
  },
]
