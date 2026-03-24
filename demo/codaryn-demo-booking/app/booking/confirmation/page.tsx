'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle2, Calendar, Clock, MapPin, Mail, ArrowLeft } from 'lucide-react'
import BookingLayout from '@/components/layout/BookingLayout'
import { studio } from '@/lib/data'

interface BookingData {
  service: { name: string; price: number; duration: number }
  day: string
  time: string
}

export default function ConfirmationPage() {
  const router = useRouter()
  const [booking, setBooking] = useState<BookingData | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('booking_confirmed')
    if (!raw) {
      router.replace('/booking')
      return
    }
    setBooking(JSON.parse(raw))
  }, [router])

  if (!booking) return null

  const durationLabel = booking.service.duration >= 60
    ? `${booking.service.duration / 60}h${booking.service.duration % 60 ? (booking.service.duration % 60) + 'min' : ''}`
    : `${booking.service.duration}min`

  return (
    <BookingLayout step={3}>
      <div className="max-w-lg mx-auto space-y-6 text-center">
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
            <CheckCircle2 size={40} className="text-emerald-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="space-y-2"
        >
          <h1 className="text-[#F0F2F5] text-2xl font-bold tracking-tight">
            Réservation confirmée !
          </h1>
          <p className="text-[#8B93A0] text-sm leading-relaxed">
            Votre séance a été enregistrée. Vous recevrez un email de confirmation à l&apos;adresse indiquée.
          </p>
        </motion.div>

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-6 text-left space-y-4"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div>
              <p className="text-[#555E6B] text-xs mb-0.5">Prestation</p>
              <p className="text-[#F0F2F5] font-semibold">{booking.service.name}</p>
            </div>
            <p className="text-[#4F7CFF] font-bold text-lg">{booking.service.price} €</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Calendar size={15} className="text-[#4F7CFF] flex-shrink-0" />
              <div>
                <p className="text-[#8B93A0] text-xs">Date</p>
                <p className="text-[#F0F2F5] font-medium capitalize">{booking.day}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Clock size={15} className="text-[#4F7CFF] flex-shrink-0" />
              <div>
                <p className="text-[#8B93A0] text-xs">Horaire</p>
                <p className="text-[#F0F2F5] font-medium">{booking.time} — durée {durationLabel}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MapPin size={15} className="text-[#4F7CFF] flex-shrink-0" />
              <div>
                <p className="text-[#8B93A0] text-xs">Adresse</p>
                <p className="text-[#F0F2F5] font-medium">{studio.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail size={15} className="text-[#4F7CFF] flex-shrink-0" />
              <div>
                <p className="text-[#8B93A0] text-xs">Contact studio</p>
                <p className="text-[#F0F2F5] font-medium">{studio.email} · {studio.phone}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
          className="bg-amber-500/08 border border-amber-500/20 rounded-xl px-4 py-3 text-left"
        >
          <p className="text-amber-400 text-xs font-medium">Paiement sur place</p>
          <p className="text-[#8B93A0] text-xs mt-0.5">Le règlement s&apos;effectue directement au studio le jour de la séance.</p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.45 } }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <button
            onClick={() => {
              localStorage.removeItem('booking_service')
              localStorage.removeItem('booking_confirmed')
              router.push('/booking')
            }}
            className="flex-1 py-3 rounded-2xl border border-white/[0.1] text-[#8B93A0] hover:text-[#F0F2F5] hover:border-white/20 text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={14} />
            Nouvelle réservation
          </button>
          <button
            onClick={() => router.push('/dashboard')}
            className="flex-1 py-3 rounded-2xl bg-[#4F7CFF] hover:bg-[#6b93ff] text-white text-sm font-semibold transition-colors"
          >
            Voir l&apos;espace pro
          </button>
        </motion.div>
      </div>
    </BookingLayout>
  )
}
