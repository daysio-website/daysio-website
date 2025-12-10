import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Check,
  FileText,
  Users,
  Building,
  Sparkles,
  FileBarChart,
  Shield,
  Headphones,
  HelpCircle,
  FileSpreadsheet,
  Layers,
  ImageIcon,
  Download,
  Upload,
  JapaneseYen,
  FileCheck,
} from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0f172a] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">DD</span>
              </div>
              <span className="text-xl font-bold text-[#0f172a]">DAYS-Daidai-</span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="/#about" className="text-gray-600 hover:text-[#0f172a]">
                DAYS-Daidai-とは
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-[#0f172a]">
                機能・料金
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0f172a]">
                自社関連製品
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0f172a]">
                他システム連携
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0f172a]">
                FAQ
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0f172a]">
                新着情報
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-gray-600">
                ログイン
              </Button>
              <Link href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white">お問い合わせ</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

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
                  <p className="text-sm text-gray-700">ご不明な場合は、DAYS-Daidai-操作ガイドよりご確認頂けます。</p>
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
                    <span className="text-sm text-gray-700">健康診断結果報告書様式5号</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">DAYS -Daidai-操作ガイド</span>
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
                    <span className="text-sm text-gray-700">CSVデータ出力</span>
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
                    <span className="text-sm text-gray-700">DAYS -Daidai-操作ガイド</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">サポートセンター</span>
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
                    <span className="text-sm text-gray-700">CSVデータ出力</span>
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
                    <span className="text-sm text-gray-700">DAYS -Daidai-操作ガイド</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">サポートセンター</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">検体結果INP</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">検体結果EXP</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">会計(領収書・請求書)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">特定健康診査</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#0f172a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">請求XML作成</span>
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

      {/* Feature Comparison */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">標準機能比較</h2>
          <p className="text-center text-gray-600 mb-12">
            各プランに含まれる主な機能を比較できます。
            <br />
            ご利用目的に応じて、最適なプランをお選びください。
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Free Plan Features */}
            <Card className="p-6 bg-[#f5f0e8] border-none">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 text-center">非課金フリープラン</h3>

              <div className="space-y-6">
                <div className="text-center">
                  <FileText className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">予約登録</p>
                </div>

                <div className="text-center">
                  <Users className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">受診者登録</p>
                </div>

                <div className="text-center">
                  <Building className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">団体登録</p>
                </div>

                <div className="text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">コース編集</p>
                </div>

                <div className="text-center">
                  <FileBarChart className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">自動判定</p>
                </div>

                <div className="text-center">
                  <FileText className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">健康診断結果報告書</p>
                  <p className="text-xs text-[#0f172a]">様式5号</p>
                </div>

                <div className="text-center">
                  <HelpCircle className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">DAYS-Daidai-操作ガイド</p>
                </div>
              </div>
            </Card>

            {/* Support Plan Features */}
            <Card className="p-6 bg-[#d9eff9] border-none">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 text-center">安心サポートプラン</h3>

              <div className="space-y-6">
                <div className="text-center">
                  <FileText className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">予約登録</p>
                </div>

                <div className="text-center">
                  <Users className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">受診者登録</p>
                </div>

                <div className="text-center">
                  <Building className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">団体登録</p>
                </div>

                <div className="text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">コース編集</p>
                </div>

                <div className="text-center">
                  <FileBarChart className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">自動判定</p>
                </div>

                <div className="text-center">
                  <FileText className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">健康診断結果報告書</p>
                  <p className="text-xs text-[#0f172a]">特定健診結果通知表</p>
                  <p className="text-xs text-[#0f172a]">様式5号/様式6号</p>
                </div>

                <div className="text-center">
                  <FileSpreadsheet className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">CSVデータ出力</p>
                </div>

                <div className="text-center">
                  <Shield className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">契約登録</p>
                </div>

                <div className="text-center">
                  <Layers className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">帳票一括処理</p>
                </div>

                <div className="text-center">
                  <HelpCircle className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">DAYS-Daidai-操作ガイド</p>
                </div>

                <div className="text-center">
                  <Headphones className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">サポートセンター</p>
                </div>
              </div>
            </Card>

            {/* Global Plan Features */}
            <Card className="p-6 bg-[#b8e6e6] border-none">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 text-center">グローバルプラン</h3>

              <div className="space-y-6">
                <div className="text-center">
                  <FileText className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">予約登録</p>
                </div>

                <div className="text-center">
                  <Users className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">受診者登録</p>
                </div>

                <div className="text-center">
                  <Building className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">団体登録</p>
                </div>

                <div className="text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">コース編集</p>
                </div>

                <div className="text-center">
                  <FileBarChart className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">自動判定</p>
                </div>

                <div className="text-center">
                  <ImageIcon className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">画像付き結果報告書</p>
                </div>

                <div className="text-center">
                  <FileText className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">健康診断結果報告書</p>
                  <p className="text-xs text-[#0f172a]">特定健診結果通知表</p>
                  <p className="text-xs text-[#0f172a]">様式5号/様式6号</p>
                </div>

                <div className="text-center">
                  <FileSpreadsheet className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">CSVデータ出力</p>
                </div>

                <div className="text-center">
                  <Shield className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">契約登録</p>
                </div>

                <div className="text-center">
                  <Layers className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">帳票一括処理</p>
                </div>

                <div className="text-center">
                  <HelpCircle className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">DAYS-Daidai-操作ガイド</p>
                </div>

                <div className="text-center">
                  <Headphones className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">サポートセンター</p>
                </div>

                <div className="text-center">
                  <Download className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">検診結果INP</p>
                </div>

                <div className="text-center">
                  <Upload className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">検診結果EXP</p>
                </div>

                <div className="text-center">
                  <JapaneseYen className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">会計</p>
                  <p className="text-xs text-[#0f172a]">(領収書・請求書)</p>
                </div>

                <div className="text-center">
                  <FileCheck className="w-10 h-10 mx-auto mb-2 text-[#0f172a]" />
                  <p className="text-sm font-medium text-[#0f172a]">特定健康診査</p>
                  <p className="text-xs text-[#0f172a]">請求XML作成</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Options Pricing Table Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">オプション</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            安心サポートプラン・グローバルプランでご利用いただける追加オプションです。
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
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥110,000</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-bold text-[#0f172a] mb-2">問診結果CSV インポート</h4>
                      <p className="text-sm text-gray-600">月額 ¥3,300 / 初期 ¥110,000</p>
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

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#0f172a] font-bold text-sm">DD</span>
                </div>
                <span className="font-bold">DAYS-Daidai-</span>
              </div>
              <p className="text-sm text-gray-400">
                医療機関の健診業務を
                <br />
                DX化でカンタン・正確・スマートに
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">サービス</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    機能一覧
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    料金プラン
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    導入事例
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">サポート</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    使い方ガイド
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">会社情報</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 DAYS-Daidai-. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
