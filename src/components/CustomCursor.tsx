'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Check for touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouchDevice();

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track added elements to avoid duplicate listeners
    const processedElements = new WeakSet<Element>();
    
    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [data-cursor-hover], .project-card, input, textarea, [role="button"]'
      );

      interactiveElements.forEach((el) => {
        // Skip if already processed
        if (processedElements.has(el)) return;
        processedElements.add(el);
        
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    addHoverListeners();
    
    // Use IntersectionObserver-style approach - only check periodically, not on every mutation
    let mutationTimeout: NodeJS.Timeout | null = null;
    const observer = new MutationObserver(() => {
      // Batch mutations and debounce heavily
      if (mutationTimeout) return;
      mutationTimeout = setTimeout(() => {
        addHoverListeners();
        mutationTimeout = null;
      }, 500);
    });
    
    // Only observe childList changes, not subtree for better performance
    observer.observe(document.body, { childList: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (mutationTimeout) clearTimeout(mutationTimeout);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Single dot cursor with glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Glow layer behind the dot */}
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : 1.5,
            opacity: isVisible ? (isHovering ? 0.6 : 0.3) : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 w-3 h-3 rounded-full"
          style={{ 
            background: isHovering 
              ? 'radial-gradient(circle, rgba(201, 165, 90, 0.8) 0%, rgba(201, 165, 90, 0.3) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 70%)',
            filter: 'blur(2px)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
        {/* Main dot */}
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className={`w-3 h-3 rounded-full ${isHovering ? 'bg-accent' : 'bg-white'}`}
          style={{ 
            mixBlendMode: 'difference',
            boxShadow: isHovering 
              ? '0 0 15px 5px rgba(201, 165, 90, 0.7), 0 0 30px 10px rgba(201, 165, 90, 0.4)' 
              : '0 0 8px 3px rgba(255, 255, 255, 0.3)'
          }}
        />
      </motion.div>

      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
