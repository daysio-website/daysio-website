import { LPHeader } from "@/components/lp/header"
import { HeroSection } from "@/components/lp/hero-section"
import { ConcernsSection } from "@/components/lp/concerns-section"
import { BenefitsSection } from "@/components/lp/benefits-section"
import { FeaturesSection } from "@/components/lp/features-section"
import { CTASection } from "@/components/lp/cta-section"
import { LPFooter } from "@/components/lp/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LPHeader />
      <main>
        <HeroSection />
        <ConcernsSection />
        <BenefitsSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <LPFooter />
    </div>
  )
}
