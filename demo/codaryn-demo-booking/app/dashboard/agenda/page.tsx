'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { bookings } from '@/lib/data'

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
const FULL_DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

// Grid: 08:00 to 19:00, each slot is 30 min
const START_HOUR = 8
const END_HOUR = 19
const SLOT_MINUTES = 30
const SLOT_COUNT = ((END_HOUR - START_HOUR) * 60) / SLOT_MINUTES // 22 slots
const SLOT_HEIGHT = 52 // px per 30min slot

function generateHours() {
  const hours: string[] = []
  for (let h = START_HOUR; h <= END_HOUR; h++) {
    hours.push(`${String(h).padStart(2, '0')}:00`)
    if (h < END_HOUR) hours.push(`${String(h).padStart(2, '0')}:30`)
  }
  return hours
}

const hours = generateHours()

function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function getWeekDates(offset: number = 0) {
  const today = new Date(2025, 2, 24)
  const monday = new Date(today)
  const dayOfWeek = today.getDay() === 0 ? 7 : today.getDay()
  monday.setDate(today.getDate() - dayOfWeek + 1 + offset * 7)
  return DAYS.map((_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d
  })
}

function dateToISO(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatMonthYear(dates: Date[]) {
  const months = ['jan', 'fév', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc']
  const first = dates[0]
  const last = dates[dates.length - 1]
  if (first.getMonth() === last.getMonth()) {
    return `${first.getDate()}–${last.getDate()} ${months[first.getMonth()]} ${first.getFullYear()}`
  }
  return `${first.getDate()} ${months[first.getMonth()]} – ${last.getDate()} ${months[last.getMonth()]} ${last.getFullYear()}`
}

const serviceColors: Record<string, { bg: string; border: string; text: string }> = {
  'Portrait Studio': { bg: 'bg-blue-500/20', border: 'border-blue-500/40', text: 'text-blue-300' },
  'Shooting Produit': { bg: 'bg-violet-500/20', border: 'border-violet-500/40', text: 'text-violet-300' },
  'Reportage Événement': { bg: 'bg-amber-500/20', border: 'border-amber-500/40', text: 'text-amber-300' },
  'Séance Couple / Famille': { bg: 'bg-emerald-500/20', border: 'border-emerald-500/40', text: 'text-emerald-300' },
  'Book Professionnel': { bg: 'bg-rose-500/20', border: 'border-rose-500/40', text: 'text-rose-300' },
  'Séance Nouveau-né': { bg: 'bg-cyan-500/20', border: 'border-cyan-500/40', text: 'text-cyan-300' },
}

export default function AgendaPage() {
  const [weekOffset, setWeekOffset] = useState(0)
  const weekDates = getWeekDates(weekOffset)
  const today = new Date(2025, 2, 24)

  const isToday = (d: Date) =>
    d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear()

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      {/* Week nav */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setWeekOffset(w => Math.max(0, w - 1))}
          disabled={weekOffset === 0}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8B93A0] hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <p className="text-[#F0F2F5] text-sm font-semibold">
          {formatMonthYear(weekDates)}
        </p>
        <button
          onClick={() => setWeekOffset(w => w + 1)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8B93A0] hover:text-white hover:bg-white/5 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Grid container */}
      <div className="bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-x-auto">
        <div className="min-w-[640px]">
          {/* Day headers */}
          <div className="grid grid-cols-[56px_repeat(6,1fr)] border-b border-white/[0.06]">
            <div className="px-2 py-3" />
            {weekDates.map((date, i) => (
              <div
                key={i}
                className={`py-3 text-center border-l border-white/[0.04] ${isToday(date) ? 'bg-[#4F7CFF]/05' : ''}`}
              >
                <p className={`text-[10px] font-medium uppercase tracking-wide ${isToday(date) ? 'text-[#4F7CFF]' : 'text-[#555E6B]'}`}>
                  {DAYS[i]}
                </p>
                <p className={`text-sm font-bold mt-0.5 ${isToday(date) ? 'text-[#4F7CFF]' : 'text-[#F0F2F5]'}`}>
                  {date.getDate()}
                </p>
              </div>
            ))}
          </div>

          {/* Time grid */}
          <div
            className="relative grid grid-cols-[56px_repeat(6,1fr)]"
            style={{ height: `${SLOT_COUNT * SLOT_HEIGHT}px` }}
          >
            {/* Hour labels */}
            <div className="relative">
              {hours.filter(h => h.endsWith(':00')).map((hour, i) => (
                <div
                  key={hour}
                  className="absolute left-0 right-0 flex items-start justify-end pr-2 pt-0.5"
                  style={{ top: `${i * SLOT_HEIGHT * 2}px`, height: `${SLOT_HEIGHT * 2}px` }}
                >
                  <span className="text-[#555E6B] text-[10px] font-medium">{hour}</span>
                </div>
              ))}
            </div>

            {/* Day columns */}
            {weekDates.map((date, dayIdx) => {
              const dateStr = dateToISO(date)
              const dayBookings = bookings.filter(b => b.date === dateStr)

              return (
                <div
                  key={dayIdx}
                  className={`relative border-l border-white/[0.04] ${isToday(date) ? 'bg-[#4F7CFF]/[0.02]' : ''}`}
                >
                  {/* Hour lines */}
                  {Array.from({ length: SLOT_COUNT }).map((_, slotIdx) => (
                    <div
                      key={slotIdx}
                      className={`absolute left-0 right-0 border-t ${slotIdx % 2 === 0 ? 'border-white/[0.06]' : 'border-white/[0.02]'}`}
                      style={{ top: `${slotIdx * SLOT_HEIGHT}px`, height: `${SLOT_HEIGHT}px` }}
                    />
                  ))}

                  {/* Bookings */}
                  {dayBookings.map((booking) => {
                    const startMinutes = timeToMinutes(booking.time) - START_HOUR * 60
                    const topPx = (startMinutes / 30) * SLOT_HEIGHT
                    const heightPx = (booking.duration / 30) * SLOT_HEIGHT
                    const colors = serviceColors[booking.service] ?? { bg: 'bg-white/10', border: 'border-white/20', text: 'text-white' }

                    if (startMinutes < 0 || topPx > SLOT_COUNT * SLOT_HEIGHT) return null

                    return (
                      <div
                        key={booking.id}
                        className={`absolute left-1 right-1 rounded-lg border ${colors.bg} ${colors.border} px-2 py-1 overflow-hidden cursor-pointer hover:brightness-125 transition-all`}
                        style={{ top: `${topPx}px`, height: `${Math.max(heightPx, SLOT_HEIGHT)}px` }}
                      >
                        <p className={`text-[10px] font-semibold leading-tight truncate ${colors.text}`}>
                          {booking.time} · {booking.client}
                        </p>
                        {heightPx > SLOT_HEIGHT && (
                          <p className="text-[9px] opacity-70 truncate mt-0.5 text-white">{booking.service}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(serviceColors).map(([service, colors]) => (
          <div key={service} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-sm ${colors.bg} border ${colors.border}`} />
            <span className="text-[#555E6B] text-xs">{service}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
