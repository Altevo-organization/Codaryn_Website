import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Toaster } from "@/components/ui/toaster";
import { generateMetadata as createMetadata, generateJsonLd } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Codaryn — Software Studio",
    description:
      "Codaryn est un studio d'ingénierie logicielle spécialisé dans la conception de systèmes fiables et évolutifs : applications web, mobiles, intégrations API et infrastructure sur mesure.",
    path: "",
  }),
  manifest: "/manifest.json",
  icons: {
    icon: "/codaryn_icon.png",
    shortcut: "/codaryn_icon.png",
    apple: "/codaryn_icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateJsonLd();

  return (
    <html lang="fr" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <AuroraBackground />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}
