'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight, FiChevronLeft, FiChevronRight, FiArrowLeft } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';

const ACCENT_COLOR = '#C9A55A';

const categories = ['All', 'Web Apps', 'Mobile', 'UI/UX', 'Open Source'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
    longDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory tracking, secure payment processing with Stripe, and a powerful admin dashboard for managing products, orders, and customers.',
    image: '/images/projects/ecommerce.jpg',
    category: 'Web Apps',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    longDescription: 'A productivity application that helps teams organize work with features like kanban boards, task assignments, due date tracking, and real-time collaboration.',
    image: '/images/projects/task-app.jpg',
    category: 'Web Apps',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Mobile Banking UI',
    description: 'Modern mobile banking app interface design with seamless user experience.',
    longDescription: 'Designed a complete mobile banking experience focusing on security, ease of use, and modern aesthetics.',
    image: '/images/projects/bri.jpeg',
    category: 'UI/UX',
    technologies: ['Figma', 'React Native', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
    longDescription: 'A weather application that provides detailed forecasts, interactive radar maps, and location-based alerts.',
    image: '/images/projects/weather.jpg',
    category: 'Web Apps',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Open Source UI Kit',
    description: 'A comprehensive UI component library for React applications.',
    longDescription: 'Created an open-source UI kit with 50+ reusable components, comprehensive documentation, and accessibility features.',
    image: '/images/projects/ui-kit.jpg',
    category: 'Open Source',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 6,
    title: 'Fitness Tracker App',
    description: 'Cross-platform mobile app for tracking workouts and nutrition.',
    longDescription: 'A comprehensive fitness application that tracks workouts, monitors nutrition, and provides personalized recommendations.',
    image: '/images/projects/fitness.jpg',
    category: 'Mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

// Simple Project Card Component (No 3D effects)
function ProjectCard({ project, index, onSelect }: { 
  project: typeof projects[0]; 
  index: number;
  onSelect: () => void;
}) {
  const isLarge = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative cursor-pointer ${isLarge ? 'md:col-span-2' : ''}`}
      onClick={onSelect}
    >
      <div 
        className="relative h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-[#C9A55A]"
        style={{
          background: 'linear-gradient(135deg, rgba(25,25,25,0.95), rgba(15,15,15,0.98))',
          border: '1px solid rgba(201,165,90,0.15)',
        }}
      >
        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${ACCENT_COLOR}15 0%, transparent 50%)`,
          }}
        />

        {/* Content Container */}
        <div className="relative h-full p-6 flex flex-col justify-between min-h-[320px]">
          {/* Top Section */}
          <div>
            {/* Category & Featured Badge */}
            <div className="flex items-center justify-between mb-4">
              <span 
                className="px-4 py-1.5 text-xs font-semibold rounded-full"
                style={{
                  background: `${ACCENT_COLOR}12`,
                  color: ACCENT_COLOR,
                  border: `1px solid ${ACCENT_COLOR}30`,
                }}
              >
                {project.category}
              </span>
              {project.featured && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="px-4 py-1.5 text-xs font-bold rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}CC)`,
                    color: '#0A0A0A',
                  }}
                >
                  ★ Featured
                </motion.span>
              )}
            </div>

            {/* Project Number */}
            <div 
              className="absolute top-6 right-6 text-[80px] font-bold leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-300"
              style={{ color: ACCENT_COLOR }}
            >
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Title */}
            <h3 
              className="text-xl md:text-2xl font-bold font-heading mb-3 transition-colors duration-300 group-hover:text-[#C9A55A]"
              style={{ color: '#F5F5F5' }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-5 line-clamp-2 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    background: 'rgba(201,165,90,0.08)',
                    color: `${ACCENT_COLOR}CC`,
                    border: `1px solid ${ACCENT_COLOR}15`,
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span 
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    background: `${ACCENT_COLOR}15`,
                    color: ACCENT_COLOR,
                  }}
                >
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between">
              {/* Links */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}CC)`,
                    color: '#0A0A0A',
                  }}
                >
                  <FiExternalLink size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, background: `${ACCENT_COLOR}25` }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: '#F5F5F5',
                    border: `1px solid ${ACCENT_COLOR}25`,
                  }}
                >
                  <FiGithub size={16} />
                </motion.a>
              </div>

              {/* View Details Arrow */}
              <div
                className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                style={{ color: ACCENT_COLOR }}
              >
                <span>View Details</span>
                <FiArrowRight />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px]"
          style={{ background: `linear-gradient(90deg, ${ACCENT_COLOR}, transparent)` }}
          initial={{ width: 0 }}
          whileInView={{ width: '50%' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(${ACCENT_COLOR} 1px, transparent 1px), linear-gradient(90deg, ${ACCENT_COLOR} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative Glows */}
      <div 
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full pointer-events-none"
        style={{ 
          background: `radial-gradient(circle, ${ACCENT_COLOR}06, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-[10%] w-72 h-72 rounded-full pointer-events-none"
        style={{ 
          background: `radial-gradient(circle, ${ACCENT_COLOR}05, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Work"
          title="Featured Projects"
          description="Explore my recent projects showcasing my skills and expertise in building modern web applications."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden"
              style={{
                color: activeCategory === category ? '#0A0A0A' : `${ACCENT_COLOR}CC`,
                background: activeCategory === category 
                  ? `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}DD)` 
                  : `${ACCENT_COLOR}08`,
                border: activeCategory === category ? 'none' : `1px solid ${ACCENT_COLOR}20`,
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300"
            style={{
              border: `1px solid ${ACCENT_COLOR}40`,
              color: ACCENT_COLOR,
              background: `${ACCENT_COLOR}08`,
            }}
          >
            <span>View All Projects on GitHub</span>
            <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal - Full Screen */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-hidden"
            style={{ background: '#0A0A0A' }}
          >
            {/* Full Screen Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col lg:flex-row"
            >
              {/* Back Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 left-6 z-20 flex items-center gap-3 text-sm font-medium transition-colors"
                style={{ color: ACCENT_COLOR }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: `${ACCENT_COLOR}15`,
                    border: `1px solid ${ACCENT_COLOR}30`,
                  }}
                >
                  <FiArrowLeft size={18} />
                </div>
                <span className="hidden sm:inline">Back to Projects</span>
              </motion.button>

              {/* Navigation Arrows */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
                    setSelectedProject(projects[prevIndex]);
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    background: `${ACCENT_COLOR}15`,
                    color: ACCENT_COLOR,
                    border: `1px solid ${ACCENT_COLOR}30`,
                  }}
                >
                  <FiChevronLeft size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
                    const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
                    setSelectedProject(projects[nextIndex]);
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    background: `${ACCENT_COLOR}15`,
                    color: ACCENT_COLOR,
                    border: `1px solid ${ACCENT_COLOR}30`,
                  }}
                >
                  <FiChevronRight size={20} />
                </motion.button>
              </div>

              {/* Left Side - Screenshot Preview with Scroll */}
              <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-full bg-[#0A0A0A] flex flex-col overflow-hidden">
                {/* Decorative gradient */}
                <div 
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: `radial-gradient(ellipse at center top, ${ACCENT_COLOR}08 0%, transparent 50%)`,
                  }}
                />
                
                {/* Scrollable Image Container */}
                <div className="relative w-full h-full pt-20 lg:pt-16 overflow-y-auto custom-scrollbar">
                  <div className="px-6 pb-6 lg:px-12 lg:pb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="relative rounded-xl overflow-hidden shadow-2xl"
                      style={{
                        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.8), 0 0 40px ${ACCENT_COLOR}10`,
                      }}
                    >
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        width={800}
                        height={2000}
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: 'none' }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Top gradient fade for scroll indication */}
                <div className="absolute top-20 lg:top-16 left-0 right-0 h-8 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
              </div>

              {/* Right Side - Project Details */}
              <div className="w-full lg:w-1/2 h-[60vh] lg:h-full flex flex-col justify-center p-6 sm:p-10 lg:p-16 overflow-y-auto">
                <div className="max-w-xl">
                  {/* Tech Stack Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {selectedProject.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.04 }}
                        style={{ color: ACCENT_COLOR }}
                        className="text-sm font-medium"
                      >
                        #{tech.replace(/\s+/g, '')}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Project Title */}
                  <motion.h2 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedProject.title}
                  </motion.h2>
                  
                  {/* Project Description */}
                  <motion.p 
                    className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    {selectedProject.longDescription}
                  </motion.p>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <span 
                      className="px-5 py-2 rounded-full text-sm font-medium"
                      style={{
                        background: `${ACCENT_COLOR}12`,
                        color: ACCENT_COLOR,
                        border: `1px solid ${ACCENT_COLOR}25`,
                      }}
                    >
                      {selectedProject.category}
                    </span>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold"
                      style={{
                        background: `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}DD)`,
                        color: '#0A0A0A',
                      }}
                    >
                      <span>Visit Live</span>
                      <FiExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02, background: `${ACCENT_COLOR}15` }}
                      whileTap={{ scale: 0.98 }}
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium transition-all"
                      style={{
                        border: `1px solid ${ACCENT_COLOR}30`,
                        color: '#F5F5F5',
                      }}
                    >
                      <FiGithub size={20} />
                      <span>Source Code</span>
                    </motion.a>
                  </motion.div>

                  {/* Project Index */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 pt-6"
                    style={{ borderTop: `1px solid ${ACCENT_COLOR}15` }}
                  >
                    <span style={{ color: `${ACCENT_COLOR}60` }} className="text-sm font-medium">
                      Project {String(projects.findIndex(p => p.id === selectedProject.id) + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
