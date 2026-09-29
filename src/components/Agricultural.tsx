import { motion } from "framer-motion";
import agricolaAsset from "@/assets/pneus_agricolas.jpg";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Tractor } from "lucide-react";
import { Watermark } from "./Watermark";

export const Agricultural = () => {
  return (
    <section id="agricola" className="relative py-24 overflow-hidden bg-background text-foreground border-t border-border">
      <Watermark 
        className="-bottom-60 -left-80 w-[400px] md:w-[700px] h-[400px] md:h-[700px]" 
        opacity={0.02} 
        rotate={-10} 
      />
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${agricolaAsset})`,
        }}
      />
      
      <div className="container relative z-20 mx-auto px-6 max-w-[1280px]">
        <div className="max-w-4xl">
          <span className="text-energy font-bold tracking-[0.4em] text-[9px] uppercase mb-6 block">
            Linha Agrícola & OTR
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-10 leading-[0.9] tracking-tighter uppercase font-manrope">
            FORÇA <span className="text-energy italic">NO CAMPO</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-light-gray text-lg leading-relaxed font-medium">
              A potência da agroindústria exige pneus que suportem o trabalho pesado. Oferecemos soluções com durabilidade extrema para tratores e máquinas.
            </p>
            
            <div className="space-y-8">
              <div className="glass p-8 text-foreground border-l-4 border-energy relative overflow-hidden rounded-r-3xl">
                <div className="absolute inset-0 bg-noise pointer-events-none opacity-5" />
                <p className="font-bold text-[9px] tracking-[0.3em] mb-3 uppercase">Máxima Durabilidade</p>
                <p className="text-light-gray text-sm font-medium leading-relaxed">
                  Marcas como Alliance e Westlake prontas para enfrentar qualquer terreno com o melhor custo-benefício da região.
                </p>
              </div>
              
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}?text=Olá! Preciso de um orçamento de pneu agrícola.`} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-energy text-white px-8 py-4 font-black text-[10px] tracking-[0.2em] hover:bg-energy-dark transition-all shadow-lg uppercase font-manrope w-fit rounded-full"
              >
                COTAR PNEU AGRÍCOLA <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
