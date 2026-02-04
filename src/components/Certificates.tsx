'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar, FiAward, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';

// Sample certificates data - replace with your actual certificates
const certificates = [
  {
    id: 1,
    title: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    credentialUrl: 'https://aws.amazon.com/verification',
    credentialId: 'ABC123XYZ',
  },
  {
    id: 2,
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'Dec 2023',
    credentialUrl: 'https://coursera.org/verify',
    credentialId: 'DEF456UVW',
  },
  {
    id: 3,
    title: 'Google UX Design Professional',
    issuer: 'Google (Coursera)',
    date: 'Nov 2023',
    credentialUrl: 'https://coursera.org/verify',
    credentialId: 'GHI789RST',
  },
  {
    id: 4,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Oct 2023',
    credentialUrl: 'https://tensorflow.org/certificate',
    credentialId: 'JKL012MNO',
  },
  {
    id: 5,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'Sep 2023',
    credentialUrl: 'https://udemy.com/certificate',
    credentialId: 'PQR345STU',
  },
  {
    id: 6,
    title: 'Docker & Kubernetes',
    issuer: 'Linux Foundation',
    date: 'Aug 2023',
    credentialUrl: 'https://linuxfoundation.org/verify',
    credentialId: 'VWX678YZA',
  },
  {
    id: 7,
    title: 'Next.js & React - Complete Guide',
    issuer: 'Udemy',
    date: 'Jul 2023',
    credentialUrl: 'https://udemy.com/certificate',
    credentialId: 'BCD901EFG',
  },
  {
    id: 8,
    title: 'Figma UI/UX Design',
    issuer: 'Designlab',
    date: 'Jun 2023',
    credentialUrl: 'https://designlab.com/certificate',
    credentialId: 'HIJ234KLM',
  },
  {
    id: 9,
    title: 'Python for Data Science',
    issuer: 'IBM (Coursera)',
    date: 'May 2023',
    credentialUrl: 'https://coursera.org/verify',
    credentialId: 'NOP567QRS',
  },
  {
    id: 10,
    title: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    date: 'Apr 2023',
    credentialUrl: 'https://scrumalliance.org/verify',
    credentialId: 'TUV890WXY',
  },
];

// Certificate Card Component
function CertificateCard({ cert, index }: { cert: typeof certificates[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-[340px] group"
    >
      <div className="relative h-full bg-gradient-to-br from-secondary/90 to-dark/95 rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-500 overflow-hidden">
        {/* Gold Accent Top Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        {/* Subtle Gold Glow on Hover */}
        <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        {/* Content */}
        <div className="relative p-6">
          {/* Header with Number & Icon */}
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <FiAward className="w-7 h-7 text-accent" />
            </div>
            <span className="text-5xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-light mb-2 line-clamp-2 min-h-[56px] group-hover:text-accent transition-colors duration-300">
            {cert.title}
          </h3>
          
          {/* Issuer */}
          <p className="text-gray text-sm mb-5 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            {cert.issuer}
          </p>
          
          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-accent/30 via-accent/10 to-transparent mb-5" />
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <div className="text-xs text-gray/60 uppercase tracking-wider mb-1">Issued</div>
              <div className="text-light text-sm font-medium flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5 text-accent" />
                {cert.date}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray/60 uppercase tracking-wider mb-1">Credential ID</div>
              <div className="text-light text-sm font-medium font-mono truncate">
                {cert.credentialId}
              </div>
            </div>
          </div>
          
          {/* Verify Button */}
          <motion.a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent/10 border border-accent/30 text-accent font-medium text-sm hover:bg-accent hover:text-dark transition-all duration-300"
          >
            <FiExternalLink className="w-4 h-4" />
            <span>Verify Credential</span>
          </motion.a>
        </div>
        
        {/* Decorative Corner */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/5 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 360; // Card width + gap
      const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark" />

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#C9A55A 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Decorative Gold Glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionTitle
            subtitle="My Achievements"
            title="Certificates & Credentials"
            description="Professional certifications and courses I've completed to continuously improve my skills."
          />
        </div>

        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'border-accent/50 text-accent hover:bg-accent hover:text-dark' 
                : 'border-gray/20 text-gray/30 cursor-not-allowed'
            }`}
          >
            <FiChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'border-accent/50 text-accent hover:bg-accent hover:text-dark' 
                : 'border-gray/20 text-gray/30 cursor-not-allowed'
            }`}
          >
            <FiChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Certificates Horizontal Scroll */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
          
          <motion.div
            ref={containerRef}
            onScroll={checkScrollPosition}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 md:px-16 py-4 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint - Mobile */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:hidden text-center text-gray/50 text-sm mt-6"
        >
          ← Swipe to explore →
        </motion.p>
        
        {/* Progress Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center gap-2 mt-8"
        >
          {Array.from({ length: Math.ceil(certificates.length / 3) }).map((_, i) => (
            <div 
              key={i} 
              className="w-8 h-1 rounded-full bg-accent/20 overflow-hidden"
            >
              <div className="h-full bg-accent/60 rounded-full" style={{ width: i === 0 ? '100%' : '0%' }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
