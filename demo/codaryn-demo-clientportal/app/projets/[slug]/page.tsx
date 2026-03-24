'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import AppShell from '@/components/layout/AppShell'
import StatusBadge from '@/components/ui/StatusBadge'
import ProgressBar from '@/components/ui/ProgressBar'
import Link from 'next/link'
import {
  ArrowLeft,
  CalendarDays,
  Users,
  Tag,
  CheckCircle2,
  Circle,
  MessageSquare,
  Package,
  Rocket,
  RefreshCw,
  ClipboardList,
  Euro,
  User,
  Send,
} from 'lucide-react'
import { projects } from '@/lib/data'
import type { Activity } from '@/lib/data'

function ActivityIcon({ type }: { type: Activity['type'] }) {
  const baseClass = 'w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5'
  switch (type) {
    case 'meeting':
      return <div className={`${baseClass} bg-blue-500/10 text-blue-400 border-blue-500/20`}><MessageSquare size={14} /></div>
    case 'delivery':
      return <div className={`${baseClass} bg-violet-500/10 text-violet-400 border-violet-500/20`}><Package size={14} /></div>
    case 'review':
      return <div className={`${baseClass} bg-amber-500/10 text-amber-400 border-amber-500/20`}><ClipboardList size={14} /></div>
    case 'update':
      return <div className={`${baseClass} bg-cyan-500/10 text-cyan-400 border-cyan-500/20`}><RefreshCw size={14} /></div>
    case 'deploy':
      return <div className={`${baseClass} bg-emerald-500/10 text-emerald-400 border-emerald-500/20`}><Rocket size={14} /></div>
    default:
      return <div className={`${baseClass} bg-white/5 text-white/40 border-white/10`}><Package size={14} /></div>
  }
}

type Tab = 'activite' | 'jalons' | 'messages'

