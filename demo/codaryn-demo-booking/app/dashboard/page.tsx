'use client'

import { motion } from 'framer-motion'
import { CalendarDays, TrendingUp, Users, Percent, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import StatCard from '@/components/ui/StatCard'
import BookingStatusBadge from '@/components/ui/BookingStatusBadge'
import { stats, bookings } from '@/lib/data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

const upcomingBookings = bookings
  .filter(b => b.status === 'confirmé' || b.status === 'en attente')
  .slice(0, 5)

export default function DashboardPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Stats */}
      <motion.div variants={container} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div variants={item}>
          <StatCard
            label="Cette semaine"
            value={stats.bookingsThisWeek}
            icon={CalendarDays}
            sub="réservations"
            accent
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard
            label="Ce mois"
            value={stats.bookingsThisMonth}
            icon={TrendingUp}
            sub="réservations"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard
            label="Revenus mois"
            value={`${stats.revenueThisMonth.toLocaleString('fr-FR')} €`}
            icon={TrendingUp}
            sub="en mars 2025"
            accent
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard
            label="Taux d'occupation"
            value={`${stats.occupancyRate}%`}
            icon={Percent}
            sub="créneaux pris"
          />
        </motion.div>
      </motion.div>

      {/* Upcoming bookings */}
      <motion.div variants={item} className="bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <h2 className="text-[#F0F2F5] font-semibold text-sm">Prochaines réservations</h2>
          <Link
            href="/dashboard/reservations"
            className="text-[#4F7CFF] text-xs font-medium hover:text-[#6b93ff] transition-colors flex items-center gap-1"
          >
            Tout voir <ArrowRight size={12} />
          </Link>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {upcomingBookings.map((booking, i) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.06 } }}
              className="px-6 py-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#4F7CFF] text-xs font-bold">
                  {booking.client.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#F0F2F5] text-sm font-medium truncate">{booking.client}</p>
                <p className="text-[#8B93A0] text-xs truncate">{booking.service}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[#F0F2F5] text-xs font-medium">{booking.date}</p>
                <p className="text-[#555E6B] text-xs flex items-center gap-1 justify-end mt-0.5">
                  <Clock size={10} />
                  {booking.time}
                </p>
              </div>
              <BookingStatusBadge status={booking.status} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick actions */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { href: '/booking', label: 'Nouvelle réservation', sub: 'Ouvrir la page client', icon: CalendarDays, color: 'text-[#4F7CFF]', bg: 'bg-[#4F7CFF]/10' },
          { href: '/dashboard/clients', label: 'Voir les clients', sub: `${8} clients actifs`, icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { href: '/dashboard/agenda', label: 'Agenda semaine', sub: 'Planning visuel', icon: CalendarDays, color: 'text-amber-400', bg: 'bg-amber-500/10' },
        ].map(({ href, label, sub, icon: Icon, color, bg }) => (
          <Link
            key={href}
            href={href}
            className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-5 flex items-center gap-4 hover:border-white/[0.12] hover:bg-[#16191f] transition-all group"
          >
            <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
              <Icon size={18} className={color} />
            </div>
            <div className="min-w-0">
              <p className="text-[#F0F2F5] text-sm font-semibold group-hover:text-white transition-colors">{label}</p>
              <p className="text-[#555E6B] text-xs">{sub}</p>
            </div>
            <ArrowRight size={14} className="text-[#555E6B] ml-auto flex-shrink-0 group-hover:text-[#8B93A0] transition-colors" />
          </Link>
        ))}
      </motion.div>
    </motion.div>
  )
}
