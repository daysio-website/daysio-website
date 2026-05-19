"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/images/e3-82-b9-e3-82-af-e3-83-aa-e3-83-bc-e3-83-b3-e3-82-b7-e3-83-a7-e3-83-83-e3-83-88-202026-01-14-20102924.png",
      alt: "検査結果入力画面",
    },
    {
      src: "/images/e3-82-b9-e3-82-af-e3-83-aa-e3-83-bc-e3-83-b3-e3-82-b7-e3-83-a7-e3-83-83-e3-83-88-202026-01-14-20103213.png",
      alt: "カレンダー・予約管理画面",
    },
  ]

  const logos = [
    { src: "/images/narita-hospital-logo.png", alt: "国際医療福祉大学 成田病院" },
    { src: "/images/fujita-hospital-logo.png", alt: "藤田医科大学病院" },
    { src: "/images/f-logo.png", alt: "両国きたむら整形外科" },
    { src: "/images/orange-logo.png", alt: "企業ロゴ" },
    { src: "/images/202003191017257653.png", alt: "三恵クリニック" },
    { src: "/images/logo-cr-135.png", alt: "CHO RAY HOSPITAL" },
    { src: "/images/2.svg", alt: "サッポロ" },
    { src: "/images/logo.png", alt: "アクラス中央病院" },
    { src: "/images/logo-symbol.svg", alt: "ロゴシンボル" },
    { src: "/images/logo-takenoko.png", alt: "タケノコ診療所グループ" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="container py-6 sm:py-8 sm:py-12 max-w-5xl mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-center lg:justify-start w-full">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                  <span className="text-base sm:text-2xl">✨</span>
                  <p className="text-sm sm:text-2xl font-bold text-white">医療機関向けクラウド型健診システム</p>
                  <span className="text-base sm:text-2xl">✨</span>
                </div>
              </div>
              <h1 className="font-bold tracking-tight mt-3 sm:mt-4 leading-tight text-[#1e3a5f]">
                <span className="block text-xl sm:text-3xl lg:text-4xl">{'電カル連携×ワンクリック判定で'}</span>
                <span className="block text-xl sm:text-3xl lg:text-4xl">{'健診業務の作業時間を最大85%削減。'}</span>
              </h1>
              <div className="mt-3 sm:mt-4 flex flex-col gap-1">
                <p className="text-sm sm:text-lg leading-relaxed text-gray-800">{'判定コメント自動入力・報告書作成の自動化で、作業時間を最大85%削減。'}</p>
                <p className="text-sm sm:text-lg font-bold text-[#1e3a5f] mt-1">
                  <span className="relative inline-block">
                    <span className="relative z-10">{'月額9,800円からご利用可能！'}</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-amber-300 -z-0"></span>
                  </span>
                </p>
              </div>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
              <Button
                size="lg"
                className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-md justify-center bg-[#1e3a5f] hover:bg-[#2c4f7c] text-white"
                asChild
              >
                <a href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
                  無料相談はこちら
                </a>
              </Button>
            </div>
          </div>

          {/* 右側: イメージ */}
          <div className="relative flex justify-center lg:justify-start mt-4 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* 実績バッジ */}
              <div className="absolute -top-2 right-0 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 z-10 bg-[#C9A86C] text-white rounded-full w-16 h-16 sm:w-24 sm:h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-center shadow-lg">
                <span className="text-[10px] sm:text-xs font-medium">利用継続率</span>
                <span className="text-lg sm:text-2xl sm:text-3xl font-bold">
                  95<span className="text-xs sm:text-base sm:text-lg">%</span>
                </span>
                <span className="text-[10px] sm:text-xs font-medium">以上！</span>
              </div>
              <div className="border border-gray-200 rounded-xl p-1 sm:p-2 bg-gray-50">
                <Image
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  width={600}
                  height={400}
                  priority={currentImageIndex === 0}
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              <div className="flex justify-center gap-2 mt-4 sm:absolute sm:-bottom-8 sm:left-1/2 sm:-translate-x-1/2 sm:mb-0">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                      currentImageIndex === index ? "bg-primary w-6 sm:w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`画像 ${index + 1} を表示`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e3a5f] text-white py-3 sm:py-4 mt-8 sm:mt-12 sm:mt-0">
        <div className="container max-w-5xl mx-auto px-4">
          <p className="text-center text-sm sm:text-base sm:text-lg font-bold">
            DAYS -Daidai- は、国内外550以上の医療機関・健診施設で導入されています
          </p>
        </div>
      </div>

      <div className="bg-white border-b py-4 sm:py-6">
        <div className="container max-w-5xl mx-auto overflow-hidden px-4">
          <div className="flex justify-start items-center gap-4 sm:gap-8 overflow-x-auto pb-2 scrollbar-hide">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 inline-flex items-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className={
                    logo.alt === "国際医療福祉大学 成田病院" || logo.alt === "両国きたむら整形外科"
                      ? "h-6 sm:h-8 w-auto object-contain"
                      : logo.alt === "タケノコ診療所グループ"
                        ? "h-8 sm:h-12 w-auto object-contain object-left"
                        : "h-8 sm:h-12 w-auto object-contain"
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
