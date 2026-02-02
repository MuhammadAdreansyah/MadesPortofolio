'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiAward, FiBriefcase, FiUsers, FiCode } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const stats = [
  { icon: FiBriefcase, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: FiCode, value: 50, suffix: '+', label: 'Projects Completed' },
  { icon: FiUsers, value: 30, suffix: '+', label: 'Happy Clients' },
  { icon: FiAward, value: 10, suffix: '+', label: 'Awards Won' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}{suffix}
        </motion.span>
      ) : '0'}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-secondary/10 to-dark" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#C9A55A 1px, transparent 1px), linear-gradient(90deg, #C9A55A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="About Me"
          title="Know Me More"
          description="Discover my journey, skills, and what drives me to create amazing digital experiences."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto lg:mx-0 w-full max-w-md aspect-square">
              {/* Background Shape */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary to-accent/50 rounded-2xl transform rotate-6" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 bg-secondary">
                <Image
                  src="/images/profile/Madesmac.png"
                  alt="Madesmac"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-accent text-dark p-4 rounded-2xl shadow-xl"
              >
                <div className="text-3xl font-bold font-heading">5+</div>
                <div className="text-sm font-medium">Years of Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading">
                I&apos;m <span className="gradient-text">Madesmac</span>, a Full Stack Developer
              </h3>
              
              <p className="text-gray leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                responsive, user-friendly applications using modern technologies. My passion 
                lies in turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              
              <p className="text-gray leading-relaxed">
                I believe that great software is not just about writing code, but about 
                understanding the user&apos;s needs and delivering solutions that exceed expectations. 
                Every project I undertake is a new opportunity to innovate and create something meaningful.
              </p>

              <p className="text-gray leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge through tech blogs and community events.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <span className="text-gray text-sm">Name:</span>
                <p className="text-light font-medium">Muhammad Adreansyah P. Lubis</p>
              </div>
              <div>
                <span className="text-gray text-sm">Email:</span>
                <p className="text-light font-medium">adreansyahlubis@gmail.com</p>
              </div>
              <div>
                <span className="text-gray text-sm">Location:</span>
                <p className="text-light font-medium">Medan, Indonesia</p>
              </div>
              <div>
                <span className="text-gray text-sm">Availability:</span>
                <p className="text-accent font-medium">Open to Work</p>
              </div>
            </div>

            <Button variant="accent" icon={<FiDownload />}>
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark rounded-xl p-6 text-center hover:border-accent/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 text-accent mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-heading text-light mb-1">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
