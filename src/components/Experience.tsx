'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Corp Inc.',
    location: 'Jakarta, Indonesia',
    duration: 'Jan 2023 - Present',
    type: 'Full-time',
    description: 'Leading development of enterprise web applications using React and Node.js.',
    responsibilities: [
      'Lead a team of 5 developers in building scalable web applications',
      'Architected microservices infrastructure reducing response time by 40%',
      'Implemented CI/CD pipelines improving deployment efficiency',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    location: 'Bandung, Indonesia',
    duration: 'Jun 2021 - Dec 2022',
    type: 'Full-time',
    description: 'Developed and maintained multiple client projects and internal tools.',
    responsibilities: [
      'Built 10+ client websites and web applications from scratch',
      'Integrated third-party APIs and payment gateways',
      'Optimized application performance and database queries',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'StartUp Hub',
    location: 'Remote',
    duration: 'Jan 2020 - May 2021',
    type: 'Full-time',
    description: 'Focused on building responsive and interactive user interfaces.',
    responsibilities: [
      'Developed responsive web interfaces using React and TypeScript',
      'Implemented state management solutions with Redux',
      'Created reusable component libraries',
      'Participated in agile development processes',
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Sass'],
  },
  {
    id: 4,
    role: 'Junior Web Developer',
    company: 'Creative Agency',
    location: 'Jakarta, Indonesia',
    duration: 'Jun 2019 - Dec 2019',
    type: 'Internship',
    description: 'Started my professional journey building websites for various clients.',
    responsibilities: [
      'Assisted in developing WordPress websites',
      'Learned modern JavaScript frameworks',
      'Participated in client meetings and requirements gathering',
      'Fixed bugs and performed website maintenance',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/10 to-dark" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#C9A55A 1px, transparent 1px), linear-gradient(90deg, #C9A55A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionTitle
          subtitle="My Journey"
          title="Work Experience"
          description="A timeline of my professional career and the companies I've had the pleasure to work with."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-6">
                <div className="w-full h-full rounded-full bg-accent animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] p-6 rounded-xl glass-dark border border-primary/20 hover:border-accent/30 transition-colors ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-light">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <FiBriefcase size={14} />
                      {exp.company}
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent">
                    {exp.type}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray mb-4">
                  <span className="flex items-center gap-1">
                    <FiCalendar size={14} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray text-sm mb-4">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-light/80">
                      <span className="text-accent mt-1">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-secondary text-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Date Badge - Desktop Only */}
              <div className={`hidden md:block md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'
              }`}>
                <span className="text-accent font-medium">
                  {exp.duration.split(' - ')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
