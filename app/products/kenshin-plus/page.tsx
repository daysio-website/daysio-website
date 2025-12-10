import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, WifiOff, Settings, Globe } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function KenshinPlusPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/products/days-daidai#products"
            className="inline-flex items-center text-sm text-gray-600 hover:text-[#0f172a]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            自社関連製品一覧に戻る
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                自社関連製品
              </div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-5xl font-bold text-[#0f172a] leading-tight">KENSHIN Plus®</h1>
                <Link href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-3 text-sm">お問い合わせ</Button>
                </Link>
              </div>
              <p className="text-2xl text-gray-600 mb-8">健診データ収集 iPadアプリ</p>
              <div className="text-xl text-gray-600">
                <p className="mb-0 leading-relaxed">
                  KENSHIN Plus（健診プラス）は、健康診断当日の検査進捗をスムーズに管理できる入力アプリです。iPad
                  アプリと PC
                  ブラウザで利用でき、専用端末に比べて安価で簡単に導入できます。また、クラウド型健診システム「DAYS-Daidai-」とも連携可能です。（※一部機能はデバイス限定）
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/kenshin-20-281-29.jpg"
                alt="KENSHIN Plus - 医療従事者がiPadを使用している様子"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-16 text-center">KENSHIN Plusの特徴</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
              <h3 className="text-lg font-bold text-[#0f172a] mb-3">デジタル入力でミス削減</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                iPadやPCで健診結果を直接入力でき、紙の転記作業や二重入力によるミスを大幅に削減できます。
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
              <h3 className="text-lg font-bold text-[#0f172a] mb-3">検査機器から自動取り込み</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                院内Wi-Fiを利用して、身体計測などの検査機器からデータを自動収集できます。
              </p>
              <p className="text-gray-500 text-xs">※専用機器が必要</p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
              <h3 className="text-lg font-bold text-[#0f172a] mb-3">進捗をリアルタイム管理</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                検査ごとの進捗・通過状況をリアルタイムで確認でき、検査漏れ防止や混雑緩和に役立ちます。
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
              <WifiOff className="h-10 w-10 text-[#0ea5e9] mb-3" />
              <h3 className="text-lg font-bold text-[#0f172a] mb-3">オフライン入力に対応</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                電波が届かない場所でも結果を一時保存し、場所を問わず入力できます（巡回健診でも安心）。
              </p>
              <p className="text-gray-500 text-xs">※進捗のリアルタイム反映は通信時のみ</p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
              <Settings className="h-10 w-10 text-[#0ea5e9] mb-3" />
              <h3 className="text-lg font-bold text-[#0f172a] mb-3">業務に合わせてカスタマイズ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                医療機関ごとに入力・表示項目を柔軟に設定でき、業務フローに合わせた運用が可能です。
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
              <Globe className="h-10 w-10 text-[#0ea5e9] mb-3" />
              <h3 className="text-lg font-bold text-[#0f172a] mb-3">多言語・クラウド連携</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                英語など複数言語に対応し、外国人受診者にもスムーズに案内できます。また、クラウド環境へ院外からデータ送信ができ、巡回健診にも最適です。
              </p>
              <p className="text-gray-500 text-xs">※一部機能はデバイス限定／翻訳費用は別途</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-16 text-center">用途</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-gray-200 h-auto">
              <ul className="space-y-3 text-gray-700">
                <li>• 受診者管理</li>
                <li>• 健診結果データ入力</li>
                <li>• 診察コメント／所見入力</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-gray-200 h-auto">
              <ul className="space-y-3 text-gray-700">
                <li>• 検査進捗管理</li>
                <li>• バーコードによる受診者選択</li>
                <li>• 検査機器との自動連携</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-gray-200 h-auto">
              <ul className="space-y-3 text-gray-700">
                <li>• 検査通過管理</li>
                <li>• 検査オーダー発行</li>
                <li>• 健診結果データ入力</li>
                <li>• 健診結果データCSV出力</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">KENSHIN Plus®をもっと詳しく</h2>
          <p className="text-xl text-gray-300 mb-8">
            KENSHIN Plus®の詳細や導入方法について、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-gray-100 text-[#0f172a] px-8 py-6 text-lg">お問い合わせ</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
