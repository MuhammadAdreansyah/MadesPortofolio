'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiUsers } from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiGit, SiGithub, SiFigma, SiPostman, SiDocker,
  SiJavascript, SiPython
} from 'react-icons/si';
import SectionTitle from './ui/SectionTitle';

// Skill categories with their skills
const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Building interfaces',
    icon: FiCode,
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server & databases',
    icon: FiServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Development workflow',
    icon: FiTool,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Figma', icon: SiFigma },
      { name: 'Postman', icon: SiPostman },
      { name: 'Docker', icon: SiDocker },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    subtitle: 'Professional qualities',
    icon: FiUsers,
    skills: [
      { name: 'Problem Solving', emoji: '🧩' },
      { name: 'Team Work', emoji: '🤝' },
      { name: 'Communication', emoji: '💬' },
      { name: 'Time Management', emoji: '⏰' },
      { name: 'Leadership', emoji: '🎯' },
    ],
  },
];

// Category Card Component
function CategoryCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative h-full bg-gradient-to-br from-secondary/80 to-dark/90 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-500 overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
        
        {/* Background Number */}
        <div className="absolute -top-4 -right-4 text-[140px] font-bold text-accent/[0.03] leading-none select-none pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>
        
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-light group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-gray">{category.subtitle}</p>
            </div>
          </div>
          
          {/* Skills List */}
          <div className="space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-dark/40 border border-transparent hover:border-accent/20 hover:bg-dark/60 transition-all duration-300 group/skill"
              >
                {/* Icon or Emoji */}
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/skill:bg-accent/20 transition-colors">
                  {'icon' in skill && skill.icon ? (
                    <skill.icon className="w-5 h-5 text-accent" />
                  ) : (
                    <span className="text-lg">{'emoji' in skill ? skill.emoji : ''}</span>
                  )}
                </div>
                
                {/* Skill Name */}
                <span className="text-light/90 font-medium text-sm group-hover/skill:text-accent transition-colors">
                  {skill.name}
                </span>
                
                {/* Decorative Dot */}
                <div className="ml-auto w-2 h-2 rounded-full bg-accent/30 group-hover/skill:bg-accent transition-colors" />
              </motion.div>
            ))}
          </div>
          
          {/* Footer Stats */}
          <div className="mt-6 pt-5 border-t border-accent/10">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray">Technologies</span>
              <span className="text-accent font-bold">{category.skills.length}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  // Calculate total skills
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark" />
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#C9A55A 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Skills"
          title="What I Do Best"
          description="A comprehensive overview of my technical skills and expertise across different domains."
        />

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          {[
            { value: totalSkills, label: 'Technologies', suffix: '+' },
            { value: skillCategories.length, label: 'Categories', suffix: '' },
            { value: '5', label: 'Years Experience', suffix: '+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}<span className="text-accent/60">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React 19', 'AI/ML', 'Web3', 'Cloud Native'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
