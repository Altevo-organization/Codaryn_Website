'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import BookingLayout from '@/components/layout/BookingLayout'
import ServiceCard from '@/components/ui/ServiceCard'
import { services, Service } from '@/lib/data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function BookingPage() {
  const router = useRouter()

  const handleSelect = (service: Service) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('booking_service', JSON.stringify(service))
    }
    router.push('/booking/creneau')
  }

  return (
    <BookingLayout step={1}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {/* Hero */}
        <motion.div variants={item} className="text-center max-w-xl mx-auto">
          <h1 className="text-[#F0F2F5] text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Choisissez votre prestation
          </h1>
          <p className="text-[#8B93A0] text-sm sm:text-base leading-relaxed">
            Sélectionnez le type de séance qui correspond à vos besoins. Vous choisirez votre créneau à l&apos;étape suivante.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <ServiceCard service={service} onSelect={handleSelect} />
            </motion.div>
          ))}
        </motion.div>

        {/* Info strip */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2 text-[#555E6B] text-xs"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Confirmation immédiate par email</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
            <span>Annulation gratuite 24h avant</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Paiement sur place</span>
          </div>
        </motion.div>
      </motion.div>
    </BookingLayout>
  )
}
