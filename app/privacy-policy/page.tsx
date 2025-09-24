import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-center mb-8 text-balance">プライバシーポリシー</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">個人情報の取り扱いについて</h2>
              <p className="text-muted-foreground leading-relaxed">
                株式会社DAYSIO（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考え、個人情報の保護に関する法律、その他の関係法令等を遵守し、お客様の個人情報を適切に取り扱います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. 個人情報の収集について</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、以下の場合に必要な範囲で個人情報を収集することがあります：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>お問い合わせやサービスへのお申し込みの際</li>
                <li>資料請求やデモンストレーションのお申し込みの際</li>
                <li>サービスの提供・運営のため</li>
                <li>アフターサービスやサポートの提供のため</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. 個人情報の利用目的</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、収集した個人情報を以下の目的で利用いたします：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>サービスの提供・運営・改善</li>
                <li>お客様からのお問い合わせへの対応</li>
                <li>新サービスや機能のご案内</li>
                <li>重要なお知らせの配信</li>
                <li>統計データの作成（個人を特定できない形式）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. 個人情報の第三者提供</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. 個人情報の管理</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対して、適切な監督を行います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. 個人情報の開示・訂正・削除</h2>
              <p className="text-muted-foreground leading-relaxed">
                お客様は、当社が保有する個人情報について、開示、訂正、削除等を求めることができます。ご希望の場合は、下記お問い合わせ窓口までご連絡ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. お問い合わせ窓口</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold mb-2">株式会社DAYSIO</p>
                <p className="text-muted-foreground">〒163-1435　東京都新宿区西新宿3-20-2 東京オペラシティタワー35F</p>
                <p className="text-muted-foreground">TEL: 03-5333-6789</p>
                <p className="text-muted-foreground">個人情報保護責任者: 代表取締役社長　山下 時彦</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. プライバシーポリシーの変更</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <div className="text-right mt-12">
              <p className="text-muted-foreground">制定日：2024年10月1日</p>
              <p className="text-muted-foreground">株式会社DAYSIO</p>
            </div>

            <div className="text-center mt-12 pt-8 border-t">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
