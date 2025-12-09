import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Cloud, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DaysDaidaiPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sky-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-sky-500 hover:bg-sky-600 text-white">DAYS-Daidai-とは</Badge>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                  style={{ color: "#1e3a5f" }}
                >
                  Webブラウザですぐ使える
                  <br />
                  台数無制限の
                  <br />
                  健診クラウドシステム
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  DAYS-Daidai-
                  は、健診受付から結果管理までを一元化し、医療機関の業務負担を大幅に軽減するクラウドサービスです。ペーパーレス化や情報共有を促進し、現場の作業効率とミス削減に貢献します。
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] h-[350px] bg-white border-4 border-sky-400 rounded-2xl p-8 flex items-center justify-center">
                  <Image
                    src="/medical-staff-illustration-doctor-nurse-patients-h.jpg"
                    alt="医師と看護師がタブレットで健診データを確認"
                    width={400}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: "#1e3a5f" }}>
              安心のセキュリティと、シンプルな導入環境
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 mb-4" style={{ color: "#1e3a5f" }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>
                    安全な通信と高い信頼性
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    レセプトオンライン請求と同じSSL
                    通信を採用し、一般回線でも安全に利用できます。医療情報システムの「3省2ガイドライン」にも準拠しています。
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <Cloud className="w-12 h-12 mb-4" style={{ color: "#1e3a5f" }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>
                    導入がかんたん
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    必要なのは「インターネット環境」と「Google Chrome
                    を入れたデバイス」だけ。専用サーバーなどの設備は不要で、すぐに使い始められます。
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 mb-4" style={{ color: "#1e3a5f" }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>
                    安心の運用サポート
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    当社がサーバーとアプリの保守を担当し、経産省ガイドラインに沿った環境で運用できます。低コストで安全なシステム提供を実現しています。
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-slate-50 border-0">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground text-sm">
                  DAYS-Daidai- は、クラウドデータセンター上で動作するマルチテナント方式のSaaS 環境を採用しています。
                  <br />
                  1つのサーバーに複数ユーザー環境を構成することでリソースを効率化し、インフラコストを抑えた安価なサービス提供を実現しています。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-sky-500 hover:bg-sky-600 text-white">機能・料金</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1e3a5f" }}>
              DAYS-Daidai-3つのプラン
            </h2>
            <p className="text-muted-foreground mb-12">
              初期費用0円の「フリープラン」から、スタンダードな「安心サポートプラン」、上位の「グローバルプラン」まで、ご利用ニーズに合わせてお選びいただけます。
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <Card className="bg-slate-50 border-2 border-slate-200">
                <CardContent className="p-6">
                  <p className="text-sm text-slate-600 mb-2">まずは試してみたい方に</p>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#1e3a5f" }}>
                    非課金フリープラン
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold" style={{ color: "#1e3a5f" }}>
                      ¥ 0
                    </span>
                    <span className="text-muted-foreground">/月(税込)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">初期費用0 円</p>
                  <p className="text-sm text-muted-foreground">
                    無料で操作性をご体験いただけます。ご多忙な医療機関様の方でも使いやすい直感的な操作で、健診業務をサポートします。
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">
                    非課金フリープランでは、サポートセンターのご利用制限がございます。ご不明な場合は、DAYS-Daidai-操作ガイドよりご確認頂けます。
                  </p>
                </CardContent>
              </Card>
              {/* Standard Plan */}
              <Card className="bg-sky-100 border-2 border-sky-300">
                <CardContent className="p-6">
                  <p className="text-sm text-sky-700 mb-2">標準的な健診業務を網羅</p>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#1e3a5f" }}>
                    安心サポートプラン
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold" style={{ color: "#1e3a5f" }}>
                      ¥ 9,900
                    </span>
                    <span className="text-muted-foreground">/月(税込)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">初期費用110,000円〜</p>
                  <p className="text-sm text-muted-foreground">
                    Q&Aやマニュアルに加えて電話やメールによるサポートがついています。
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    ご多忙な医療機関様の方でも使いやすい直感的な操作で、健診業務をバックアップ。さらに、各種オプションをご用意しております。
                  </p>
                </CardContent>
              </Card>
              {/* Global Plan */}
              <Card className="bg-teal-100 border-2 border-teal-300">
                <CardContent className="p-6">
                  <p className="text-sm text-teal-700 mb-2">上位な連携ができる拡張性</p>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#1e3a5f" }}>
                    グローバルプラン
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold" style={{ color: "#1e3a5f" }}>
                      ¥ 29,700
                    </span>
                    <span className="text-muted-foreground">/月(税込)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">初期費用550,000円〜</p>
                  <p className="text-sm text-muted-foreground">
                    Q&Aやマニュアルに加えて電話やメールによるサポート付き。
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    ご多忙な医療機関様の方でも使いやすい直感的な操作で、健診業務をバックアップ。英語を始め多言語対応など、安心サポートプランより適応可能なオプションを幅広くお選びいただけます。
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <a href="/pricing">各プランの詳細はこちら</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-sky-500 hover:bg-sky-600 text-white">自社関連製品</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1e3a5f" }}>
              DAYS-Daidai-と連携可能な自社製品
            </h2>
            <p className="text-muted-foreground mb-12">
              DAYS-Daidai- には、健診データ収集アプリKENSHIN
              Plusや、再検査・二次検査フォローアップ業務支援システムNIJIKEN Tracker といった関連製品がございます。
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <a href="/products/kenshin-plus" className="block">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <CardContent className="p-0">
                    <Image
                      src="/medical-staff-using-ipad-healthcare-app.jpg"
                      alt="KENSHIN Plus"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: "#1e3a5f" }}>
                        KENSHIN Plus®
                      </h3>
                      <p className="text-muted-foreground">健診データ収集iPadアプリ</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
              <a href="/products/nijiken-tracker" className="block">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                  <CardContent className="p-0">
                    <Image
                      src="/medical-equipment-tablet-follow-up-examination.jpg"
                      alt="NIJIKEN Tracker"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: "#1e3a5f" }}>
                        NIJIKEN Tracker
                      </h3>
                      <p className="text-muted-foreground">再検査・２次検査フォローアップ業務支援システム</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-sky-500 hover:bg-sky-600 text-white">他システム連携</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1e3a5f" }}>
              DAYS-Daidai-との各種データ連携実績がある企業様一覧
            </h2>
            <p className="text-muted-foreground mb-8">
              連携をご希望の際は、必ず事前に各連携会社へ、直接お客様から詳細や費用をご確認ください。なお、費用が発生する場合は貴社ご負担となります。
            </p>
            <div className="text-center mb-4">
              <Button asChild variant="outline">
                <a href="/integrations">連携イメージこちら</a>
              </Button>
            </div>
            <div className="overflow-x-auto">
              <p className="text-xs text-muted-foreground mb-2">←横にスクロールできます→</p>
              <div className="min-w-[800px]">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-200">
                      <th className="border border-slate-300 p-2 text-left font-bold">連携パートナー企業</th>
                      <th className="border border-slate-300 p-2 text-center font-bold" colSpan={2}>
                        受診者属性
                      </th>
                      <th className="border border-slate-300 p-2 text-center font-bold" colSpan={4}>
                        検体検査
                      </th>
                      <th className="border border-slate-300 p-2 text-center font-bold" colSpan={2}>
                        画像診断
                      </th>
                      <th className="border border-slate-300 p-2 text-center font-bold" colSpan={2}>
                        WEB予約
                      </th>
                      <th className="border border-slate-300 p-2 text-center font-bold">PHR</th>
                      <th className="border border-slate-300 p-2 text-center font-bold" colSpan={3}>
                        その他
                      </th>
                    </tr>
                    <tr className="bg-slate-100 text-xs">
                      <th className="border border-slate-300 p-1"></th>
                      <th className="border border-slate-300 p-1">
                        基本属性
                        <br />
                        Import
                      </th>
                      <th className="border border-slate-300 p-1">
                        オーダー
                        <br />
                        Export
                      </th>
                      <th className="border border-slate-300 p-1">
                        検査結果
                        <br />
                        Import
                      </th>
                      <th className="border border-slate-300 p-1">
                        URLビューワ
                        <br />
                        連携
                      </th>
                      <th className="border border-slate-300 p-1">
                        MWMオーダー
                        <br />
                        Export
                      </th>
                      <th className="border border-slate-300 p-1">
                        検査レポート
                        <br />
                        Import
                      </th>
                      <th className="border border-slate-300 p-1">
                        予約
                        <br />
                        Import
                      </th>
                      <th className="border border-slate-300 p-1">
                        問診
                        <br />
                        Import
                      </th>
                      <th className="border border-slate-300 p-1">
                        健診結果
                        <br />
                        データExport
                      </th>
                      <th className="border border-slate-300 p-1">DWH</th>
                      <th className="border border-slate-300 p-1">
                        タッチ
                        <br />
                        ディスプレイ
                      </th>
                      <th className="border border-slate-300 p-1">
                        医用画像
                        <br />
                        モニター
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {[
                      ["株式会社アイソル", "〇", "", "", "", "", "", "", "", "", "", "", ""],
                      ["株式会社アステム", "", "〇", "〇", "", "", "", "", "", "", "", "", ""],
                      ["アトムメディカル株式会社", "", "〇", "〇", "", "", "", "", "", "", "", "", ""],
                      ["株式会社アルム", "", "", "", "", "", "", "", "", "〇", "", "", ""],
                      ["株式会社イーエムシステムズ", "〇", "", "", "", "", "", "〇", "", "", "", "", ""],
                      ["イームス・ロボティクス株式会社", "", "", "", "", "", "", "", "", "", "", "〇", ""],
                      ["株式会社イプロス", "", "", "", "", "", "", "", "", "", "", "〇", ""],
                      ["H.U.グループホールディングス株式会社", "", "〇", "〇", "〇", "", "", "", "", "", "", "", ""],
                      ["株式会社エクセルエイド", "", "", "", "", "", "", "〇", "", "", "", "", ""],
                      ["株式会社エスアールエル", "", "〇", "〇", "", "", "", "", "", "", "", "", ""],
                      ["NEC", "", "", "", "", "", "", "", "", "", "", "〇", ""],
                      ["株式会社エヌ・ティ・ティ・データ", "", "", "", "", "", "", "〇", "〇", "", "", "", ""],
                      ["株式会社LSIメディエンス", "", "〇", "〇", "", "", "", "", "", "", "", "", ""],
                      ["大塚製薬株式会社", "", "", "", "", "", "", "", "", "〇", "", "", ""],
                      ["キヤノンメディカルシステムズ株式会社", "", "", "", "", "", "", "", "", "", "", "", "〇"],
                      ["株式会社グッドサイクルシステム", "", "", "", "", "", "", "", "", "〇", "", "", ""],
                      ["株式会社ケアレックス", "", "", "", "", "", "", "〇", "", "", "", "", ""],
                      ["株式会社健診オンライン", "〇", "", "", "", "", "", "〇", "", "", "", "", ""],
                      ["コニカミノルタ株式会社", "", "", "", "〇", "", "", "", "", "", "", "", ""],
                      ["株式会社サンテメディカルサービス", "", "", "", "", "", "", "〇", "", "", "", "", ""],
                      ["Sansan株式会社", "〇", "", "", "", "", "", "", "", "", "", "", ""],
                      ["株式会社CSI", "", "", "", "", "〇", "〇", "", "", "", "", "", ""],
                      ["株式会社島津製作所", "", "", "", "", "", "", "", "", "", "", "", "〇"],
                      ["ジャパン・メディカル・カンパニー", "", "", "", "", "", "", "", "", "〇", "", "", ""],
                      ["株式会社タニタ", "", "△", "△", "", "", "", "", "", "", "", "", ""],
                      ["ディーメック株式会社", "", "", "", "", "", "", "", "", "", "", "〇", ""],
                      ["テクマトリックス株式会社", "", "", "", "", "", "", "", "", "〇", "", "", ""],
                      ["株式会社DNPハイパーテック", "", "", "", "", "", "", "〇", "", "", "", "", ""],
                      ["株式会社ドクターネット", "", "", "", "", "", "〇", "", "", "", "", "", ""],
                      ["株式会社ドクターキューブ", "", "", "", "〇", "", "", "", "", "", "", "", ""],
                      ["凸版印刷株式会社", "", "", "", "", "", "", "", "", "〇", "", "", ""],
                      ["株式会社ドリームラボ", "", "", "", "", "", "〇", "", "", "", "", "", ""],
                      ["日本光電工業株式会社", "", "△", "△", "", "", "", "", "", "", "", "", ""],
                      ["日本情報クリエイト株式会社", "", "", "", "", "", "", "", "", "〇", "", "", ""],
                      ["富士フイルム株式会社", "", "", "", "〇", "", "", "", "", "", "", "", ""],
                      ["フクダ電子株式会社", "", "〇", "〇", "", "", "", "", "", "", "", "", ""],
                      ["株式会社フジメディカルサービス", "〇", "", "", "", "", "", "〇", "〇", "", "", "", ""],
                      ["株式会社メディアコンテンツファクトリー", "", "", "", "", "", "", "〇", "", "", "", "", ""],
                      ["株式会社メディカルノート", "", "", "", "", "", "", "", "", "〇", "", "", ""],
                      ["株式会社メディックメディア", "", "", "", "", "", "", "", "", "", "", "〇", ""],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        {row.map((cell, j) => (
                          <td key={j} className="border border-slate-300 p-2 text-center">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-sky-500 hover:bg-sky-600 text-white">FAQ</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1e3a5f" }}>
              DAYS-Daidai-に関する「よくあるご質問」
            </h2>
            <p className="text-muted-foreground mb-12">導入に関して不安な点は直接営業担当がお答えします。</p>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="/faq/environment" className="block">
                <Card className="hover:shadow-lg transition-shadow border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold" style={{ color: "#1e3a5f" }}>
                      動作環境
                    </h3>
                  </CardContent>
                </Card>
              </a>
              <a href="/faq/features" className="block">
                <Card className="hover:shadow-lg transition-shadow border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold" style={{ color: "#1e3a5f" }}>
                      機能
                    </h3>
                  </CardContent>
                </Card>
              </a>
              <a href="/faq/integration" className="block">
                <Card className="hover:shadow-lg transition-shadow border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold" style={{ color: "#1e3a5f" }}>
                      連携
                    </h3>
                  </CardContent>
                </Card>
              </a>
              <a href="/faq/implementation" className="block">
                <Card className="hover:shadow-lg transition-shadow border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold" style={{ color: "#1e3a5f" }}>
                      導入
                    </h3>
                  </CardContent>
                </Card>
              </a>
              <a href="/faq/support" className="block">
                <Card className="hover:shadow-lg transition-shadow border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold" style={{ color: "#1e3a5f" }}>
                      サポート
                    </h3>
                  </CardContent>
                </Card>
              </a>
              <a href="/faq/security" className="block">
                <Card className="hover:shadow-lg transition-shadow border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold" style={{ color: "#1e3a5f" }}>
                      セキュリティ
                    </h3>
                  </CardContent>
                </Card>
              </a>
              <a href="/faq/company" className="block">
                <Card className="hover:shadow-lg transition-shadow border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold" style={{ color: "#1e3a5f" }}>
                      運営会社
                    </h3>
                  </CardContent>
                </Card>
              </a>
              <a href="/faq/guide" className="block">
                <Card className="hover:shadow-lg transition-shadow border border-gray-200 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold" style={{ color: "#1e3a5f" }}>
                      その他ご利用ガイド
                    </h3>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* Multilingual Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-sky-500 hover:bg-sky-600 text-white">多言語</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1e3a5f" }}>
              多言語対応について
            </h2>
            <p className="text-muted-foreground mb-12">
              "日本式"の健診は、海外でも高品質な医療サービスとして高く評価されています。DAYS-Daidai-は日本式健診を海外でも提供できるよう、多言語対応・ローカライズ・検査機器連携などを総合的にサポートします。
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>
                  多言語対応
                </h3>
                <p className="text-muted-foreground text-sm">
                  英語の帳票は標準提供、国内で展開しているクラウド型健診システムの機能はそのままに、さまざまな言語へ翻訳・ローカライズが可能です。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>
                  メディカルツーリズム対応
                </h3>
                <p className="text-muted-foreground text-sm">
                  海外からの受診者に対し、健診結果を対応言語で自動出力できます。翻訳作業をなくし、事務負担とコストを大幅に削減します。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1e3a5f" }}>
                  海外進出支援（国内医療機関向け）
                </h3>
                <p className="text-muted-foreground text-sm">
                  日本の医療機関が海外に進出する際も、現地言語に対応した健診システムを導入することで、スムーズな運用とスタッフ教育が可能です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#1e3a5f" }}>
              新着情報
            </h2>
            <div className="space-y-4 mb-8">
              <a
                href="/news/test2"
                className="block p-4 border border-gray-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">2025/11/19</span>
                  <span className="font-medium" style={{ color: "#1e3a5f" }}>
                    TEST2
                  </span>
                </div>
              </a>
              <a
                href="/news/company-split-2025"
                className="block p-4 border border-gray-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">2025/11/17</span>
                  <span className="font-medium" style={{ color: "#1e3a5f" }}>
                    TEST
                  </span>
                </div>
              </a>
            </div>
            <div className="text-center">
              <Button asChild variant="outline">
                <a href="/news">more</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 text-white" style={{ backgroundColor: "#1e3a5f" }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">今すぐ始めませんか？</h2>
            <p className="text-sky-200 mb-8">
              お問い合わせで、貴院に最適なプランをご提案いたします。お気軽にお問い合わせください。
            </p>
            <Button size="lg" className="bg-white hover:bg-sky-100" style={{ color: "#1e3a5f" }} asChild>
              <a href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
                お問い合わせ
              </a>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
