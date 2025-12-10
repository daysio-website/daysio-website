import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NijikenTrackerPage() {
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
                <h1 className="text-5xl font-bold text-[#0f172a] leading-tight">NIJIKEN Tracker</h1>
                <Link href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-3">お問い合わせ</Button>
                </Link>
              </div>
              <p className="text-2xl text-gray-600 mb-8">再検査・２次検査フォローアップ業務支援システム</p>
              <p className="text-xl text-gray-600 leading-relaxed">
                NIJIKEN
                Trackerは、健診後の再検査・二次検査対象者を自動抽出し、柔軟なフィルタリングで必要な情報を素早くリスト化します。DAYS-Daidai-と連携し、漏れのない確実なフォローアップを実現します。
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/nijiken-20-281-29.jpg"
                alt="NIJIKEN Tracker - 医療機器とタブレット操作"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-16 text-center">NIJIKEN Trackerの特徴</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">抽出条件設定</h3>
              <p className="text-gray-600 leading-relaxed">
                判定結果や特定の期間を条件に、再検査・二次検査対象者を自動抽出し、柔軟なフィルタリングで必要な情報を素早くリスト化します。
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">ME機器からデータ収集</h3>
              <p className="text-gray-600 leading-relaxed">
                受診者のリストを期日ごとに確認し、進捗状況を直感的に把握することが可能です。勧奨実施結果や過去の受診歴も記録し、フォローアップをスムーズに支援します。
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">通知書テンプレート作成</h3>
              <p className="text-gray-600 leading-relaxed">
                他院名、診療科、医師名などを簡単に差し込み、個別対応が可能です。通知業務の作業時間を短縮し、業務の効率を向上させます。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-12">NIJIKEN TrackerとDAYS-Daidai-のデータ連携について</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                「NIJIKEN Tracker」は、「DAYS
                Daidai」とシームレスに連携し、健診情報の管理をよりスムーズに行うことが可能です。受診者の基本情報をはじめ、健診受診日や受診コースの総合判定などの情報を自動取得し、正確な管理が可能となります。また、健診結果の総合判定や対象検査グループ名、検査結果の数値、医師の所見も連携されるため、より適切なフォローアップが実現できます。これにより、手作業によるデータ入力の手間を削減し、再検査・二次検査の対象者抽出から通知、管理までの業務を大幅に効率化することができます。
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/nijiken-renkei.png"
                alt="NIJIKEN TrackerとDAYS-Daidai-のデータ連携図"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">NIJIKEN Trackerをもっと詳しく</h2>
          <p className="text-xl text-gray-300 mb-8">
            NIJIKEN Trackerの詳細や導入方法について、お気軽にお問い合わせください。
          </p>
          <Link href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white hover:bg-gray-100 text-[#0f172a] px-8 py-6 text-lg">お問い合わせ</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
