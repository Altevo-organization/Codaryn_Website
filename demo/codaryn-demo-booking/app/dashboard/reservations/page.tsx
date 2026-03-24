'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Clock } from 'lucide-react'
import BookingStatusBadge from '@/components/ui/BookingStatusBadge'
import { bookings, Booking } from '@/lib/data'

type Filter = 'all' | 'today' | 'week'

const DEMO_TODAY = '2025-03-24'
const DEMO_WEEK = ['2025-03-24', '2025-03-25', '2025-03-26', '2025-03-27', '2025-03-28', '2025-03-29', '2025-03-30']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
}

export default function ReservationsPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [search, setSearch] = useState('')

  const filtered = bookings.filter(b => {
    if (filter === 'today' && b.date !== DEMO_TODAY) return false
    if (filter === 'week' && !DEMO_WEEK.includes(b.date)) return false
    if (search) {
      const q = search.toLowerCase()
      return b.client.toLowerCase().includes(q) || b.service.toLowerCase().includes(q)
    }
    return true
  })

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'Toutes', count: bookings.length },
    { id: 'today', label: "Aujourd'hui", count: bookings.filter(b => b.date === DEMO_TODAY).length },
    { id: 'week', label: 'Cette semaine', count: bookings.filter(b => DEMO_WEEK.includes(b.date)).length },
  ]

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Filters */}
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-[#0F1115] border border-white/[0.06] rounded-xl p-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === tab.id
                  ? 'bg-[#4F7CFF] text-white'
                  : 'text-[#8B93A0] hover:text-[#F0F2F5]'
              }`}
            >
              {tab.label}
              <span className={`ml-1.5 ${filter === tab.id ? 'text-blue-200' : 'text-[#555E6B]'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555E6B]" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher…"
            className="w-full pl-9 pr-4 py-2 bg-[#0F1115] border border-white/[0.06] rounded-xl text-sm text-[#F0F2F5] placeholder-[#555E6B] focus:outline-none focus:border-[#4F7CFF]/50 transition-colors"
          />
        </div>
      </motion.div>

      {/* Table */}
      <motion.div variants={item} className="bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1fr_1fr_auto_auto_auto] gap-4 px-6 py-3 border-b border-white/[0.06] text-[#555E6B] text-xs font-medium uppercase tracking-wide">
          <span>Client</span>
          <span className="hidden sm:block">Prestation</span>
          <span>Date</span>
          <span className="hidden sm:block">Heure</span>
          <span>Statut</span>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {filtered.length === 0 && (
            <div className="px-6 py-10 text-center text-[#555E6B] text-sm">
              Aucune réservation trouvée
            </div>
          )}
          {filtered.map((booking, i) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0, transition: { delay: i * 0.04 } }}
              className="grid grid-cols-[1fr_1fr_auto_auto_auto] gap-4 px-6 py-4 items-center hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#8B93A0] text-[10px] font-bold">
                    {booking.client.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[#F0F2F5] text-sm font-medium truncate">{booking.client}</p>
                  <p className="text-[#555E6B] text-xs sm:hidden truncate">{booking.service}</p>
                </div>
              </div>
              <div className="hidden sm:block min-w-0">
                <p className="text-[#8B93A0] text-sm truncate">{booking.service}</p>
                {booking.notes && (
                  <p className="text-[#555E6B] text-xs truncate">{booking.notes}</p>
                )}
              </div>
              <p className="text-[#8B93A0] text-sm whitespace-nowrap">{booking.date.split('-').reverse().join('/')}</p>
              <div className="hidden sm:flex items-center gap-1 text-[#555E6B] text-sm">
                <Clock size={12} />
                {booking.time}
              </div>
              <BookingStatusBadge status={booking.status} />
            </motion.div>
          ))}
        </div>

        {/* Footer count */}
        <div className="px-6 py-3 border-t border-white/[0.04] text-[#555E6B] text-xs">
          {filtered.length} réservation{filtered.length > 1 ? 's' : ''}
        </div>
      </motion.div>
    </motion.div>
  )
}
