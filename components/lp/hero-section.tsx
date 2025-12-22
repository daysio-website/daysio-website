"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/images/004-20-281-29.png",
      alt: "健診結果入力画面",
    },
    {
      src: "/images/003-20-281-29.png",
      alt: "健診予約カレンダー画面",
    },
  ]

  const logos = [
    { src: "/images/narita-hospital-logo.png", alt: "国際医療福祉大学 成田病院" },
    { src: "/images/fujita-hospital-logo.png", alt: "藤田医科大学病院" },
    { src: "/images/orange-logo.png", alt: "企業ロゴ" },
    { src: "/images/202003191017257653.png", alt: "三恵クリニック" },
    { src: "/images/logo-cr-135.png", alt: "CHO RAY HOSPITAL" },
    { src: "/images/2.svg", alt: "サッポロ" },
    { src: "/images/logo.png", alt: "アクラス中央病院" },
    { src: "/images/logo-symbol.svg", alt: "ロゴシンボル" },
    { src: "/images/f-logo.png", alt: "両国きたむら整形外科" },
    { src: "/images/logo-takenoko.png", alt: "タケノコ診療所グループ" },
    { src: "/images/footerlogo.png", alt: "ヤンゴン日本人会" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="container py-8 sm:py-12 max-w-5xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-2">
              <p className="text-lg text-black">クラウド型健診システム</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-primary">健診業務</span>
                <br />
                <span className="text-black">もう紙はいらない</span>
              </h1>
              <p className="text-xl mt-4 leading-relaxed text-black">予約受付から結果判定までワンストップで実施</p>
              <p className="mt-2 text-lg sm:text-xl font-bold">
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">多言語対応で海外進出支援！</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-300 -z-0"></span>
                </span>
              </p>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-base px-8 py-6 rounded-md justify-center" asChild>
                <a href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
                  無料相談はこちら
                </a>
              </Button>
            </div>
          </div>

          {/* 右側: イメージ */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* 実績バッジ */}
              <div className="absolute -top-4 right-0 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 z-10 bg-[#C9A86C] text-white rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-center shadow-lg">
                <span className="text-xs font-medium">利用継続率</span>
                <span className="text-2xl sm:text-3xl font-bold">
                  95<span className="text-base sm:text-lg">%</span>
                </span>
                <span className="text-xs font-medium">以上！</span>
              </div>
              <img
                src={images[currentImageIndex].src || "/placeholder.svg"}
                alt={images[currentImageIndex].alt}
                className="rounded-xl shadow-2xl max-w-md w-full"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 mb-8 sm:mb-0">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageIndex === index ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`画像 ${index + 1} を表示`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white py-4 mt-12 sm:mt-0">
        <div className="container max-w-5xl mx-auto">
          <p className="text-center text-base sm:text-lg font-bold">
            DAYS -Daidai- は、国内外550以上の医療機関・健診施設で導入されています
          </p>
        </div>
      </div>

      <div className="bg-white border-b py-6">
        <div className="container max-w-5xl mx-auto overflow-hidden">
          <div className="flex justify-start items-center gap-8 overflow-x-auto pb-2 scrollbar-hide">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 inline-flex items-center">
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  className={
                    logo.alt === "国際医療福祉大学 成田病院" || logo.alt === "両国きたむら整形外科"
                      ? "h-8 w-auto object-contain"
                      : logo.alt === "タケノコ診療所グループ"
                        ? "h-12 w-auto object-contain object-left"
                        : "h-12 w-auto object-contain"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
