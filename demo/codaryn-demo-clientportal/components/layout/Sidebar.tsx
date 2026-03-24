'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Receipt,
  MessageSquare,
  Settings,
  X,
} from 'lucide-react'
import { client, notifications } from '@/lib/data'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/projets', label: 'Projets', icon: FolderKanban },
  { href: '/documents', label: 'Documents', icon: FileText },
  { href: '/factures', label: 'Factures', icon: Receipt },
  { href: '/messages', label: 'Messages', icon: MessageSquare },
]

const bottomNavItems = [
  { href: '/parametres', label: 'Paramètres', icon: Settings },
]

export default function Sidebar({ open, onClose }: SidebarProps) {
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
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <div className="w-6 h-6 rounded-md bg-[#4F7CFF] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold tracking-tight">C</span>
              </div>
              <span className="text-white font-semibold text-sm tracking-tight">Codaryn</span>
            </div>
            <p className="text-[#555E6B] text-[11px] font-medium pl-8">Portal Client</p>
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
            const unreadCount = href === '/messages'
              ? notifications.filter((n) => !n.read).length
              : 0
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
                {unreadCount > 0 && (
                  <span className="min-w-[18px] h-[18px] rounded-full bg-[#4F7CFF] text-white text-[10px] font-bold flex items-center justify-center px-1">
                    {unreadCount}
                  </span>
                )}
              </Link>
            )
          })}

          <div className="pt-2 mt-2 border-t border-white/[0.04]">
            {bottomNavItems.map(({ href, label, icon: Icon }) => {
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
                  {label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Client Info */}
        <div className="px-3 pb-5">
          <div className="px-3 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 flex items-center justify-center flex-shrink-0">
              <span className="text-[#4F7CFF] text-xs font-bold">{client.initials}</span>
            </div>
            <div className="min-w-0">
              <p className="text-[#F0F2F5] text-xs font-semibold truncate">{client.name}</p>
              <p className="text-[#555E6B] text-[11px] truncate">{client.sector}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
