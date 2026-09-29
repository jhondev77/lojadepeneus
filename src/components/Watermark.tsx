import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/config";

interface WatermarkProps {
  className?: string;
  opacity?: number;
  rotate?: number;
  scale?: number;
  yOffset?: number;
}

export const Watermark = ({ 
  className = "", 
  opacity = 0.05, 
  rotate = -15, 
  scale = 1,
  yOffset = 50
}: WatermarkProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, yOffset]);

  return (
    <motion.div
      style={{ y, opacity }}
      className={`absolute pointer-events-none z-0 select-none overflow-hidden ${className}`}
    >
      <img
        src={siteConfig.logoUrl}
        alt=""
        className="w-full h-full object-contain filter grayscale brightness-200 contrast-75"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
        }}
      />
    </motion.div>
  );
};
