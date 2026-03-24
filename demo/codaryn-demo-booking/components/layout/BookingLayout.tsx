'use client'

import Link from 'next/link'
import { Camera } from 'lucide-react'
import { studio } from '@/lib/data'

interface BookingLayoutProps {
  children: React.ReactNode
  step?: 1 | 2 | 3
}

const steps = [
  { num: 1, label: 'Service' },
  { num: 2, label: 'Créneau' },
  { num: 3, label: 'Confirmation' },
]

export default function BookingLayout({ children, step }: BookingLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B0B0C] flex flex-col">
      {/* Header */}
      <header className="border-b border-white/[0.06] bg-[#0F1115]">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/booking" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#4F7CFF] flex items-center justify-center">
              <Camera size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[#F0F2F5] font-semibold text-sm leading-tight">{studio.name}</p>
              <p className="text-[#555E6B] text-[11px]">{studio.address}</p>
            </div>
          </Link>

          <Link
            href="/dashboard"
            className="text-[#8B93A0] hover:text-[#F0F2F5] text-xs font-medium transition-colors hidden sm:block"
          >
            Espace Pro →
          </Link>
        </div>
      </header>

      {/* Progress steps */}
      {step && (
        <div className="border-b border-white/[0.04] bg-[#0F1115]/50">
          <div className="max-w-5xl mx-auto px-5 py-3 flex items-center gap-0">
            {steps.map((s, i) => {
              const isActive = s.num === step
              const isDone = s.num < (step ?? 0)
              return (
                <div key={s.num} className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      isActive
                        ? 'bg-[#4F7CFF] text-white'
                        : isDone
                        ? 'bg-[#4F7CFF]/20 text-[#4F7CFF]'
                        : 'bg-white/[0.06] text-[#555E6B]'
                    }`}>
                      {s.num}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${
                      isActive ? 'text-[#F0F2F5]' : isDone ? 'text-[#4F7CFF]' : 'text-[#555E6B]'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-8 sm:w-12 h-px mx-2 ${isDone ? 'bg-[#4F7CFF]/40' : 'bg-white/[0.08]'}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-5 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-4">
        <p className="text-[#555E6B] text-xs text-center font-medium">
          Démo — Codaryn Software Studio
        </p>
      </footer>
    </div>
  )
}
