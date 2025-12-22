import { LPHeader } from "@/components/lp/header"
import { HeroSection } from "@/components/lp/hero-section"
import { ConcernsSection } from "@/components/lp/concerns-section"
import { BenefitsSection } from "@/components/lp/benefits-section"
import { FeaturesSection } from "@/components/lp/features-section"
import { CTASection } from "@/components/lp/cta-section"
import { LPFooter } from "@/components/lp/footer"

export const metadata = {
  title: "DAYS-Daidai | 健康診断総合システム",
  description:
    "医療機関の健康診断業務を効率化する、次世代の総合管理システム。予約管理から結果報告まで、全ての業務をシームレスに統合します。",
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
