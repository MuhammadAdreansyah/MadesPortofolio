'use client';

import { useEffect, useState, useCallback, useSyncExternalStore, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Check if touch device on client
function subscribe() {
  return () => {};
}

function getSnapshot() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function getServerSnapshot() {
  return true; // Assume touch on server to prevent hydration issues
}

export default function CursorGrid() {
  const isTouchDevice = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Use ref to avoid recreating callback
  const isVisibleRef = useRef(isVisible);
  const isInHeroRef = useRef(isInHero);
  const lastHeroCheckRef = useRef(0);
  
  useEffect(() => {
    isVisibleRef.current = isVisible;
    isInHeroRef.current = isInHero;
  }, [isVisible, isInHero]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisibleRef.current) setIsVisible(true);

    // Throttle hero section check to every 100ms
    const now = Date.now();
    if (now - lastHeroCheckRef.current > 100) {
      lastHeroCheckRef.current = now;
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isInHeroArea = e.clientY >= rect.top && e.clientY <= rect.bottom;
        if (isInHeroArea !== isInHeroRef.current) setIsInHero(isInHeroArea);
      }
    }
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, isTouchDevice]);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Electric Grid Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[1]"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVisible && !isInHero ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <svg 
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Electric turbulence distortion - NO animation */}
            <filter id="electricDistort" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.008" 
                numOctaves="3" 
                result="noise"
                seed="5"
              />
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise" 
                scale="15" 
                xChannelSelector="R" 
                yChannelSelector="G"
              />
            </filter>
            
            {/* Electric glow filter */}
            <filter id="electricGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur1"/>
              <feGaussianBlur stdDeviation="4" result="blur2"/>
              <feMerge>
                <feMergeNode in="blur2"/>
                <feMergeNode in="blur1"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Bright electric grid pattern */}
            <pattern 
              id="electricGridPattern" 
              width="45" 
              height="45" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 45 0 L 0 0 0 45" 
                fill="none" 
                stroke="#FFD700" 
                strokeWidth="0.8"
                opacity="1"
              />
            </pattern>
            
            {/* Secondary grid - brighter */}
            <pattern 
              id="electricGridPattern2" 
              width="90" 
              height="90" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 90 0 L 0 0 0 90" 
                fill="none" 
                stroke="#FFC125" 
                strokeWidth="1.2"
                opacity="0.9"
              />
            </pattern>
            
            {/* Inner bright core gradient */}
            <radialGradient id="electricCoreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="15%" stopColor="white" stopOpacity="0.95" />
              <stop offset="35%" stopColor="white" stopOpacity="0.7" />
              <stop offset="60%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            
            {/* Electric spark gradient - NO animation */}
            <radialGradient id="sparkGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#FFE566" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C9A55A" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Main spotlight mask */}
          <mask id="electricSpotlightMask">
            <motion.ellipse
              rx="350"
              ry="350"
              fill="url(#electricCoreGradient)"
              style={{ 
                cx: x,
                cy: y,
              }}
            />
          </mask>
          
          {/* Primary electric grid - BRIGHT */}
          <g mask="url(#electricSpotlightMask)" filter="url(#electricDistort)">
            <rect 
              width="100%" 
              height="100%" 
              fill="url(#electricGridPattern)"
              opacity="0.85"
              filter="url(#electricGlow)"
            />
          </g>
          
          {/* Secondary grid layer */}
          <g mask="url(#electricSpotlightMask)" filter="url(#electricDistort)">
            <rect 
              width="100%" 
              height="100%" 
              fill="url(#electricGridPattern2)"
              opacity="0.5"
              transform="translate(6, 6)"
            />
          </g>
          
          {/* Electric spark/pulse at cursor center */}
          <motion.circle
            r="80"
            fill="url(#sparkGradient)"
            style={{
              cx: x,
              cy: y,
            }}
            opacity={0.4}
          />
          
          {/* Inner bright core - static, no flickering */}
          <motion.circle
            r="20"
            fill="#FFE566"
            opacity={0.15}
            style={{
              cx: x,
              cy: y,
            }}
          />
        </svg>
      </motion.div>
    </>
  );
}
