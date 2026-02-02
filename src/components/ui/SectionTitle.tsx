'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mb-12 ${alignments[align]}`}
    >
      {subtitle && (
        <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
        {title.split(' ').map((word, index) => (
          <span key={index}>
            {index === title.split(' ').length - 1 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              <span className="text-white">{word} </span>
            )}
          </span>
        ))}
      </h2>
      {description && (
        <p className="text-gray text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-4 flex gap-1 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''}`}>
        <span className="w-8 h-1 bg-accent rounded-full"></span>
        <span className="w-3 h-1 bg-accent/50 rounded-full"></span>
        <span className="w-2 h-1 bg-accent/30 rounded-full"></span>
      </div>
    </motion.div>
  );
}
