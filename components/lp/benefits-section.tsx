import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const benefits = [
  {
    image: "/images/benefit-hourglass.png",
    title: "作業時間を大幅削減",
    description:
      "紙での管理から解放され、データ入力や集計作業が自動化。スタッフの負担を軽減し、本来の業務に集中できます。",
    stat: "最大85%削減",
    statLabel: "作業時間削減",
  },
  {
    image: "/images/benefit-yen.png",
    title: "低コストで導入可能",
    description:
      "初期費用0円、月額料金のみで始められます。高額な設備投資は不要で、中小規模の施設でも安心して導入できます。",
    stat: "0円",
    statLabel: "初期費用",
  },
  {
    image: "/images/benefit-lightning.png",
    title: "導入ハードルが低い",
    description:
      "クラウド型なので特別な機器やソフトウェアのインストールは不要。インターネット環境があればすぐに利用開始できます。",
    stat: "最短1週間",
    statLabel: "導入期間",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="pt-2 pb-20 sm:pt-4 sm:pb-32 bg-muted/20 scroll-mt-20">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            DAYS -Daidai- の<br />
            <span className="text-primary">
              <span className="text-5xl sm:text-6xl">3</span>つ
            </span>
            のポイント
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            DAYS -Daidai-が多くの医療機関に選ばれている理由をご紹介します
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/60 bg-card hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8">
                  <Image
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain [filter:invert(32%)_sepia(93%)_saturate(1000%)_hue-rotate(175deg)_brightness(95%)_contrast(101%)]"
                  />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
                <div className="flex flex-col gap-1 pt-4 border-t border-border/40 mt-auto">
                  <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                  <span className="text-3xl font-bold text-primary">{benefit.stat}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
