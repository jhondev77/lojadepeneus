import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import fachadaPrincipal from "@/assets/fachada_principal.jpg";
import pneus_estoque from "@/assets/pneus_etiqueta.jpg";
import equipamentos from "@/assets/alinhamento_3d.jpg";
import sala_espera from "@/assets/sala_espera.jpg";
import interior from "@/assets/interior.jpg";
import produtos from "@/assets/produtos.jpg";
import pneus_agricolas from "@/assets/pneus_agricolas_v2.jpg";
import terra_legend from "@/assets/terra_legend.jpg";
import xbri_brutus from "@/assets/xbri_brutus.jpg";
import pneu_detalhe from "@/assets/pneu_detalhe.jpg";
import galeria_estoque from "@/assets/galeria_estoque.jpg";
import galeria_galpao_estoque from "@/assets/galeria_galpao_estoque.jpg";
import galeria_alinhamento_novo from "@/assets/galeria_alinhamento_novo.jpg";
import galeria_area_descanso from "@/assets/galeria_area_descanso.jpg";
import galeria_elevadores from "@/assets/galeria_elevadores.jpg";

const images = [
  { type: "video", url: "/hero-video.mp4", title: "EXPERIÊNCIA VILHENORTE", desc: "Qualidade e desempenho em movimento", category: "FACHADA" },
  { url: fachadaPrincipal, title: "FACHADA PRINCIPAL", desc: "Vilhenorte Pneus — Cacoal/RO", category: "FACHADA" },
  { url: galeria_galpao_estoque, title: "ESTOQUE CENTRAL", desc: "Nossa infraestrutura logística em Cacoal", category: "ESTRUTURA" },
  { url: galeria_elevadores, title: "BOXES DE SERVIÇO", desc: "Elevadores automotivos profissionais", category: "TECNOLOGIA" },
  { url: galeria_alinhamento_novo, title: "ALINHAMENTO 3D", desc: "Equipamentos de última geração", category: "TECNOLOGIA" },
  { url: galeria_area_descanso, title: "ÁREA DE DESCANSO", desc: "Conforto exclusivo para clientes", category: "ATENDIMENTO" },
  { url: galeria_estoque, title: "LOGÍSTICA", desc: "Processos de armazenamento eficientes", category: "ESTRUTURA" },
  { url: equipamentos, title: "TECNOLOGIA", desc: "Equipamentos para serviços de precisão", category: "TECNOLOGIA" },
  { url: pneus_estoque, title: "ESTOQUE", desc: "Variedade de pneus", category: "PNEUS" },
  { url: pneus_agricolas, title: "LINHA AGRÍCOLA", desc: "Pneus para operações no campo", category: "AGRÍCOLA" },
  { url: terra_legend, title: "DETALHES", desc: "Qualidade superior em cada pneu", category: "PNEUS" },
  { url: xbri_brutus, title: "PERFORMANCE", desc: "Pneus XBRI Brutus", category: "PNEUS" },
  { url: sala_espera, title: "ATENDIMENTO", desc: "Conforto e recepção premium", category: "ATENDIMENTO" },
  { url: interior, title: "ESTRUTURA", desc: "Instalações modernas", category: "ESTRUTURA" },
  { url: produtos, title: "PRODUTOS", desc: "As melhores marcas", category: "PNEUS" },
  { url: pneu_detalhe, title: "SEGURANÇA", desc: "Check-up completo", category: "TECNOLOGIA" },
  { url: "https://raw.githubusercontent.com/jhondev77/lojadepeneus/main/3e9e278d-c2d4-43c4-b0a0-8ed0bd5c669a.jpg", title: "ESTRUTURA", desc: "Vilhenorte Pneus", category: "ESTRUTURA" },
];

const categories = ["TODAS", "FACHADA", "ESTRUTURA", "TECNOLOGIA", "PNEUS", "AGRÍCOLA", "ATENDIMENTO"];

