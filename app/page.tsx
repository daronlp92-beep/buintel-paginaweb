import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import UseCasesSection from '@/components/sections/UseCasesSection'
import TechnologiesSection from '@/components/sections/TechnologiesSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <UseCasesSection />
        <TechnologiesSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
