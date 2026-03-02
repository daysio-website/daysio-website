"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export function ExternalScripts() {
  const [isProduction, setIsProduction] = useState(false)

  useEffect(() => {
    // Only load external scripts on the production domain, not in v0 preview
    const hostname = window.location.hostname
    if (hostname === "daysio.co.jp" || hostname === "www.daysio.co.jp" || hostname.endsWith(".vercel.app")) {
      setIsProduction(true)
    }
  }, [])

  if (!isProduction) return null

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MNLWPRX5');
        `}
      </Script>

      <Script
        src="https://kitchen.juicer.cc/?color=7hddEYDcZI0="
        strategy="lazyOnload"
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-780899147"
        strategy="afterInteractive"
      />
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
    </>
  )
}
