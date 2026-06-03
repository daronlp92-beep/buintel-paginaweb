const technologies = [
  {
    name: 'OpenAI',
    description: 'GPT-4, Assistants API, embeddings y modelos avanzados de lenguaje natural',
    color: '#10a37f',
    abbr: 'OAI',
  },
  {
    name: 'Microsoft Azure',
    description: 'Azure AI, Azure Functions, servicios cloud empresariales de alto rendimiento',
    color: '#0078d4',
    abbr: 'AZ',
  },
  {
    name: 'PostgreSQL',
    description: 'Base de datos relacional robusta para operaciones críticas y alta disponibilidad',
    color: '#336791',
    abbr: 'PG',
  },
  {
    name: 'Shopify',
    description: 'Integración nativa con el ecosistema Shopify para automatización de e-commerce',
    color: '#96bf48',
    abbr: 'SH',
  },
  {
    name: 'Microsoft Teams',
    description: 'Notificaciones inteligentes, bots corporativos y flujos de aprobación',
    color: '#6264a7',
    abbr: 'MT',
  },
  {
    name: 'WhatsApp Business',
    description: 'Comunicación automatizada, notificaciones y bots conversacionales empresariales',
    color: '#25d366',
    abbr: 'WA',
  },
  {
    name: 'Docker',
    description: 'Contenedorización de soluciones para despliegue consistente y escalable',
    color: '#2496ed',
    abbr: 'DK',
  },
  {
    name: 'n8n',
    description: 'Automatización visual de flujos complejos con más de 400 integraciones nativas',
    color: '#ea4b71',
    abbr: 'N8',
  },
]

export default function TechnologiesSection() {
  return (
    <section
      id="tecnologias"
      className="py-28 bg-[var(--bg-surface)] relative"
      aria-labelledby="tech-heading"
    >
      <div className="absolute inset-0 tech-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px shine-line"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
            Stack tecnológico
          </span>
          <h2
            id="tech-heading"
            className="font-display text-4xl md:text-6xl font-light text-gradient-gold mb-6"
          >
            Tecnología de primer nivel
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Trabajamos con las plataformas más confiables y adoptadas a nivel global para
            garantizar soluciones robustas y con soporte a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="card-premium rounded-xl p-6 group relative overflow-hidden"
            >
              {/* Color accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: tech.color }}
                aria-hidden="true"
              />

              <div className="flex items-center gap-4 mb-4">
                {/* Tech avatar */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-white shrink-0"
                  style={{ background: `${tech.color}22`, border: `1px solid ${tech.color}44` }}
                  aria-hidden="true"
                >
                  <span style={{ color: tech.color }}>{tech.abbr}</span>
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] text-sm">{tech.name}</h3>
              </div>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional integrations note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-muted)]">
            También trabajamos con{' '}
            <span className="text-[var(--text-secondary)]">
              Make, Zapier, REST APIs, GraphQL, Redis, MySQL, SAP, Salesforce
            </span>{' '}
            y más de 100 integraciones adicionales.
          </p>
        </div>
      </div>
    </section>
  )
}
