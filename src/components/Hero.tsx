import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

import front1Asset from "@/assets/frente 1.jpg";
import front2Asset from "@/assets/frente 2.jpg";
import novaHeroAsset from "../../3e9e278d-c2d4-43c4-b0a0-8ed0bd5c669a.jpg";

const heroSlides = [
  { src: front1Asset, campaign: false },
  { src: front2Asset, campaign: false },
  { src: "/rede-de-lojas-vilhenorte-barao-1.webp", campaign: true },
  { src: novaHeroAsset, campaign: true },
];

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [slide, setSlide] = useState(0);
  const activeSlide = heroSlides[slide];
  const isCampaignSlide = activeSlide.campaign;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.heroCampaign = isCampaignSlide ? "true" : "false";
    window.dispatchEvent(new Event("hero-campaign-change"));
  }, [isCampaignSlide]);


  return (
    <section
      className={`relative max-sm:h-auto max-sm:pb-10 md:h-[90vh] min-h-[700px] w-full flex max-sm:items-end md:items-center justify-center bg-background pt-20 ${isCampaignSlide ? "hero-campaign-slide" : ""}`}
    >
      <div className="absolute inset-0 z-0">
        {heroSlides.map((item, index) => (
          <div
            key={item.src}
            className={`absolute inset-0 bg-cover bg-center max-sm:bg-contain max-sm:bg-no-repeat max-sm:[background-position:50%_42%] hero-photo-frame transition-opacity duration-1000 ease-in-out ${slide === index ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundPosition: item.campaign ? "center top" : "center center",
            }}
          />
        ))}

        <div
          className={`absolute inset-0 hero-photo-shade transition-opacity duration-700 ${isCampaignSlide ? "bg-background/10" : "bg-background/60 max-sm:bg-background/40"}`}
        />
        <div
          className={`absolute inset-0 hero-photo-gradient transition-opacity duration-700 ${isCampaignSlide ? "opacity-0" : "bg-gradient-to-t from-background via-background/30 to-transparent max-sm:via-background/45 opacity-100"}`}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-sm:mt-12 md:mt-16"
      >
        <motion.div
          animate={{ x: 0, y: isCampaignSlide ? 110 : 0, scale: isCampaignSlide ? 0.68 : 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "left center" }}
          className="grid grid-cols-1 gap-12 items-center w-full"
        >
          <div className="text-left w-full max-w-3xl ml-0 mr-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center max-sm:gap-3 md:gap-4 bg-background/60 max-sm:px-4 md:px-6 max-sm:py-2 md:py-2.5 rounded-full max-sm:mb-0 md:mb-10 border border-border backdrop-blur-xl shadow-2xl relative max-w-full"
            >
              <div className="w-2 h-2 bg-energy animate-pulse rounded-full shadow-[0_0_8px_rgba(1,94,42,0.8)]" />
              <span className="max-sm:text-[9px] md:text-[10px] font-black uppercase max-sm:tracking-[0.18em] md:tracking-[0.4em] max-sm:leading-relaxed text-foreground/90">
                CACOAL / RONDÔNIA — {siteConfig.slogan}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col max-sm:mb-2 md:mb-6 mt-36 items-start"
            >
              <div className="mb-6 h-px w-20 bg-energy/50" />

              <h1 className={`text-2xl sm:text-3xl md:text-[clamp(1.8rem,3.6vw,3.8rem)] ${isCampaignSlide ? "font-black" : "font-normal"} text-foreground mb-4 tracking-tighter uppercase leading-[1.1] font-manrope [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]`}>
                SEGURANÇA, QUALIDADE<br />
                E DURABILIDADE PARA<br />
                <span className="text-energy italic">O SEU VEÍCULO.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-foreground/70 max-w-2xl max-sm:mb-2 max-sm:leading-normal max-sm:min-h-20 md:mb-12 md:leading-relaxed font-medium [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
            >
              Pneus e serviços automotivos para quem exige confiança, segurança e durabilidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col max-sm:gap-2 md:flex-row items-center justify-start gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${siteConfig.whatsapp}?text=Olá! Vim pelo site da Vilhenorte e gostaria de fazer um orçamento.`}
                className="bg-energy text-white px-8 py-4 font-bold text-sm tracking-[0.1em] hover:bg-energy-dark transition-all duration-300 w-full md:w-auto text-center shadow-lg font-manrope group relative overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-noise pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity" />
                <span className="relative z-10">FAZER ORÇAMENTO ↗</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#sobre"
                className="border border-border bg-foreground/5 text-foreground px-8 py-4 font-bold text-sm tracking-[0.1em] hover:bg-foreground/10 hover:border-foreground/60 transition-all duration-300 w-full md:w-auto text-center backdrop-blur-md font-manrope group rounded-full"
              >
                CONHECER A LOJA ↓
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="max-sm:mt-3 md:mt-20 flex flex-wrap justify-start max-sm:gap-5 md:gap-10 text-[9px] text-foreground/50 font-black uppercase tracking-[0.4em]"
            >
              <span>PRECISÃO</span>
              <span>•</span>
              <span>DESEMPENHO</span>
              <span>•</span>
              <span>CONFIANÇA</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
