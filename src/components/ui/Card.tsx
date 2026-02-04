'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
}: CardProps) {
  const variants = {
    default: 'bg-secondary/50',
    glass: 'glass',
    bordered: 'bg-secondary/30 border border-primary/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={`rounded-xl p-6 ${variants[variant]} ${hover ? 'hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
