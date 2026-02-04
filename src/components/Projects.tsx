'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight, FiArrowLeft, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';

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
    color: '#083A24',
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
    color: '#C9A55A',
  },
  {
    id: 3,
    title: 'Mobile Banking UI',
    description: 'Modern mobile banking app interface design with seamless user experience.',
    longDescription: 'Designed a complete mobile banking experience focusing on security, ease of use, and modern aesthetics.',
    image: '/images/projects/banking.jpg',
    category: 'UI/UX',
    technologies: ['Figma', 'React Native', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    color: '#202020',
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
    color: '#0a4d30',
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
    color: '#C9A55A',
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
    color: '#083A24',
  },
];

// Project Card Component
function ProjectCard({ project, index, onSelect }: { 
  project: typeof projects[0]; 
  index: number;
  onSelect: () => void;
}) {
  // Determine card size based on index for bento layout
  // Simpler layout - all cards same size for cleaner look
  const isLarge = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group cursor-pointer ${
        isLarge ? 'md:col-span-2' : ''
      }`}
      onClick={onSelect}
    >
      <div 
        className="relative h-full rounded-2xl overflow-hidden border border-primary-light/10 hover:border-accent/50 transition-all duration-500"
      >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{ 
            background: `linear-gradient(135deg, ${project.color}40 0%, #0A0A0A 100%)` 
          }}
        />

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${project.color}60 0%, transparent 50%),
                          radial-gradient(circle at 70% 70%, #C9A55A30 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative h-full p-6 flex flex-col justify-between min-h-[320px]">
          {/* Top Section */}
          <div>
            {/* Category & Featured Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-light/80 backdrop-blur-sm">
                {project.category}
              </span>
              {project.featured && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-3 py-1 text-xs font-bold rounded-full bg-accent text-secondary"
                >
                  Featured
                </motion.span>
              )}
            </div>

            {/* Project Number */}
            <div className="absolute top-6 right-6 text-[120px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold font-heading text-light mb-3 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray/80 mb-5 line-clamp-2 text-sm">
              {project.description}
            </p>

            {/* Tech Stack - Animated on hover */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-light/70 border border-primary-light/20 backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-accent border border-accent/30">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between">
              {/* Links */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-secondary hover:shadow-lg hover:shadow-accent/25 transition-shadow"
                >
                  <FiExternalLink size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-light hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <FiGithub size={18} />
                </motion.a>
              </div>

            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.05) 50%, transparent 55%)",
          }}
        />

        {/* Border Glow on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 30px ${project.color}40, 0 0 40px ${project.color}20`,
          }}
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
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-secondary/15 to-dark" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#C9A55A 1px, transparent 1px), linear-gradient(90deg, #C9A55A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="My Work"
          title="Featured Projects"
          description="Explore my recent projects showcasing my skills and expertise in building modern web applications."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                activeCategory === category
                  ? 'text-secondary'
                  : 'text-gray hover:text-light'
              }`}
            >
              {/* Active Background */}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* Inactive Background */}
              {activeCategory !== category && (
                <div className="absolute inset-0 bg-secondary/50 rounded-full border border-primary-light/20" />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-accent/50 text-accent font-medium hover:bg-accent/10 transition-colors group"
          >
            <span>View All Projects on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowRight />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal - Shared Element Slide Transition */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-dark/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[85vh] bg-secondary rounded-3xl overflow-hidden border border-primary-light/20 flex flex-col md:flex-row"
            >
              {/* Navigation Arrows */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
                    setSelectedProject(projects[prevIndex]);
                  }}
                  className="w-10 h-10 rounded-full bg-dark/50 backdrop-blur-sm text-light hover:text-accent hover:bg-dark transition-colors flex items-center justify-center"
                >
                  <FiChevronLeft size={20} />
                </motion.button>
                <span className="text-light/50 text-sm">/</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
                    const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
                    setSelectedProject(projects[nextIndex]);
                  }}
                  className="w-10 h-10 rounded-full bg-dark/50 backdrop-blur-sm text-light hover:text-accent hover:bg-dark transition-colors flex items-center justify-center"
                >
                  <FiChevronRight size={20} />
                </motion.button>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-accent text-secondary hover:bg-accent/90 transition-colors flex items-center justify-center shadow-lg"
              >
                <FiArrowLeft size={20} />
              </motion.button>

              {/* Left Side - Scrollable Screenshot Preview */}
              <div className="relative w-full md:w-[55%] h-[40vh] md:h-full bg-dark/50 overflow-hidden">
                {/* Gradient Overlay Top */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-secondary/80 to-transparent z-10 pointer-events-none" />
                
                {/* Scrollable Image Container */}
                <motion.div 
                  className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent"
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                >
                  <div className="relative w-full">
                    {/* Project Screenshot - Long scrollable image */}
                    <motion.img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto object-cover object-top"
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ minHeight: '150%' }}
                    />
                    
                    {/* Fallback gradient if no image */}
                    <div 
                      className="absolute inset-0 -z-10"
                      style={{
                        background: `linear-gradient(180deg, ${selectedProject.color} 0%, ${selectedProject.color}80 50%, #0A0A0A 100%)`,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Gradient Overlay Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-secondary to-transparent z-10 pointer-events-none" />

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
                >
                  <span className="text-light/40 text-xs uppercase tracking-wider">Scroll</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border border-light/20 flex items-start justify-center p-1"
                  >
                    <motion.div className="w-1 h-2 bg-accent rounded-full" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - Project Details */}
              <div className="w-full md:w-[45%] h-[60vh] md:h-full flex flex-col p-6 md:p-10 overflow-y-auto">
                {/* Tech Stack Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedProject.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      className="text-accent text-sm font-medium"
                    >
                      #{tech.replace(/\s+/g, '')}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Project Title */}
                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-light mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.title}
                </motion.h3>
                
                {/* Project Description */}
                <motion.p 
                  className="text-gray text-base md:text-lg leading-relaxed mb-8 flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedProject.longDescription}
                </motion.p>

                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mb-8"
                >
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-primary-light/20 text-light/70 text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-secondary font-bold rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all uppercase tracking-wider text-sm"
                  >
                    <span>Visit</span>
                    <FiExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 border border-primary-light/30 text-light font-semibold rounded-xl hover:bg-primary-light/10 transition-all"
                  >
                    <FiGithub size={20} />
                    <span>Source Code</span>
                  </motion.a>
                </motion.div>

                {/* Project Index Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-primary-light/10"
                >
                  <span className="text-light/20 text-sm">
                    Project {String(projects.findIndex(p => p.id === selectedProject.id) + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
