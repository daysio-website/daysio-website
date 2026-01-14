"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, RefreshCcw, Hospital, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    {
      src: "/images/e3-82-b9-e3-82-af-e3-83-aa-e3-83-bc-e3-83-b3-e3-82-b7-e3-83-a7-e3-83-83-e3-83-88-202026-01-14-20102924.png",
      alt: "検査結果入力システムのインターフェイス",
    },
    {
      src: "/images/e3-82-b9-e3-82-af-e3-83-aa-e3-83-bc-e3-83-b3-e3-82-b7-e3-83-a7-e3-83-83-e3-83-88-202026-01-14-20103213.png",
      alt: "カレンダー・予約管理システムのインターフェイス",
    },
    {
      src: "/images/e3-82-b9-e3-82-af-e3-83-aa-e3-83-bc-e3-83-b3-e3-82-b7-e3-83-a7-e3-83-83-e3-83-88-202026-01-14-20103126.png",
      alt: "検査コードマッピング管理システムのインターフェイス",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-primary">クラウドで変える</span>
                健診業務
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                クラウド型健診システムDAYS-Daidaiで健診結果報告書作成負荷を1/10に。簡単・正確に、業務効率化を強力にサポートします。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://www.youtube.com/@smart-kenshincloud-ch" target="_blank" rel="noopener noreferrer">
                  解説動画
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <a href="https://kenshin-cloud.com/mypage/login" target="_blank" rel="noopener noreferrer">
                  資料ダウンロード
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <RefreshCcw className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">96%</div>
                <div className="text-sm text-muted-foreground">ご利用継続率</div>
              </div>
              <div className="text-center">
                <Hospital className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">550+</div>
                <div className="text-sm text-muted-foreground">導入医療施設</div>
              </div>
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">0円</div>
                <div className="text-sm text-muted-foreground">
                  初期費用
                  <br />
                  (フリープラン)
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative max-w-2xl mx-auto w-full">
            <div className="border border-cyan-200 bg-cyan-50 rounded-2xl p-4 shadow-lg">
              <div className="relative aspect-video bg-white rounded-lg overflow-hidden">
                <img
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />

                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-primary" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
