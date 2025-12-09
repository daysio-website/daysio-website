import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Cloud, Headphones } from "lucide-react"
import Image from "next/image"

export default function DaysDaidaiPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-sky-500 hover:bg-sky-600">DAYS-Daidai-とは</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] leading-tight mb-6">
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
              <Image
                src="/doctor-and-nurse-checking-tablet-with-health-check.jpg"
                alt="医師と看護師がタブレットで健診データを確認"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e3a5f] mb-12">
            安心のセキュリティと、シンプルな導入環境
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-[#1e3a5f] mb-4" />
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">安全な通信と高い信頼性</h3>
                <p className="text-muted-foreground">
                  レセプトオンライン請求と同じSSL
                  通信を採用し、一般回線でも安全に利用できます。医療情報システムの「3省2ガイドライン」にも準拠しています。
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Cloud className="w-12 h-12 text-[#1e3a5f] mb-4" />
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">導入がかんたん</h3>
                <p className="text-muted-foreground">
                  必要なのは「インターネット環境」と「Google Chrome
                  を入れたデバイス」だけ。専用サーバーなどの設備は不要で、すぐに使い始められます。
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Headphones className="w-12 h-12 text-[#1e3a5f] mb-4" />
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">安心の運用サポート</h3>
                <p className="text-muted-foreground">
                  当社がサーバーとアプリの保守を担当し、経産省ガイドラインに沿った環境で運用できます。低コストで安全なシステム提供を実現しています。
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8 bg-slate-50 border-0">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">
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
          <Badge className="mb-4 bg-sky-500 hover:bg-sky-600">機能・料金</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">DAYS-Daidai-3つのプラン</h2>
          <p className="text-muted-foreground mb-12">
            初期費用0円の「フリープラン」から、スタンダードな「安心サポートプラン」、上位の「グローバルプラン」まで、ご利用ニーズに合わせてお選びいただけます。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="border-2 border-sky-200 bg-sky-50">
              <CardContent className="p-6">
                <p className="text-sm text-sky-600 mb-2">まずは試してみたい方に</p>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">非課金フリープラン</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#1e3a5f]">¥0</span>
                  <span className="text-muted-foreground">/月(税込)</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">初期費用0 円</p>
                <p className="text-sm text-muted-foreground">
                  無料で操作性をご体験いただけます。ご多忙な医療機関様の方でも使いやすい直感的な操作で、健診業務をサポートします。
                </p>
              </CardContent>
            </Card>
            {/* Standard Plan */}
            <Card className="border-2 border-sky-400 bg-sky-100">
              <CardContent className="p-6">
                <p className="text-sm text-sky-600 mb-2">標準的な健診業務を網羅</p>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">安心サポートプラン</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#1e3a5f]">¥9,900</span>
                  <span className="text-muted-foreground">/月(税込)</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">初期費用110,000円〜</p>
                <p className="text-sm text-muted-foreground">
                  Q&Aやマニュアルに加えて電話やメールによるサポートがついています。ご多忙な医療機関様の方でも使いやすい直感的な操作で、健診業務をバックアップ。
                </p>
              </CardContent>
            </Card>
            {/* Global Plan */}
            <Card className="border-2 border-[#1e3a5f] bg-[#1e3a5f] text-white">
              <CardContent className="p-6">
                <p className="text-sm text-sky-200 mb-2">上位な連携ができる拡張性</p>
                <h3 className="text-xl font-bold mb-4">グローバルプラン</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">¥29,700</span>
                  <span className="text-sky-200">/月(税込)</span>
                </div>
                <p className="text-sm text-sky-200 mb-4">初期費用550,000円〜</p>
                <p className="text-sm text-sky-200">
                  Q&Aやマニュアルに加えて電話やメールによるサポート付き。英語を始め多言語対応など、安心サポートプランより適応可能なオプションを幅広くお選びいただけます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-sky-500 hover:bg-sky-600">自社関連製品</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">DAYS-Daidai-と連携可能な自社製品</h2>
          <p className="text-muted-foreground mb-12">
            DAYS-Daidai- には、健診データ収集アプリKENSHIN Plusや、再検査・二次検査フォローアップ業務支援システムNIJIKEN
            Tracker といった関連製品がございます。
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <Image
                  src="/medical-staff-using-ipad-app-for-health-checkup-da.jpg"
                  alt="KENSHIN Plus"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">KENSHIN Plus®</h3>
                  <p className="text-muted-foreground">健診データ収集iPadアプリ</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <Image
                  src="/medical-equipment-and-tablet-for-follow-up-examina.jpg"
                  alt="NIJIKEN Tracker"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">NIJIKEN Tracker</h3>
                  <p className="text-muted-foreground">再検査・２次検査フォローアップ業務支援システム</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Multilingual Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-sky-500 hover:bg-sky-600">多言語</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">多言語対応について</h2>
          <p className="text-muted-foreground mb-12">
            "日本式"の健診は、海外でも高品質な医療サービスとして高く評価されています。DAYS-Daidai-は日本式健診を海外でも提供できるよう、多言語対応・ローカライズ・検査機器連携などを総合的にサポートします。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">多言語対応</h3>
              <p className="text-muted-foreground">
                英語の帳票は標準提供、国内で展開しているクラウド型健診システムの機能はそのままに、さまざまな言語へ翻訳・ローカライズが可能です。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">メディカルツーリズム対応</h3>
              <p className="text-muted-foreground">
                海外からの受診者に対し、健診結果を対応言語で自動出力できます。翻訳作業をなくし、事務負担とコストを大幅に削減します。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">海外進出支援</h3>
              <p className="text-muted-foreground">
                日本の医療機関が海外に進出する際も、現地言語に対応した健診システムを導入することで、スムーズな運用とスタッフ教育が可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">今すぐ始めませんか？</h2>
          <p className="text-sky-200 mb-8">
            お問い合わせで、貴院に最適なプランをご提案いたします。お気軽にお問い合わせください。
          </p>
          <Button size="lg" className="bg-white text-[#1e3a5f] hover:bg-sky-100" asChild>
            <a href="https://www.daysio.co.jp/consultation" target="_blank" rel="noopener noreferrer">
              お問い合わせ
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
