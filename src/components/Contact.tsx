'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import SectionTitle from './ui/SectionTitle';
import { Input, Textarea } from './ui/Input';
import Button from './ui/Button';

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'madesmac@example.com',
    href: 'mailto:madesmac@example.com',
  },
  {
    icon: FiPhone,
    title: 'Phone',
    value: '+62 812 3456 7890',
    href: 'tel:+6281234567890',
  },
  {
    icon: FiMapPin,
    title: 'Location',
    value: 'Jakarta, Indonesia',
    href: '#',
  },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.', {
      duration: 5000,
      style: {
        background: '#083A24',
        color: '#F5F5F5',
        border: '1px solid #C9A55A',
      },
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/10 to-secondary" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#C9A55A 1px, transparent 1px), linear-gradient(90deg, #C9A55A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
          description="Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear from you!"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label="Your Name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
              
              <Input
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />
              
              <Textarea
                label="Your Message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
              
              <Button
                type="submit"
                variant="accent"
                size="lg"
                icon={<FiSend />}
                isLoading={isLoading}
                className="w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-dark border border-primary/20 hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-colors">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray text-sm">{info.title}</p>
                    <p className="text-light font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-light font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg bg-secondary/50 border border-primary/20 flex items-center justify-center text-gray hover:text-accent hover:border-accent/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin size={40} className="text-accent mx-auto mb-2" />
                  <p className="text-light font-medium">Jakarta, Indonesia</p>
                  <p className="text-gray text-sm">Available for remote work worldwide</p>
                </div>
              </div>
              {/* Uncomment for actual Google Maps embed */}
              {/* <iframe
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
