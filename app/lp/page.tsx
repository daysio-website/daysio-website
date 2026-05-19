import { LPHeader } from "@/components/lp/header"
import { HeroSection } from "@/components/lp/hero-section"
import { ConcernsSection } from "@/components/lp/concerns-section"
import { BenefitsSection } from "@/components/lp/benefits-section"
import { FeaturesSection } from "@/components/lp/features-section"
import { CTASection } from "@/components/lp/cta-section"
import { LPFooter } from "@/components/lp/footer"

export const metadata = {
  title: "作業時間85%削減のクラウド健診システム｜DAYS-Daidai - DAYSIO",
  description:
    "電カル連携・ワンクリック判定で作業時間を最大85%削減。月額9,800円から始められるクラウド健診システム。550以上の医療機関・健診施設で導入実績あり。",
  verification: {
    google: "ssdFuLrw1GeeA_DBkDg0wog06NRR-sYpdLkiTHZvt1w",
  },
  alternates: {
    canonical: "https://www.daysio.co.jp/lp",
  },
}

export default function LPPage() {
  return (
    <>
      <LPHeader />
      <main>
        <HeroSection />
        <ConcernsSection />
        <BenefitsSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <LPFooter />
    </>
  )
}
