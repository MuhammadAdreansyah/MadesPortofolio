'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiServer, FiTool, FiUsers,
} from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiGit, SiGithub, SiFigma, SiPostman, SiDocker,
  SiJavascript, SiPython
} from 'react-icons/si';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';

const categories = [
  { id: 'all', label: 'All Skills', icon: FiCode },
  { id: 'frontend', label: 'Frontend', icon: FiCode },
  { id: 'backend', label: 'Backend', icon: FiServer },
  { id: 'tools', label: 'Tools', icon: FiTool },
  { id: 'soft', label: 'Soft Skills', icon: FiUsers },
];

const skills = [
  // Frontend
  { name: 'React', icon: SiReact, category: 'frontend', level: 95, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', level: 90, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend', level: 88, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, category: 'frontend', level: 95, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', level: 92, color: '#06B6D4' },
  { name: 'HTML5', icon: SiHtml5, category: 'frontend', level: 98, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend', level: 95, color: '#1572B6' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, category: 'backend', level: 88, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, category: 'backend', level: 85, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, category: 'backend', level: 82, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'backend', level: 80, color: '#4169E1' },
  { name: 'Prisma', icon: SiPrisma, category: 'backend', level: 85, color: '#2D3748' },
  { name: 'Python', icon: SiPython, category: 'backend', level: 75, color: '#3776AB' },
  
  // Tools
  { name: 'Git', icon: SiGit, category: 'tools', level: 90, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, category: 'tools', level: 92, color: '#ffffff' },
  { name: 'Figma', icon: SiFigma, category: 'tools', level: 80, color: '#F24E1E' },
  { name: 'Postman', icon: SiPostman, category: 'tools', level: 85, color: '#FF6C37' },
  { name: 'Docker', icon: SiDocker, category: 'tools', level: 75, color: '#2496ED' },
  
  // Soft Skills
  { name: 'Problem Solving', icon: null, category: 'soft', level: 95, color: '#C9A55A', emoji: '🧩' },
  { name: 'Team Work', icon: null, category: 'soft', level: 92, color: '#C9A55A', emoji: '🤝' },
  { name: 'Communication', icon: null, category: 'soft', level: 88, color: '#C9A55A', emoji: '💬' },
  { name: 'Time Management', icon: null, category: 'soft', level: 85, color: '#C9A55A', emoji: '⏰' },
  { name: 'Leadership', icon: null, category: 'soft', level: 80, color: '#C9A55A', emoji: '🎯' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/8 to-dark" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#C9A55A 1px, transparent 1px), linear-gradient(90deg, #C9A55A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="My Skills"
          title="What I Do Best"
          description="A comprehensive overview of my technical skills and expertise in various domains."
        />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent text-dark'
                  : 'bg-secondary/50 text-gray hover:bg-secondary hover:text-light'
              }`}
            >
              <category.icon size={18} />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card variant="bordered" className="h-full">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    {skill.icon ? (
                      <skill.icon size={24} style={{ color: skill.color }} />
                    ) : (
                      <span className="text-2xl">{skill.emoji}</span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-light font-medium mb-2">{skill.name}</h3>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    
                    {/* Percentage */}
                    <div className="flex justify-end mt-1">
                      <span className="text-xs text-gray">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
