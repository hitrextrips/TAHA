import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StickyCallButton } from "@/components/sticky-call-button"

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <CtaSection />
      <Footer />
      <StickyCallButton />
    </main>
  )
}
