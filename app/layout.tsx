import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            j.onload = function() {
              console.log('[v0] GTM loaded successfully on:', window.location.pathname);
            };
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MNLWPRX5');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNLWPRX5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script async src="//kitchen.juicer.cc/?color=7hddEYDcZI0=" strategy="beforeInteractive" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-780899147" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-780899147', {
              'allow_enhanced_conversions': true
            });
          `}
        </Script>

        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
