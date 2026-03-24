'use client'

import AppShell from '@/components/layout/AppShell'
import { client } from '@/lib/data'
import { Building2, Mail, Phone, MapPin, Bell, Globe, Shield, ChevronRight } from 'lucide-react'

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0F1115] border border-white/[0.06] rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/[0.06]">
        <h3 className="text-sm font-semibold text-[#F0F2F5]">{title}</h3>
      </div>
      <div className="px-6 py-5 space-y-4">{children}</div>
    </div>
  )
}

function Field({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
        <Icon size={13} className="text-[#8B93A0]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-[#555E6B] font-medium uppercase tracking-wide">{label}</p>
        <p className="text-sm text-[#F0F2F5] font-medium mt-0.5">{value}</p>
      </div>
    </div>
  )
}

function Toggle({ label, description, defaultOn = false }: { label: string; description: string; defaultOn?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <div>
        <p className="text-sm font-medium text-[#F0F2F5]">{label}</p>
        <p className="text-xs text-[#555E6B] mt-0.5">{description}</p>
      </div>
      <div className={`relative w-10 h-6 rounded-full transition-colors duration-200 cursor-pointer ${defaultOn ? 'bg-[#4F7CFF]' : 'bg-white/[0.08]'}`}>
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${defaultOn ? 'translate-x-5' : 'translate-x-1'}`} />
      </div>
    </div>
  )
}

function PreferenceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 group cursor-pointer">
      <p className="text-sm text-[#F0F2F5]">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#8B93A0]">{value}</span>
        <ChevronRight size={13} className="text-[#555E6B] group-hover:text-[#8B93A0] transition-colors" />
      </div>
    </div>
  )
}

export default function ParametresPage() {
  return (
    <AppShell>
      <div className="max-w-3xl mx-auto space-y-7">

        <div>
          <h2 className="text-xl font-semibold text-[#F0F2F5]">Paramètres</h2>
          <p className="text-sm text-[#8B93A0] mt-1">Gérez votre profil et vos préférences</p>
        </div>

        {/* Profile */}
        <div className="bg-[#0F1115] border border-white/[0.06] rounded-2xl p-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 flex items-center justify-center flex-shrink-0">
              <span className="text-[#4F7CFF] text-lg font-bold">{client.initials}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#F0F2F5]">{client.name}</h3>
              <p className="text-sm text-[#8B93A0] mt-0.5">{client.sector}</p>
              <p className="text-xs text-[#555E6B] mt-1">Client depuis {client.since}</p>
            </div>
            <button className="text-xs font-medium text-[#4F7CFF] hover:text-[#7b9fff] transition-colors border border-[#4F7CFF]/20 hover:border-[#4F7CFF]/40 px-3 py-1.5 rounded-lg bg-[#4F7CFF]/5 hover:bg-[#4F7CFF]/10">
              Modifier
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <SectionCard title="Informations de contact">
          <Field label="Entreprise" value={client.name} icon={Building2} />
          <Field label="E-mail" value={client.email} icon={Mail} />
          <Field label="Téléphone" value={client.phone} icon={Phone} />
          <Field label="Localisation" value={client.location} icon={MapPin} />
        </SectionCard>

        {/* Notifications */}
        <SectionCard title="Notifications">
          <Toggle label="Nouvelles livraisons" description="Recevoir un email lors d'une livraison de projet" defaultOn={true} />
          <div className="border-t border-white/[0.04]" />
          <Toggle label="Factures émises" description="Être notifié à chaque émission de facture" defaultOn={true} />
          <div className="border-t border-white/[0.04]" />
          <Toggle label="Mise à jour de progression" description="Notifications de changements de jalons" defaultOn={false} />
          <div className="border-t border-white/[0.04]" />
          <Toggle label="Résumé hebdomadaire" description="Récap automatique chaque lundi matin" defaultOn={true} />
        </SectionCard>

        {/* Preferences */}
        <SectionCard title="Préférences">
          <div className="divide-y divide-white/[0.04]">
            <PreferenceRow label="Langue" value="Français" />
            <PreferenceRow label="Fuseau horaire" value="Europe/Paris (UTC+1)" />
            <PreferenceRow label="Format de date" value="JJ/MM/AAAA" />
            <PreferenceRow label="Devise" value="Euro (€)" />
          </div>
        </SectionCard>

        {/* Security */}
        <SectionCard title="Sécurité">
          <div className="flex items-center gap-4 py-1">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Shield size={13} className="text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#F0F2F5]">Accès sécurisé</p>
              <p className="text-xs text-[#555E6B] mt-0.5">Authentification gérée par votre prestataire Codaryn</p>
            </div>
            <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">Actif</span>
          </div>
        </SectionCard>

        {/* Note */}
        <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/15">
          <Globe size={14} className="text-[#4F7CFF] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#4F7CFF]/90">
            Pour toute modification de vos informations, contactez votre responsable Codaryn à{' '}
            <span className="font-semibold">contact@codaryn.com</span>
          </p>
        </div>

      </div>
    </AppShell>
  )
}
