import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { 
  Car, 
  CarFront, 
  Truck, 
  Bus, 
  Tractor, 
  HardHat, 
  Bike, 
  ChevronRight,
  X,
  MessageSquare,
  Disc,
  Settings,
  Image as ImageIcon
} from "lucide-react";

import brandDunlop from "@/assets/brand_dunlop.jpg";
import brandRoadcruza from "@/assets/brand_roadcruza.jpg";
import brandXbri from "@/assets/brand_xbri.jpg";
import brandWestlake from "@/assets/brand_westlake.jpg";
import brandAlliance from "@/assets/brand_alliance.jpg";
import brandSpeedmax from "@/assets/brand_speedmax.jpg";
import brandLinglong from "@/assets/brand_linglong.jpg";

interface BrandInfo {
  name: string;
  image?: string;
  applications: {
    icon: any;
    label: string;
  }[];
}

const brandData: BrandInfo[] = [
  {
    name: "DUNLOP",
    image: brandDunlop,
    applications: [
      { icon: Car, label: "Passeio" },
      { icon: CarFront, label: "SUV" },
      { icon: Truck, label: "Pick-up" },
      { icon: Truck, label: "Utilitário" },
      { icon: Bus, label: "Caminhões e ônibus" },
      { icon: Settings, label: "Uso misto / off-road" }
    ]
  },
  {
    name: "ROADCRUZA",
    image: brandRoadcruza,
    applications: [
      { icon: Car, label: "Passeio" },
      { icon: CarFront, label: "SUV" },
      { icon: Truck, label: "Pick-up" },
      { icon: Settings, label: "All Terrain (A/T)" },
      { icon: Settings, label: "Mud Terrain (M/T)" },
      { icon: Settings, label: "Off-road" }
    ]
  },
  {
    name: "XBRI",
    image: brandXbri,
    applications: [
      { icon: Car, label: "Passeio" },
      { icon: CarFront, label: "SUV" },
      { icon: Truck, label: "Pick-up" },
      { icon: Truck, label: "Utilitário" },
      { icon: Bus, label: "Caminhões e ônibus" }
    ]
  },
  {
    name: "WESTLAKE",
    image: brandWestlake,
    applications: [
      { icon: Car, label: "Passeio" },
      { icon: CarFront, label: "SUV" },
      { icon: Truck, label: "Pick-up" },
      { icon: Truck, label: "Utilitário" },
      { icon: Bus, label: "Caminhões e ônibus" },
      { icon: Tractor, label: "Agrícola" },
      { icon: HardHat, label: "Industrial / OTR" }
    ]
  },
  {
    name: "ALLIANCE",
    image: brandAlliance,
    applications: [
      { icon: Tractor, label: "Agrícola" },
      { icon: Tractor, label: "Tratores" },
      { icon: Tractor, label: "Máquinas agrícolas" },
      { icon: HardHat, label: "Industrial" },
      { icon: Settings, label: "Florestal" },
      { icon: HardHat, label: "OTR / Off-road" }
    ]
  },
  {
    name: "SPEEDMAX",
    image: brandSpeedmax,
    applications: [
      { icon: Car, label: "Passeio" },
      { icon: CarFront, label: "SUV" },
      { icon: Truck, label: "Pick-up" },
      { icon: Truck, label: "Utilitário" },
      { icon: Bus, label: "Caminhões e ônibus" },
      { icon: Bike, label: "Motos" }
    ]
  },
  {
    name: "LINGLONG",
    image: brandLinglong,
    applications: [
      { icon: Car, label: "Passeio" },
      { icon: CarFront, label: "SUV" },
      { icon: Truck, label: "Pick-up" },
      { icon: Truck, label: "Utilitário" },
      { icon: Bus, label: "Caminhões e ônibus" },
      { icon: Tractor, label: "Agrícola" },
      { icon: HardHat, label: "Industrial / OTR" },
      { icon: Settings, label: "Off-road" }
    ]
  }
];

export const TireSection = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
                scale: 1.03,
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
  }, []);

  return (
    <section id="catalogo" className="py-24 px-4 bg-background relative border-t border-border">
      <div className="container mx-auto max-w-[1280px]">
        {/* Seção: Marcas por Aplicação */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-energy font-bold tracking-[0.4em] text-[9px] uppercase mb-4 block">Marcas e Aplicações</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter uppercase font-manrope mb-4">
              ENCONTRE A MARCA <span className="text-energy italic">CERTA PARA O SEU VEÍCULO</span>
            </h2>
            <p className="text-light-gray text-[10px] font-black uppercase tracking-widest max-w-2xl mx-auto">
              Conheça as principais marcas disponíveis na Vilhenorte Pneus e encontre a opção ideal para cada tipo de aplicação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandData.map((brand) => (
              <motion.div
                key={brand.name}
                ref={(el) => { if (el) cardsRef.current[brandData.indexOf(brand)] = el; }}
                whileHover={{ y: -5 }}
                className="glass border border-border text-left transition-all duration-300 group hover:border-foreground/25 flex flex-col overflow-hidden rounded-2xl shadow-sm hover:shadow-md hover:will-change-[backdrop-filter] [transform-style:preserve-3d]"
              >
                {/* Imagem da Marca */}
                <div className="aspect-video bg-foreground/5 relative flex items-center justify-center overflow-hidden border-b border-border">
                  {brand.image ? (
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 text-foreground/20">
                      <ImageIcon className="w-8 h-8 opacity-20" />
                      <span className="text-[8px] font-black uppercase tracking-widest">Imagem da marca</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-foreground font-manrope uppercase tracking-tighter mb-4 flex items-center justify-between">
                    {brand.name}
                    <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <div className="h-px w-full bg-foreground/5 mb-6" />
                  <div className="space-y-4">
                    {brand.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <app.icon className="w-4 h-4 text-energy/80" />
                        <span className="text-[13px] font-medium text-light-gray uppercase tracking-wider leading-none">
                          {app.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
