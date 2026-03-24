'use client'

interface BookingStatusBadgeProps {
  status: 'confirmé' | 'en attente' | 'terminé' | 'annulé'
}

const statusConfig = {
  'confirmé': {
    label: 'Confirmé',
    className: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  },
  'en attente': {
    label: 'En attente',
    className: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  },
  'terminé': {
    label: 'Terminé',
    className: 'bg-white/[0.06] text-[#8B93A0] border border-white/[0.08]',
  },
  'annulé': {
    label: 'Annulé',
    className: 'bg-red-500/10 text-red-400 border border-red-500/20',
  },
}

export default function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  const config = statusConfig[status]
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  )
}
