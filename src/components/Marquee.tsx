import { motion } from "framer-motion";

import logo_dunlop from "@/assets/logo_dunlop.png";
import logo_roadcruza from "@/assets/logo_roadcruza.png";
import logo_xbri from "@/assets/logo_xbri.png";
import logo_westlake from "@/assets/logo_westlake.png";
import logo_alliance from "@/assets/logo_alliance.png";
import logo_speedmax from "@/assets/logo_speedmax.png";
import logo_linglong from "@/assets/logo_linglong.png";

const brandLogos = [
  { name: "Dunlop", src: logo_dunlop },
  { name: "Roadcruza", src: logo_roadcruza },
  { name: "XBRI", src: logo_xbri },
  { name: "Westlake", src: logo_westlake },
  { name: "Alliance", src: logo_alliance },
  { name: "Speedmax", src: logo_speedmax },
  { name: "Linglong", src: logo_linglong },
];

export const Marquee = () => {
  return (
    <div className="relative py-12 overflow-hidden bg-background border-y border-border">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap gap-20 items-center w-max"
      >
        {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, i) => (
          <div key={i} className="flex items-center gap-20">
            <div className="group relative flex h-16 md:h-20 w-32 md:w-40 items-center justify-center rounded-xl transition-colors duration-500 hover:bg-foreground/90">
              <img
                src={brand.src}
                alt={`Logo ${brand.name}`}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-70 transition-all duration-500 group-hover:opacity-100"
              />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-energy/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
