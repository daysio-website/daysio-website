import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "株式会社DAYSIO - 健康診断システム",
  description: "医療機関向け次世代健康診断システムソリューション",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",              // 通常のファビコン
    shortcut: "/favicon.ico",          // ショートカット用
    apple: "/apple-touch-icon.png",    // iOS・Android ホーム画面用（180x180）
  },
  openGraph: {
    title: "株式会社DAYSIO - 健康診断システム",
    description: "医療機関向けクラウド健診システム",
    url: "https://www.daysio.co.jp/",
    siteName: "株式会社DAYSIO",
    images: [
      {
        url: "/ogp.png", // public/ に配置したOGP画像
        width: 1200,
        height: 630,
        alt: "株式会社DAYSIO",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社DAYSIO - 健康診断システム",
    description: "医療機関向けクラウド健診システム",
    images: ["/ogp.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        {/* 構造化データ (Google 検索結果用) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "株式会社DAYSIO",
              "url": "https://www.daysio.co.jp/",
              "logo": "https://www.daysio.co.jp/apple-touch-icon.png",
            }),
          }}
        />
        <meta name="application-name" content="株式会社DAYSIO" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
