"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, Cloud, Lock, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const features = [
  "直感的なユーザーインターface",
  "モバイル対応(Googlechrome)",
  "クラウドベース",
  "低コストで導入が可能",
  "サーバ管理・リプレイス不要",
  "作業時間を最大85％削減",
]

export default function FeaturesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    {
      src: "/images/file-export-management.png",
      alt: "ファイル出力情報管理画面 - 健診結果CSVのエクスポート設定",
    },
    {
      src: "/images/data-import.png",
      alt: "データインポート画面 - 検査結果、受診者、予約受付のインポート機能",
    },
    {
      src: "/images/data-export.png",
      alt: "データエクスポート画面 - 特定健診CSV、協会けんぽCSV、オーダー連携CSVのエクスポート",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                主要機能
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                医療現場に最適化された
                <span className="text-primary">先進機能</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                長年の医療現場での経験を基に開発された、実用性と使いやすさを両立したシステムです。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center p-4 bg-card rounded-lg">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">モバイル対応</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">クラウド</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">セキュア</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative max-w-2xl mx-auto w-full">
            <div className="border border-sky-300 bg-sky-100 rounded-2xl p-4 shadow-lg">
              <div className="relative aspect-video bg-white rounded-lg overflow-hidden">
                <img
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  className="w-full h-full object-contain"
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
            <p className="text-center text-sm text-muted-foreground mt-3">
              Daidaiの画面がよりスマートに進化します。(2026年春 リリース予定)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
