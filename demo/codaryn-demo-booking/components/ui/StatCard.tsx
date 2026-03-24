'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface StatCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  sub?: string
  accent?: boolean
}

export default function StatCard({ label, value, icon: Icon, sub, accent }: StatCardProps) {
  return (
    <motion.div
      className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-3"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex items-center justify-between">
        <p className="text-[#8B93A0] text-xs font-medium uppercase tracking-wide">{label}</p>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${accent ? 'bg-[#4F7CFF]/15' : 'bg-white/[0.05]'}`}>
          <Icon size={15} className={accent ? 'text-[#4F7CFF]' : 'text-[#8B93A0]'} />
        </div>
      </div>
      <div>
        <p className="text-[#F0F2F5] text-2xl font-bold tracking-tight">{value}</p>
        {sub && <p className="text-[#555E6B] text-xs mt-1">{sub}</p>}
      </div>
    </motion.div>
  )
}
