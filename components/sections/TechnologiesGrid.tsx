'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Technology } from '@/lib/types';

interface TechnologyCardProps {
  technology: Technology;
  index: number;
}

export function TechnologyCard({ technology, index }: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-primary-500/40 transition-all duration-300 hover:shadow-glow cursor-pointer aspect-square"
    >
      {/* Logo real o emoji fallback */}
      <div className="mb-2 group-hover:scale-110 transition-transform flex items-center justify-center h-9">
        {technology.logoUrl ? (
          <Image
            src={technology.logoUrl}
            alt={technology.name}
            width={36}
            height={36}
            unoptimized
            className="object-contain"
          />
        ) : (
          <span className="text-3xl">{technology.icon}</span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-semibold text-white text-center text-xs leading-tight">{technology.name}</h3>

      {/* Category badge */}
      <span className="mt-1.5 text-[10px] text-neutral-600 group-hover:text-primary-500 transition-colors font-mono">
        {technology.category}
      </span>
    </motion.div>
  );
}

interface TechnologiesGridProps {
  technologies: Technology[];
  title?: string;
  description?: string;
}

export function TechnologiesGrid({
  technologies,
  title = 'Tecnologías que Utilizamos',
  description = 'Plataformas e integraciones de vanguardia',
}: TechnologiesGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono text-secondary-400 tracking-widest uppercase mb-4">
            Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        {/* Flat grid — all technologies together */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.id} technology={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
