"use client"

import { useEffect } from "react"
import Script from "next/script"

export function ExternalScripts() {
  useEffect(() => {
    // Suppress cross-origin Script error. in preview environments
    const handler = (e: ErrorEvent) => {
      if (e.message === "Script error.") {
        e.stopImmediatePropagation()
        e.preventDefault()
      }
    }
    window.addEventListener("error", handler, true)
    return () => window.removeEventListener("error", handler, true)
  }, [])

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          try {
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            j.onerror=function(){};
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MNLWPRX5');
          } catch(e) {}
        `}
      </Script>

      <Script
        src="https://kitchen.juicer.cc/?color=7hddEYDcZI0="
        strategy="lazyOnload"
        onError={() => {}}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-780899147"
        strategy="afterInteractive"
        onError={() => {}}
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          try {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-780899147', {
              'allow_enhanced_conversions': true
            });
          } catch(e) {}
        `}
      </Script>
    </>
  )
}
