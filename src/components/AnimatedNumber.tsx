import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";

export const AnimatedNumber = ({ 
  value, 
  duration = 2, 
  delay = 0,
  decimals = 0,
  suffix = ""
}: { 
  value: number; 
  duration?: number; 
  delay?: number;
  decimals?: number;
  suffix?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !isInView.current) {
          isInView.current = true;
          const controls = animate(0, value, {
            duration,
            delay,
            onUpdate: (latest) => setDisplayValue(latest)
          });
          return () => controls.stop();
        }
        return undefined;
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, delay]);

  return (
    <span ref={ref}>
      {displayValue.toFixed(decimals).replace('.', ',')}
      {suffix}
    </span>
  );
};
