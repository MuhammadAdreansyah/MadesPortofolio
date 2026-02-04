'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { BsMouse } from 'react-icons/bs';
import TextScramble from './ui/TextScramble';

const ACCENT_COLOR = '#C9A55A';

// Dynamic roles - customize these!
const ROLES = [
  'Full Stack Developer',
  'Data Engineer',
  'Database Developer',
  'Backend Developer',
  'Software Engineer',
];

export default function Hero() {

  const handleScrollClick = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ contentVisibility: 'auto' }}
        >
          <source src="/video/vicode.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/85 to-dark" />
      
      {/* Subtle gradient accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${ACCENT_COLOR}08 0%, transparent 70%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Mades</span>
          <span style={{ color: ACCENT_COLOR }}>mac</span>
        </motion.h1>

        {/* Dynamic Role with Scramble Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light flex items-center justify-center gap-3">
            <span 
              className="hidden sm:block w-8 h-[2px]"
              style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_COLOR})` }}
            />
            <TextScramble 
              texts={ROLES} 
              className="font-medium"
              interval={5000}
              speed={60}
            />
            <span 
              className="hidden sm:block w-8 h-[2px]"
              style={{ background: `linear-gradient(90deg, ${ACCENT_COLOR}, transparent)` }}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Passionate about building scalable applications, designing efficient databases, 
          and transforming data into actionable insights.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={handleScrollClick}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-accent transition-colors cursor-pointer"
        >
          <BsMouse size={24} />
          <FiArrowDown size={14} />
        </motion.button>
      </motion.div>

      {/* Simple corner accents */}
      <div 
        className="absolute top-20 left-8 w-16 h-16 border-l border-t opacity-20"
        style={{ borderColor: ACCENT_COLOR }}
      />
      <div 
        className="absolute bottom-20 right-8 w-16 h-16 border-r border-b opacity-20"
        style={{ borderColor: ACCENT_COLOR }}
      />
    </section>
  );
}
