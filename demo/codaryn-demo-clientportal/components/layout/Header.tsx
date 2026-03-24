'use client'

import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Menu, Bell, CheckCircle2, AlertCircle, MessageSquare, Info, Package } from 'lucide-react'
import { notifications } from '@/lib/data'
import type { Notification } from '@/lib/data'

interface HeaderProps {
  onMenuClick: () => void
}

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/projets': 'Projets',
  '/documents': 'Documents',
  '/factures': 'Factures',
  '/messages': 'Messages',
  '/parametres': 'Paramètres',
}

function NotifIcon({ type }: { type: Notification['type'] }) {
  switch (type) {
    case 'invoice': return <CheckCircle2 size={13} className="text-emerald-400" />
    case 'meeting': return <MessageSquare size={13} className="text-[#4F7CFF]" />
    case 'delivery': return <AlertCircle size={13} className="text-violet-400" />
    default: return <Info size={13} className="text-[#8B93A0]" />
  }
}

export default function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const unread = notifications.filter((n) => !n.read).length

  const getTitle = () => {
    if (pathname.startsWith('/projets/')) return 'Détail du projet'
    return pageTitles[pathname] ?? 'Portal Client'
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="h-14 flex items-center justify-between px-5 lg:px-8 border-b border-white/[0.06] bg-[#0B0B0C]/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg text-[#8B93A0] hover:text-white hover:bg-white/5 transition-colors"
        >
          <Menu size={18} />
        </button>
        <h1 className="text-[#F0F2F5] text-sm font-semibold">{getTitle()}</h1>
      </div>

      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative w-8 h-8 flex items-center justify-center rounded-lg text-[#8B93A0] hover:text-white hover:bg-white/5 transition-colors"
          >
            <Bell size={16} />
            {unread > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#4F7CFF] text-white text-[9px] font-bold flex items-center justify-center">
                {unread}
              </span>
            )}
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-10 w-80 bg-[#0F1115] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#F0F2F5]">Notifications</h3>
                {unread > 0 && (
                  <span className="text-[11px] text-[#4F7CFF] font-medium">{unread} non lues</span>
                )}
              </div>
              <div className="divide-y divide-white/[0.04] max-h-72 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-3 px-4 py-3.5 transition-colors hover:bg-white/[0.02] ${!notif.read ? 'bg-white/[0.015]' : ''}`}
                  >
                    <div className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      notif.type === 'invoice' ? 'bg-emerald-500/10 border-emerald-500/20' :
                      notif.type === 'meeting' ? 'bg-[#4F7CFF]/10 border-[#4F7CFF]/20' :
                      notif.type === 'delivery' ? 'bg-violet-500/10 border-violet-500/20' :
                      'bg-white/5 border-white/10'
                    }`}>
                      <NotifIcon type={notif.type} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[#F0F2F5] leading-snug">{notif.title}</p>
                      <p className="text-[11px] text-[#555E6B] mt-0.5 leading-snug">{notif.description}</p>
                      <p className="text-[10px] text-[#555E6B]/70 mt-1">{notif.date}</p>
                    </div>
                    {!notif.read && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF] flex-shrink-0 mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-7 h-7 rounded-lg bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 flex items-center justify-center ml-1">
          <span className="text-[#4F7CFF] text-[10px] font-bold">AD</span>
        </div>
      </div>
    </header>
  )
}
