'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload, FiCheck, FiCode, FiCoffee, FiAward } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

// Key highlights/values
const highlights = [
  'Clean & Maintainable Code',
  'Modern Tech Stack',
  'User-Centric Design',
  'Performance Optimized',
];

// Journey milestones
const journey = [
  { year: '2019', title: 'Started Coding', desc: 'First line of code' },
  { year: '2020', title: 'First Project', desc: 'Freelance work' },
  { year: '2022', title: 'Full Stack', desc: 'Backend mastery' },
  { year: '2024', title: 'Senior Dev', desc: 'Team leadership' },
];

// Quick stats
const stats = [
  { icon: FiCode, value: '50+', label: 'Projects' },
  { icon: FiCoffee, value: '1000+', label: 'Commits' },
  { icon: FiAward, value: '15+', label: 'Certifications' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#C9A55A 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Me"
          title="Know Me More"
          description="The story behind the code and the passion that drives every project."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-24">
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-accent/20">
                  {/* Image */}
                  <Image
                    src="/images/profile/Madesmac.png"
                    alt="Madesmac"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-light mb-1">Madesmac</h3>
                    <p className="text-accent font-medium">Full Stack Developer</p>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring' }}
                  className="absolute -bottom-4 -right-4 md:right-4 bg-accent text-dark px-5 py-3 rounded-xl shadow-xl"
                >
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs font-medium opacity-80">Years Exp.</div>
                </motion.div>
              </div>
              
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 rounded-xl bg-secondary/50 border border-accent/10 text-center hover:border-accent/30 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-light">{stat.value}</div>
                    <div className="text-xs text-gray">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Philosophy Quote - Better visual separation with enhanced spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10 lg:mt-12 p-6 rounded-xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-l-4 border-accent backdrop-blur-sm"
              >
                <p className="text-light/90 text-sm italic leading-relaxed">
                  &quot;Code is poetry. Every function tells a story, every algorithm solves a puzzle, 
                  and every pixel creates an experience.&quot;
                </p>
                <p className="text-accent text-xs mt-4 font-medium tracking-wide">— My Development Philosophy</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-light">
                Crafting Digital Experiences with
                <span className="text-accent"> Passion & Precision</span>
              </h3>
              
              <p className="text-gray leading-relaxed">
                I&apos;m Muhammad Adreansyah P. Lubis, a Full Stack Developer with over 5 years 
                of experience building web applications that users love. I specialize in 
                transforming complex ideas into elegant, performant solutions.
              </p>
              
              <p className="text-gray leading-relaxed">
                My approach combines technical expertise with creative problem-solving. 
                I believe that great software should be intuitive, accessible, and 
                delightful to use. Every line of code I write is aimed at creating 
                meaningful impact.
              </p>
            </div>
            
            {/* What I Bring */}
            <div className="p-6 rounded-2xl bg-secondary/50 border border-accent/10">
              <h4 className="text-lg font-semibold text-light mb-4">What I Bring to the Table</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <FiCheck className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-light/80 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Journey Timeline - Enhanced spacing and visual hierarchy */}
            <div className="pt-8 mt-2 border-t border-accent/10">
              <h4 className="text-lg font-semibold text-light mb-6">My Journey</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-accent/10 hover:border-accent/30 hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    {/* Year Badge */}
                    <div className="w-16 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent font-bold text-sm">{item.year}</span>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h5 className="text-light font-medium text-sm">{item.title}</h5>
                      <p className="text-gray text-xs">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons - Better alignment and visual separation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-start gap-4 pt-8 mt-4 border-t border-accent/10"
            >
              <Button variant="accent" icon={<FiDownload />} className="min-w-[160px] justify-center">
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="min-w-[140px] justify-center"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
