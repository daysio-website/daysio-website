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
    { src: "/health-report.jpg", alt: "健康診断結果報告書のインターフェイス" },
    { src: "/medical-images.jpg", alt: "医療画像一覧システムのインターフェイス" },
    { src: "/exam-results.jpg", alt: "検査結果一覧システムのインターフェイス" },
    { src: "/detailed-exam-results.jpg", alt: "詳細検査結果システムのインターフェイス" },
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

          <div className="lg:col-span-2 relative">
            <div className="bg-blue-100 rounded-3xl p-4 shadow-lg max-w-md mx-auto">
              <div className="bg-gray-200 rounded-2xl p-4">
                <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-2 shadow-2xl transform scale-90">
                  {/* Tablet bezel */}
                  <div className="bg-black rounded-xl p-2">
                    {/* Screen */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-inner aspect-square relative">
                      <div className="relative w-full h-full">
                        <img
                          src={images[currentImageIndex].src || "/placeholder.svg"}
                          alt={images[currentImageIndex].alt}
                          className={`w-full h-full transition-opacity duration-300 ${
                            currentImageIndex === 1
                              ? "object-cover object-top"
                              : currentImageIndex === 3
                                ? "object-cover object-top scale-105" // 4枚目画像を少し拡大し、上部を表示して下部の署名を隠す
                                : "object-cover object-center scale-110"
                          }`}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
