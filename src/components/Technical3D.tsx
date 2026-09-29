import React from 'react';
import { motion } from 'framer-motion';

export const Technical3D = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-5" />
      
      {/* Abstract Wireframe Pneu Representation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="relative w-64 h-64 md:w-80 md:h-80"
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-energy/30 rounded-full" />
        <div className="absolute inset-4 border border-energy/10 rounded-full" />
        
        {/* Inner Details */}
        <div className="absolute inset-[25%] border-2 border-energy/20 rounded-full" />
        <div className="absolute inset-[30%] border border-energy/5 rounded-full" />
        
        {/* Radial Lines */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-full h-px bg-energy/10"
            style={{ 
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              width: '100%'
            }}
          />
        ))}

        {/* Technical Labels */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8px] font-bold text-energy tracking-[0.4em] whitespace-nowrap"
        >
          RIM DIAMETER
        </motion.div>
        
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 -right-16 -translate-y-1/2 text-[8px] font-bold text-energy tracking-[0.4em] whitespace-nowrap rotate-90"
        >
          WIDTH
        </motion.div>

        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[8px] font-bold text-energy tracking-[0.4em] whitespace-nowrap"
        >
          PROFILE RATIO
        </motion.div>
      </motion.div>

      {/* Grid Elements */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-10">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-energy/20" />
        ))}
      </div>
      
      {/* Technical Indicators */}
      <div className="absolute bottom-10 left-10 text-[7px] text-energy/40 font-mono space-y-1">
        <div>X: 42.083</div>
        <div>Y: 11.439</div>
        <div>Z: -61.437</div>
        <div className="text-energy/60">SCANNING...</div>
      </div>
    </div>
  );
};