'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  BookOpen,
  Camera,
  X,
} from 'lucide-react'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/reservations', label: 'Réservations', icon: BookOpen },
  { href: '/dashboard/clients', label: 'Clients', icon: Users },
  { href: '/dashboard/agenda', label: 'Agenda', icon: CalendarDays },
]

export default function DashboardSidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-30 w-64 bg-[#0F1115] border-r border-white/[0.06]
          flex flex-col
          transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-6 pb-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#4F7CFF] flex items-center justify-center">
              <Camera size={15} className="text-white" />
            </div>
            <div>
              <p className="text-[#F0F2F5] font-semibold text-sm leading-tight">Studio Lumière</p>
              <p className="text-[#555E6B] text-[11px]">Espace Pro</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden w-7 h-7 rounded-lg flex items-center justify-center text-[#8B93A0] hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`
                  relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-150
                  ${active
                    ? 'bg-[#4F7CFF]/10 text-white'
                    : 'text-[#8B93A0] hover:text-[#F0F2F5] hover:bg-white/[0.04]'
                  }
                `}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#4F7CFF] rounded-full" />
                )}
                <Icon size={16} className={active ? 'text-[#4F7CFF]' : ''} />
                <span className="flex-1">{label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Public booking link */}
        <div className="px-3 pb-5">
          <Link
            href="/booking"
            className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-[#4F7CFF]/08 border border-[#4F7CFF]/20 hover:bg-[#4F7CFF]/15 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-[#4F7CFF]/20 flex items-center justify-center">
              <BookOpen size={13} className="text-[#4F7CFF]" />
            </div>
            <div className="min-w-0">
              <p className="text-[#F0F2F5] text-xs font-semibold">Page de réservation</p>
              <p className="text-[#555E6B] text-[11px]">Vue client</p>
            </div>
          </Link>
        </div>
      </aside>
    </>
  )
}
