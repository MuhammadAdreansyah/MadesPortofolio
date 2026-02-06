'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiUsers } from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiGit, SiGithub, SiFigma, SiPostman, SiDocker,
  SiJavascript, SiPython
} from 'react-icons/si';
import SectionTitle from './ui/SectionTitle';

// ============================================
// CONSTANTS
// ============================================
const ACCENT_COLOR = '#C9A55A';
const NODE_SIZE = 48; // Unified size for all skill nodes
const CORE_SIZE = 80; // Center core size
const BORDER_WIDTH = 2; // Consistent border width

// ============================================
// SKILL DATA
// ============================================
const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Membangun antarmuka',
    icon: FiCode,
    skills: [
      { name: 'React', icon: SiReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 88 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95 },
      { name: 'HTML5', icon: SiHtml5, level: 98 },
      { name: 'CSS3', icon: SiCss3, level: 95 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server & basis data',
    icon: FiServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 88 },
      { name: 'Express.js', icon: SiExpress, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 82 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
      { name: 'Prisma', icon: SiPrisma, level: 78 },
      { name: 'Python', icon: SiPython, level: 75 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Alur kerja pengembangan',
    icon: FiTool,
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'GitHub', icon: SiGithub, level: 92 },
      { name: 'Figma', icon: SiFigma, level: 85 },
      { name: 'Postman', icon: SiPostman, level: 88 },
      { name: 'Docker', icon: SiDocker, level: 75 },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    subtitle: 'Kualitas profesional',
    icon: FiUsers,
    skills: [
      { name: 'Pemecahan Masalah', emoji: '🧩', level: 95 },
      { name: 'Kerja Tim', emoji: '🤝', level: 90 },
      { name: 'Komunikasi', emoji: '💬', level: 88 },
      { name: 'Manajemen Waktu', emoji: '⏰', level: 85 },
      { name: 'Kepemimpinan', emoji: '🎯', level: 82 },
    ],
  },
];

// ============================================
// BACKGROUND COMPONENT
// ============================================
function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId: number;
    let isVisible = true;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulse: number;
    }> = [];
    
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2); // Cap DPR for performance
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    
    const initParticles = () => {
      particles = [];
      // Reduce particle count for better performance
      const numParticles = Math.min(
        Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 25000),
        50 // Cap max particles
      );
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };
    
    let lastTime = 0;
    const targetFPS = 30; // Reduce to 30fps for background animation
    const frameInterval = 1000 / targetFPS;
    
    const drawParticles = (currentTime: number) => {
      if (!isVisible) {
        animationId = requestAnimationFrame(drawParticles);
        return;
      }
      
      // Throttle to target FPS
      if (currentTime - lastTime < frameInterval) {
        animationId = requestAnimationFrame(drawParticles);
        return;
      }
      lastTime = currentTime;
      
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Optimize: reduce connection checks by only checking nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy; // Use squared distance to avoid sqrt
          
          if (distSq < 6400) { // 80^2
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(201, 165, 90, ${0.08 * (1 - dist / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.015;
        
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;
        
        const pulseOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 165, 90, ${pulseOpacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(drawParticles);
    };
    
    // Visibility API to pause when tab is hidden
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    
    // Intersection Observer to pause when not in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting && !document.hidden;
      },
      { threshold: 0.1 }
    );
    
    resize();
    initParticles();
    animationId = requestAnimationFrame(drawParticles);
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    observer.observe(canvas);
    
    // Debounce resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        initParticles();
      }, 200);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}

