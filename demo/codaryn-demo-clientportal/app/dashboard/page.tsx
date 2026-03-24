'use client'

import AppShell from '@/components/layout/AppShell'
import StatCard from '@/components/ui/StatCard'
import StatusBadge from '@/components/ui/StatusBadge'
import ProgressBar from '@/components/ui/ProgressBar'
import SpendChart from '@/components/ui/SpendChart'
import Link from 'next/link'
import {
  FolderKanban, FileText, Euro, Clock,
  ArrowRight, Download, CalendarDays, Users, TrendingUp,
} from 'lucide-react'
import { projects, documents, invoices, invoiceSummary, monthlySpend } from '@/lib/data'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

export default function DashboardPage() {
  const today = new Date()
  const dateStr = today.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const activeProjects = projects.filter((p) => p.status === 'En cours')
  const recentInvoices = invoices.slice(0, 3)
  const recentDocs = documents.slice(0, 4)

  return (
    <AppShell>
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto space-y-7">

        {/* Greeting */}
        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold text-[#F0F2F5] mb-1">Bonjour, Atelier Dubois 👋</h2>
          <p className="text-[#8B93A0] text-sm capitalize">{dateStr}</p>
        </motion.div>

        {/* Stats Row */}
        <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Projets actifs" value="2" iconNode={<FolderKanban size={18} className="text-[#4F7CFF]" />} sub="1 terminé" />
          <StatCard label="Documents" value="8" iconNode={<FileText size={18} className="text-violet-400" />} sub="4 types" />
          <StatCard label="Total facturé" value={`${invoiceSummary.total.toLocaleString('fr-FR')} €`} iconNode={<Euro size={18} className="text-emerald-400" />} sub="Depuis jan 2024" />
          <StatCard label="En attente" value={`${invoiceSummary.pending.toLocaleString('fr-FR')} €`} iconNode={<Clock size={18} className="text-amber-400" />} sub="1 facture · échéance 30 avr" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-5">

          {/* Projects — 2/3 */}
          <motion.div variants={item} className="lg:col-span-2 bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <h3 className="text-sm font-semibold text-[#F0F2F5]">Projets en cours</h3>
              <Link href="/projets" className="flex items-center gap-1 text-xs text-[#4F7CFF] hover:text-[#7b9fff] transition-colors font-medium">
                Voir tous <ArrowRight size={12} />
              </Link>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {activeProjects.map((project) => (
                <Link key={project.id} href={`/projets/${project.slug}`}
                  className="flex flex-col gap-3 px-6 py-4 hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#F0F2F5] group-hover:text-white transition-colors truncate">{project.title}</p>
                      <p className="text-xs text-[#8B93A0] mt-0.5 truncate">{project.description}</p>
                    </div>
                    <StatusBadge status={project.status} size="sm" />
                  </div>
                  <ProgressBar value={project.progress} showLabel />
                  <div className="flex items-center gap-4 text-xs text-[#555E6B]">
                    <span className="flex items-center gap-1"><CalendarDays size={11} /> Démarré {project.startDate}</span>
                    <span className="flex items-center gap-1"><Users size={11} /> {project.teamSize} membre{project.teamSize > 1 ? 's' : ''}</span>
                    {project.nextMilestone && (
                      <span className="ml-auto text-amber-500/80 font-medium">⬡ {project.nextMilestone.label}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Recent Docs — 1/3 */}
          <motion.div variants={item} className="bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <h3 className="text-sm font-semibold text-[#F0F2F5]">Documents récents</h3>
              <Link href="/documents" className="flex items-center gap-1 text-xs text-[#4F7CFF] hover:text-[#7b9fff] transition-colors font-medium">
                Voir <ArrowRight size={12} />
              </Link>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {recentDocs.map((doc) => (
                <div key={doc.id} className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <FileText size={13} className="text-[#8B93A0]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-[#F0F2F5] truncate">{doc.filename}</p>
                    <p className="text-[11px] text-[#555E6B] mt-0.5">{doc.date}</p>
                  </div>
                  <Download size={12} className="text-[#555E6B] group-hover:text-[#4F7CFF] transition-colors flex-shrink-0" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Chart + Invoices */}
        <div className="grid lg:grid-cols-5 gap-5">

          {/* Spend Chart — 2/5 */}
          <motion.div variants={item} className="lg:col-span-2 bg-[#0F1115] border border-white/[0.06] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-sm font-semibold text-[#F0F2F5]">Dépenses mensuelles</h3>
                <p className="text-xs text-[#555E6B] mt-0.5">6 derniers mois</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <TrendingUp size={11} />
                +18%
              </div>
            </div>
            <SpendChart data={monthlySpend} />
          </motion.div>

          {/* Invoices — 3/5 */}
          <motion.div variants={item} className="lg:col-span-3 bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <h3 className="text-sm font-semibold text-[#F0F2F5]">Dernières factures</h3>
              <Link href="/factures" className="flex items-center gap-1 text-xs text-[#4F7CFF] hover:text-[#7b9fff] transition-colors font-medium">
                Voir toutes <ArrowRight size={12} />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.04]">
                    <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-6 py-3">Référence</th>
                    <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3 hidden sm:table-cell">Date</th>
                    <th className="text-right text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3">Montant</th>
                    <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3">Statut</th>
                    <th className="px-6 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {recentInvoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-3.5">
                        <span className="text-sm font-mono font-medium text-[#F0F2F5]">{invoice.number}</span>
                      </td>
                      <td className="px-3 py-3.5 hidden sm:table-cell">
                        <span className="text-sm text-[#8B93A0]">{invoice.date}</span>
                      </td>
                      <td className="px-3 py-3.5 text-right">
                        <span className="text-sm font-semibold text-[#F0F2F5]">{invoice.amount.toLocaleString('fr-FR')} €</span>
                      </td>
                      <td className="px-3 py-3.5">
                        <StatusBadge status={invoice.status} size="sm" />
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        <button className="text-[#555E6B] group-hover:text-[#4F7CFF] transition-colors">
                          <Download size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </AppShell>
  )
}
