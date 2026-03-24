'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import StatusBadge from '@/components/ui/StatusBadge'
import StatCard from '@/components/ui/StatCard'
import { invoices, invoiceSummary } from '@/lib/data'
import type { Invoice } from '@/lib/data'
import { Download, Euro, CheckCircle2, Clock, Receipt, X, CalendarDays } from 'lucide-react'

function InvoiceModal({ invoice, onClose }: { invoice: Invoice; onClose: () => void }) {
  const total = invoice.lines.reduce((sum, l) => sum + l.qty * l.unit, 0)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#0F1115] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden">

        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/20 flex items-center justify-center">
              <Receipt size={15} className="text-[#4F7CFF]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#F0F2F5] font-mono">{invoice.number}</p>
              <p className="text-[11px] text-[#555E6B] mt-0.5">{invoice.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[#8B93A0] hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {/* Dates + status */}
        <div className="grid grid-cols-3 gap-3 px-6 py-4 border-b border-white/[0.04]">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <CalendarDays size={11} className="text-[#555E6B]" />
              <span className="text-[10px] text-[#555E6B] uppercase tracking-wide font-medium">Émission</span>
            </div>
            <p className="text-xs font-semibold text-[#F0F2F5]">{invoice.date}</p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Clock size={11} className="text-[#555E6B]" />
              <span className="text-[10px] text-[#555E6B] uppercase tracking-wide font-medium">Échéance</span>
            </div>
            <p className="text-xs font-semibold text-[#F0F2F5]">{invoice.dueDate}</p>
          </div>
          <div>
            <p className="text-[10px] text-[#555E6B] uppercase tracking-wide font-medium mb-1">Statut</p>
            <StatusBadge status={invoice.status} size="sm" />
          </div>
        </div>

        {/* Line items */}
        <div className="px-6 py-4">
          <p className="text-[11px] font-semibold text-[#555E6B] uppercase tracking-widest mb-3">Détail des prestations</p>
          <div className="space-y-0 border border-white/[0.06] rounded-xl overflow-hidden">
            <div className="grid grid-cols-12 px-4 py-2 bg-white/[0.03] border-b border-white/[0.04]">
              <span className="col-span-7 text-[10px] text-[#555E6B] uppercase tracking-wide font-medium">Prestation</span>
              <span className="col-span-2 text-[10px] text-[#555E6B] uppercase tracking-wide font-medium text-right">Qté</span>
              <span className="col-span-1 text-[10px] text-[#555E6B] uppercase tracking-wide font-medium text-right">PU</span>
              <span className="col-span-2 text-[10px] text-[#555E6B] uppercase tracking-wide font-medium text-right">Total</span>
            </div>
            {invoice.lines.map((line, i) => (
              <div key={i} className="grid grid-cols-12 px-4 py-3 border-b border-white/[0.03] last:border-0">
                <span className="col-span-7 text-xs text-[#D0D4DC] leading-snug pr-2">{line.label}</span>
                <span className="col-span-2 text-xs text-[#8B93A0] text-right">{line.qty}h</span>
                <span className="col-span-1 text-xs text-[#8B93A0] text-right">{line.unit}</span>
                <span className="col-span-2 text-xs font-semibold text-[#F0F2F5] text-right">
                  {(line.qty * line.unit).toLocaleString('fr-FR')} €
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="mx-6 mb-6 px-4 py-3 bg-white/[0.04] border border-white/[0.06] rounded-xl flex items-center justify-between">
          <span className="text-sm font-semibold text-[#8B93A0]">Total HT</span>
          <span className="text-lg font-bold text-[#F0F2F5]">{total.toLocaleString('fr-FR')} €</span>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-white/[0.08] text-sm text-[#8B93A0] hover:text-[#F0F2F5] hover:bg-white/[0.04] transition-all font-medium"
          >
            Fermer
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/25 text-[#4F7CFF] hover:bg-[#4F7CFF]/20 transition-all text-sm font-medium">
            <Download size={13} />
            Télécharger PDF
          </button>
        </div>

      </div>
    </div>
  )
}

export default function FacturesPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const total = invoices.reduce((sum, inv) => sum + inv.amount, 0)

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto space-y-7">

        {/* Page Header */}
        <div>
          <h2 className="text-xl font-semibold text-[#F0F2F5]">Factures</h2>
          <p className="text-sm text-[#8B93A0] mt-1">{invoices.length} factures émises</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            label="Total facturé"
            value={`${invoiceSummary.total.toLocaleString('fr-FR')} €`}
            iconNode={<Euro size={18} className="text-[#4F7CFF]" />}
            sub="Depuis déc 2024"
          />
          <StatCard
            label="Montant payé"
            value={`${invoiceSummary.paid.toLocaleString('fr-FR')} €`}
            iconNode={<CheckCircle2 size={18} className="text-emerald-400" />}
            sub="3 factures"
          />
          <StatCard
            label="En attente"
            value={`${invoiceSummary.pending.toLocaleString('fr-FR')} €`}
            iconNode={<Clock size={18} className="text-amber-400" />}
            sub="1 facture"
          />
        </div>

        {/* Invoice Table */}
        <div className="bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/[0.06]">
            <h3 className="text-sm font-semibold text-[#F0F2F5]">Toutes les factures</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-6 py-3.5">Référence</th>
                  <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3.5 hidden sm:table-cell">Libellé</th>
                  <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3.5">Date</th>
                  <th className="text-right text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3.5">Montant</th>
                  <th className="text-left text-[11px] font-medium text-[#555E6B] uppercase tracking-wide px-3 py-3.5">Statut</th>
                  <th className="px-6 py-3.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {invoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                    onClick={() => setSelectedInvoice(invoice)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#4F7CFF]/10 border border-[#4F7CFF]/20 flex items-center justify-center flex-shrink-0">
                          <Receipt size={14} className="text-[#4F7CFF]" />
                        </div>
                        <span className="text-sm font-mono font-semibold text-[#F0F2F5]">{invoice.number}</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 hidden sm:table-cell">
                      <span className="text-sm text-[#8B93A0] max-w-[240px] truncate block">{invoice.description}</span>
                    </td>
                    <td className="px-3 py-4">
                      <span className="text-sm text-[#8B93A0]">{invoice.date}</span>
                    </td>
                    <td className="px-3 py-4 text-right">
                      <span className="text-sm font-bold text-[#F0F2F5]">
                        {invoice.amount.toLocaleString('fr-FR')} €
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <StatusBadge status={invoice.status} size="sm" />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedInvoice(invoice) }}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#555E6B] group-hover:text-[#4F7CFF] border border-white/[0.06] group-hover:border-[#4F7CFF]/30 bg-white/[0.03] group-hover:bg-[#4F7CFF]/10 px-3 py-1.5 rounded-lg transition-all duration-150"
                      >
                        <Download size={12} />
                        <span className="hidden sm:inline">PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Total Row */}
              <tfoot>
                <tr className="border-t border-white/[0.08] bg-white/[0.02]">
                  <td className="px-6 py-4" colSpan={3}>
                    <span className="text-xs font-semibold text-[#8B93A0] uppercase tracking-wide">Total</span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="text-base font-bold text-[#F0F2F5]">
                      {total.toLocaleString('fr-FR')} €
                    </span>
                  </td>
                  <td colSpan={2} />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Payment Note */}
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15">
          <Clock size={14} className="text-amber-400 flex-shrink-0" />
          <p className="text-sm text-amber-400/90">
            <strong className="font-semibold">FAC-2025-003</strong> — 4 500 € en attente de règlement. Échéance : 30 avr 2025.
          </p>
        </div>

      </div>

      {/* Modal */}
      {selectedInvoice && (
        <InvoiceModal invoice={selectedInvoice} onClose={() => setSelectedInvoice(null)} />
      )}
    </AppShell>
  )
}
