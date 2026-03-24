import type { ReactNode } from 'react'

interface StatCardProps {
  label: string
  value: string
  iconNode: ReactNode
  sub?: string
}

export default function StatCard({
  label,
  value,
  iconNode,
  sub,
}: StatCardProps) {
  return (
    <div className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-5 flex items-start gap-4 hover:border-white/[0.10] transition-colors duration-200">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.04]">
        {iconNode}
      </div>
      <div className="min-w-0">
        <p className="text-[#8B93A0] text-xs font-medium mb-1 uppercase tracking-wide">{label}</p>
        <p className="text-[#F0F2F5] text-2xl font-semibold leading-none">{value}</p>
        {sub && (
          <p className="text-[#555E6B] text-xs mt-1.5">{sub}</p>
        )}
      </div>
    </div>
  )
}
