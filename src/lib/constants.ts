// ============================================
// 🖼️ KONFIGURASI GAMBAR & ASSETS
// ============================================
// Ubah path di sini untuk mengganti gambar di seluruh website

export const IMAGES = {
  // Foto Profil
  profile: {
    avatar: '/images/profile/avatar.jpg',        // Foto utama di Hero & About
    aboutPhoto: '/images/profile/about.jpg',     // Foto di section About
  },

  // Project Screenshots
  projects: {
    project1: '/images/projects/project-1.jpg',
    project2: '/images/projects/project-2.jpg',
    project3: '/images/projects/project-3.jpg',
    project4: '/images/projects/project-4.jpg',
    project5: '/images/projects/project-5.jpg',
    project6: '/images/projects/project-6.jpg',
  },

  // Foto Testimonial/Client
  testimonials: {
    client1: '/images/testimonials/client-1.jpg',
    client2: '/images/testimonials/client-2.jpg',
    client3: '/images/testimonials/client-3.jpg',
    client4: '/images/testimonials/client-4.jpg',
    client5: '/images/testimonials/client-5.jpg',
  },

  // Logo & Icons
  logo: '/icons/logo.svg',
  favicon: '/icons/favicon.ico',

  // Social Media Preview
  ogImage: '/images/og-image.jpg',
};

// ============================================
// 📄 KONFIGURASI FILES
// ============================================

export const FILES = {
  cv: '/cv/Madesmac-CV.pdf',
};

// ============================================
// 👤 DATA PERSONAL - UBAH SESUAI DATA ANDA
// ============================================

export const PERSONAL_INFO = {
  name: 'Madesmac',
  title: 'Full Stack Developer',
  email: 'madesmac@example.com',
  phone: '+62 812 3456 7890',
  location: 'Jakarta, Indonesia',
  availability: 'Open to Work',
  
  // Bio/Description
  shortBio: 'Passionate developer crafting beautiful and functional web experiences. Specialized in React, Next.js, and modern web technologies.',
  
  // Social Media Links
  social: {
    github: 'https://github.com/madesmac',
    linkedin: 'https://linkedin.com/in/madesmac',
    twitter: 'https://twitter.com/madesmac',
    instagram: 'https://instagram.com/madesmac',
  },
};

// ============================================
// 💼 DATA EXPERIENCE - UBAH SESUAI PENGALAMAN ANDA
// ============================================

export const EXPERIENCES = [
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
  // Tambahkan pengalaman lainnya di sini...
];

// ============================================
// 🚀 DATA PROJECTS - UBAH SESUAI PROJECT ANDA
// ============================================

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration.',
    longDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory tracking, secure payment processing with Stripe.',
    image: '/images/projects/project-1.jpg',
    category: 'Web Apps',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  // Tambahkan project lainnya di sini...
];

// ============================================
// 💬 DATA TESTIMONIALS - UBAH SESUAI TESTIMONIAL ANDA
// ============================================

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Tech Startup Inc.',
    image: '/images/testimonials/client-1.jpg',
    rating: 5,
    text: "Working with Madesmac was an absolute pleasure. He delivered our platform ahead of schedule.",
  },
  // Tambahkan testimonial lainnya di sini...
];
