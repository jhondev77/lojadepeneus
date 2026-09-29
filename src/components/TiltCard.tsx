import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  options?: any;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", options = {} }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile && tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        ...options,
      });
    }

    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={`tilt-card ${className}`}>
      <div className="tilt-content h-full">
        {children}
      </div>
    </div>
  );
};
