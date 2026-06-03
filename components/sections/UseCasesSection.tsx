import {
  ShoppingBag,
  Store,
  Globe,
  Landmark,
  Package,
  Building2,
} from 'lucide-react'

const cases = [
  {
    icon: ShoppingBag,
    sector: 'Retail',
    title: 'Retail moderno y eficiente',
    challenge: 'Inventarios desactualizados, reportes manuales y sin visibilidad en tiempo real.',
    solution:
      'Automatización de inventarios, sincronización de precios, alertas de stock mínimo y reportes de ventas diarios enviados automáticamente a gerencia.',
    metric: '-80% tiempo en reportes',
  },
  {
    icon: Store,
    sector: 'Franquicias',
    title: 'Control total de tu red',
    challenge: 'Gestión descentralizada, datos inconsistentes entre unidades y auditoría manual.',
    solution:
      'Dashboard centralizado de todas las unidades, automatización de conciliaciones por franquicia y alertas inteligentes de desviaciones operativas.',
    metric: '100% visibilidad operativa',
  },
  {
    icon: Globe,
    sector: 'E-commerce',
    title: 'Operaciones digitales sin fricción',
    challenge: 'Pedidos sin procesar, atención manual y abandono de carrito sin recuperación.',
    solution:
      'Automatización de fulfillment, recuperación de carritos, notificaciones de estatus y sincronización con plataformas logísticas vía API.',
    metric: '+35% conversión',
  },
  {
    icon: Landmark,
    sector: 'Operaciones Financieras',
    title: 'Finanzas sin errores humanos',
    challenge: 'Conciliaciones que toman días, errores contables y reportes fuera de tiempo.',
    solution:
      'Conciliación bancaria automática 24/7, detección de discrepancias en tiempo real y generación de estados financieros listos para dirección.',
    metric: '99.9% precisión',
  },
  {
    icon: Package,
    sector: 'Centros de Distribución',
    title: 'Logística inteligente',
    challenge: 'Trazabilidad deficiente, errores en picking y comunicación ineficiente.',
    solution:
      'Automatización de órdenes de picking, alertas de trazabilidad en cada etapa y reportes operativos enviados a equipos via WhatsApp y Teams.',
    metric: '-60% errores logísticos',
  },
  {
    icon: Building2,
    sector: 'Corporativo',
    title: 'Eficiencia a escala corporativa',
    challenge: 'Procesos de aprobación lentos, reportes ejecutivos manuales y flujos de información fragmentados.',
    solution:
      'Automatización de flujos de aprobación, generación de reportes ejecutivos semanales y notificaciones inteligentes de KPIs estratégicos.',
    metric: '-70% tiempo administrativo',
  },
]

export default function UseCasesSection() {
  return (
    <section
      id="casos"
      className="py-28 relative"
      aria-labelledby="casos-heading"
    >
      <div
        className="absolute top-1/3 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(49,140,119,0.5), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
            Casos de uso
          </span>
          <h2
            id="casos-heading"
            className="font-display text-4xl md:text-6xl font-light text-gradient-gold mb-6"
          >
            Tu industria, automatizada
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Hemos implementado soluciones reales en los sectores más demandantes. Conoce cómo
            transformamos los desafíos operativos en ventajas competitivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.sector}
              className="card-premium rounded-2xl p-8 group flex flex-col"
            >
              {/* Sector badge + icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-950 border border-brand-800 flex items-center justify-center group-hover:border-brand-500 transition-colors">
                  <c.icon size={18} className="text-brand-400" />
                </div>
                <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">
                  {c.sector}
                </span>
              </div>

              <h3 className="font-display text-xl text-[var(--text-primary)] mb-4">
                {c.title}
              </h3>

              {/* Challenge */}
              <div className="mb-3">
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                  Desafío
                </span>
                <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                  {c.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6 flex-1">
                <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                  Solución
                </span>
                <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                  {c.solution}
                </p>
              </div>

              {/* Metric */}
              <div className="pt-4 border-t border-[rgba(49,140,119,0.15)]">
                <span className="font-display text-2xl text-gradient">{c.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
