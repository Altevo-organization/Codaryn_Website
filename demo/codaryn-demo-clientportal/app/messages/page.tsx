'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import { projects } from '@/lib/data'
import { Send, FolderKanban } from 'lucide-react'

export default function MessagesPage() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug)
  const [input, setInput] = useState('')

  const activeProject = projects.find((p) => p.slug === activeSlug)!

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto h-[calc(100vh-56px-56px)] flex gap-5">

        {/* Project list */}
        <aside className="w-64 flex-shrink-0 flex flex-col gap-1 py-1">
          <p className="text-[11px] font-semibold text-[#555E6B] uppercase tracking-widest px-1 mb-2">Projets</p>
          {projects.map((p) => {
            const active = p.slug === activeSlug
            const lastMsg = p.messages[p.messages.length - 1]
            return (
              <button
                key={p.slug}
                onClick={() => setActiveSlug(p.slug)}
                className={`flex items-start gap-3 px-3 py-3 rounded-xl text-left transition-all duration-150 w-full ${
                  active
                    ? 'bg-[#4F7CFF]/10 border border-[#4F7CFF]/20'
                    : 'hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  active ? 'bg-[#4F7CFF]/20 border border-[#4F7CFF]/30' : 'bg-white/[0.06] border border-white/[0.06]'
                }`}>
                  <FolderKanban size={13} className={active ? 'text-[#4F7CFF]' : 'text-[#8B93A0]'} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-xs font-semibold truncate ${active ? 'text-white' : 'text-[#F0F2F5]'}`}>{p.title}</p>
                  {lastMsg && (
                    <p className="text-[11px] text-[#555E6B] truncate mt-0.5">{lastMsg.content.slice(0, 40)}…</p>
                  )}
                </div>
              </button>
            )
          })}
        </aside>

        {/* Chat area */}
        <div className="flex-1 flex flex-col bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">

          {/* Chat header */}
          <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 flex items-center justify-center">
              <FolderKanban size={13} className="text-[#4F7CFF]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F0F2F5]">{activeProject.title}</p>
              <p className="text-[11px] text-[#555E6B]">{activeProject.manager.name} · {activeProject.manager.role}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
            {activeProject.messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.isClient ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-bold ${
                  msg.isClient
                    ? 'bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 text-[#4F7CFF]'
                    : 'bg-white/[0.06] border border-white/[0.06] text-[#8B93A0]'
                }`}>
                  {msg.avatar}
                </div>
                <div className={`max-w-[72%] ${msg.isClient ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[11px] font-semibold text-[#8B93A0]">{msg.author}</span>
                    <span className="text-[10px] text-[#555E6B]">{msg.date} · {msg.time}</span>
                  </div>
                  <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.isClient
                      ? 'bg-[#4F7CFF]/15 border border-[#4F7CFF]/25 text-[#F0F2F5] rounded-tr-sm'
                      : 'bg-white/[0.05] border border-white/[0.06] text-[#D0D4DC] rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 focus-within:border-[#4F7CFF]/40 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrire un message…"
                className="flex-1 bg-transparent text-sm text-[#F0F2F5] placeholder:text-[#555E6B] outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && input.trim()) setInput('')
                }}
              />
              <button
                onClick={() => setInput('')}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-150 ${
                  input.trim()
                    ? 'bg-[#4F7CFF] text-white hover:bg-[#7b9fff]'
                    : 'bg-white/[0.04] text-[#555E6B] cursor-not-allowed'
                }`}
              >
                <Send size={13} />
              </button>
            </div>
            <p className="text-[10px] text-[#555E6B] mt-2 px-1">Démo — les messages ne sont pas persistés</p>
          </div>

        </div>
      </div>
    </AppShell>
  )
}
