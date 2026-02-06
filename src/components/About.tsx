'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload, FiCheck } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

// Key highlights/values
const highlights = [
  'Kode Bersih & Mudah Dipelihara',
  'Tech Stack Modern',
  'Desain Berorientasi Pengguna',
  'Performa Teroptimasi',
];

// Journey milestones
const journey = [
  { year: '2022', title: 'Admin Database', desc: 'Telkom Indonesia' },
  { year: '2024', title: 'Magang Front Office', desc: 'KSOP Utama' },
  { year: '2024', title: 'Analis Data', desc: 'RevoU' },
  { year: '2025', title: 'Pengelola Data', desc: 'KSOP Belawan' },
];

// Quick stats - removed for cleaner design

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
          subtitle="Tentang Saya"
          title="Kenali Saya Lebih Dekat"
          description="Kisah di balik kode dan semangat yang menggerakkan setiap proyek."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
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
                    <p className="text-accent font-medium">Analis Data & Pengembang</p>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: 0.4, type: 'spring' }}
                  className="absolute -bottom-4 -right-4 md:right-4 bg-accent text-dark px-5 py-3 rounded-xl shadow-xl"
                >
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-xs font-medium opacity-80">Tahun Exp.</div>
                </motion.div>
              </div>
              
              {/* Philosophy Quote - Better visual separation with enhanced spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.4 }}
                className="mt-10 lg:mt-12 p-6 rounded-xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-l-4 border-accent backdrop-blur-sm"
              >
                <p className="text-light/90 text-sm italic leading-relaxed">
                  &quot;Kode adalah puisi. Setiap fungsi menceritakan kisah, setiap algoritma memecahkan teka-teki, 
                  dan setiap piksel menciptakan pengalaman.&quot;
                </p>
                <p className="text-accent text-xs mt-4 font-medium tracking-wide">— Filosofi Pengembangan Saya</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-light">
                Membangun Pengalaman Digital dengan
                <span className="text-accent"> Passion & Presisi</span>
              </h3>
              
              <p className="text-gray leading-relaxed">
                Saya Muhammad Adreansyah P. Lubis, seorang Data Analyst dan Developer dengan pengalaman 
                dalam membangun solusi berbasis data yang efektif. Saya mengkhususkan diri dalam 
                mengubah ide kompleks menjadi solusi yang elegan dan berperforma tinggi.
              </p>
              
              <p className="text-gray leading-relaxed">
                Pendekatan saya menggabungkan keahlian teknis dengan pemecahan masalah yang kreatif. 
                Saya percaya bahwa perangkat lunak yang hebat harus intuitif, dapat diakses, dan 
                menyenangkan untuk digunakan. Setiap baris kode yang saya tulis ditujukan untuk menciptakan 
                dampak yang bermakna.
              </p>
            </div>
            
            {/* What I Bring */}
            <div className="p-6 rounded-2xl bg-secondary/50 border border-accent/10">
              <h4 className="text-lg font-semibold text-light mb-4">Yang Saya Tawarkan</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
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
              <h4 className="text-lg font-semibold text-light mb-6">Perjalanan Saya</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
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
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-start gap-4 pt-8 mt-4 border-t border-accent/10"
            >
              <Button variant="accent" icon={<FiDownload />} className="min-w-[160px] justify-center">
                Unduh CV
              </Button>
              <Button 
                variant="outline" 
                className="min-w-[140px] justify-center"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hubungi Saya
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
