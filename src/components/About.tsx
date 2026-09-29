import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, UserCheck, Shield, Users, Building2, Eye } from "lucide-react";
import { siteConfig } from "@/lib/config";
import alinhamentoAsset from "@/assets/galeria_alinhamento_novo.jpg";
import galpaoAsset from "@/assets/galeria_galpao_estoque.jpg";
import elevadoresAsset from "@/assets/galeria_elevadores.jpg";
import fachadaPrincipalAsset from "@/assets/fachada_principal.jpg";
import { Watermark } from "./Watermark";

const images = [
  fachadaPrincipalAsset,
  alinhamentoAsset,
  galpaoAsset,
  elevadoresAsset,
];

export const About = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) return;
    };
    
    const intervalTime = typeof window !== 'undefined' && window.innerWidth < 768 ? 6000 : 5000;
    
    const interval = setInterval(() => {
      if (!document.hidden) {
        setCurrentIdx((prev) => (prev + 1) % images.length);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch || !containerRef.current) return;

    let destroyed = false;
    import("vanilla-tilt").then(({ default: VanillaTilt }) => {
      if (destroyed || !containerRef.current) return;
      VanillaTilt.init(containerRef.current, {
        max: 14,
        speed: 600,
        glare: true,
        "max-glare": 0.35,
        scale: 1.03,
        perspective: 1000,
      });
    });

    return () => {
      destroyed = true;
      const el = containerRef.current as HTMLDivElement & { vanillaTilt?: { destroy: () => void } } | null;
      el?.vanillaTilt?.destroy();
    };
  }, []);

  const differentials = [
    { title: "TECNOLOGIA", desc: "Equipamentos especializados de última geração.", icon: Shield },
    { title: "ATENDIMENTO", desc: "Focado na transparência e satisfação real.", icon: Users },
    { title: "ESTRUTURA", desc: "Ambiente moderno e confortável para você.", icon: Building2 },
    { title: "TRANSPARÊNCIA", desc: "Serviço justo sem taxas extras ou letras miúdas.", icon: Eye },
  ];

  return (
    <section id="sobre" className="py-24 px-4 bg-background relative overflow-hidden">
      <Watermark 
        className="-bottom-40 -left-80 w-[400px] md:w-[600px] h-[400px] md:h-[600px]" 
        opacity={0.02} 
        rotate={10} 
      />
      <div className="container mx-auto relative z-10 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              ref={containerRef}
              className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden relative border border-border rounded-3xl [transform-style:preserve-3d]"
              style={{ perspective: "1600px" }}
            >
              <AnimatePresence initial={false}>
                <motion.img 
                  key={currentIdx}
                  src={images[currentIdx]} 
                  alt="Vilhenorte Pneus" 
                  initial={{ opacity: 0, rotateY: 12, scale: 1.08, filter: "blur(6px)" }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, rotateY: -10, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover absolute inset-0 will-change-transform"
                  style={{ objectPosition: "center 20%", transformOrigin: "center" }}
                  loading={currentIdx === 0 ? "eager" : "lazy"}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

              
              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                {images.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      i === currentIdx ? 'bg-energy w-4' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass shadow-2xl overflow-hidden hidden md:block border border-border rounded-2xl p-8">
              <div className="absolute inset-0 bg-noise pointer-events-none opacity-5" />
              <UserCheck className="w-8 h-8 text-energy mb-3 relative z-10" />
              <div className="text-foreground font-black text-xl leading-tight uppercase font-manrope relative z-10">
                {siteConfig.slogan}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <span className="text-energy font-bold tracking-[0.4em] text-[9px] uppercase mb-4 block">CACOAL / RONDÔNIA — DESDE 2014</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[0.9] tracking-tighter uppercase font-manrope">
                UMA EMPRESA LOCAL.<br />
                ATENDIMENTO <span className="text-energy italic">DE VERDADE.</span>
              </h2>
              <p className="text-light-gray text-lg leading-relaxed max-w-xl mb-10 font-medium">
                A Vilhenorte Pneus é referência em Cacoal para quem busca pneus novos, serviços especializados e um atendimento baseado na confiança e transparência.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-border">
                {differentials.map((diff, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <diff.icon className="w-5 h-5 text-energy" />
                      <h4 className="text-energy font-black text-[9px] tracking-[0.3em] uppercase font-manrope">{diff.title}</h4>
                    </div>
                    <p className="text-light-gray text-xs font-medium leading-relaxed">{diff.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-border">
              <motion.a 
                whileHover={{ scale: 1.02, translateY: -1 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${siteConfig.whatsapp}?text=Olá! Gostaria de fazer um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-energy text-white px-8 py-4 font-bold text-xs tracking-[0.2em] hover:bg-energy-dark transition-all duration-300 w-full sm:w-auto text-center shadow-lg font-manrope group rounded-full"
              >
                FAZER ORÇAMENTO <ArrowUpRight className="w-4 h-4 inline-block group-hover:rotate-45 transition-transform ml-2" />
              </motion.a>
              <a href="#galeria" className="px-8 py-4 border border-border text-foreground font-black text-[10px] tracking-widest uppercase hover:bg-foreground/5 transition-all text-center rounded-full">CONHECER ESTRUTURA</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
