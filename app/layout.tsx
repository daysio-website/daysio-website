import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ExternalScripts } from "@/components/external-scripts"
import "./globals.css"

const geistSans = localFont({
  src: "../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
})

const geistMono = localFont({
  src: "../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "クラウド健診システムならDAYSIO（デイシオ）｜医療機関のDXを支援",
  description:"クラウド型健診システムで医療機関の業務をDX化。健康診断の予約から管理までをデジタル化し、スマートに効率化します。次世代システム「DAYS-Daidai」で正確な管理を実現。",
  generator: "v0.app",
  verification: {
    google: "ssdFuLrw1GeeA_DBkDg0wog06NRR-sYpdLkiTHZvt1w",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNLWPRX5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ExternalScripts />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
