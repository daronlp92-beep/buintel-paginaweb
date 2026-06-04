'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[number]
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col h-full p-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-primary-500/40 hover:bg-neutral-900 transition-all duration-300 hover:shadow-glow backdrop-blur-sm"
    >
      {/* Quote icon */}
      <div className="mb-6">
        <Quote className="w-8 h-8 text-primary-500/60" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary-400 text-primary-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-neutral-300 leading-relaxed text-sm flex-1 mb-6 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-neutral-800 pt-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.role}</p>
          <p className="text-neutral-500 text-xs">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-neutral-900/30 -z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/5 rounded-full blur-3xl -z-10" />

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
            Testimonios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Resultados reales de transformaciones reales
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-xs text-neutral-600 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          * Testimonios representativos de proyectos implementados. Los nombres de empresas se omiten por confidencialidad.
        </motion.p>
      </div>
    </section>
  )
}
