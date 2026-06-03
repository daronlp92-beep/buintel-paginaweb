import {
  ShieldCheck,
  Clock,
  TrendingUp,
  Eye,
  LayoutDashboard,
  Cpu,
} from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Reducción de errores',
    value: '99.9%',
    description:
      'Eliminamos el error humano en procesos críticos. Tus datos son siempre precisos, validados y auditables.',
    color: 'text-emerald-400',
    border: 'group-hover:border-emerald-500/40',
  },
  {
    icon: Clock,
    title: 'Ahorro de tiempo',
    value: '80%',
    description:
      'Tareas que tomaban horas o días se completan en minutos. Tu equipo se enfoca en lo que realmente importa.',
    color: 'text-brand-400',
    border: 'group-hover:border-brand-500/40',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad real',
    value: '10×',
    description:
      'Crece sin contratar. Nuestras soluciones escalan automáticamente con el volumen de tu operación.',
    color: 'text-teal-400',
    border: 'group-hover:border-teal-500/40',
  },
  {
    icon: Eye,
    title: 'Trazabilidad completa',
    value: '100%',
    description:
      'Cada acción queda registrada. Auditorías instantáneas, historial completo y cumplimiento normativo garantizado.',
    color: 'text-cyan-400',
    border: 'group-hover:border-cyan-500/40',
  },
  {
    icon: LayoutDashboard,
    title: 'Visibilidad operativa',
    value: '24/7',
    description:
      'Dashboards en tiempo real que muestran el estado de tu operación en cualquier dispositivo, en cualquier momento.',
    color: 'text-green-400',
    border: 'group-hover:border-green-500/40',
  },
  {
    icon: Cpu,
    title: 'Automatización inteligente',
    value: 'IA-driven',
    description:
      'Sistemas que aprenden de tus datos y mejoran continuamente. Decisiones más rápidas, más inteligentes.',
    color: 'text-brand-300',
    border: 'group-hover:border-brand-300/40',
  },
]

export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="py-28 relative"
      aria-labelledby="beneficios-heading"
    >
      <div
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(49,140,119,0.6), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
            Beneficios
          </span>
          <h2
            id="beneficios-heading"
            className="font-display text-4xl md:text-6xl font-light text-gradient-gold mb-6"
          >
            Resultados que se miden, no se prometen
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Cada proyecto entrega valor cuantificable. Estos son los beneficios concretos
            que nuestros clientes experimentan desde las primeras semanas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className={`card-premium rounded-2xl p-8 group border border-[rgba(49,140,119,0.1)] ${b.border} transition-all duration-300`}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-elevated)] border border-[rgba(49,140,119,0.15)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <b.icon size={22} className={b.color} />
                </div>
                <span className={`font-display text-3xl font-light ${b.color}`}>{b.value}</span>
              </div>

              <h3 className="font-semibold text-[var(--text-primary)] mb-3 text-lg">
                {b.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-16 glass rounded-2xl p-8 text-center max-w-3xl mx-auto">
         <p className="font-display text-2xl md:text-3xl text-[var(--text-primary)] font-light mb-3">
          &ldquo;Buintel Automations redujo en un{' '}
          <span className="text-gradient">85% el tiempo</span> que invertíamos en
          conciliaciones financieras mensuales.&rdquo;
         </p>
          <p className="text-sm text-[var(--text-muted)]">
            — Director de Operaciones, Empresa Retail México
          </p>
        </div>
      </div>
    </section>
  )
}
