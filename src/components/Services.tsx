import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { Disc, Target, Scale, Droplets, Wrench, Tractor, Bike, Truck, Car, BatteryCharging, ArrowRight } from "lucide-react";
import { Watermark } from "./Watermark";

import pneus_estoque from "@/assets/pneus_estoque_v2.jpg";
import alinhamento_3d from "@/assets/alinhamento_3d.jpg";
import balanceamento from "@/assets/balanceamento.jpg";
import manutencao_geral from "@/assets/manutencao_geral.jpg";
import troca_oleo from "@/assets/troca_oleo_v2.jpg";
import pneus_agricolas from "@/assets/pneus_agricolas_v2.jpg";
import motocicleta from "@/assets/motocicleta.jpg";
import picape_suv from "@/assets/picape_suv.jpg";
import caminhao_onibus from "@/assets/caminhao_onibus.jpg";
import baterias from "@/assets/baterias_moura.jpg";

const services = [
  { 
    title: "PNEUS", 
    desc: "Venda e montagem especializada das melhores marcas.", 
    icon: Disc,
    image: pneus_estoque 
  },
  { 
    title: "ALINHAMENTO 3D", 
    desc: "Precisão absoluta para geometria e segurança.", 
    icon: Target,
    image: alinhamento_3d 
  },
  { 
    title: "BALANCEAMENTO", 
    desc: "Conforto e estabilidade em qualquer velocidade.", 
    icon: Scale,
    image: balanceamento 
  },
  { 
    title: "MOTOCICLETA", 
    desc: "Pneus e manutenção para motos de todos os modelos.", 
    icon: Bike,
    image: motocicleta 
  },
  { 
    title: "PICAPES E SUV", 
    desc: "Pneus e serviços especializados para picapes e utilitários.", 
    icon: Car,
    image: picape_suv 
  },
  { 
    title: "CAMINHÃO E ÔNIBUS", 
    desc: "Pneus e serviços para veículos pesados.", 
    icon: Truck,
    image: caminhao_onibus 
  },
  { 
    title: "PNEUS AGRÍCOLAS", 
    desc: "Resistência extrema para o trabalho pesado no campo.", 
    icon: Tractor,
    image: pneus_agricolas 
  },
  { 
    title: "BATERIA", 
    desc: "Troca e teste de baterias com garantia.", 
    icon: BatteryCharging,
    image: baterias 
  },
  { 
    title: "TROCA DE ÓLEO", 
    desc: "Lubrificação premium para máxima vida útil.", 
    icon: Droplets,
    image: troca_oleo 
  },
  { 
    title: "MANUTENÇÃO GERAL", 
    desc: "Revisão preventiva completa de segurança.", 
    icon: Wrench,
    image: manutencao_geral 
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 px-4 bg-background relative overflow-hidden border-t border-border">
      {/* Subtle diagonal line texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255, 255, 255, 0.5) 40px,
            rgba(255, 255, 255, 0.5) 41px
          )`,
          backgroundSize: '120px 120px'
        }}
      />
      <Watermark 
        className="-bottom-40 -right-60 w-[500px] md:w-[800px] h-[500px] md:h-[800px]" 
        opacity={0.015} 
        rotate={-15} 
      />
      <div className="container mx-auto max-w-[1280px] relative z-10">
        <div className="max-w-2xl mb-16">
          <span className="text-energy font-bold tracking-[0.4em] text-[9px] uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[0.9] tracking-tighter uppercase font-manrope">
            SOLUÇÕES QUE <br />
            <span className="text-energy italic">FAZEM A DIFERENÇA.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {services.map((s, index) => (
            <motion.a
              key={s.title}
              href={`https://wa.me/${siteConfig.whatsapp}?text=Olá! Quero agendar ${s.title}.`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-center justify-between py-10 md:py-12 px-6 md:px-10 overflow-hidden transition-all duration-500 ease-in-out hover:py-14 md:hover:py-16"
            >
              {/* Gradient divider top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
              
              {/* Image Reveal on Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/40" />
              </div>

              <div className="flex flex-row items-center gap-6 w-full md:w-1/2 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Icon badge */}
                <div className="relative z-10 flex-shrink-0 shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.18)] text-energy group-hover:text-energy-light group-hover:border-[rgba(34,197,94,0.4)] group-hover:bg-[rgba(34,197,94,0.14)] transition-all duration-300 flex items-center justify-center">
                  <s.icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5px]" />
                </div>

                <h3 className="relative text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter uppercase font-manrope overflow-hidden">

                  <span className="block text-foreground group-hover:text-energy transition-all duration-500 transform group-hover:translate-x-1">
                    {s.title}
                  </span>
                  {/* Fill effect indicator */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-energy origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  />
                </h3>
              </div>

              <div className="hidden md:block w-1/3 text-light-gray text-base font-medium leading-relaxed group-hover:text-foreground transition-colors duration-300 relative z-10 pl-8">
                {s.desc}
              </div>

              {/* Arrow circle */}
              <div className="mt-6 md:mt-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[rgba(34,197,94,0.04)] border border-[rgba(34,197,94,0.12)] text-energy/50 group-hover:text-energy group-hover:border-[rgba(34,197,94,0.35)] group-hover:bg-[rgba(34,197,94,0.12)] transition-all duration-500 relative z-10">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-500" />
              </div>

              {/* Bottom line glow effect */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-energy/0 group-hover:bg-energy shadow-[0_0_15px_rgba(1,94,42,0.8)] transition-all duration-500" />
            </motion.a>
          ))}
          {/* Final gradient divider bottom */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
        </div>
      </div>
    </section>
  );
};
