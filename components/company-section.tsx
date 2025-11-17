import { Card, CardContent } from "@/components/ui/card"
import { Hospital, RefreshCcw, Calendar, Clock } from "lucide-react"

export function CompanySection() {
  return (
    <section id="company" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">会社概要</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            医療機関の健診業務効率化を支援する株式会社DAYSIOについてご紹介します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 h-fit">
            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4">会社情報</h3>
                <div className="space-y-4 flex-1">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">会社名</div>
                    <div className="col-span-2">
                      株式会社DAYSIO
                      <div className="mt-3">
                        <img src="/daysio-logo-company.png" alt="DAYSIO" className="h-8 w-auto object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">親会社</div>
                    <div className="col-span-2">
                      <a
                        href="https://www.mti.co.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline"
                      >
                        株式会社エムティーアイ
                      </a>
                      <br />
                      （東証プライム上場：9438）
                      <div className="mt-2">
                        <img
                          src="/shamei_combi_main_large.gif"
                          alt="エムティーアイグループ"
                          className="h-6 w-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">代表者</div>
                    <div className="col-span-2">代表取締役社長　山下 時彦</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">資本金</div>
                    <div className="col-span-2">5,000万円</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">事業内容</div>
                    <div className="col-span-2">健診システムの開発・運営</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4">事業所</h3>
                <div className="space-y-4 flex-1">
                  <div>
                    <div className="font-medium mb-2">本社</div>
                    <div className="text-muted-foreground">
                      〒171-0022
                      <br />
                      東京都豊島区南池袋2-30-12 BITビル
                      <br />
                      TEL: 03-3985-9256
                      <br />
                      FAX: 03-3982-7287
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-6 h-full content-center">
              <Card className="text-center">
                <CardContent className="p-6 flex flex-col justify-center">
                  <Hospital className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">550+</div>
                  <div className="text-base text-muted-foreground">導入医療施設</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6 flex flex-col justify-center">
                  <RefreshCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">96%</div>
                  <div className="text-base text-muted-foreground">ご利用継続率</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6 flex flex-col justify-center">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">10年</div>
                  <div className="text-base text-muted-foreground">サービス運営実績</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6 flex flex-col justify-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">3営業日</div>
                  <div className="text-base text-muted-foreground">最短稼働開始</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">2025年10月現在</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
