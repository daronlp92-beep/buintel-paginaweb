'use client'

import { motion } from 'framer-motion'
import { Highlight } from '@/components/ui/Button'

const expertiseAreas = [
  'Cadena de Suministro',
  'Planeación Comercial',
  'Forecasting & Demanda',
  'Inteligencia de Negocios',
  'Analítica Avanzada',
  'Automatización de Decisiones',
  'Gestión de Inventarios',
  'Gobierno de Datos',
  'Estrategia Digital',
]

const highlights = ['12+ Años', 'FEMSA / OXXO', 'Supply Chain', 'Digital First']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
}

export default function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <motion.section
        className="max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transformamos <Highlight>operaciones empresariales</Highlight> a través de tecnología
        </h1>
        <p className="text-xl text-neutral-300 leading-relaxed">
          Con más de 12 años de experiencia liderando proyectos de transformación digital en
          empresas líderes del sector retail y FMCG en Latinoamérica.
        </p>
      </motion.section>

      <div className="space-y-24">
        {/* Founder */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.p
              className="text-sm font-mono text-primary-400 tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              El Fundador
            </motion.p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ingeniería + Visión Empresarial
            </h2>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Ingeniero Industrial Administrador con más de 12 años liderando proyectos de
              transformación digital y automatización empresarial en las principales empresas del
              sector retail y FMCG en Latinoamérica.
            </p>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Experiencia directa en FEMSA y OXXO, donde desarrolló y escaló sistemas de
              automatización que impactaron operaciones nacionales: desde conciliaciones financieras
              hasta la generación masiva de planogramas para miles de puntos de venta.
            </p>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Esa trayectoria es la base de Buintel: construir soluciones reales para problemas
              reales, con resultados medibles desde el primer día.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/30 text-center"
                >
                  <p className="text-primary-400 font-semibold text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}
          <motion.div
            className="relative bg-gradient-to-br from-primary-500/20 to-secondary-500/10 h-96 rounded-2xl flex items-center justify-center border border-neutral-800 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-mesh-primary opacity-30" />
            <div className="text-center z-10">
              <img
                src="/buintel_isotipo_transparent.svg"
                alt="BUINTEL Automations"
                width={80}
                height={80}
                className="mx-auto mb-4 opacity-60"
              />
              <p className="text-neutral-400 text-sm">Foto del Fundador</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Expertise */}
        <section>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-mono text-secondary-400 tracking-widest uppercase mb-3">
              Especialización
            </p>
            <h2 className="text-4xl font-bold text-white">Áreas de Expertise</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-primary-500/50 hover:bg-neutral-900 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex-shrink-0 group-hover:shadow-glow transition-all" />
                  <p className="text-white font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <motion.section
          className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-secondary-500/10 p-12 rounded-2xl border border-primary-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <p className="text-sm font-mono text-primary-400 tracking-widest uppercase mb-4">
            Nuestra Misión
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tecnología que genera valor real
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl">
            Transformar operaciones empresariales manuales en procesos inteligentes, escalables y
            automatizados mediante inteligencia artificial y tecnología de vanguardia, generando
            valor tangible y sostenible para nuestros clientes.
          </p>
        </motion.section>
      </div>
    </div>
  )
}
