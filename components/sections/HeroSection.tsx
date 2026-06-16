'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const stats = [
  { value: '12+', label: 'Años de Experiencia', color: 'text-primary-400' },
  { value: '100+', label: 'Proyectos Entregados', color: 'text-secondary-400' },
  { value: '80K+', label: 'Procesos Automatizados', color: 'text-accent-purple' },
  { value: '340%', label: 'ROI Promedio', color: 'text-accent-green' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid -z-10" aria-hidden="true" />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-primary-500/20 glow-orb -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-48 w-[600px] h-[600px] bg-secondary-500/15 glow-orb -z-10"
        style={{ animationDelay: '3s' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent-purple/10 glow-orb -z-10"
        style={{ animationDelay: '6s' }}
        aria-hidden="true"
      />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 overflow-hidden -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent"
          style={{ animation: 'scanLine 8s linear infinite', top: 0 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary-500/30 bg-primary-500/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
            <span className="text-sm font-semibold text-secondary-300 tracking-widest uppercase">
              Agencia de Inteligencia Artificial · Monterrey, MX
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="block text-white">Tu empresa merece</span>
          <span className="block text-white">trabajar con</span>
          <span className="block gradient-border mt-1">Inteligencia Artificial.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Automatizamos procesos, creamos agentes de IA y desarrollamos software a medida
          para que tu equipo deje de perder tiempo — y empiece a escalar de verdad.
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-neutral-500 max-w-lg mx-auto mb-12 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          Tu competencia ya usa IA. Cada día que esperas, ellos llevan más ventaja.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <Button variant="primary" size="lg" href="/contact">
            Agenda tu Diagnóstico Gratuito
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" href="/services">
            Ver Servicios
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800/40 rounded-2xl overflow-hidden border border-neutral-800/60 max-w-3xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-950/70 px-6 py-6 text-center group hover:bg-primary-500/5 transition-colors duration-300"
            >
              <div className={`text-3xl md:text-4xl font-extrabold mb-1 ${stat.color} group-hover:scale-105 transition-transform duration-200`}>
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span className="text-xs text-neutral-600 tracking-widest uppercase">Descubre más</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
