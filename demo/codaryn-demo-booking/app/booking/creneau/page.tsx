'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check, Clock } from 'lucide-react'
import BookingLayout from '@/components/layout/BookingLayout'
import { timeSlots, Service } from '@/lib/data'

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
const FULL_DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

function getWeekDates(offset: number = 0) {
  const today = new Date(2025, 2, 24) // March 24, 2025 (demo date)
  const monday = new Date(today)
  const dayOfWeek = today.getDay() === 0 ? 7 : today.getDay()
  monday.setDate(today.getDate() - dayOfWeek + 1 + offset * 7)

  return DAYS.map((_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d
  })
}

function formatMonthYear(dates: Date[]) {
  const first = dates[0]
  const last = dates[dates.length - 1]
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  if (first.getMonth() === last.getMonth()) {
    return `${months[first.getMonth()]} ${first.getFullYear()}`
  }
  return `${months[first.getMonth()]} — ${months[last.getMonth()]} ${last.getFullYear()}`
}

export default function CreneauPage() {
  const router = useRouter()
  const [service, setService] = useState<Service | null>(null)
  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedDay, setSelectedDay] = useState(0)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('booking_service')
    if (!raw) {
      router.replace('/booking')
      return
    }
    setService(JSON.parse(raw))
  }, [router])

  const weekDates = getWeekDates(weekOffset)
  const today = new Date(2025, 2, 24)

  const isToday = (d: Date) =>
    d.getDate() === today.getDate() && d.getMonth() === today.getMonth()

  const isPast = (d: Date) => d < today && !isToday(d)

  const handleConfirm = () => {
    if (!selectedSlot || !service) return
    const booking = {
      service,
      day: weekDates[selectedDay].toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
      time: selectedSlot,
    }
    localStorage.setItem('booking_confirmed', JSON.stringify(booking))
    router.push('/booking/confirmation')
  }

  if (!service) return null

  const durationLabel = service.duration >= 60
    ? `${service.duration / 60}h${service.duration % 60 ? (service.duration % 60) + 'min' : ''}`
    : `${service.duration}min`

  return (
    <BookingLayout step={2}>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Selected service recap */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#4F7CFF]/08 border border-[#4F7CFF]/20 rounded-2xl px-5 py-4 flex items-center justify-between"
        >
          <div>
            <p className="text-[#8B93A0] text-xs mb-0.5">Prestation sélectionnée</p>
            <p className="text-[#F0F2F5] font-semibold text-sm">{service.name}</p>
          </div>
          <div className="text-right">
            <p className="text-[#4F7CFF] font-bold text-base">{service.price} €</p>
            <p className="text-[#555E6B] text-xs flex items-center gap-1 justify-end">
              <Clock size={11} />
              {durationLabel}
            </p>
          </div>
        </motion.div>

        {/* Week picker */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
          className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-5 space-y-4"
        >
          {/* Week navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => { setWeekOffset(w => Math.max(0, w - 1)); setSelectedSlot(null) }}
              disabled={weekOffset === 0}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8B93A0] hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <p className="text-[#F0F2F5] text-sm font-semibold capitalize">
              {formatMonthYear(weekDates)}
            </p>
            <button
              onClick={() => { setWeekOffset(w => w + 1); setSelectedSlot(null) }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8B93A0] hover:text-white hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Day pills */}
          <div className="grid grid-cols-6 gap-1.5">
            {weekDates.map((date, i) => {
              const past = isPast(date)
              const todayDay = isToday(date)
              const active = selectedDay === i && !past
              return (
                <button
                  key={i}
                  onClick={() => { if (!past) { setSelectedDay(i); setSelectedSlot(null) } }}
                  disabled={past}
                  className={`flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl text-center transition-all ${
                    active
                      ? 'bg-[#4F7CFF] text-white'
                      : past
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-white/[0.06] text-[#8B93A0] hover:text-[#F0F2F5]'
                  }`}
                >
                  <span className="text-[10px] font-medium">{DAYS[i]}</span>
                  <span className={`text-sm font-bold ${todayDay && !active ? 'text-[#4F7CFF]' : ''}`}>
                    {date.getDate()}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Selected day label */}
          <p className="text-[#8B93A0] text-xs text-center">
            {FULL_DAYS[selectedDay]} {weekDates[selectedDay].getDate()} — disponibilités
          </p>

          {/* Time slots */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots.map((slot) => {
              const isSelected = selectedSlot === slot.time
              return (
                <button
                  key={slot.time}
                  onClick={() => slot.available && setSelectedSlot(slot.time)}
                  disabled={!slot.available}
                  className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                    !slot.available
                      ? 'bg-white/[0.02] text-[#555E6B] cursor-not-allowed line-through opacity-60'
                      : isSelected
                      ? 'bg-[#4F7CFF] text-white shadow-elevated'
                      : 'bg-white/[0.04] text-[#F0F2F5] hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  {slot.time}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Confirm button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.15 } }}
        >
          <button
            onClick={handleConfirm}
            disabled={!selectedSlot}
            className="w-full py-3.5 rounded-2xl bg-[#4F7CFF] hover:bg-[#6b93ff] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Check size={15} />
            Confirmer ce créneau
            {selectedSlot && (
              <span className="text-blue-200 font-normal">— {selectedSlot}</span>
            )}
          </button>
          <p className="text-[#555E6B] text-xs text-center mt-3">
            Vous recevrez une confirmation par email après validation
          </p>
        </motion.div>
      </div>
    </BookingLayout>
  )
}
