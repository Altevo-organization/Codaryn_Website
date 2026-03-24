'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Mail, Phone, TrendingUp } from 'lucide-react'
import { clients } from '@/lib/data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
}

export default function ClientsPage() {
  const [search, setSearch] = useState('')

  const filtered = search
    ? clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()))
    : clients

  const totalRevenue = clients.reduce((sum, c) => sum + c.totalSpent, 0)

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Header with stats */}
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-[#8B93A0] text-xs font-medium">
            {clients.length} clients · {totalRevenue.toLocaleString('fr-FR')} € de revenus totaux
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555E6B]" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher un client…"
            className="w-full pl-9 pr-4 py-2 bg-[#0F1115] border border-white/[0.06] rounded-xl text-sm text-[#F0F2F5] placeholder-[#555E6B] focus:outline-none focus:border-[#4F7CFF]/50 transition-colors"
          />
        </div>
      </motion.div>

      {/* Clients grid */}
      <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((client, i) => (
          <motion.div
            key={client.id}
            variants={item}
            className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.1] transition-colors"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#4F7CFF] text-xs font-bold">
                  {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-[#F0F2F5] font-semibold text-sm leading-snug">{client.name}</p>
                  <span className="text-[#4F7CFF] font-bold text-sm flex-shrink-0">{client.totalSpent.toLocaleString('fr-FR')} €</span>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-1.5 text-[#555E6B] text-xs">
                    <Mail size={11} />
                    <span className="truncate">{client.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#555E6B] text-xs">
                    <Phone size={11} />
                    <span>{client.phone}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <TrendingUp size={11} className="text-[#4F7CFF]" />
                    <span className="text-[#8B93A0]">
                      <span className="text-[#F0F2F5] font-medium">{client.bookingCount}</span> réservation{client.bookingCount > 1 ? 's' : ''}
                    </span>
                  </div>
                  <span className="text-[#555E6B] text-xs">Dernière visite : {client.lastVisit}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[#555E6B] text-sm">
          Aucun client trouvé
        </div>
      )}
    </motion.div>
  )
}
