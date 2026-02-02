'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { BsMouse } from 'react-icons/bs';
import TextScramble from './ui/TextScramble';

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
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/vicode.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay - darker and more professional */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/85 to-dark" />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.4) 100%)'
      }} />

      {/* Subtle accent glow - very minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Content - Centered and Professional */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-heading mb-6 tracking-tight">
            <span className="text-light">Mades</span>
            <span className="text-accent">mac</span>
          </h1>
        </motion.div>

        {/* Role with Scramble Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl text-light/90 font-light flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-accent/50" />
            <TextScramble 
              texts={[
                'Full Stack Developer',
                'UI/UX Designer',
                'Problem Solver',
                'Tech Enthusiast',
              ]}
              className="text-light font-medium"
            />
            <span className="w-12 h-[1px] bg-accent/50" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Crafting elegant digital experiences with clean code and modern technologies.
          <br className="hidden sm:block" />
          Turning complex problems into simple, beautiful solutions.
        </motion.p>
      </div>

      {/* Scroll Indicator with Mouse Icon - Always Visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={handleScrollClick}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3 text-gray/60 hover:text-accent transition-colors cursor-pointer group"
        >
          <BsMouse size={28} className="group-hover:text-accent transition-colors" />
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Subtle corner accents */}
      <div className="absolute top-20 left-8 w-20 h-[1px] bg-gradient-to-r from-accent/30 to-transparent" />
      <div className="absolute top-20 left-8 w-[1px] h-20 bg-gradient-to-b from-accent/30 to-transparent" />
      <div className="absolute bottom-20 right-8 w-20 h-[1px] bg-gradient-to-l from-accent/30 to-transparent" />
      <div className="absolute bottom-20 right-8 w-[1px] h-20 bg-gradient-to-t from-accent/30 to-transparent" />
    </section>
  );
}
