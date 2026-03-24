'use client'

import AppShell from '@/components/layout/AppShell'
import StatusBadge from '@/components/ui/StatusBadge'
import ProgressBar from '@/components/ui/ProgressBar'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Users,
  Tag,
  CheckCircle2,
  Circle,
} from 'lucide-react'
import { projects } from '@/lib/data'

export default function ProjetsPage() {
  const active = projects.filter((p) => p.status === 'En cours')
  const done = projects.filter((p) => p.status === 'Terminé')

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Page header */}
        <div>
          <h2 className="text-xl font-semibold text-[#F0F2F5]">Projets</h2>
          <p className="text-sm text-[#8B93A0] mt-1">
            {active.length} projet{active.length > 1 ? 's' : ''} en cours · {done.length} terminé{done.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Active Projects */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold text-[#555E6B] uppercase tracking-widest">En cours</h3>
          <div className="grid lg:grid-cols-2 gap-4">
            {active.map((project) => (
              <Link
                key={project.id}
                href={`/projets/${project.slug}`}
                className="group bg-[#0F1115] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] hover:bg-[#16191f] transition-all duration-200 block"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-[#F0F2F5] group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#8B93A0] mt-1 leading-relaxed">{project.description}</p>
                  </div>
                  <StatusBadge status={project.status} />
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#555E6B]">Progression</span>
                    <span className="text-xs font-semibold text-[#4F7CFF]">{project.progress}%</span>
                  </div>
                  <ProgressBar value={project.progress} height="md" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#8B93A0] bg-white/[0.04] border border-white/[0.06] rounded-full px-2 py-0.5"
                    >
                      <Tag size={9} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                  <div className="flex items-center gap-4 text-xs text-[#555E6B]">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={11} />
                      {project.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={11} />
                      {project.teamSize} membre{project.teamSize > 1 ? 's' : ''}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[#4F7CFF] font-medium group-hover:gap-2 transition-all">
                    Voir <ArrowRight size={12} />
                  </span>
                </div>

                {/* Next milestone */}
                {project.nextMilestone && (
                  <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/5 border border-amber-500/15">
                    <Circle size={11} className="text-amber-400 flex-shrink-0" />
                    <span className="text-xs text-amber-400/90 font-medium">
                      {project.nextMilestone.label}
                    </span>
                    <span className="text-xs text-[#555E6B] ml-auto">{project.nextMilestone.dueDate}</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Completed Projects */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold text-[#555E6B] uppercase tracking-widest">Terminés</h3>
          <div className="space-y-3">
            {done.map((project) => (
              <Link
                key={project.id}
                href={`/projets/${project.slug}`}
                className="group bg-[#0F1115] border border-white/[0.06] rounded-2xl px-6 py-4 hover:border-white/[0.10] transition-all duration-200 flex items-center gap-5 block"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#F0F2F5] group-hover:text-white transition-colors">
                    {project.title}
                  </p>
                  <p className="text-xs text-[#8B93A0] mt-0.5 truncate">{project.description}</p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="flex flex-wrap gap-1.5 hidden sm:flex">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-[#555E6B] bg-white/[0.04] border border-white/[0.06] rounded-full px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <StatusBadge status={project.status} size="sm" />
                  <ArrowRight size={14} className="text-[#555E6B] group-hover:text-[#4F7CFF] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </AppShell>
  )
}