export const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState("TODAS");
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const filteredImages = filter === "TODAS" 
    ? images 
    : images.filter(img => img.category === filter);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;

    let cancelled = false;
    const cards = cardsRef.current.filter(Boolean);
    const observers: IntersectionObserver[] = [];

    import("vanilla-tilt").then(({ default: VanillaTilt }) => {
      if (cancelled) return;
      cards.forEach((card) => {
        const io = new IntersectionObserver(([entry]) => {
          const el = card as HTMLDivElement & { vanillaTilt?: { destroy: () => void } };
          if (entry?.isIntersecting) {
            if (!el.vanillaTilt) {
              VanillaTilt.init(el, {
                max: 14,
                speed: 600,
                glare: true,
                "max-glare": 0.35,
                scale: 1.05,
                perspective: 1000,
              });
            }
          } else {
            el.vanillaTilt?.destroy();
          }
        }, { rootMargin: "200px" });
        io.observe(card);
        observers.push(io);
      });
    });

    return () => {
      cancelled = true;
      observers.forEach((io) => io.disconnect());
      cards.forEach((card) => {
        (card as HTMLDivElement & { vanillaTilt?: { destroy: () => void } }).vanillaTilt?.destroy();
      });
    };
  }, [filter]);


  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? filteredImages.length - 1 : selectedIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === filteredImages.length - 1 ? 0 : selectedIdx + 1);
    }
  };

  return (
    <section id="galeria" className="py-24 px-4 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto max-w-[1280px]">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-energy font-black tracking-[0.4em] text-[9px] uppercase mb-4 block"
            >
              Tour pela Loja
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-foreground leading-[0.9] tracking-tighter uppercase font-manrope"
            >
              NOSSA <span className="text-energy italic">ESTRUTURA</span>
            </motion.h2>
          </div>
          <p className="text-light-gray text-base max-w-sm font-medium border-l border-energy/30 pl-8 mb-4">
            Conheça de perto nossa loja, equipamentos, produtos e estrutura profissional.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-black tracking-[0.2em] uppercase px-6 py-2.5 transition-all duration-300 rounded-full border ${
                filter === cat 
                  ? 'bg-energy text-white border-energy shadow-[0_0_20px_rgba(34,197,94,0.35)]' 
                  : 'border-border bg-foreground/[0.02] text-light-gray hover:text-energy hover:border-energy/50 hover:bg-foreground/[0.05]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Editorial - Tilt 3D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.slice(0, 20).map((img, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.1, duration: 0.5 }}
              key={img.url}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              onClick={() => setSelectedIdx(i)}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-border bg-dark-gray shadow-2xl cursor-pointer transition-colors duration-500 hover:border-energy/40 [transform-style:preserve-3d]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {img.type === "video" ? (
                  <video
                    src={img.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 pointer-events-none">
                  <span className="text-energy font-black text-[8px] tracking-[0.3em] uppercase block mb-1">{img.category}</span>
                  <h3 className="text-white font-black text-lg tracking-tighter uppercase font-manrope mb-0.5 transition-colors duration-300 group-hover:text-energy">{img.title}</h3>
                  <p className="text-light-gray text-[9px] uppercase tracking-[0.1em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            >
              <button 
                className="absolute top-8 right-8 w-12 h-12 glass-ios rounded-full flex items-center justify-center text-foreground/90 z-[210] hover:scale-108 hover:bg-foreground/[0.18] active:scale-95 will-change-transform"
                onClick={() => setSelectedIdx(null)}
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>

              <div className="absolute left-6 top-1/2 -translate-y-1/2 z-[210]">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 glass-ios rounded-full flex items-center justify-center text-foreground/90 hover:scale-108 hover:bg-foreground/[0.18] active:scale-95 will-change-transform"
                >
                  <ChevronLeft className="w-7 h-7 stroke-[1.5]" />
                </button>
              </div>

              <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[210]">
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 glass-ios rounded-full flex items-center justify-center text-foreground/90 hover:scale-108 hover:bg-foreground/[0.18] active:scale-95 will-change-transform"
                >
                  <ChevronRight className="w-7 h-7 stroke-[1.5]" />
                </button>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-ios px-4 py-1.5 rounded-full text-[10px] font-bold text-foreground/90 tracking-[0.2em] z-[210]">
                {selectedIdx + 1} / {filteredImages.length}
              </div>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={e => e.stopPropagation()}
              >
                <div className="border border-border p-1 bg-foreground/5 shadow-2xl max-w-full">
                  {filteredImages[selectedIdx]?.type === "video" ? (
                    <video
                      src={filteredImages[selectedIdx]?.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      className="max-h-[75vh] max-w-full object-contain"
                    />
                  ) : (
                    <img 
                      src={filteredImages[selectedIdx]?.url} 
                      alt={filteredImages[selectedIdx]?.title} 
                      className="max-h-[75vh] w-auto object-contain"
                    />
                  )}
                </div>
                <div className="mt-8 text-center">
                   <span className="text-energy font-black text-[10px] tracking-[0.5em] uppercase block mb-2">{filteredImages[selectedIdx]?.category}</span>
                  <h3 className="text-3xl font-black text-foreground tracking-tighter uppercase font-manrope">
                    {filteredImages[selectedIdx]?.title}
                  </h3>
                  <p className="text-foreground/60 text-xs uppercase tracking-[0.2em] font-bold mt-2">{filteredImages[selectedIdx]?.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
