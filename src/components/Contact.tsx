import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { Phone, MapPin, MessageSquare, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { Watermark } from "./Watermark";

export const Contact = () => {
  const openNow = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if (day === 0) return false;
    return hour >= 7.5 && hour < 18;
  };

  const isOpen = openNow();

  // The correct WhatsApp from user prompt: (69) 99263-0889
  const displayWhatsApp = "(69) 99263-0889";

  return (
    <section id="contato" className="py-24 px-4 bg-background relative overflow-hidden border-t border-border">
      <Watermark 
        className="-bottom-60 -left-80 w-[600px] md:w-[900px] h-[600px] md:h-[900px]" 
        opacity={0.01} 
        rotate={-20} 
      />
      
      <div className="container mx-auto max-w-[1280px]">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-energy font-bold tracking-[0.4em] text-[9px] uppercase mb-4 block"
            >
              Canais de Atendimento
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-foreground leading-[0.9] tracking-tighter uppercase font-manrope"
            >
              FALE <span className="text-energy italic">CONOSCO</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 border border-border px-6 py-3 bg-foreground/[0.02] backdrop-blur-md rounded-full"
          >
            <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-energy animate-pulse' : 'bg-red-500'}`} />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground font-manrope">
              {isOpen ? 'Online Agora' : 'Fechado Agora'}
            </span>
          </motion.div>
        </div>

        <div className="relative p-1 bg-foreground/[0.02] border border-border rounded-[40px] overflow-hidden">
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:p-6 relative z-10">
            
            {/* Bloco WhatsApp - Destaque Principal */}
            <motion.a 
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="lg:col-span-5 group relative overflow-hidden p-6 sm:p-10 rounded-[32px] bg-linear-to-br from-green-500/20 via-green-500/5 to-transparent border border-green-500/30 hover:border-green-500/50 transition-all duration-500 shadow-2xl hover:shadow-green-500/10 min-h-[320px] flex flex-col justify-between"
            >
              {/* Pulsing Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-3 py-1.5 rounded-full backdrop-blur-md">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-soft" />
                <span className="text-[8px] font-black text-green-400 uppercase tracking-widest">Resposta Rápida</span>
              </div>

              {/* Huge Background Watermark Icon */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-700 rotate-[-15deg] pointer-events-none">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-500">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>

              <div className="mt-8">
                <div className="w-16 h-16 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white fill-white" />
                </div>
                <h4 className="text-foreground font-black text-3xl tracking-tighter uppercase font-manrope">
                  WhatsApp
                </h4>
                <p className="text-green-400 font-bold text-xl mt-1 font-jakarta">{displayWhatsApp}</p>
              </div>

              <div className="bg-green-500/20 px-5 py-2.5 rounded-full inline-flex items-center gap-3 w-fit border border-green-500/30 group-hover:bg-green-500 transition-all duration-300">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400 group-hover:text-white">Falar com Consultor</span>
                <ArrowRight className="w-4 h-4 text-green-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>

            {/* Subgrid Lateral - Telefone e Localização */}
            <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1">
                
                {/* Bloco Telefone - Azul Petróleo */}
                <motion.a 
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden p-6 sm:p-8 rounded-[32px] bg-foreground/[0.03] border-l-4 border-l-[#0EA5E9] border-border hover:border-foreground/10 hover:bg-[#0EA5E9]/5 transition-all duration-500 shadow-xl hover:shadow-[#0EA5E9]/5 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0EA5E9] shadow-[0_0_15px_rgba(14,165,233,0.3)] flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-black text-sm tracking-[0.1em] uppercase font-manrope">Atendimento Fixo</h4>
                    <p className="text-light-gray font-bold text-lg mt-1 font-jakarta">{siteConfig.phone}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#0EA5E9] bg-[#0EA5E9]/10 px-4 py-2 rounded-full w-fit">
                    Ligar Agora <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>

                {/* Bloco Horário - Dourado sutil */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="group relative overflow-hidden p-6 sm:p-8 rounded-[32px] bg-foreground/[0.03] border-l-4 border-l-[#FBBF24] border-border transition-all duration-500 shadow-xl flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FBBF24]/20 border border-[#FBBF24]/30 flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 text-[#FBBF24]" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-black text-sm tracking-[0.1em] uppercase font-manrope">Horários</h4>
                    <p className="text-light-gray font-medium text-xs mt-2 leading-relaxed">
                      Segunda a Sexta: 07:30 - 18:00<br />
                      Sábado: 07:30 - 12:00
                    </p>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#FBBF24]/5 rounded-full blur-2xl" />
                </motion.div>
              </div>

              {/* Bloco Localização - Estilizado */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-[32px] border border-border bg-foreground/[0.02] min-h-[160px] flex items-stretch shadow-xl"
              >
                {/* Visual Background Pattern/Map feel */}
                <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
                
                <div className="flex-1 p-6 sm:p-8 relative z-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-energy/20 border border-energy/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-energy" />
                    </div>
                    <h4 className="text-foreground font-black text-xs tracking-[0.2em] uppercase font-manrope">Visite Nossa Loja</h4>
                  </div>
                  <p className="text-light-gray font-medium text-sm max-w-sm leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>

                <a 
                  href={siteConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3 md:w-1/4 bg-energy hover:bg-energy-light transition-all duration-500 flex flex-col items-center justify-center gap-2 group/btn"
                >
                  <ExternalLink className="text-white w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  <span className="text-[8px] font-black text-white uppercase tracking-[0.2em] text-center px-4 leading-tight">Rotas pelo Google Maps</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mapa Interativo - Estilizado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 h-[350px] border border-border rounded-[40px] overflow-hidden grayscale contrast-[1.1] opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-700 shadow-2xl relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1643876063683!2d-61.4405597!3d-11.4395066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93c83457194f4a95%3A0xc3f58a9807a00318!2sAv.%20Castelo%20Branco%2C%2020116%20-%20Novo%20Horizonte%2C%20Cacoal%20-%20RO%2C%2076963-764!5e0!3m2!1spt-BR!2sbr!4v1715612345678!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          ></iframe>
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-border rounded-[40px]" />
        </motion.div>
      </div>
    </section>
  );
};
