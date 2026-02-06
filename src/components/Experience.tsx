'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';

const ACCENT_COLOR = '#C9A55A';

const experiences = [
  {
    id: 1,
    role: 'Pengelola Data dan Informasi',
    company: 'Kantor Kesyahbandaran dan Otoritas Pelabuhan (KSOP) Utama Belawan',
    location: 'Medan Belawan, Indonesia',
    duration: 'Nov 2025 - Sekarang',
    year: '2025',
    type: 'Aktif',
    description: 'Mengelola dan menganalisis data terkait LK3 dan Inaportnet untuk mendukung operasional pelabuhan.',
    responsibilities: [
      'Mengelola dan menganalisis data Lingkungan, Kesehatan, dan Keselamatan Kerja (LK3) untuk memastikan kepatuhan regulasi maritim',
      'Mengoperasikan dan memelihara sistem Inaportnet untuk pemantauan aktivitas pelabuhan secara real-time',
      'Mengembangkan automasi pengolahan data dan visualisasi laporan menggunakan Python dan Excel untuk meningkatkan efisiensi pelaporan',
    ],
    technologies: ['Python', 'Excel', 'Inaportnet', 'LK3', 'Data Management'],
  },
  {
    id: 2,
    role: 'Magang Analis Data',
    company: 'PT Revolusi Cita Edukasi (RevoU)',
    location: 'Jakarta, Indonesia',
    duration: 'Agu 2024 - Des 2024',
    year: '2024',
    type: 'Magang',
    description: 'Menganalisis dan memvisualisasikan data untuk mendukung pengambilan keputusan berbasis data.',
    responsibilities: [
      'Melakukan pembersihan data, pra-pemrosesan, dan Analisis Data Eksploratif (EDA) menggunakan spreadsheet dan Python untuk memastikan kualitas data',
      'Membangun dasbor dan visualisasi data menggunakan Google Data Studio/Microsoft Power BI untuk mendukung pengambilan keputusan berbasis data',
      'Menyelesaikan capstone project dengan menganalisis kumpulan data bisnis dan menyajikan wawasan (insight) yang dapat ditindaklanjuti',
    ],
    technologies: ['Python', 'Google Data Studio', 'Power BI', 'Spreadsheet', 'EDA'],
  },
  {
    id: 3,
    role: 'Magang Front Office',
    company: 'Kantor Kesyahbandaran dan Otoritas Pelabuhan (KSOP) Utama',
    location: 'Medan Belawan, Indonesia',
    duration: 'Feb 2024 - Apr 2024',
    year: '2024',
    type: 'Magang',
    description: 'Mengelola administrasi pelayanan maritim dan bertindak sebagai titik kontak utama di Pusat Pelayanan Satu Pintu.',
    responsibilities: [
      'Mengelola administrasi pembuatan, perpanjangan, dan penggantian Buku Pelaut, memastikan validitas data pemohon serta mempercepat alur distribusi dokumen kepada pelaut',
      'Melakukan verifikasi kelengkapan dokumen agen pelayaran terkait Perjanjian Kerja Laut (PKL), Masa Layar, Sertifikat Kapal, dan Izin Bersandar/Berlabuh',
      'Bertindak sebagai titik kontak utama di Pusat Pelayanan Satu Pintu (PPSP), memberikan solusi informatif bagi agen dan pengguna jasa, serta meminimalisir kesalahan administrasi pada tahap awal pengajuan berkas',
    ],
    technologies: ['Administrasi', 'Layanan Pelanggan', 'Verifikasi Dokumen', 'Manajemen Data'],
  },
  {
    id: 4,
    role: 'Administrator Basis Data Kontrak',
    company: 'Telkom Indonesia',
    location: 'Medan, Indonesia',
    duration: 'Feb 2022 - Jan 2023',
    year: '2022',
    type: 'Kontrak',
    description: 'Mengelola dan mengoptimalkan sistem basis data untuk meningkatkan efisiensi operasional.',
    responsibilities: [
      'Meningkatkan alur kerja integrasi data dengan mengoptimalkan proses ETL, guna memastikan efisiensi dan keandalan yang lebih tinggi',
      'Memperkuat keamanan basis data SQL melalui penerapan langkah-langkah mitigasi risiko dan kontrol integritas data',
      'Mendukung aktivitas migrasi basis data untuk memastikan transisi yang lancar dan meminimalkan downtime',
    ],
    technologies: ['SQL', 'ETL', 'Database Security', 'Data Migration', 'Data Integration'],
  },
];

