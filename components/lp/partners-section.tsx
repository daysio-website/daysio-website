import Image from "next/image"

export function PartnersSection() {
  const partners = [
    { name: "成田病院", logo: "/images/partner-narita.png" },
    { name: "タケノコ診療所グループ", logo: "/images/partner-takenoko.png" },
    { name: "三恵クリニック", logo: "/images/partner-sankei.png" },
    { name: "医療機関4", logo: "/images/partner-4.png" },
    { name: "医療機関5", logo: "/images/partner-5.png" },
    { name: "医療機関6", logo: "/images/partner-6.png" },
    { name: "医療機関7", logo: "/images/partner-7.png" },
    { name: "医療機関8", logo: "/images/partner-8.png" },
    { name: "医療機関9", logo: "/images/partner-9.png" },
    { name: "医療機関10", logo: "/images/partner-10.png" },
    { name: "医療機関11", logo: "/images/partner-11.png" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">導入実績</h2>
          <p className="text-muted-foreground">多くの医療機関・パートナー企業に選ばれています</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-background rounded-lg border border-border/40 hover:border-primary/50 transition-colors w-full h-24"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
