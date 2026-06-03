import { Target, Eye, Heart, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precisión',
    description:
      'Cada automatización que diseñamos está orientada a resultados medibles y trazables.',
  },
  {
    icon: TrendingUp,
    title: 'Innovación continua',
    description:
      'Adoptamos las tecnologías más avanzadas para mantenerte siempre a la vanguardia.',
  },
  {
    icon: Heart,
    title: 'Compromiso total',
    description:
      'Nos convertimos en un aliado estratégico a largo plazo, no solo en un proveedor de servicios.',
  },
  {
    icon: Eye,
    title: 'Transparencia',
    description:
      'Visibilidad completa sobre cada proceso automatizado con dashboards en tiempo real.',
  },
]

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-28 relative"
      aria-labelledby="nosotros-heading"
    >
      {/* Decorative blur */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(49,140,119,0.4), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
            Quiénes somos
          </span>
          <h2
            id="nosotros-heading"
            className="font-display text-4xl md:text-6xl font-light text-gradient-gold mb-6"
          >
            Arquitectos de la transformación digital
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Buintel Automations nació de una visión clara: las empresas modernas no deberían
            perder tiempo en procesos repetitivos. Somos el equipo que convierte esa visión en
            realidad operativa con tecnología de primera línea.
          </p>
        </div>

        {/* Grid: Historia + Misión + Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="card-premium rounded-2xl p-8 lg:col-span-2">
            <div className="shine-line mb-6" aria-hidden="true" />
            <span className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3 block">
              Nuestra historia
            </span>
            <h3 className="font-display text-2xl text-[var(--text-primary)] mb-4">
              De la necesidad al liderazgo
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Fundada por expertos en tecnología empresarial, Buintel Automations surgió al
              identificar una brecha crítica: las empresas acumulan procesos manuales que
              consumen recursos, generan errores y frenan el crecimiento.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Desde nuestros primeros proyectos de conciliación financiera hasta el desarrollo
              de agentes de inteligencia artificial, hemos construido un portafolio sólido de
              soluciones que demuestran resultados tangibles en semanas, no meses.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card-premium rounded-2xl p-8 flex-1">
              <span className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3 block">
                Misión
              </span>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Empoderar a las empresas mexicanas y latinoamericanas con automatización
                inteligente que libera el potencial humano y multiplica la capacidad operativa.
              </p>
            </div>
            <div className="card-premium rounded-2xl p-8 flex-1">
              <span className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3 block">
                Visión
              </span>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Ser el partner tecnológico de referencia para empresas que aspiran a operar
                con la eficiencia de las grandes corporaciones globales.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-display text-2xl text-[var(--text-primary)] mb-8 text-center">
            Nuestros valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card-premium rounded-xl p-6 group">
                <div className="w-10 h-10 rounded-lg bg-brand-900 border border-brand-700 flex items-center justify-center mb-4 group-hover:border-brand-500 transition-colors">
                  <v.icon size={18} className="text-brand-400" />
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">{v.title}</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
