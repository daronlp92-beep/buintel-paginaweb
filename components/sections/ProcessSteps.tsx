'use client';

import { motion } from 'framer-motion';
import { ProcessStep } from '@/lib/types';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepComponentProps {
  step: ProcessStep;
  isLast?: boolean;
}

function getIcon(iconName: string): LucideIcon {
  const iconMap: { [key: string]: LucideIcon } = {
    Search: Icons.Search,
    Pencil: Icons.PenTool,
    Zap: Icons.Zap,
    Rocket: Icons.Rocket,
    TrendingUp: Icons.TrendingUp,
  };
  return iconMap[iconName] || Icons.Circle;
}

export function ProcessStepComponent({ step, isLast = false }: ProcessStepComponentProps) {
  const Icon = getIcon(step.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: step.number * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Step number circle */}
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex flex-col items-center justify-center text-white mb-4 flex-shrink-0 shadow-glow gap-0.5">
            <Icon className="w-5 h-5" />
            <span className="text-xs font-bold leading-none">{step.number}</span>
          </div>
          {!isLast && (
            <div className="w-1 h-24 bg-gradient-to-b from-primary-500 to-secondary-500 opacity-30" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pt-2">
          <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
          <p className="text-neutral-400">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
  description?: string;
}

export function ProcessSteps({
  steps,
  title = 'Nuestro Proceso',
  description = 'Cinco pasos para transformar tu operación',
}: ProcessStepsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-neutral-400">{description}</p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <ProcessStepComponent key={step.number} step={step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
