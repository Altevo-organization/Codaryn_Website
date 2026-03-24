'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <p className="text-7xl font-black text-[#4F7CFF]/20 mb-4 tracking-tighter">404</p>
        <h1 className="text-xl font-semibold text-[#F0F2F5] mb-2">Page introuvable</h1>
        <p className="text-sm text-[#8B93A0] mb-8">Cette page n&apos;existe pas ou a été déplacée.</p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#4F7CFF] hover:bg-[#7b9fff] transition-colors px-5 py-2.5 rounded-xl"
        >
          <ArrowLeft size={14} />
          Retour au dashboard
        </Link>
      </div>
    </div>
  )
}
