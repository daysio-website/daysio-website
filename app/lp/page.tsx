import { LPHeader } from "@/components/lp/header"
import { HeroSection } from "@/components/lp/hero-section"
import { ConcernsSection } from "@/components/lp/concerns-section"
import { FeaturesSection } from "@/components/lp/features-section"
import { BenefitsSection } from "@/components/lp/benefits-section"
import { CTASection } from "@/components/lp/cta-section"
import { LPFooter } from "@/components/lp/footer"

export const metadata = {
  title: "DAYS-Daidai - クラウド型健診システム",
  description: "健診業務もう紙はいらない。予約受付から結果判定までワンストップで実施",
}

export default function LPPage() {
  return (
    <div className="min-h-screen pl-4 md:pl-8">
      <LPHeader />
      <main>
        <HeroSection />
        <ConcernsSection />
        <FeaturesSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <LPFooter />
    </div>
  )
}
