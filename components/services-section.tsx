import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, BarChart3, Users, Settings, FileOutput } from "lucide-react"

const services = [
  {
    icon: Calendar,
    title: "予約・受付登録",
    description:
      "予約管理（日時・受診者・コース・オプション）、当日変更・検査追加、案内状・問診票発行、予約台帳出力、結果記入用紙出力",
  },
  {
    icon: FileText,
    title: "問診・検査結果登録",
    description: "問診結果（厚労省22項目）、当日検査の変更・追加、検査結果（定性・定量・数値）、医師所見",
  },
  {
    icon: BarChart3,
    title: "自動判定・自動コメント",
    description:
      "1クリックで総合判定・グループ判定（日本人間ドック学会基準）、当日検査の変更・追加、ABCDE判定・各検査グループ別コメント",
  },
  {
    icon: Users,
    title: "受診者・団体登録",
    description: "受診者情報（氏名・性別・生年月日）、事業主/団体情報（企業名・保険組合記号番号）",
  },
  {
    icon: Settings,
    title: "コース登録",
    description: "計測・検体・画像検查を組み合わせてコース化、自由に設定可能",
  },
  {
    icon: FileOutput,
    title: "健診結果報告書 作成",
    description: "個人向け健診結果報告書、様式5号（定期・雇入）、再検査・精密検査案内",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">包括的な健康診断ソリューション</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            医療機関のニーズに合わせた、総合的な健康診断管理システムをご提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                {service.icon && <service.icon className="h-12 w-12 text-primary mb-4" />}
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
