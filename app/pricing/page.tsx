import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import DaysDaidaiHeader from "@/components/days-daidai-header"
import DaysDaidaiFooter from "@/components/days-daidai-footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <DaysDaidaiHeader />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <h1 className="text-4xl font-bold text-[#0f172a] mb-4">DAYS-Daidai-の機能・料金のご紹介</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              各プランの標準機能と選べるオプション、料金を比較してご確認いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
              {/* Free Plan */}
              <Card className="p-8 bg-[#f5f0e8] border-none text-center">
                <p className="text-sm text-gray-600 mb-2">まずは試してみたい方に</p>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">非課金フリープラン</h2>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-[#0f172a]">¥ 0/月(税込)</p>
                  <p className="text-sm text-gray-600 mt-2">初期費用 0 円</p>
                </div>

                <div className="text-left mb-6 space-y-2">
                  <p className="text-sm text-gray-700">無料で操作性をご体験いただけます。</p>
                  <p className="text-sm text-gray-700">
                    ご多忙な医療機関様の方でも使いやすい直感的な操作性で、健診業務をサポートします。
                  </p>
                  <p className="text-sm text-gray-700">
                    非課金フリープランでは、サポートセンターのご利用制限がございます。
                  </p>
                  <p className="text-sm text-gray-700">ご不明な場合は、様式5号よりご確認頂けます。</p>
                </div>

                <div className="text-left space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">予約登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">受診者登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">団体登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">コース編集</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">自動判定</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">健康診断結果報告書</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">様式5号</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">DAYS-Daidai-操作ガイドの閲覧</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white bg-transparent"
                >
                  非課金フリープランを申し込む
                </Button>
              </Card>

              {/* Support Plan */}
              <Card className="p-8 bg-[#d9eff9] border-none text-center">
                <p className="text-sm text-gray-600 mb-2">標準的な健診業務をご希望</p>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">安心サポートプラン</h2>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-[#0f172a]">¥ 9,900/月(税込)</p>
                  <p className="text-sm text-gray-600 mt-2">初期費用 110,000円</p>
                </div>

                <div className="text-left mb-6 space-y-2">
                  <p className="text-sm text-gray-700">
                    Q&Aやマニュアルに加えて電話やメールによるサポートがついています。
                  </p>
                  <p className="text-sm text-gray-700">
                    ご多忙な医療機関様でも使いやすい直感的な操作性で、健診業務をバックアップ。
                  </p>
                  <p className="text-sm text-gray-700">さらに、各種オプションをご用意しております。</p>
                </div>

                <div className="text-left space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">予約登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">受診者登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">団体登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">コース編集</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">自動判定</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">健康診断結果報告書</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">特定健診結果通知表</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">様式5号/様式6号</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">結果データ出力（CSVファイル）</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">契約登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">帳票一括処理</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">DAYS-Daidai-操作ガイドの閲覧</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">サポートセンターへのお問い合わせ</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white bg-transparent"
                >
                  安心サポートプランを申し込む
                </Button>
              </Card>

              {/* Global Plan */}
              <Card className="p-8 bg-[#b8e6e6] border-none text-center">
                <p className="text-sm text-gray-600 mb-2">上位な連携できる高品質</p>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">グローバルプラン</h2>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-[#0f172a]">¥ 29,700/月(税込)</p>
                  <p className="text-sm text-gray-600 mt-2">初期費用 550,000円〜</p>
                </div>

                <div className="text-left mb-6 space-y-2">
                  <p className="text-sm text-gray-700">Q&Aやマニュアルに加えて電話やメールによるサポート付き。</p>
                  <p className="text-sm text-gray-700">
                    ご多忙な医療機関様でも使いやすい直感的な操作性で、健診業務をバックアップ。
                  </p>
                  <p className="text-sm text-gray-700">
                    英語等多言語対応など、安心サポートプランより適応可能なオプションを増廣く、お選びいただけます。
                  </p>
                </div>

                <div className="text-left space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">予約登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">受診者登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">団体登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">コース編集</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">自動判定</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">画像付き結果報告書</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">健康診断結果報告書</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">特定健診結果通知表</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">様式5号/様式6号</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">結果データ出力（CSVファイル）</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">契約登録</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">帳票一括処理</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">DAYS-Daidai-操作ガイドの閲覧</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">サポートセンターへのお問い合わせ</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">検体検査結果データインポート機能</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">検体検査オーダー機能</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">会計機能(領収書・請求書の出力)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">特定健康診査/請求XML作成</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white bg-transparent"
                >
                  グローバルプランを申し込む
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Options Pricing Table Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">オプション</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            安心サポートプラン・グローバルプランでご利用いただける追加オプションです。※金額は税込です
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Support Plan Options */}
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-6 text-center bg-[#d9eff9] py-3 rounded-t-lg">
                  安心サポートプラン
                </h3>
                <Card className="p-6 border-gray-200 bg-white rounded-t-none">
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">検体検査結果インポート</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">受診者属性インポート</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥110,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">特定健康診査 請求データ作成</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥110,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">協会けんぽ報告データ作成</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥110,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">PACS Viewer URL連携</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">特殊健診 各種様式（1種）</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">画像付き健診結果報告書</h4>
                      <p className="text-sm text-gray-600">初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">オンライン操作レッスン（1h）</h4>
                      <p className="text-sm text-gray-600">初期 ¥22,000</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-2">標準帳票カスタマイズ（1帳票）</h4>
                      <p className="text-sm text-gray-600">初期 ¥110,000</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Global Plan Options */}
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-6 text-center bg-[#b8e6e6] py-3 rounded-t-lg">
                  グローバルプラン
                </h3>
                <Card className="p-6 border-gray-200 bg-white rounded-t-none">
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">協会けんぽ報告データ作成</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥110,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">受診者属性インポート</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥110,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">社員リストCSV インポート</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥110,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">予約情報CSV インポート</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">問診結果CSV インポート</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">PACS Viewer URL連携</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">MWMオーダーエクスポート（画像検査）</h4>
                      <p className="text-sm text-gray-600">月額 ¥11,000 / 初期 ¥330,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">読影・検査レポートインポート（1検査）</h4>
                      <p className="text-sm text-gray-600">月額 ¥11,000 / 初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">特殊健診 各種様式（1種）</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥165,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">多言語対応（日本語・英語）</h4>
                      <p className="text-sm text-gray-600">月額 ¥11,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">多言語対応（その他1言語）</h4>
                      <p className="text-sm text-gray-600">月額 ¥11,000 / 初期 ¥330,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">オンライン操作レッスン（1h）</h4>
                      <p className="text-sm text-gray-600">初期 ¥22,000</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-2">標準帳票カスタマイズ（1帳票）</h4>
                      <p className="text-sm text-gray-600">初期 ¥110,000</p>
                    </div>
                  </div>
                </Card>
                <p className="text-sm text-gray-600 mt-4">
                  ※ 新規帳票対応／判定ロジックカスタマイズ／他社からのデータ移行は、個別対応となります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">{/* FAQ content here */}</section>

      {/* Footer */}
      <DaysDaidaiFooter />
    </div>
  )
}
