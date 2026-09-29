import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { siteConfig } from "@/lib/config";

import { Menu, X, Phone, MessageSquare, Sun, Moon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ThemeToggle = ({ isDark, onClick }: { isDark: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    className="relative p-2 rounded-full border border-border bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors flex items-center justify-center overflow-hidden"
  >
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25 }}
        className="flex"
      >
        {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </motion.span>
    </AnimatePresence>
  </button>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const isMobile = useIsMobile();
  const [isHeroCampaign, setIsHeroCampaign] = useState(false);

  useEffect(() => {
    const syncHeroCampaign = () => {
      setIsHeroCampaign(document.documentElement.dataset.heroCampaign === "true");
    };

    syncHeroCampaign();
    window.addEventListener("hero-campaign-change", syncHeroCampaign);

    return () => window.removeEventListener("hero-campaign-change", syncHeroCampaign);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("vn-theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    } else {
      setIsDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("light", !next);
      localStorage.setItem("vn-theme", next ? "dark" : "light");
      return next;
    });
  };
  
  const { scrollY } = useScroll();
  const springY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  
  // Transform values for scroll animations
  const navPaddingDesk = useTransform(springY, [0, 100], ["1.5rem 2rem", "0.75rem 1.5rem"]);
  const navPaddingMob = useTransform(springY, [0, 100], ["0.75rem 1rem", "0.5rem 0.75rem"]);
  const navPadding = isMobile ? navPaddingMob : navPaddingDesk;
  const navScale = useTransform(springY, [0, 100], [1, 0.98]);
  const navOpacity = useTransform(springY, [0, 100], [0.6, 0.95]);
  const navMarginTopDesk = useTransform(springY, [0, 100], ["1.5rem", "1rem"]);
  const navMarginTopMob = useTransform(springY, [0, 100], ["0.75rem", "0.5rem"]);
  const navMarginTop = isMobile ? navMarginTopMob : navMarginTopDesk;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Galeria", href: "#galeria" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Contato", href: "#contato" },
    { name: "Lojas", href: "#lojas", highlight: true },
  ];

  return (
    <>
      <motion.nav 
        style={{ 
          padding: navPadding,
          // scale is controlled by the slide animation below
          backgroundColor: isDark
            ? `rgba(15, 15, 15, ${isScrolled ? 0.9 : 0.6})`
            : `rgba(255, 255, 255, ${isScrolled ? 0.9 : 0.6})`,
          marginTop: navMarginTop,
        }}
        animate={!isMobile ? {
          left: "50%",
          right: "auto",
          x: "-50%",
          y: isHeroCampaign ? 8 : 0,
          width: "95%",
          maxWidth: "1200px",
          scale: isHeroCampaign ? 0.88 : 1,
        } : undefined}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 z-[100] rounded-full border border-border backdrop-blur-md will-change-transform"

      >
        <div className="flex items-center justify-between w-full">
          <a href="#" className="flex items-center group">
            <motion.div 
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="h-8 sm:h-10 md:h-12 w-auto"
            >
              <img 
                src={siteConfig.logoUrl} 
                alt={siteConfig.name} 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const span = document.createElement('span');
                  span.className = 'text-lg md:text-xl font-bold text-foreground tracking-tight font-sans';
                  span.innerHTML = 'VILHENORTE <span class="text-energy">PNEUS</span>';
                  e.currentTarget.parentElement!.appendChild(span);
                }}
              />
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div className="flex items-center gap-0.5 xl:gap-1 bg-foreground/5 p-1 rounded-full border border-border mr-2 xl:mr-4 relative">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`px-2.5 xl:px-4 py-2 text-[13px] xl:text-sm font-medium transition-colors relative z-10 inline-flex items-center gap-1.5 ${
                    hoveredLink === link.name ? "text-foreground" : "text-light-gray"
                  }`}
                >
                  {link.name}
                  {link.highlight && (
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-energy-light opacity-75 animate-ping" />
                      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-energy-light" />
                    </span>
                  )}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-foreground/10 rounded-full z-[-1]"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </a>
              ))}
            </div>

            <ThemeToggle isDark={isDark} onClick={toggleTheme} />
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="bg-linear-to-r from-energy to-energy-light text-white px-5 xl:px-8 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(1,94,42,0.4)] transition-all flex items-center justify-center"
            >
              Orçamento
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle isDark={isDark} onClick={toggleTheme} />
            <button 
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 top-0 h-[100dvh] z-[110] bg-background flex flex-col overflow-y-auto"
          >
            <div className="p-6 pt-[max(1.5rem,env(safe-area-inset-top))] flex items-center justify-between border-b border-border shrink-0">
              <span className="flex items-center">
                <div className="h-7 w-auto">
                  <img src={siteConfig.logoUrl} alt={siteConfig.name} className="h-full w-auto object-contain" />
                </div>
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-5 sm:gap-8 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-energy transition-colors inline-flex items-center gap-2"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-border space-y-4 shrink-0">
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="w-full bg-energy text-white h-14 font-bold text-xs tracking-[0.2em] hover:bg-energy-dark transition-all uppercase font-manrope flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5" /> WHATSAPP
              </a>
              <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-light-gray">
                <Phone className="w-3 h-3 text-energy" /> {siteConfig.phone}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
