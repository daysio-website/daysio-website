import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "株式会社DAISIO - 健康診断システム",
  description: "医療機関向け次世代健康診断システムソリューション",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",       // 通常のファビコン
    shortcut: "/favicon.ico",   // ショートカット用
    apple: "/favicon.png",      // iOS・Androidホーム画面用
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
