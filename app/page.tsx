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
  title: "DAYSIO | 医療機関のDX化を支援するクラウドシステム",
  description:
    "医療機関の健康診断業務を効率化する次世代システム。DAYS-Daidaiで業務をデジタル化し、スマートに正確に管理します。",
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
