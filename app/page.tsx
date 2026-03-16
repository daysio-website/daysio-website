import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import { CompanySection } from "@/components/company-section"
import { ServicesSection } from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsSection } from "@/components/news-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "電カル連携×ワンクリック判定で健診業務を効率化｜DAYS-Daidai",
  description:
    "description: "手入力の転記ミスをゼロへ。電子カルテ連携とワンクリック自動判定で、健診業務の時間を大幅カット。最短1週間で導入可能なクラウド型健診システム。",",
  alternates: {
    canonical: "https://www.daysio.co.jp/",
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CompanySection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
