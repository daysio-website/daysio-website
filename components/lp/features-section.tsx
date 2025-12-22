const solutions = [
  {
    problem: "紙の書類が多すぎる",
    problemDetail: "問診票、結果報告書、印刷・保管・検索に手間がかかる",
    solution: "完全ペーパーレス化",
    solutionDetail: "全てをクラウドで一元管理。紙の手間から解放されます。",
  },
  {
    problem: "作業時間がかかりすぎる",
    problemDetail: "検査結果の手動判定に時間がかかる",
    solution: "自動判定で時間削減",
    solutionDetail: "1クリックで判定完了。作業時間を大幅に削減します。",
  },
  {
    problem: "入力ミスが心配",
    problemDetail: "手入力による転記ミスや入力エラーが発生",
    solution: "入力ミスを防止",
    solutionDetail: "デジタル入力とバリデーションでミスを未然に防ぎます。",
  },
  {
    problem: "多言語対応ができない",
    problemDetail: "外国人受診者への対応が困難",
    solution: "多言語対応で海外展開",
    solutionDetail: "日本語・英語・中国語など多言語に対応します。",
  },
  {
    problem: "導入コストが高い",
    problemDetail: "初期費用やサーバー管理費用が負担",
    solution: "低コストで導入可能",
    solutionDetail: "月額利用料のみで、サーバー管理も不要です。",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="pt-2 pb-20 sm:pt-4 sm:pb-32 scroll-mt-20">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            DAYS-Daidai- が<br />
            <span className="text-primary">すべてのお悩みを解決</span>
            します！
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            健診業務の課題を、クラウド型健診システムでまとめて解消します。
          </p>
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-2">
            <div className="bg-gray-100 border-r border-border p-4 text-center">
              <span className="text-sm font-bold text-gray-700">Before</span>
            </div>
            <div className="bg-[#1e3a5f] p-4 text-center">
              <span className="text-sm font-bold text-white">After</span>
            </div>
          </div>

          {/* Content Rows */}
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 ${index !== solutions.length - 1 ? "border-b border-border" : ""}`}
            >
              {/* Before Column */}
              <div className="bg-white border-r border-border p-6">
                <h3 className="text-base font-bold text-gray-700 mb-2">{item.problem}</h3>
                <p className="text-sm text-gray-600">{item.problemDetail}</p>
              </div>

              {/* After Column */}
              <div className="bg-gray-50 p-6">
                <h3 className="text-base font-bold text-[#1e3a5f] mb-2">{item.solution}</h3>
                <p className="text-sm text-foreground/70">{item.solutionDetail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
