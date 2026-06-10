import { LPHeader } from "@/components/lp/header"
import { HeroSection } from "@/components/lp/hero-section"
import { ConcernsSection } from "@/components/lp/concerns-section"
import { BenefitsSection } from "@/components/lp/benefits-section"
import { FeaturesSection } from "@/components/lp/features-section"
import { CTASection } from "@/components/lp/cta-section"
import { LPFooter } from "@/components/lp/footer"
import { StickyCTA } from "@/components/lp/sticky-cta"

export const metadata = {
  title: "作業時間85%削減のクラウド健診システム｜DAYS-Daidai - DAYSIO",
  description:
    "初期費用0円・最短1週間で導入可能。電カル連携・多言語対応・ペーパーレス化を一括実現。国内外550施設以上の導入実績、利用継続率95%以上。まずは無料相談から。",
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
      <StickyCTA />
      <LPFooter />
    </>
  )
}
