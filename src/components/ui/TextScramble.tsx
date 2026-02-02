'use client';

import { useEffect, useState, useCallback } from 'react';

interface TextScrambleProps {
  texts: string[];
  className?: string;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({ texts, className = '' }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('');
  const [, setCurrentIndex] = useState(0);

  const scramble = useCallback((newText: string) => {
    const length = Math.max(displayText.length, newText.length);
    let frame = 0;
    const totalFrames = 30;
    
    const animate = () => {
      let output = '';
      let complete = 0;
      
      for (let i = 0; i < length; i++) {
        const progress = frame / totalFrames;
        const charProgress = i / length;
        
        if (progress > charProgress) {
          // Character is revealed
          if (i < newText.length) {
            output += newText[i];
          }
          complete++;
        } else {
          // Still scrambling
          if (i < newText.length) {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
      }
      
      setDisplayText(output);
      
      if (complete < length) {
        frame++;
        requestAnimationFrame(animate);
      } else {
        setDisplayText(newText);
      }
    };
    
    animate();
  }, [displayText.length]);

  useEffect(() => {
    // Initial scramble
    scramble(texts[0]);
    
    // Set up interval to cycle through texts
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % texts.length;
        scramble(texts[next]);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [texts, scramble]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
}
