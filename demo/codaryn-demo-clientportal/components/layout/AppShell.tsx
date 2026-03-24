'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-full min-h-screen bg-[#0B0B0C]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area — offset by sidebar on desktop */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 px-5 lg:px-8 py-7">
          {children}
        </main>

        <footer className="px-5 lg:px-8 py-4 border-t border-white/[0.04]">
          <p className="text-[#555E6B] text-xs text-center font-medium">
            Démo — Codaryn Software Studio
          </p>
        </footer>
      </div>
    </div>
  )
}
