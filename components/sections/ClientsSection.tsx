/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'

const clients = [
  {
    id: 'oxxo',
    name: 'OXXO',
    description: 'Red de tiendas de conveniencia líder en Latinoamérica',
    logoUrl: 'https://logo.clearbit.com/oxxo.com',
    color: '#F5A623',
  },
  {
    id: 'osabor',
    name: "O'Sabor",
    description: 'Cadena de restaurantes del Grupo FEMSA',
    logoUrl: 'https://logo.clearbit.com/grupoosabor.com',
    color: '#2E7D32',
  },
]

function ClientLogo({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
  )
}

export function ClientsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-primary-400 tracking-widest uppercase mb-4">
            Clientes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empresas que han confiado en nosotros
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Experiencia real implementada en empresas líderes del mercado
          </p>
        </motion.div>

        {/* Client cards */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-5 p-10 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-primary-500/30 hover:bg-neutral-900 transition-all duration-300 w-72"
            >
              {/* Logo */}
              <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-glow transition-all duration-300">
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="object-contain w-20 h-20 p-1"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.style.backgroundColor = client.color
                      parent.innerHTML = `<span style="color:white;font-size:2rem;font-weight:900">${client.name.charAt(0)}</span>`
                    }
                  }}
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{client.description}</p>
              </div>

              {/* Badge */}
              <span className="text-xs font-mono text-primary-400 border border-primary-500/30 px-3 py-1 rounded-full">
                Cliente verificado
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-neutral-600 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Proyectos implementados bajo acuerdos de confidencialidad
        </motion.p>
      </div>
    </section>
  )
}
