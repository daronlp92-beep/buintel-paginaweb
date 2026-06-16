'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

const trustPoints = [
  { icon: Clock, text: 'Primera implementación en 2–4 semanas' },
  { icon: TrendingUp, text: 'ROI típico en 30–90 días' },
  { icon: ShieldCheck, text: 'Sin permanencia — resultados o te devolvemos tu tiempo' },
];

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTASection({
  title = '¿Cuánto te cuesta NO automatizar?',
  subtitle = 'Cada hora que tu equipo dedica a tareas repetitivas es dinero que tu competencia está invirtiendo en crecer.',
  ctaText = 'Agenda tu Diagnóstico Gratuito',
  ctaHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 via-transparent to-accent-purple/8" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 glow-orb -z-10" aria-hidden="true" />

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Label */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary-400 border border-primary-500/30 bg-primary-500/5 px-4 py-1.5 rounded-full">
            Empieza hoy
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          {title}
        </h2>

        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        <p className="text-base text-neutral-400 max-w-xl mx-auto mb-12">
          Agenda una sesión de diagnóstico gratuita de 30 minutos. Sin ventas agresivas,
          solo un análisis honesto de lo que podemos automatizar en tu empresa — y cuánto te ahorrará.
        </p>

        {/* Trust points */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {trustPoints.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-sm text-neutral-400">
              <span className="w-8 h-8 rounded-full bg-primary-500/10 border border-primary-500/25 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-primary-400" />
              </span>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button variant="primary" size="lg" href={ctaHref}>
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" href="/cases">
            Ver Casos de Éxito
          </Button>
        </motion.div>

        {/* Micro-copy */}
        <motion.p
          className="text-xs text-neutral-600 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          100% gratuito · Sin compromiso · Respuesta en menos de 24 horas
        </motion.p>
      </motion.div>
    </section>
  );
}
