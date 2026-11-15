import { motion } from 'motion/react'

const nodes = [
  { id: 'Lead', x: 18, y: 72 },
  { id: 'Qualify', x: 38, y: 48 },
  { id: 'CRM', x: 58, y: 58 },
  { id: 'Book', x: 78, y: 28 },
]

export default function WorkflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-card p-6 card-glow">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-muted">Live operating flow</p>
      <svg viewBox="0 0 100 100" className="relative mt-4 h-64 w-full sm:h-80">
        <defs>
          <linearGradient id="flowLine" x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path
          d="M18 72 C 28 72, 30 48, 38 48 S 50 58, 58 58 S 68 28, 78 28"
          fill="none"
          stroke="url(#flowLine)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {nodes.map((node, index) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4.2"
              fill="#080D1A"
              stroke="#22D3EE"
              strokeWidth="1.2"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.35 }}
            />
            <text x={node.x} y={node.y - 7} textAnchor="middle" fill="#A1AFC2" fontSize="4.2" fontFamily="Manrope">
              {node.id}
            </text>
          </g>
        ))}
      </svg>
      <div className="relative grid grid-cols-3 gap-3 text-center text-[11px] text-muted">
        <div className="rounded-xl border border-line bg-bg/60 px-2 py-3">Capture</div>
        <div className="rounded-xl border border-line bg-bg/60 px-2 py-3">Automate</div>
        <div className="rounded-xl border border-line bg-bg/60 px-2 py-3">Convert</div>
      </div>
    </div>
  )
}
