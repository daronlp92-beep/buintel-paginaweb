'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Button, Highlight } from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden" aria-label="Sección principal">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh-primary opacity-20 -z-10" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/50 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">
                Automatización Empresarial + IA
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-white mb-4">Automatizamos</span>
            <span className="block text-white mb-4">Procesos.</span>
            <Highlight className="block text-6xl md:text-7xl">
              Impulsamos Resultados.
            </Highlight>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Implementamos soluciones de Automatización e Inteligencia Artificial para reducir
            costos, eliminar tareas repetitivas y acelerar el crecimiento de tu empresa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button variant="primary" size="lg" href="/contact">
              Agenda una Consulta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Conoce Nuestros Servicios
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 border-t border-neutral-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-400">12+</div>
              <p className="text-neutral-400 text-sm">Años de Experiencia</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary-400">100+</div>
              <p className="text-neutral-400 text-sm">Proyectos Completados</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-green">80K+</div>
              <p className="text-neutral-400 text-sm">Procesos Automatizados</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
