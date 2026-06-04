import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos, guías y casos de uso sobre automatización empresarial, inteligencia artificial y transformación digital.',
}

const upcomingTopics = [
  {
    title: 'Cómo automatizar conciliaciones financieras con n8n y Python',
    category: 'Automatización Financiera',
    eta: 'Próximamente',
  },
  {
    title: 'Agentes de IA en operaciones de supply chain: casos reales',
    category: 'Inteligencia Artificial',
    eta: 'Próximamente',
  },
  {
    title: 'De Excel a dashboards ejecutivos: la guía definitiva',
    category: 'Analítica de Datos',
    eta: 'Próximamente',
  },
  {
    title: 'Automatización de planogramas: el caso SAOP',
    category: 'Supply Chain',
    eta: 'Próximamente',
  },
  {
    title: 'Integración de OpenAI en flujos empresariales con n8n',
    category: 'Automatización',
    eta: 'Próximamente',
  },
  {
    title: 'ROI de la automatización: cómo medirlo y presentarlo',
    category: 'Estrategia',
    eta: 'Próximamente',
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <section className="mb-20 max-w-3xl">
            <p className="text-sm font-mono text-primary-400 tracking-widest uppercase mb-4">
              Blog
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Automatización en la práctica
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Artículos técnicos y estratégicos sobre automatización empresarial, inteligencia
              artificial y transformación digital. Conocimiento real de proyectos reales.
            </p>
          </section>

          {/* Coming soon banner */}
          <div className="relative overflow-hidden p-12 rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-secondary-500/5 mb-16 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <p className="text-sm font-mono text-secondary-400 tracking-widest uppercase mb-4">
              En construcción
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              El blog está en camino
            </h2>
            <p className="text-neutral-300 max-w-xl mx-auto mb-8">
              Estamos preparando contenido de valor sobre automatización, IA y transformación
              digital. Mientras tanto, contáctanos para una consulta personalizada.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Agenda una consulta gratuita
            </Button>
          </div>

          {/* Upcoming articles preview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Próximos artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTopics.map((topic, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 opacity-60"
                >
                  <span className="text-xs font-mono text-primary-400 tracking-wide uppercase mb-3 block">
                    {topic.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm mb-4 leading-relaxed">
                    {topic.title}
                  </h3>
                  <span className="text-xs text-neutral-600 bg-neutral-800 px-2 py-1 rounded-full">
                    {topic.eta}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
