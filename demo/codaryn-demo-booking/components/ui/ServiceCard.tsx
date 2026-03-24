'use client'

import { Clock, Euro, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Service, ServiceColor } from '@/lib/data'

const colorMap: Record<ServiceColor, { bg: string; text: string; border: string; dot: string }> = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', dot: 'bg-blue-400' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20', dot: 'bg-violet-400' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', dot: 'bg-amber-400' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', dot: 'bg-emerald-400' },
  rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20', dot: 'bg-rose-400' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20', dot: 'bg-cyan-400' },
}

interface ServiceCardProps {
  service: Service
  onSelect: (service: Service) => void
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const colors = colorMap[service.color]
  const durationLabel = service.duration >= 60
    ? `${service.duration / 60}h${service.duration % 60 ? (service.duration % 60) + 'min' : ''}`
    : `${service.duration}min`

  return (
    <motion.div
      className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-4 cursor-pointer hover:border-white/[0.12] transition-all duration-200"
      whileHover={{ y: -2, scale: 1.01 }}
      onClick={() => onSelect(service)}
    >
      <div className="flex items-start justify-between">
        <div className={`w-9 h-9 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
          <div className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
        </div>
        <ArrowRight size={16} className="text-[#555E6B] mt-0.5" />
      </div>

      <div>
        <h3 className="text-[#F0F2F5] font-semibold text-base leading-snug mb-1">{service.name}</h3>
        <p className="text-[#8B93A0] text-sm leading-relaxed">{service.description}</p>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
        <div className="flex items-center gap-1.5 text-[#8B93A0] text-sm">
          <Clock size={13} />
          <span>{durationLabel}</span>
        </div>
        <div className={`flex items-center gap-1 font-bold text-base ${colors.text}`}>
          <span>{service.price} €</span>
        </div>
      </div>
    </motion.div>
  )
}