export default function ProjectDetailPage() {
  const params = useParams()
  const project = projects.find((p) => p.slug === params.slug)
  const [tab, setTab] = useState<Tab>('activite')
  const [msgInput, setMsgInput] = useState('')

  if (!project) notFound()

  const completedMilestones = project.milestones.filter((m) => m.completed).length
  const budgetPct = Math.round((project.budgetConsumed / project.budget) * 100)
  const budgetColor = budgetPct >= 95 ? 'bg-red-500' : budgetPct >= 75 ? 'bg-amber-500' : 'bg-emerald-500'

  const tabs: { id: Tab; label: string }[] = [
    { id: 'activite', label: 'Activité' },
    { id: 'jalons', label: 'Jalons' },
    { id: 'messages', label: `Messages (${project.messages.length})` },
  ]

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto space-y-7">

        {/* Back */}
        <Link
          href="/projets"
          className="inline-flex items-center gap-1.5 text-xs text-[#8B93A0] hover:text-[#F0F2F5] transition-colors font-medium"
        >
          <ArrowLeft size={13} />
          Retour aux projets
        </Link>

        {/* Project Header */}
        <div className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-6">
          <div className="flex flex-wrap items-start gap-4 justify-between mb-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-semibold text-[#F0F2F5]">{project.title}</h2>
                <StatusBadge status={project.status} />
              </div>
              <p className="text-sm text-[#8B93A0] leading-relaxed max-w-lg">{project.description}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-[#8B93A0]">Progression globale</span>
              <span className="text-sm font-bold text-[#4F7CFF]">{project.progress}%</span>
            </div>
            <ProgressBar value={project.progress} height="md" />
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
              <div className="flex items-center gap-2 mb-1.5">
                <CalendarDays size={13} className="text-[#555E6B]" />
                <span className="text-[11px] text-[#555E6B] font-medium uppercase tracking-wide">Début</span>
              </div>
              <p className="text-sm font-semibold text-[#F0F2F5]">{project.startDate}</p>
            </div>

            {project.endDate && (
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <CalendarDays size={13} className="text-[#555E6B]" />
                  <span className="text-[11px] text-[#555E6B] font-medium uppercase tracking-wide">Fin</span>
                </div>
                <p className="text-sm font-semibold text-[#F0F2F5]">{project.endDate}</p>
              </div>
            )}

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
              <div className="flex items-center gap-2 mb-1.5">
                <Users size={13} className="text-[#555E6B]" />
                <span className="text-[11px] text-[#555E6B] font-medium uppercase tracking-wide">Équipe</span>
              </div>
              <p className="text-sm font-semibold text-[#F0F2F5]">{project.teamSize} membre{project.teamSize > 1 ? 's' : ''}</p>
              <p className="text-[11px] text-[#555E6B] mt-0.5">{project.teamRoles.join(', ')}</p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 size={13} className="text-[#555E6B]" />
                <span className="text-[11px] text-[#555E6B] font-medium uppercase tracking-wide">Jalons</span>
              </div>
              <p className="text-sm font-semibold text-[#F0F2F5]">{completedMilestones}/{project.milestones.length}</p>
            </div>
          </div>

          {/* Budget bar */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Euro size={13} className="text-[#555E6B]" />
                <span className="text-xs font-semibold text-[#8B93A0] uppercase tracking-wide">Budget consommé</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-bold text-[#F0F2F5]">{project.budgetConsumed.toLocaleString('fr-FR')} €</span>
                <span className="text-xs text-[#555E6B]">/ {project.budget.toLocaleString('fr-FR')} €</span>
                <span className={`text-[11px] font-semibold ml-1 ${
                  budgetPct >= 95 ? 'text-red-400' : budgetPct >= 75 ? 'text-amber-400' : 'text-emerald-400'
                }`}>{budgetPct}%</span>
              </div>
            </div>
            <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${budgetColor}`}
                style={{ width: `${Math.min(budgetPct, 100)}%` }}
              />
            </div>
          </div>

          {/* Manager card */}
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 flex items-center justify-center flex-shrink-0">
              <span className="text-[#4F7CFF] text-[11px] font-bold">{project.manager.avatar}</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#F0F2F5]">{project.manager.name}</p>
              <p className="text-[11px] text-[#555E6B]">{project.manager.role} · Codaryn</p>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#555E6B]">
              <User size={11} />
              <span>Votre interlocuteur</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8B93A0] bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="flex border-b border-white/[0.06]">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-3.5 text-sm font-medium transition-colors relative ${
                  tab === t.id
                    ? 'text-white'
                    : 'text-[#8B93A0] hover:text-[#F0F2F5]'
                }`}
              >
                {t.label}
                {tab === t.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4F7CFF]" />
                )}
              </button>
            ))}
          </div>

          {/* Activity */}
          {tab === 'activite' && (
            <div className="divide-y divide-white/[0.04]">
              {project.activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 px-6 py-4">
                  <ActivityIcon type={activity.type} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-[#F0F2F5] leading-snug">{activity.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#555E6B]">{activity.author}</span>
                      <span className="text-[#555E6B]">·</span>
                      <span className="text-xs text-[#555E6B]">{activity.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Milestones */}
          {tab === 'jalons' && (
            <div className="px-6 py-4 space-y-0">
              {project.milestones.map((milestone, index) => {
                const isLast = index === project.milestones.length - 1
                return (
                  <div key={milestone.id} className="relative flex gap-4">
                    {!isLast && (
                      <div className="absolute left-3.5 top-7 bottom-0 w-px bg-white/[0.06]" />
                    )}
                    <div className="flex-shrink-0 mt-0.5">
                      {milestone.completed ? (
                        <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                          <Circle size={14} className="text-[#555E6B]" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 pb-5">
                      <p className={`text-sm font-medium ${milestone.completed ? 'text-[#F0F2F5]' : 'text-[#8B93A0]'}`}>
                        {milestone.label}
                      </p>
                      <p className="text-xs text-[#555E6B] mt-0.5">{milestone.dueDate}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Messages */}
          {tab === 'messages' && (
            <div className="flex flex-col" style={{ minHeight: 400 }}>
              <div className="flex-1 px-6 py-5 space-y-5 overflow-y-auto">
                {project.messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.isClient ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-bold ${
                      msg.isClient
                        ? 'bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 text-[#4F7CFF]'
                        : 'bg-white/[0.06] border border-white/[0.06] text-[#8B93A0]'
                    }`}>
                      {msg.avatar}
                    </div>
                    <div className={`max-w-[72%] flex flex-col gap-1 ${msg.isClient ? 'items-end' : 'items-start'}`}>
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
              <div className="px-4 py-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 focus-within:border-[#4F7CFF]/40 transition-colors">
                  <input
                    type="text"
                    value={msgInput}
                    onChange={(e) => setMsgInput(e.target.value)}
                    placeholder="Écrire un message…"
                    className="flex-1 bg-transparent text-sm text-[#F0F2F5] placeholder:text-[#555E6B] outline-none"
                    onKeyDown={(e) => { if (e.key === 'Enter') setMsgInput('') }}
                  />
                  <button
                    onClick={() => setMsgInput('')}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                      msgInput.trim() ? 'bg-[#4F7CFF] text-white hover:bg-[#7b9fff]' : 'bg-white/[0.04] text-[#555E6B]'
                    }`}
                  >
                    <Send size={13} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </AppShell>
  )
}
