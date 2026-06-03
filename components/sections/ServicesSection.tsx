import {
  DollarSign,
  Settings,
  Brain,
  Code2,
  Network,
  BarChart3,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: DollarSign,
    title: 'Automatización Financiera',
    description:
      'Conciliaciones bancarias, validación de facturas, reconciliación contable y reportes financieros ejecutivos generados automáticamente con precisión del 99.9%.',
    tags: ['Conciliaciones', 'Facturación', 'ERP'],
    gradient: 'from-emerald-900/40 to-brand-950/40',
  },
  {
    icon: Settings,
    title: 'Automatización Operativa',
    description:
      'Digitalización y automatización de flujos de trabajo operativos, aprobaciones, notificaciones y procesos end-to-end que eliminan cuellos de botella.',
    tags: ['n8n', 'Workflows', 'BPM'],
    gradient: 'from-teal-900/40 to-brand-950/40',
  },
  {
    icon: Brain,
    title: 'Inteligencia Artificial',
    description:
      'Desarrollo de agentes conversacionales, modelos predictivos, clasificación inteligente de datos y asistentes corporativos potenciados por OpenAI y Azure AI.',
    tags: ['OpenAI', 'Azure AI', 'Agentes'],
    gradient: 'from-brand-800/30 to-brand-950/40',
  },
  {
    icon: Code2,
    title: 'Desarrollo SaaS',
    description:
      'Plataformas web personalizadas con dashboards ejecutivos en tiempo real, portales de cliente y módulos de gestión escalables en la nube.',
    tags: ['Next.js', 'Cloud', 'Dashboard'],
    gradient: 'from-green-900/30 to-brand-950/40',
  },
  {
    icon: Network,
    title: 'Integraciones Empresariales',
    description:
      'Conectamos tus sistemas: ERP, CRM, e-commerce, plataformas logísticas y herramientas de comunicación en un ecosistema tecnológico unificado.',
    tags: ['API REST', 'Webhooks', 'Shopify'],
    gradient: 'from-cyan-900/30 to-brand-950/40',
  },
  {
    icon: BarChart3,
    title: 'Reportes Automatizados',
    description:
      'Generación y distribución automática de reportes ejecutivos, KPIs operativos y análisis de desempeño por correo, Teams o WhatsApp Business.',
    tags: ['Teams', 'WhatsApp', 'Power BI'],
    gradient: 'from-brand-700/20 to-brand-950/40',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-28 relative bg-[var(--bg-surface)]"
      aria-labelledby="servicios-heading"
    >
      <div className="absolute inset-0 dot-matrix opacity-30" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(49,140,119,0.3), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(49,140,119,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
            Servicios
          </span>
          <h2
            id="servicios-heading"
            className="font-display text-4xl md:text-6xl font-light text-gradient-gold mb-6"
          >
            Soluciones que escalan con tu negocio
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Cada servicio está diseñado para entregar valor desde el primer mes. No vendemos
            tecnología; entregamos transformación medible.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-premium rounded-2xl p-8 group relative overflow-hidden"
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center mb-6 group-hover:border-brand-500 transition-all duration-300 group-hover:shadow-glow">
                  <service.icon size={22} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                </div>

                <h3 className="font-display text-xl font-medium text-[var(--text-primary)] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tech-badge px-2.5 py-1 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 transition-colors font-semibold tracking-wide uppercase"
                >
                  Saber más <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold"
          >
            Habla con un especialista
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
