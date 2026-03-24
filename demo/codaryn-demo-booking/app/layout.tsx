import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Studio Photo Lumière — Réservation en ligne',
  description: 'Réservez votre séance photo en ligne — Studio Photo Lumière, Paris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full bg-[#0B0B0C] text-[#F0F2F5] antialiased">
        {children}
      </body>
    </html>
  )
}