// Experience Card Component - Clean and Simple
function ExperienceCard({ 
  exp, 
  index, 
  isActive,
  onToggle 
}: { 
  exp: typeof experiences[0]; 
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-start gap-6 md:gap-10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline Dot - Desktop */}
      <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="w-3 h-3 rounded-full"
          style={{ 
            background: ACCENT_COLOR,
            boxShadow: `0 0 0 3px #0A0A0A, 0 0 15px ${ACCENT_COLOR}40`
          }}
        />
      </div>

      {/* Spacer for timeline */}
      <div className="hidden md:block w-1/2" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`w-full md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}
      >
        {/* Mobile Year Badge */}
        <div className="md:hidden flex items-center gap-3 mb-3">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ background: ACCENT_COLOR }}
          />
          <span 
            className="text-sm font-bold"
            style={{ color: ACCENT_COLOR }}
          >
            {exp.year}
          </span>
        </div>

        <div 
          className="relative rounded-xl overflow-hidden transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(25,25,25,0.9), rgba(18,18,18,0.95))',
            border: `1px solid ${isActive ? ACCENT_COLOR : `${ACCENT_COLOR}20`}`,
          }}
        >
          {/* Header */}
          <div 
            className="relative p-5 cursor-pointer"
            onClick={onToggle}
          >
            {/* Subtle gradient overlay */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_COLOR}08, transparent)`,
              }}
            />
            
            <div className="relative">
              {/* Top Row */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg font-bold transition-colors duration-300 mb-1"
                    style={{ color: isActive ? ACCENT_COLOR : '#F5F5F5' }}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm" style={{ color: ACCENT_COLOR }}>
                    <FiBriefcase size={14} className="flex-shrink-0" />
                    <span className="font-medium truncate">{exp.company}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Year Badge - Desktop */}
                  <span 
                    className="hidden md:inline-block px-2 py-0.5 text-[11px] font-bold rounded"
                    style={{ 
                      background: `${ACCENT_COLOR}15`,
                      color: ACCENT_COLOR,
                    }}
                  >
                    {exp.year}
                  </span>
                  <span 
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-full whitespace-nowrap"
                    style={{ 
                      background: `${ACCENT_COLOR}15`,
                      color: ACCENT_COLOR,
                      border: `1px solid ${ACCENT_COLOR}30`,
                    }}
                  >
                    {exp.type}
                  </span>
                  
                  {/* Expand Icon */}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: ACCENT_COLOR }}
                  >
                    <FiChevronDown size={18} />
                  </motion.div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <FiCalendar size={12} style={{ color: `${ACCENT_COLOR}80` }} />
                  {exp.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin size={12} style={{ color: `${ACCENT_COLOR}80` }} />
                  {exp.location}
                </span>
              </div>
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div 
                  className="px-5 pb-5 pt-0"
                  style={{ borderTop: `1px solid ${ACCENT_COLOR}15` }}
                >
                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-4 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <FiChevronRight 
                          className="mt-1 shrink-0" 
                          style={{ color: ACCENT_COLOR }} 
                          size={12} 
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                        className="px-2.5 py-1 text-xs rounded-full"
                        style={{
                          background: `${ACCENT_COLOR}10`,
                          color: `${ACCENT_COLOR}CC`,
                          border: `1px solid ${ACCENT_COLOR}20`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom accent */}
          <div 
            className="h-[2px] transition-all duration-300"
            style={{ 
              background: isActive 
                ? `linear-gradient(90deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}50, transparent)` 
                : `linear-gradient(90deg, ${ACCENT_COLOR}50, transparent)`,
              width: isActive ? '100%' : '40%'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState<number | null>(1); // First one expanded by default

  return (
    <section 
      id="experience" 
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
      
      {/* Subtle decorative elements */}
      <div 
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${ACCENT_COLOR}05 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${ACCENT_COLOR}04 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Perjalanan Saya"
          title="Pengalaman Kerja"
          description="Timeline karier profesional saya dan perusahaan-perusahaan yang pernah saya kerjakan."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 md:mt-16">
          {/* Central Timeline Line - Desktop (Dashed) */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ 
              backgroundImage: `repeating-linear-gradient(to bottom, ${ACCENT_COLOR}40 0px, ${ACCENT_COLOR}40 8px, transparent 8px, transparent 16px)`,
            }}
          />

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
                isActive={activeId === exp.id}
                onToggle={() => setActiveId(activeId === exp.id ? null : exp.id)}
              />
            ))}
          </div>

          {/* End Marker - Desktop */}
          <motion.div
            className="hidden md:flex flex-col items-center justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div 
              className="w-3 h-3 rounded-full mb-3"
              style={{ 
                background: ACCENT_COLOR,
                boxShadow: `0 0 15px ${ACCENT_COLOR}50`,
              }}
            />
            <span 
              className="text-xs font-medium tracking-wider uppercase"
              style={{ color: `${ACCENT_COLOR}80` }}
            >
              Awal Perjalanan
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
