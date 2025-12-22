import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import { CompanySection } from "@/components/company-section"
import { ServicesSection } from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsSection } from "@/components/news-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

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
