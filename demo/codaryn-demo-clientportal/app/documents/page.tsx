'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import StatusBadge from '@/components/ui/StatusBadge'
import { documents } from '@/lib/data'
import type { DocumentType } from '@/lib/data'
import {
  FileText,
  Download,
  Filter,
} from 'lucide-react'

const ALL_TYPES: ('Tous' | DocumentType)[] = [
  'Tous',
  'Spécification',
  'Design',
  'Contrat',
  'Technique',
  'Livraison',
  'Commercial',
]

const fileIcons: Record<string, string> = {
  '.pdf': 'PDF',
  '.figma': 'FIG',
}

function getExt(filename: string) {
  const match = filename.match(/\.[^.]+$/)
  return match ? match[0] : ''
}

function getExtLabel(filename: string) {
  const ext = getExt(filename)
  return fileIcons[ext] ?? ext.replace('.', '').toUpperCase()
}

const extColors: Record<string, string> = {
  '.pdf': 'bg-red-500/10 text-red-400 border-red-500/20',
  '.figma': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
}

export default function DocumentsPage() {
  const [activeFilter, setActiveFilter] = useState<'Tous' | DocumentType>('Tous')

  const filtered = activeFilter === 'Tous'
    ? documents
    : documents.filter((d) => d.type === activeFilter)

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Page Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#F0F2F5]">Documents</h2>
            <p className="text-sm text-[#8B93A0] mt-1">{documents.length} fichiers partagés</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#555E6B]">
            <Filter size={13} />
            <span>Filtrer par type</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {ALL_TYPES.map((type) => {
            const active = activeFilter === type
            const count = type === 'Tous'
              ? documents.length
              : documents.filter((d) => d.type === type).length

            return (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`
                  text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150
                  ${active
                    ? 'bg-[#4F7CFF]/15 text-[#4F7CFF] border border-[#4F7CFF]/30'
                    : 'bg-white/[0.04] text-[#8B93A0] border border-white/[0.06] hover:text-[#F0F2F5] hover:bg-white/[0.06]'
                  }
                `}
              >
                {type}
                <span className={`ml-1.5 ${active ? 'text-[#4F7CFF]/70' : 'text-[#555E6B]'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Documents Table */}
        <div className="bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-6 py-3.5">
                    Fichier
                  </th>
                  <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3.5 hidden sm:table-cell">
                    Type
                  </th>
                  <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3.5 hidden md:table-cell">
                    Date
                  </th>
                  <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3.5 hidden md:table-cell">
                    Taille
                  </th>
                  <th className="px-6 py-3.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <FileText size={24} className="text-[#555E6B] mx-auto mb-2" />
                      <p className="text-sm text-[#555E6B]">Aucun document pour ce filtre</p>
                    </td>
                  </tr>
                ) : (
                  filtered.map((doc) => {
                    const ext = getExt(doc.filename)
                    const extLabel = getExtLabel(doc.filename)
                    const extColor = extColors[ext] ?? 'bg-white/5 text-[#8B93A0] border-white/10'

                    return (
                      <tr
                        key={doc.id}
                        className="hover:bg-white/[0.02] transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${extColor}`}>
                              {extLabel}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-[#F0F2F5] truncate max-w-[220px]">
                                {doc.filename}
                              </p>
                              <div className="flex items-center gap-2 mt-0.5 sm:hidden">
                                <StatusBadge status={doc.type} size="sm" />
                                <span className="text-[11px] text-[#555E6B]">{doc.date}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4 hidden sm:table-cell">
                          <StatusBadge status={doc.type} size="sm" />
                        </td>
                        <td className="px-3 py-4 hidden md:table-cell">
                          <span className="text-sm text-[#8B93A0]">{doc.date}</span>
                        </td>
                        <td className="px-3 py-4 hidden md:table-cell">
                          <span className="text-sm text-[#555E6B]">{doc.size}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="inline-flex items-center gap-1.5 text-xs font-medium text-[#555E6B] group-hover:text-[#4F7CFF] border border-white/[0.06] group-hover:border-[#4F7CFF]/30 bg-white/[0.03] group-hover:bg-[#4F7CFF]/10 px-3 py-1.5 rounded-lg transition-all duration-150">
                            <Download size={12} />
                            <span className="hidden sm:inline">Télécharger</span>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AppShell>
  )
}
