import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bell className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">お知らせ</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">重要なお知らせやシステムの更新情報をお伝えいたします。</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-gray-900">事業譲渡と運営体制変更のお知らせ</CardTitle>
                <span className="text-sm text-gray-500">2025/10/01</span>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="font-semibold mb-4">お客様各位</p>

              <h3 className="text-lg font-semibold mb-3">事業譲渡と運営体制変更のお知らせ</h3>

              <p className="mb-4">拝啓　平素より格別のご高配を賜り、誠にありがとうございます。</p>

              <p className="mb-4">
                このたび、株式会社システム・ビットが展開してまいりました健診ソフトウェア事業を、
                2025年10月1日付で株式会社DAYSIOが譲受いたしました。
              </p>

              <p className="mb-4">本事業は今後、株式会社DAYSIOが責任を持って引き継ぎ、運営を行ってまいります。</p>

              <p className="mb-4">
                また、システム・ビット社の健診ソフト事業に携わっていたスタッフは株式会社DAYSIOへ参画し、
                これまでと変わらぬサポート体制を維持してまいります。
              </p>

              <p className="mb-4">
                なお、本件につきましてご不明な点やご質問がございましたら、
                下記担当者窓口へご連絡いただきますようお願い申し上げます。
              </p>

              <p className="mb-4">まずは、略儀ながら書中をもってご案内、ご挨拶申し上げます。</p>

              <p className="text-right mb-6">敬具</p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">2025年10月吉日</p>
                <p className="font-semibold mb-4">株式会社DAYSIO</p>
                <p className="mb-6">代表取締役社長　山下 時彦</p>

                <div className="border-t pt-4">
                  <p className="font-semibold mb-2">【本件に関するお問い合わせ】</p>
                  <p className="mb-1">〒163-1435</p>
                  <p className="mb-2">東京都新宿区西新宿3-20-2 東京オペラシティタワー35F</p>
                  <p>お問い合わせ窓口：03-5333-6750</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
