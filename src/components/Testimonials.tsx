import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Paulo Sidnei",
    text: "Oficina com excelente atendimento.",
    rating: 5,
    origin: "Google Review",
    accent: "#22c55e",
    initials: "PS",
    gradient: "from-green-500/20 to-green-900/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
  },
  {
    name: "Valcimar Braun",
    text: "Ótima empresa excelente em atendimento muito bom.",
    rating: 5,
    origin: "Google Review",
    accent: "#0ea5e9",
    initials: "VB",
    gradient: "from-sky-500/20 to-sky-900/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
  },
  {
    name: "Claudio Ferreira",
    text: "Quero parabenizar toda a equipe pelo atendimento tive uma ótima experiência com vilhenorte parabenizar também o colaborador zequinha e os de mais.",
    rating: 5,
    origin: "Google Review",
    accent: "#f59e0b",
    initials: "CF",
    gradient: "from-amber-500/20 to-amber-900/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
  },
  {
    name: "Vander Williann",
    text: "Profissionais capacitados pra lhe melhor atender, super recomendo.",
    rating: 5,
    origin: "Google Review",
    accent: "#a855f7",
    initials: "VW",
    gradient: "from-purple-500/20 to-purple-900/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
  }
];

export const Testimonials = () => {
  return (
    <section id="avaliacoes" className="py-24 px-4 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto max-w-[1280px]">
        <div className="max-w-2xl mb-16">
          <span className="text-energy font-bold tracking-[0.4em] text-[9px] uppercase mb-4 block">
            A VOZ DOS NOSSOS CLIENTES
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-[0.9] tracking-tighter uppercase font-manrope">
            QUEM <span className="text-energy italic">CONFIA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6">
          {testimonials.map((t, i) => {
            const isFeatured = i === 0;
            const rotation = i % 2 === 0 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]";
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`
                  relative p-8 md:p-10 border border-border flex flex-col justify-between group 
                  transition-all duration-500 rounded-[32px] overflow-hidden backdrop-blur-xl
                  ${isFeatured ? 'md:col-span-3 md:row-span-2 lg:col-span-2 bg-gradient-to-br from-green-500/10 to-green-950/20 border-green-500/20' : 'md:col-span-3 lg:col-span-1 bg-foreground/[0.03]'}
                  ${rotation} hover:rotate-0 hover:-translate-y-2 hover:border-foreground/20
                  ${t.glow}
                `}
              >
                {/* Subtle Radial Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-20 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <Quote 
                      size={isFeatured ? 48 : 32} 
                      className="opacity-20 group-hover:opacity-100 transition-all duration-700" 
                      style={{ color: t.accent }}
                    />
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                      <div className="flex">
                        {[...Array(t.rating)].map((_, starI) => (
                          <Star key={starI} size={isFeatured ? 14 : 10} className="fill-[#FBBF24] text-[#FBBF24]" />
                        ))}
                      </div>
                      <span className="text-[9px] font-bold text-white/70 uppercase tracking-tighter">Verified</span>
                    </div>
                  </div>
                  
                  <p className={`text-foreground/80 font-medium leading-relaxed italic mb-10 ${isFeatured ? 'text-xl md:text-2xl' : 'text-base'}`}>
                    "{t.text}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div 
                      className={`flex items-center justify-center rounded-full font-black text-white shadow-lg ${isFeatured ? 'w-14 h-14 text-lg' : 'w-10 h-10 text-xs'}`}
                      style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent}88)` }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <h4 className={`text-foreground font-black uppercase tracking-wider font-manrope ${isFeatured ? 'text-lg' : 'text-sm'}`}>
                        {t.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-[9px] text-foreground/40 font-bold tracking-widest uppercase">Google Review</span>
                      </div>
                    </div>
                  </div>
                  
                  {isFeatured && (
                    <div className="hidden lg:flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                      <CheckCircle size={14} className="text-green-500" />
                      <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Cliente VIP</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};