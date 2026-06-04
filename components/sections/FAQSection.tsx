'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-neutral-800 rounded-lg overflow-hidden hover:border-primary-500/50 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-neutral-900/50 hover:bg-neutral-900 transition-colors text-left"
      >
        <h3 className="font-semibold text-white pr-4">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-primary-400 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 bg-neutral-950 border-t border-neutral-800 text-neutral-400 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

interface FAQSectionProps {
  items: Array<{ question: string; answer: string }>;
  title?: string;
  description?: string;
}

export function FAQSection({
  items,
  title = 'Preguntas Frecuentes',
  description = 'Resolvemos tus dudas sobre automatización e IA',
}: FAQSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
      <div className="max-w-3xl mx-auto">
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

        {/* FAQ Items */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
