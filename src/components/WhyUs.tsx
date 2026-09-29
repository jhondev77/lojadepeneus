import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Award } from "lucide-react";
import { useState } from "react";

export const WhyUs = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const differentials = [
    {
      icon: Target,
      title: "Precisão 3D",
      desc: "Alinhamento computadorizado de última geração.",
      detail: "±0.1° de margem de erro técnica",
      accent: "#22c55e" // Green
    },
    {
      icon: ShieldCheck,
      title: "Garantia Real",
      desc: "Suporte total em todas as marcas comercializadas.",
      detail: "Cobertura direta de fábrica",
      accent: "#0EA5E9" // Sky Blue
    },
    {
      icon: Zap,
      title: "Agilidade",
      desc: "Processos otimizados para você não perder tempo.",
      detail: "Check-up rápido em 15 minutos",
      accent: "#F59E0B" // Amber/Gold
    },
    {
      icon: Award,
      title: "Premium",
      desc: "O melhor Auto Center da região de Cacoal.",
      detail: "Certificação de excelência regional",
      accent: "#A78BFA" // Soft Purple
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background connecting line - subtle white/gray */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent z-0 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                marginTop: i % 2 !== 0 ? "24px" : "0px",
                borderColor: hoveredIdx === i ? `${item.accent}99` : `${item.accent}4d`,
              }}
              className="relative rounded-3xl border bg-graphite/60 backdrop-blur-[16px] px-7 pb-8 pt-14 transition-all duration-500 min-h-[240px] group"
            >
              {/* Floating icon */}
              <div
                className="absolute -top-6 left-6 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-translate-y-1"
                style={{
                  backgroundColor: item.accent,
                  boxShadow:
                    hoveredIdx === i
                      ? `0 14px 34px -8px ${item.accent}cc, 0 0 0 6px ${item.accent}1f`
                      : `0 10px 24px -10px ${item.accent}99`,
                }}
              >
                <item.icon className="w-7 h-7 text-white stroke-[1.6px]" />
              </div>

              <h3 className="text-lg font-black text-white uppercase tracking-[0.2em] mb-3 font-manrope">
                {item.title}
              </h3>
              <p className="text-[#B8BEC7] text-xs uppercase tracking-widest leading-relaxed font-medium">
                {item.desc}
              </p>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredIdx === i ? 1 : 0,
                  height: hoveredIdx === i ? "auto" : 0,
                }}
                className="overflow-hidden"
              >
                <p
                  className="font-bold text-[10px] uppercase tracking-[0.3em] mt-4 pt-4 border-t border-white/10"
                  style={{ color: item.accent }}
                >
                  {item.detail}
                </p>
              </motion.div>

              {/* Indicator dot on connection line */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden lg:block">
                <motion.div
                  animate={{
                    scale: hoveredIdx === i ? [1, 1.5, 1] : 1,
                    opacity: hoveredIdx === i ? 1 : 0.3,
                  }}
                  transition={{ repeat: hoveredIdx === i ? Infinity : 0, duration: 1.5 }}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: item.accent,
                    boxShadow: hoveredIdx === i ? `0 0 10px ${item.accent}` : "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


