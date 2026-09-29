import React, { useState, useCallback, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const MagneticButton = ({ children, className, href, onClick }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Max movement is 20px
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`relative overflow-hidden group ${className}`}
      >
        {/* Sliding background effect */}
        <span className="absolute inset-0 w-0 bg-foreground/20 transition-all duration-500 ease-out group-hover:w-full z-0" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Component>
    </motion.div>
  );
};
