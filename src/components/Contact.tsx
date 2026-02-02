'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiArrowUpRight, FiCopy, FiCheck, FiMapPin } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import { Input, Textarea } from './ui/Input';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const email = 'adreansyahlubis@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success('Email copied to clipboard!', {
      duration: 2000,
      style: {
        background: '#202020',
        color: '#F5F5F5',
        border: '1px solid #C9A55A',
      },
    });
    setTimeout(() => setCopied(false), 2000);
  };

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
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.', {
      duration: 5000,
      style: {
        background: '#202020',
        color: '#F5F5F5',
        border: '1px solid #C9A55A',
      },
    });
    
    setFormData({ name: '', email: '', message: '' });
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
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-secondary" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header - Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-4">{"// GET IN TOUCH"}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-light leading-tight">
            Let&apos;s work together
            <br />
            <span className="text-gray">on your next project</span>
          </h2>
        </motion.div>

        {/* Main Content - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Email CTA & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Big Email Card */}
            <div className="bg-secondary/30 rounded-2xl p-6 sm:p-8 border border-accent/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <FiMail className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-gray text-sm">Drop me a line</p>
                  <p className="text-light font-medium">Preferred contact</p>
                </div>
              </div>
              
              <p className="text-xl sm:text-2xl font-medium text-light mb-6 break-all">
                {email}
              </p>
              
              <div className="flex gap-3">
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                >
                  {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
                  {copied ? 'Copied!' : 'Copy'}
                </motion.button>
                
                <motion.a
                  href={`mailto:${email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-dark font-medium hover:bg-accent/90 transition-colors"
                >
                  Send Email
                  <FiArrowUpRight size={18} />
                </motion.a>
              </div>
            </div>

            {/* Location Map */}
            <div className="rounded-2xl overflow-hidden border border-accent/10">
              <div className="flex items-center gap-3 px-4 py-3 bg-secondary/30 border-b border-accent/10">
                <FiMapPin className="text-accent" size={18} />
                <span className="text-light text-sm font-medium">My Location</span>
              </div>
              <div className="relative h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0374013123!2d98.6721!3d3.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzUnNDIuNyJOIDk4wrA0MCcxOS42IkU!5e0!3m2!1sen!2sid!4v1706886400000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <a
                  href="https://maps.app.goo.gl/7bR1Rmhhm3GskDs76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark/80 backdrop-blur-sm text-accent text-sm hover:bg-accent hover:text-dark transition-colors"
                >
                  Open in Maps
                  <FiArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/20 border border-primary/30">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
              </div>
              <div>
                <p className="text-light text-sm font-medium">Currently available</p>
                <p className="text-gray text-xs">Medan, Indonesia · GMT+7</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-secondary/20 rounded-2xl p-6 sm:p-8 border border-accent/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-gray text-sm font-mono">contact_form.tsx</span>
              </div>
              
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
                
                <Textarea
                  label="Your Message"
                  name="message"
                  placeholder="Hi! I'd like to discuss a project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                />
                
                <div className="flex items-center justify-between pt-2">
                  <p className="text-gray text-sm">
                    I&apos;ll respond within 24 hours
                  </p>
                  
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-dark font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend size={18} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Quick Response Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center text-gray text-sm mt-6"
            >
              Prefer email? Just click the email above to start a conversation.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
