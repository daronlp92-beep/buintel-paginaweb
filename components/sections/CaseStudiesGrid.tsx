'use client';

import { motion } from 'framer-motion';
import { CaseStudy } from '@/lib/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-glow"
    >
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-neutral-500 text-sm font-medium overflow-hidden">
        <div className="group-hover:scale-105 transition-transform duration-300">
          Caso de Éxito: {caseStudy.title}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Subtitle */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
          <p className="text-primary-400 font-semibold text-sm">{caseStudy.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm line-clamp-2">{caseStudy.description}</p>

        {/* Results Grid */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-800">
          {caseStudy.results.map((result, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">{result.value}</div>
              <p className="text-xs text-neutral-400">{result.label}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-4">
          {caseStudy.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[];
  title?: string;
  description?: string;
}

export function CaseStudiesGrid({
  caseStudies,
  title = 'Casos de Éxito',
  description = 'Transformaciones reales con resultados medibles',
}: CaseStudiesGridProps) {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
