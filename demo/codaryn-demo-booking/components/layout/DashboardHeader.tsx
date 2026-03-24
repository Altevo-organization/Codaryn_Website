'use client'

import { Menu, Bell } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/dashboard/reservations': 'Réservations',
  '/dashboard/clients': 'Clients',
  '/dashboard/agenda': 'Agenda',
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const pathname = usePathname()
  const title = pageTitles[pathname] ?? 'Dashboard'

  return (
    <header className="h-14 border-b border-white/[0.06] bg-[#0F1115]/80 backdrop-blur-sm flex items-center px-5 gap-4 sticky top-0 z-10">
      <button
        onClick={onMenuClick}
        className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-[#8B93A0] hover:text-white hover:bg-white/5 transition-colors"
      >
        <Menu size={16} />
      </button>

      <h1 className="text-[#F0F2F5] font-semibold text-sm flex-1">{title}</h1>

      <div className="flex items-center gap-2">
        <button className="relative w-8 h-8 rounded-lg flex items-center justify-center text-[#8B93A0] hover:text-white hover:bg-white/5 transition-colors">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
        </button>

        <div className="w-7 h-7 rounded-lg bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 flex items-center justify-center">
          <span className="text-[#4F7CFF] text-[10px] font-bold">SL</span>
        </div>
      </div>
    </header>
  )
}
