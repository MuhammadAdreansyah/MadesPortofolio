'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface TextScrambleProps {
  texts: string[];
  className?: string;
  interval?: number; // Time between text changes in ms
  speed?: number; // Animation speed (higher = slower)
}

const chars = '!<>-_\\/[]{}—=+*^?#@$%&~';

export default function TextScramble({ 
  texts, 
  className = '',
  interval = 4000,
  speed = 50,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('');
  const currentIndexRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback((newText: string, oldText: string) => {
    const length = Math.max(oldText.length, newText.length);
    let frame = 0;
    const totalFrames = speed;
    
    const animate = () => {
      let output = '';
      let complete = 0;
      
      for (let i = 0; i < length; i++) {
        const progress = frame / totalFrames;
        const charProgress = i / length;
        
        if (progress > charProgress) {
          if (i < newText.length) {
            output += newText[i];
          }
          complete++;
        } else {
          if (i < newText.length) {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
      }
      
      setDisplayText(output);
      
      if (complete < length) {
        frame++;
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(newText);
      }
    };
    
    animate();
  }, [speed]);

  useEffect(() => {
    // Initial scramble
    scramble(texts[0], '');
    
    // Set up interval to cycle through texts
    const intervalId = setInterval(() => {
      const prevText = texts[currentIndexRef.current];
      currentIndexRef.current = (currentIndexRef.current + 1) % texts.length;
      scramble(texts[currentIndexRef.current], prevText);
    }, interval);

    return () => {
      clearInterval(intervalId);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [texts, scramble, interval]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}
