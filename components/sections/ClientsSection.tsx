'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

        {/* Client card — OXXO */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center gap-6 p-10 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-primary-500/30 hover:bg-neutral-900 transition-all duration-300 w-80"
          >
            {/* Logo */}
            <div className="rounded-xl overflow-hidden shadow-lg group-hover:shadow-glow transition-all duration-300">
              <Image
                src="/clients/oxxo.svg"
                alt="OXXO"
                width={240}
                height={121}
                unoptimized
                className="w-60 h-auto"
              />
            </div>

            {/* Info */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">OXXO</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Red de tiendas de conveniencia líder en Latinoamérica.
                Automatización de procesos financieros y operativos a escala nacional.
              </p>
            </div>

            <span className="text-xs font-mono text-primary-400 border border-primary-500/30 px-3 py-1 rounded-full">
              Cliente verificado
            </span>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-xs text-neutral-600 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Proyectos implementados bajo acuerdos de confidencialidad
        </motion.p>
      </div>
    </section>
  )
}
