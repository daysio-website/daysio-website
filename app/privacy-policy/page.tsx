import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold text-center mb-8 text-balance">個人情報保護方針</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed">
                株式会社ＤＡＹＳＩＯ（以下、当社）は、健診システム提供業務において取得する顧客等の個人情報と当社従業者の個人情報を適切に管理することが重要な社会的責務であると認識し、個人情報保護方針を定めて、従業者に周知徹底を図り、個人情報の保護に努めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. 個人情報の取得および利用</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、事業遂行のために必要な範囲内で利用目的を明確に定め、適切に個人情報の取得、利用及び提供を行います。取得した個人情報は利用目的の範囲内でのみ利用し、目的外利用を行わないための措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. 法令等の遵守</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、個人情報の取扱いに関する法令、国が定める指針、その他規範を遵守します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. 個人情報の安全対策</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、個人情報への不正アクセス、個人情報の紛失、破壊、改ざん、漏えい等のリスクに対して合理的な安全対策及び是正措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. 個人情報の苦情・相談への対応</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、個人情報の取扱いに関するご本人からの苦情及び相談に対して遅滞無く対応いたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. 個人情報保護マネジメントシステムの継続的改善</h2>
              <p className="text-muted-foreground leading-relaxed">
                個人情報保護を適切に維持するために、個人情報保護マネジメントシステムを確立し、運用状況について定期的に監査を実施し、継続的な改善に努めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. 個人情報保護方針に関するお問い合わせ窓口</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold mb-2">株式会社ＤＡＹＳＩＯ 個人情報保護担当</p>
                <p className="text-muted-foreground">E-mail：daysio_privacy@daysio.co.jp</p>
              </div>
            </section>

            <div className="text-right mt-12">
              <p className="text-muted-foreground">制定:2026年1月12日</p>
              <p className="text-muted-foreground">最終改正:2026年1月12日</p>
              <p className="text-muted-foreground mt-4">株式会社ＤＡＹＳＩＯ</p>
              <p className="text-muted-foreground">代表取締役社長　山下 時彦</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
