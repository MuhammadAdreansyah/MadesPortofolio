'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp, FiMail, FiMapPin } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-secondary/50 border-t border-accent/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
      
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Brand & Social */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12 pb-12 border-b border-accent/10">
            {/* Brand */}
            <div>
              <a href="#home" className="text-3xl font-bold font-heading inline-block mb-3">
                <span className="text-light">Mades</span>
                <span className="text-accent">mac</span>
              </a>
              <p className="text-gray text-sm max-w-xs">
                Data Analyst & Developer yang membangun pengalaman digital dengan passion dan presisi.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-gray hover:text-accent hover:border-accent/50 hover:bg-accent/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Middle Section - Navigation & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Navigation */}
            <div>
              <h4 className="text-accent text-sm font-semibold uppercase tracking-wider mb-6">Navigasi</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray text-sm hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-accent text-sm font-semibold uppercase tracking-wider mb-6">Kontak</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:adreansyahlubis@gmail.com"
                  className="flex items-center gap-3 text-gray hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <FiMail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">adreansyahlubis@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FiMapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">Medan, Indonesia</span>
                </div>
              </div>
            </div>
            
            {/* Status */}
            <div>
              <h4 className="text-accent text-sm font-semibold uppercase tracking-wider mb-6">Status</h4>
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-light font-medium">Tersedia untuk Bekerja</span>
                </div>
                <p className="text-gray text-sm">
                  Terbuka untuk proyek freelance dan peluang full-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-accent/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray/60 text-sm">
              © {new Date().getFullYear()} Madesmac. Hak cipta dilindungi.
            </p>
            <p className="text-gray/60 text-sm">
              Dirancang & Dibangun dengan <span className="text-accent">♥</span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-accent text-dark flex items-center justify-center shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