// ============================================
// SKILL NODE COMPONENT
// ============================================
function SkillNode({ 
  skill, 
  angle, 
  radius, 
  index,
  isHovered,
  onHover,
}: { 
  skill: typeof skillCategories[0]['skills'][0];
  angle: number;
  radius: number;
  index: number;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}) {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: isHovered ? 1.15 : 1,
      }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.06,
        scale: { duration: 0.2, ease: 'easeOut' }
      }}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: NODE_SIZE,
        height: NODE_SIZE,
        marginLeft: x - NODE_SIZE / 2,
        marginTop: y - NODE_SIZE / 2,
      }}
      className={`${isHovered ? 'z-50' : 'z-20'}`}
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          boxShadow: isHovered 
            ? `0 0 20px ${ACCENT_COLOR}80, 0 0 40px ${ACCENT_COLOR}40` 
            : `0 0 10px ${ACCENT_COLOR}30`
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 rounded-full"
      />
      
      {/* Node */}
      <motion.div
        animate={{
          backgroundColor: isHovered ? ACCENT_COLOR : 'rgba(20, 20, 20, 0.95)',
          borderColor: isHovered ? ACCENT_COLOR : `${ACCENT_COLOR}60`,
        }}
        transition={{ duration: 0.2 }}
        style={{ borderWidth: BORDER_WIDTH }}
        className="relative w-full h-full rounded-full flex items-center justify-center cursor-pointer backdrop-blur-sm border-solid"
      >
        {'icon' in skill && skill.icon ? (
          <skill.icon 
            className="w-5 h-5 transition-colors duration-200" 
            style={{ color: isHovered ? '#0A0A0A' : ACCENT_COLOR }}
          />
        ) : (
          <span className="text-lg">{'emoji' in skill ? skill.emoji : ''}</span>
        )}
      </motion.div>
      
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none"
            style={{ 
              backgroundColor: 'rgba(10, 10, 10, 0.95)',
              border: `${BORDER_WIDTH}px solid ${ACCENT_COLOR}80`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 16px ${ACCENT_COLOR}20`,
            }}
          >
            <p className="text-sm font-medium text-center" style={{ color: ACCENT_COLOR }}>
              {skill.name}
            </p>
            {/* Arrow */}
            <div 
              className="absolute top-full left-1/2 -translate-x-1/2"
              style={{
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: `6px solid ${ACCENT_COLOR}80`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================
// ORBITAL CATEGORY COMPONENT
// ============================================
function OrbitalCategory({ 
  category, 
  index, 
  isActive,
  onActivate,
  onClose,
  hoveredSkill,
  onSkillHover 
}: { 
  category: typeof skillCategories[0];
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onClose: () => void;
  hoveredSkill: string | null;
  onSkillHover: (name: string | null) => void;
}) {
  const Icon = category.icon;
  const containerRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    if (!isActive) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 50);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isActive, onClose]);

  // Fixed orbit radius based on container size
  const orbitRadius = 100;
  
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full"
      style={{ aspectRatio: '1' }}
    >
      {/* Card Container */}
      <div 
        className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
        onClick={!isActive ? onActivate : undefined}
        style={{
          background: 'linear-gradient(135deg, rgba(30,30,30,0.6) 0%, rgba(20,20,20,0.8) 100%)',
          border: `1px solid ${ACCENT_COLOR}25`,
        }}
      >
        {/* Background Glow */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 45%, ${ACCENT_COLOR}20 0%, transparent 60%)`
          }}
        />
        
        <AnimatePresence mode="wait">
          {!isActive ? (
            // ===== ORBITAL VIEW =====
            <motion.div
              key="orbital"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              {/* Orbit Area - centered with bottom padding for info bar */}
              <div 
                className="absolute left-0 right-0 top-0 flex items-center justify-center"
                style={{ bottom: '70px' }}
              >
                {/* Center everything in this container */}
                <div className="relative" style={{ width: orbitRadius * 2 + NODE_SIZE, height: orbitRadius * 2 + NODE_SIZE }}>
                  
                  {/* Orbital Rings SVG */}
                  <svg 
                    className="absolute inset-0 pointer-events-none"
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${orbitRadius * 2 + NODE_SIZE} ${orbitRadius * 2 + NODE_SIZE}`}
                  >
                    {/* Outer orbit ring */}
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r={orbitRadius}
                      fill="none"
                      stroke={ACCENT_COLOR}
                      strokeWidth="1.5"
                      strokeDasharray="8 6"
                      opacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: index * 0.15 }}
                    />
                    
                    {/* Inner ring */}
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r={orbitRadius * 0.5}
                      fill="none"
                      stroke={ACCENT_COLOR}
                      strokeWidth="1"
                      opacity="0.25"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    />
                  </svg>
                  
                  {/* Center Core */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Pulse glow */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 15px ${ACCENT_COLOR}20`,
                          `0 0 30px ${ACCENT_COLOR}35`,
                          `0 0 15px ${ACCENT_COLOR}20`,
                        ]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full"
                    />
                    
                    {/* Core circle */}
                    <div 
                      className="relative rounded-full flex flex-col items-center justify-center"
                      style={{ 
                        width: CORE_SIZE,
                        height: CORE_SIZE,
                        backgroundColor: `${ACCENT_COLOR}12`,
                        border: `${BORDER_WIDTH}px solid ${ACCENT_COLOR}50`
                      }}
                    >
                      <Icon 
                        className="mb-1" 
                        style={{ color: ACCENT_COLOR, width: 22, height: 22 }} 
                      />
                      <span 
                        className="text-[10px] font-bold tracking-wide"
                        style={{ color: ACCENT_COLOR }}
                      >
                        {category.title}
                      </span>
                    </div>
                  </motion.div>
                  
                  {/* Orbiting Skills */}
                  {category.skills.map((skill, skillIndex) => {
                    const angle = (skillIndex / category.skills.length) * Math.PI * 2 - Math.PI / 2;
                    return (
                      <SkillNode
                        key={skill.name}
                        skill={skill}
                        angle={angle}
                        radius={orbitRadius}
                        index={skillIndex}
                        isHovered={hoveredSkill === skill.name}
                        onHover={onSkillHover}
                      />
                    );
                  })}
                </div>
              </div>
              
              {/* Bottom Info Bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-3"
              >
                <div 
                  className="flex items-center justify-between rounded-xl px-4 py-2.5"
                  style={{
                    backgroundColor: 'rgba(10,10,10,0.75)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${ACCENT_COLOR}20`
                  }}
                >
                  <div>
                    <p className="text-[10px] text-gray-400 mb-0.5">{category.subtitle}</p>
                    <p className="text-xs font-bold" style={{ color: ACCENT_COLOR }}>
                      {category.skills.length} Skills
                    </p>
                  </div>
                  
                  {/* Mini icons */}
                  <div className="flex -space-x-1.5">
                    {category.skills.slice(0, 3).map((skill, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: `${ACCENT_COLOR}20`,
                          border: `1px solid ${ACCENT_COLOR}40`
                        }}
                      >
                        {'icon' in skill && skill.icon ? (
                          <skill.icon className="w-3 h-3" style={{ color: ACCENT_COLOR }} />
                        ) : (
                          <span className="text-[8px]">{'emoji' in skill ? skill.emoji : ''}</span>
                        )}
                      </div>
                    ))}
                    {category.skills.length > 3 && (
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
                        style={{
                          backgroundColor: ACCENT_COLOR,
                          color: '#0A0A0A'
                        }}
                      >
                        +{category.skills.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            // ===== EXPANDED LIST VIEW =====
            <motion.div
              key="progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 p-4 flex flex-col"
            >
              {/* Header */}
              <div 
                className="flex items-center gap-3 mb-4 pb-3"
                style={{ borderBottom: `1px solid ${ACCENT_COLOR}20` }}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${ACCENT_COLOR}15`,
                    border: `1px solid ${ACCENT_COLOR}30`
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: ACCENT_COLOR }} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm" style={{ color: ACCENT_COLOR }}>
                    {category.title}
                  </h4>
                  <p className="text-[10px] text-gray-400">{category.subtitle}</p>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); onClose(); }}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: `${ACCENT_COLOR}20`,
                    border: `1px solid ${ACCENT_COLOR}30`
                  }}
                >
                  <span className="text-lg leading-none" style={{ color: ACCENT_COLOR }}>×</span>
                </button>
              </div>
              
              {/* Skills List */}
              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${ACCENT_COLOR}12`,
                        border: `1px solid ${ACCENT_COLOR}25`
                      }}
                    >
                      {'icon' in skill && skill.icon ? (
                        <skill.icon className="w-4 h-4" style={{ color: ACCENT_COLOR }} />
                      ) : (
                        <span className="text-base">{'emoji' in skill ? skill.emoji : ''}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-200 font-medium truncate">
                          {skill.name}
                        </span>
                        {'level' in skill && (
                          <span 
                            className="text-xs font-bold ml-2"
                            style={{ color: ACCENT_COLOR }}
                          >
                            {skill.level}%
                          </span>
                        )}
                      </div>
                      {'level' in skill && (
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.6, delay: i * 0.06 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: ACCENT_COLOR }}
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN SKILLS COMPONENT
// ============================================
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  
  const handleSkillHover = useCallback((name: string | null) => {
    setHoveredSkill(name);
  }, []);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
      
      {/* Constellation Background */}
      <ConstellationBackground />
      
      {/* Decorative Glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT_COLOR}08` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT_COLOR}06` }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Keahlian Saya"
          title="Konstelasi Teknologi"
          description="Jelajahi semesta keahlian teknis saya. Setiap orbit mewakili domain keahlian."
        />

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:mb-16"
        >
          {[
            { value: totalSkills, label: 'Teknologi', suffix: '+' },
            { value: skillCategories.length, label: 'Domain', suffix: '' },
            { value: '3', label: 'Tahun', suffix: '+' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="relative text-center group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="relative px-6 py-3 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(30,30,30,0.5)',
                  border: `1px solid ${ACCENT_COLOR}20`,
                }}
              >
                <div 
                  className="text-2xl md:text-3xl font-bold mb-0.5"
                  style={{ color: ACCENT_COLOR }}
                >
                  {stat.value}<span className="opacity-50">{stat.suffix}</span>
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid - 2x2 with consistent sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {skillCategories.map((category, index) => (
            <OrbitalCategory
              key={category.id}
              category={category}
              index={index}
              isActive={activeCategory === category.id}
              onActivate={() => setActiveCategory(category.id)}
              onClose={() => setActiveCategory(null)}
              hoveredSkill={hoveredSkill}
              onSkillHover={handleSkillHover}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-gray-400 mb-5 text-sm">
            Terus memperluas konstelasi dengan teknologi baru
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['React 19', 'AI/ML', 'Web3', 'Cloud Native'].map((tech, index) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1.5 rounded-full text-sm font-medium cursor-default"
                style={{
                  backgroundColor: `${ACCENT_COLOR}12`,
                  border: `1px solid ${ACCENT_COLOR}35`,
                  color: ACCENT_COLOR
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 mx-auto w-32 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${ACCENT_COLOR}50, transparent)`
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
