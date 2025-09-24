import { Card, CardContent } from "@/components/ui/card"
import { Star, Hospital } from "lucide-react"

const testimonials = [
  {
    name: "小濱 様",
    role: "生活協同組合コープさっぽろ 医療連携事業部",
    content:
      "クラウド型で現場作業が効率化され、KENSHIN Plusによる進捗の可視化で業務分析ができるようになりました。健診業界初の完全クラウド化を実現できています。",
    rating: 5,
  },
  {
    name: "落合 様",
    role: "医療法人博康会アクラス中央病院 本部管理事務局",
    content:
      "報告書のコメント機能によりスタッフの意識と報告書クオリティが向上し、受診者の再検査受診率も高まってリピート率向上と収益増加を実現できました。",
    rating: 5,
  },
  {
    name: "師井 邑竹 医師",
    role: "ニセコインターナショナルクリニック",
    content:
      "業務の効率化により医師・スタッフのストレスが軽減され、過去データ比較機能により受診者満足度も向上し、継続受診者が増加しました。",
    rating: 5,
  },
  {
    name: "三恵クリニック 様",
    role: "",
    content:
      "クラウド環境での短期間業務立ち上げを実現し、iPadアプリ連携により検査機器データの自動化と紙媒体の転記作業が大幅に軽減されました。",
    rating: 5,
  },
  {
    name: "両国きたむら整形外科 様",
    role: "",
    content:
      "短期間・低価格での健診システム導入が実現し、クラウドによる簡単操作で事務スタッフも容易に業務立ち上げができました。",
    rating: 5,
  },
  {
    name: "東京女子医科大学附属成人医学センター様",
    role: "",
    content:
      "4システム同時リプレースにより他システム連携が容易になり、運用コスト大幅削減と統計データ集約による集計業務時間の短縮を実現しました。",
    rating: 5,
  },
  {
    name: "ドック健診センター（HECI） 様",
    role: "",
    content:
      "日・英・越の3言語対応により現地スタッフへの操作教育時間が短縮され、多国籍スタッフの共同運用をスムーズに開始することができました。",
    rating: 5,
  },
  {
    name: "人間ドック・健診センター（Shinagawa Healthcare Solutions Corporation） 様",
    role: "",
    content:
      "日本語・英語対応と日本人間ドック学会準拠の判定ロジックにより、日本式の高度な自動判定と運営効率化を同時に実現しました。",
    rating: 5,
  },
  {
    name: "Yangon Japan Medical Centre（YJMC） 様",
    role: "",
    content:
      "日・英の2言語システム対応と日・英・ミャンマーの3ヵ国語診断レポートにより、現地スタッフも使える健診システムを低コスト・短期間で実現しました。",
    rating: 5,
  },
  {
    name: "中国健診施設（四川成都） 様",
    role: "",
    content:
      "日本語・中国語の2言語対応により、受診者様に分かりやすい診断レポートを提供できる日本式健診センターを実現しました。",
    rating: 5,
  },
  {
    name: "インドネシア日系クリニック タケノコ診療所 様",
    role: "",
    content:
      "KENSHIN Plusの英語対応により現地スタッフでもストレスなく操作でき、日本人と現地スタッフの共同使用を短期間・低コストで実現しました。",
    rating: 5,
  },
  {
    name: "平成28年度 沖縄アジアITビジネス創出促進事業様",
    role: "",
    content:
      "多言語環境により現地スタッフでも容易に使用でき、言語切り替えによる翻訳作業の簡便化と短期間・ローコストでのシステム展開を実現しました。",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Hospital className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">導入医療施設からの声</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            国内外の医療機関で信頼され、高い評価をいただいています。
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border w-80 flex-shrink-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed mb-4 text-pretty">"{testimonial.content}"</blockquote>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
