import type { ProjectStatus, InvoiceStatus, DocumentType } from '@/lib/data'

type BadgeVariant = ProjectStatus | InvoiceStatus | DocumentType

interface StatusBadgeProps {
  status: BadgeVariant
  size?: 'sm' | 'md'
}

const variantStyles: Record<string, string> = {
  'En cours': 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  'Terminé': 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  'En pause': 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  'Payée': 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  'En attente': 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  'En retard': 'bg-red-500/10 text-red-400 border border-red-500/20',
  'Spécification': 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
  'Design': 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
  'Contrat': 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
  'Technique': 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
  'Livraison': 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  'Commercial': 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
}

const dotColors: Record<string, string> = {
  'En cours': 'bg-blue-400',
  'Terminé': 'bg-emerald-400',
  'En pause': 'bg-amber-400',
  'Payée': 'bg-emerald-400',
  'En attente': 'bg-amber-400',
  'En retard': 'bg-red-400',
}

export default function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const baseStyle = variantStyles[status] ?? 'bg-white/5 text-white/60 border border-white/10'
  const hasDot = dotColors[status]

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-full
        ${size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1'}
        ${baseStyle}
      `}
    >
      {hasDot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[status]} flex-shrink-0`} />
      )}
      {status}
    </span>
  )
}
