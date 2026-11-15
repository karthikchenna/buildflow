import { useId } from 'react'
import { Link } from 'react-router-dom'

export function LogoMark({ className = 'h-10 w-10' }) {
  const gradId = `logo-top-${useId().replace(/:/g, '')}`
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 8L54 20.5V45.5L32 58L10 45.5V20.5L32 8Z" fill="#1E40AF" />
      <path d="M32 8L54 20.5L32 33L10 20.5L32 8Z" fill={`url(#${gradId})`} />
      <path d="M10 20.5L32 33V58L10 45.5V20.5Z" fill="#2563EB" />
      <path d="M54 20.5L32 33V58L54 45.5V20.5Z" fill="#22D3EE" />
      <path
        d="M14 40C19.5 35.5 24 42 29 37.5C34 33 38.5 35 43 28.5C47.5 22 51 24 56 18.5"
        stroke="#080D1A"
        strokeWidth="3.1"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="14" cy="40" r="3.1" fill="#60A5FA" />
      <circle cx="29" cy="37.5" r="3.1" fill="#22D3EE" />
      <circle cx="43" cy="28.5" r="3.1" fill="#67E8F9" />
      <circle cx="56" cy="18.5" r="3.1" fill="#A5F3FC" />
      <defs>
        <linearGradient id={gradId} x1="10" y1="8" x2="54" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Logo({ compact = false, to = '/' }) {
  return (
    <Link to={to} className="flex items-center gap-3 group" aria-label="Build Flow Studio home">
      <LogoMark className={compact ? 'h-9 w-9' : 'h-11 w-11'} />
      <span className="leading-none">
        <span className="block text-[17px] sm:text-lg font-extrabold tracking-tight">
          <span className="text-white">Build</span>
          <span className="text-cyan">Flow</span>
        </span>
        {!compact && (
          <span className="mt-1 block text-[10px] font-semibold tracking-[0.32em] text-muted uppercase">
            Studio
          </span>
        )}
      </span>
    </Link>
  )
}
