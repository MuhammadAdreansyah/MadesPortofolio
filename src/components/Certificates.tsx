'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiX, FiExternalLink, FiCalendar, FiAward } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';

// Certificate categories
const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Development' },
  { id: 'cloud', name: 'Cloud & DevOps' },
  { id: 'design', name: 'UI/UX Design' },
  { id: 'data', name: 'Data & AI' },
  { id: 'other', name: 'Other' },
];

// Sample certificates data - replace with your actual certificates
const certificates = [
  {
    id: 1,
    title: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    category: 'cloud',
    image: '/images/certificates/aws-saa.png',
    credentialUrl: 'https://aws.amazon.com/verification',
    credentialId: 'ABC123XYZ',
  },
  {
    id: 2,
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'Dec 2023',
    category: 'web',
    image: '/images/certificates/meta-frontend.png',
    credentialUrl: 'https://coursera.org/verify',
    credentialId: 'DEF456UVW',
  },
  {
    id: 3,
    title: 'Google UX Design Professional',
    issuer: 'Google (Coursera)',
    date: 'Nov 2023',
    category: 'design',
    image: '/images/certificates/google-ux.png',
    credentialUrl: 'https://coursera.org/verify',
    credentialId: 'GHI789RST',
  },
  {
    id: 4,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Oct 2023',
    category: 'data',
    image: '/images/certificates/tensorflow.png',
    credentialUrl: 'https://tensorflow.org/certificate',
    credentialId: 'JKL012MNO',
  },
  {
    id: 5,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'Sep 2023',
    category: 'web',
    image: '/images/certificates/react-udemy.png',
    credentialUrl: 'https://udemy.com/certificate',
    credentialId: 'PQR345STU',
  },
  {
    id: 6,
    title: 'Docker & Kubernetes',
    issuer: 'Linux Foundation',
    date: 'Aug 2023',
    category: 'cloud',
    image: '/images/certificates/docker-k8s.png',
    credentialUrl: 'https://linuxfoundation.org/verify',
    credentialId: 'VWX678YZA',
  },
  {
    id: 7,
    title: 'Next.js & React - Complete Guide',
    issuer: 'Udemy',
    date: 'Jul 2023',
    category: 'web',
    image: '/images/certificates/nextjs.png',
    credentialUrl: 'https://udemy.com/certificate',
    credentialId: 'BCD901EFG',
  },
  {
    id: 8,
    title: 'Figma UI/UX Design',
    issuer: 'Designlab',
    date: 'Jun 2023',
    category: 'design',
    image: '/images/certificates/figma.png',
    credentialUrl: 'https://designlab.com/certificate',
    credentialId: 'HIJ234KLM',
  },
  {
    id: 9,
    title: 'Python for Data Science',
    issuer: 'IBM (Coursera)',
    date: 'May 2023',
    category: 'data',
    image: '/images/certificates/python-ibm.png',
    credentialUrl: 'https://coursera.org/verify',
    credentialId: 'NOP567QRS',
  },
  {
    id: 10,
    title: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    date: 'Apr 2023',
    category: 'other',
    image: '/images/certificates/scrum.png',
    credentialUrl: 'https://scrumalliance.org/verify',
    credentialId: 'TUV890WXY',
  },
];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredCertificates = activeCategory === 'all'
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
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
          subtitle="My Achievements"
          title="Certificates & Credentials"
          description="Professional certifications and courses I've completed to continuously improve my skills."
        />

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent text-secondary shadow-lg shadow-accent/25'
                  : 'bg-secondary/50 text-gray hover:bg-secondary hover:text-light border border-primary-light/20'
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <span className="ml-2 text-xs">
                  ({filteredCertificates.length})
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer"
              >
                <div className="relative bg-secondary/50 rounded-xl overflow-hidden border border-primary-light/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                      {/* Placeholder - replace with actual Image when you have certificates */}
                      <FiAward className="w-16 h-16 text-accent/30" />
                    </div>
                    {/* Uncomment when you have actual images */}
                    {/* <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    /> */}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
                      >
                        <FiExternalLink className="w-5 h-5 text-secondary" />
                      </motion.div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/90 text-secondary">
                        {categories.find(c => c.id === cert.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-light text-sm mb-1 line-clamp-2 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray text-xs mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-gray/70 text-xs">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FiAward className="w-16 h-16 mx-auto text-gray/30 mb-4" />
            <p className="text-gray">No certificates found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Modal for Certificate Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-secondary rounded-2xl overflow-hidden border border-primary-light/20 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark/50 hover:bg-dark flex items-center justify-center text-light hover:text-accent transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Certificate Image */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/20 to-secondary">
                {/* Placeholder - replace with actual Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FiAward className="w-24 h-24 mx-auto text-accent/40 mb-4" />
                    <p className="text-gray text-sm">Certificate Preview</p>
                  </div>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                /> */}
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent mb-3">
                      {categories.find(c => c.id === selectedCert.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold text-light mb-1">
                      {selectedCert.title}
                    </h3>
                    <p className="text-gray">{selectedCert.issuer}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray mb-6">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4 text-accent" />
                    <span>Issued: {selectedCert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiAward className="w-4 h-4 text-accent" />
                    <span>ID: {selectedCert.credentialId}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-secondary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Verify Credential
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-3 border border-primary-light/30 text-light rounded-lg hover:bg-primary-light/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
