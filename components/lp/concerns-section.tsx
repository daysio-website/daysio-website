import Image from "next/image"

const concerns = [
  {
    icon: null,
    image: "/images/concern-papers.png",
    title: "紙の書類が多すぎる",
    description: "問診票や結果報告書など、紙の管理に追われていませんか？",
  },
  {
    icon: null,
    image: "/images/concern-clock.png",
    title: "作業時間がかかりすぎる",
    description: "手作業でのデータ入力や結果判定に時間を取られていませんか？",
  },
  {
    icon: null,
    image: "/images/concern-error.png",
    title: "入力ミスが心配",
    description: "手書きや手入力による転記ミスが発生していませんか？",
  },
  {
    icon: null,
    image: "/images/concern-globe.png",
    title: "多言語対応ができない",
    description: "外国人受診者への対応に困っていませんか？",
  },
  {
    icon: null,
    image: "/images/concern-money.png",
    title: "導入コストが高い",
    description: "高額な初期費用がネックで導入を躊躇していませんか？",
  },
]

export function ConcernsSection() {
  return (
    <section className="py-20 sm:py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            健診業務で
            <br className="sm:hidden" />
            <span className="relative inline-block mx-1">
              <span className="relative z-10 text-primary">こんなお悩み</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-300 -z-0"></span>
            </span>
            はありませんか？
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {concerns.map((concern, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border/50 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow"
            >
              {concern.image ? (
                <div className="flex h-14 w-14 items-center justify-center">
                  <Image
                    src={concern.image || "/placeholder.svg"}
                    alt={concern.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  {/* <concern.icon className="h-7 w-7 text-primary" /> */}
                </div>
              )}
              <h3 className="text-base font-bold text-foreground whitespace-nowrap">{concern.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{concern.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
