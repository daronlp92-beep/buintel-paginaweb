import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutContent from '@/components/sections/AboutContent'

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description:
    'Conoce la historia, experiencia y misión de BUINTEL Automations. Más de 12 años transformando operaciones empresariales con automatización e IA.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
