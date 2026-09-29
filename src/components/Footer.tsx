import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { Camera, Clock, MapPin, Phone, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden text-foreground">
      {/* Texture Background - Subtle Tire Pattern / Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-energy to-transparent opacity-20" />

      <div className="container mx-auto max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-col gap-4">
              <div className="h-20 md:h-28 w-fit mb-2">
                <img 
                  src={siteConfig.logoUrl} 
                  alt={siteConfig.name} 
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const h2 = document.createElement('h2');
                    h2.className = 'text-3xl font-black text-foreground leading-none tracking-tighter uppercase font-manrope';
                    h2.innerHTML = 'VILHENORTE <span class="text-energy italic">PNEUS</span>';
                    e.currentTarget.parentElement!.appendChild(h2);
                  }}
                />
              </div>
            </div>
            <p className="text-light-gray max-w-sm uppercase tracking-[0.1em] text-[10px] leading-relaxed font-bold">
              “{siteConfig.slogan}”
            </p>
            <div className="pt-4 flex gap-4">
               <a href={`https://wa.me/${siteConfig.whatsapp}`} className="bg-energy text-white px-6 py-2.5 rounded-full font-bold text-[10px] tracking-[0.1em] hover:bg-energy-dark transition-all uppercase font-manrope">FAZER ORÇAMENTO</a>
               <a href={`https://www.instagram.com/${siteConfig.instagram}/`} className="px-6 py-2.5 border border-border rounded-full text-foreground font-bold text-[10px] tracking-[0.1em] hover:bg-foreground/10 transition-all uppercase font-manrope flex items-center gap-2 group">
                 <Camera className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                 INSTAGRAM
               </a>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h4 className="text-energy font-black text-[9px] tracking-[0.3em] uppercase font-manrope">Navegação</h4>
              <div className="w-6 h-[2px] bg-energy mt-1" />
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-light-gray text-[9px] uppercase tracking-[0.2em] font-bold">
              {[
                { label: "Início", href: "#" },
                { label: "Catálogo", href: "#catalogo" },
                { label: "Serviços", href: "#servicos" },
                { label: "Sobre", href: "#sobre" },
                { label: "Galeria", href: "#galeria" },
                { label: "Avaliações", href: "#avaliacoes" },
                { label: "Contato", href: "#contato" },
                { label: "FAQ", href: "#faq" },
                { label: "Outras Lojas", href: "#lojas" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-energy transition-all inline-flex items-center gap-1 group">
                    <ArrowRight className="w-0 h-3 group-hover:w-3 transition-all opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-6">
              <h4 className="text-energy font-black text-[9px] tracking-[0.3em] uppercase font-manrope">Contato</h4>
              <div className="w-6 h-[2px] bg-energy mt-1" />
            </div>
            <div className="text-light-gray text-[9px] uppercase tracking-[0.2em] font-bold space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-3 h-3 text-energy mt-0.5 shrink-0" />
                <p>{siteConfig.workingHours}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-3 h-3 text-energy mt-0.5 shrink-0" />
                <p>CACOAL / RONDÔNIA</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-3 h-3 text-energy mt-0.5 shrink-0" />
                <p className="text-energy">{siteConfig.phone}</p>
              </div>
              <p className="text-light-gray/40 text-[8px] tracking-[0.1em] pt-4">CNPJ: {siteConfig.cnpj}</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col items-center gap-10">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale items-baseline font-manrope">
             {siteConfig.brands.slice(0, 5).map(brand => (
               <span key={brand} className="text-xl font-black text-foreground tracking-[0.2em]">{brand}</span>
             ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6">
            <p className="text-light-gray/20 text-[9px] font-bold uppercase tracking-[0.4em] text-center md:text-left">
              © 2026 VILHENORTE PNEUS. TODOS OS DIREITOS RESERVADOS.
            </p>
            <div className="text-light-gray/20 text-center md:text-right text-[8px] font-bold uppercase tracking-[0.2em]">
              VILHENORTE PNEUS — {siteConfig.slogan}
            </div>
            <p className="text-light-gray/20 text-[9px] font-bold uppercase tracking-[0.4em] text-center md:text-right">
              DESENVOLVIDO POR JOÃO PEDRO JANJOB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
