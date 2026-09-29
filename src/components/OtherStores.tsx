import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate, useInView, animate } from "framer-motion";
import {
  Store as StoreIcon, MapPin, Phone, ArrowRight, ArrowUpRight, X, Car, Truck,
  Navigation, ChevronLeft, ChevronRight, CarFront, CircleDot, Warehouse, Building2, Gauge, Wrench,
} from "lucide-react";
import {
  stores, cities, mapsUrl, directionsUrl, embedUrl, telUrl, waUrl, type Store, type StoreIcon as IconKey,
} from "@/lib/stores.data";

const ICONS: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  Car, CarFront, CircleDot, Warehouse, Truck, Building2, Gauge, Wrench,
};

const WhatsAppIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

type TypeFilter = "Todas" | "Carros" | "Caminhões";

const TypeBadge = ({ type }: { type: Store["type"] }) => (
  <span className="inline-flex items-center gap-1.5 bg-energy text-white text-[9px] font-black uppercase tracking-[0.15em] pl-2.5 pr-3 py-1 rounded-full font-manrope shadow-[0_0_18px_rgba(1,94,42,0.45)]">
    {type !== "Caminhões" && <Car className="w-3 h-3" />}
    {type !== "Carros" && <Truck className="w-3 h-3" />}
    {type}
  </span>
);

const StoreCard = ({
  store, index, onOpen, onCity,
}: { store: Store; index: number; onOpen: () => void; onCity: () => void }) => {
  const ref = useRef<HTMLElement>(null);
  const Icon = ICONS[store.icon];
  // inclinação 3D + reflexo de luz (branco) que acompanha o mouse
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 150, damping: 18 });
  const sy = useSpring(py, { stiffness: 150, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-7, 7]);
  const rotateX = useTransform(sy, [0, 1], [7, -7]);
  const gx = useTransform(sx, (v) => `${v * 100}%`);
  const gy = useTransform(sy, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(320px circle at ${gx} ${gy}, rgba(255,255,255,0.08), transparent 60%)`;

  // celular: sem "hover", então o efeito acompanha o toque e o card que está no centro da tela
  const [pressed, setPressed] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const inView = useInView(ref, { margin: "-38% 0px -38% 0px" });
  useEffect(() => setIsTouch(window.matchMedia("(hover: none)").matches), []);
  const active = pressed || (isTouch && inView);

  useEffect(() => {
    if (!isTouch || pressed) return;
    if (inView) {
      px.set(0.1); py.set(0.25);
      const a = animate(px, 0.9, { duration: 1.8, ease: "easeInOut" });
      const b = animate(py, 0.65, { duration: 1.8, ease: "easeInOut" });
      return () => { a.stop(); b.stop(); };
    }
    px.set(0.5); py.set(0.5);
  }, [isTouch, inView, pressed, px, py]);

  const move = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const leave = () => { px.set(0.5); py.set(0.5); setPressed(false); };
  const down = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") { setPressed(true); move(e); }
  };

  return (
    <motion.article
      ref={ref}
      layout
      onPointerMove={move}
      onPointerDown={down}
      onPointerUp={leave}
      onPointerCancel={leave}
      onPointerLeave={leave}
      onClick={onOpen}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.92 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: (index % 3) * 0.09 }}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      style={{ rotateX, rotateY, transformPerspective: 1000, touchAction: "pan-y" }}
      className="group relative cursor-pointer rounded-2xl liquid-glass p-5 sm:p-6 flex flex-col min-w-0"
    >
      {/* reflexo de luz */}
      <motion.div
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        style={{ background: glare }}
      />

      <div className="relative flex items-start justify-between mb-6">
        <div className={`liquid-glass w-12 h-12 rounded-2xl flex items-center justify-center text-foreground group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ${active ? "scale-110 -rotate-6" : ""}`}>
          <Icon className="w-5 h-5" />
        </div>
        <TypeBadge type={store.type} />
      </div>

      <h3 className="relative text-foreground text-lg font-bold leading-tight normal-case tracking-normal mb-5 font-manrope [overflow-wrap:anywhere]">
        {store.name}
      </h3>

      <div className="relative space-y-3 mb-6">
        <div className="flex items-start gap-3 text-light-gray text-xs leading-relaxed">
          <MapPin className="w-4 h-4 text-energy-light shrink-0 mt-0.5" />
          <span className="min-w-0 [overflow-wrap:anywhere]">{store.address}</span>
        </div>
        {store.phone && (
          <div className="flex items-center gap-3 text-foreground text-xs font-bold">
            <Phone className="w-4 h-4 text-energy-light shrink-0" />
            <span>{store.phone}</span>
          </div>
        )}
      </div>

      <div className="relative grid grid-cols-2 gap-2 mb-5" onClick={(e) => e.stopPropagation()}>
        <a
          href={mapsUrl(store)} target="_blank" rel="noopener noreferrer"
          className="col-span-2 flex items-center justify-center gap-1.5 py-3 sm:py-2.5 rounded-xl bg-energy text-white text-[10px] font-black uppercase tracking-[0.12em] font-manrope hover:bg-energy-dark active:scale-95 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
        >
          <Navigation className="w-3.5 h-3.5" /> Abrir no Maps
        </a>
        {store.phone && (
          <a
            href={telUrl(store) ?? undefined}
            className="flex items-center justify-center gap-1.5 py-3 sm:py-2.5 rounded-xl border border-border bg-foreground/[0.05] text-foreground text-[10px] font-black uppercase tracking-[0.12em] font-manrope hover:bg-foreground/[0.12] active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5" /> Ligar
          </a>
        )}
        {store.whatsapp && (
          <a
            href={waUrl(store) ?? undefined} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 sm:py-2.5 rounded-xl border border-green-500/40 bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-[0.12em] font-manrope hover:bg-green-500 hover:text-white active:scale-95 transition-all"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        )}
      </div>

      <div className="relative mt-auto flex items-center justify-between pt-4 border-t border-border" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onCity}
          className="inline-flex items-center gap-2 text-energy-light text-[11px] font-black uppercase tracking-[0.15em] font-manrope group/link"
        >
          Ver tudo em {store.city}
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={onOpen}
          aria-label={`Ver mapa de ${store.name}`}
          className="w-10 h-10 sm:w-8 sm:h-8 rounded-full border border-border flex items-center justify-center text-light-gray group-hover:text-foreground group-hover:bg-foreground/10 transition-all"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
};

const StoreModal = ({
  store, onClose, onStep,
}: { store: Store; onClose: () => void; onStep: (d: number) => void }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(false), [store.id]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [onClose, onStep]);

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose} data-lenis-prevent
    >
      <motion.div
        key={store.id}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="liquid-glass w-full max-w-3xl max-h-[92dvh] overflow-y-auto overscroll-contain rounded-t-3xl sm:rounded-3xl grid md:grid-cols-5 !bg-background/80 pb-[env(safe-area-inset-bottom)]"
      >
        <div className="relative md:col-span-3 min-h-[240px] md:min-h-[440px] bg-foreground/[0.04]">
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-light-gray">
              <MapPin className="w-8 h-8 text-energy-light animate-bounce" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Carregando mapa…</span>
            </div>
          )}
          <iframe
            title={`Mapa — ${store.name}`}
            src={embedUrl(store)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
          <div className="flex items-start justify-between mb-5">
            <TypeBadge type={store.type} />
            <button onClick={onClose} aria-label="Fechar" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground/10 hover:rotate-90 transition-all">
              <X className="w-4 h-4" />
            </button>
          </div>
          <span className="text-energy-light font-bold tracking-[0.35em] text-[9px] uppercase mb-2">{store.city} · {store.state}</span>
          <h3 className="text-foreground text-2xl font-black leading-tight normal-case tracking-tight mb-5 font-manrope [overflow-wrap:anywhere]">{store.name}</h3>
          <div className="space-y-3 mb-8 text-xs">
            <div className="flex gap-3 text-light-gray leading-relaxed"><MapPin className="w-4 h-4 text-energy-light shrink-0 mt-0.5" />{store.address}</div>
            <div className="flex gap-3 text-foreground font-bold"><Phone className="w-4 h-4 text-energy-light shrink-0" />{store.phone}</div>
          </div>

          <div className="space-y-2 mt-auto">
            <a href={directionsUrl(store)} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-energy text-white text-[11px] font-black uppercase tracking-[0.15em] font-manrope hover:bg-energy-dark hover:shadow-[0_0_26px_rgba(1,94,42,0.6)] active:scale-95 transition-all">
              <Navigation className="w-4 h-4" /> Como chegar
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a href={waUrl(store)} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-green-500/40 bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-[0.12em] font-manrope hover:bg-green-500 hover:text-white active:scale-95 transition-all">
                <WhatsAppIcon /> WhatsApp
              </a>
              <a href={telUrl(store)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-foreground text-[10px] font-black uppercase tracking-[0.12em] font-manrope hover:bg-foreground/10 active:scale-95 transition-all">
                <Phone className="w-3.5 h-3.5" /> Ligar
              </a>
              <a href={mapsUrl(store)} target="_blank" rel="noopener noreferrer"
                className="col-span-2 flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-foreground text-[10px] font-black uppercase tracking-[0.12em] font-manrope hover:bg-foreground/10 active:scale-95 transition-all">
                <ArrowUpRight className="w-3.5 h-3.5" /> Abrir no Google Maps
              </a>
            </div>
            <div className="flex items-center justify-between pt-3">
              <button onClick={() => onStep(-1)} aria-label="Loja anterior" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground/10 active:scale-90 transition-all"><ChevronLeft className="w-4 h-4" /></button>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-light-gray">Navegar entre lojas</span>
              <button onClick={() => onStep(1)} aria-label="Próxima loja" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground/10 active:scale-90 transition-all"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const OtherStores = () => {
  const [city, setCity] = useState<string | null>(null);
  const [type, setType] = useState<TypeFilter>("Todas");
  const [openId, setOpenId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [wave, setWave] = useState(0);

  // Quando o menu "Lojas" leva até aqui, reproduz a animação de chegada
  useEffect(() => {
    const onArrive = (e: Event) => {
      if ((e as CustomEvent).detail === "lojas") setWave((w) => w + 1);
    };
    window.addEventListener("vn:arrive", onArrive);
    return () => window.removeEventListener("vn:arrive", onArrive);
  }, []);

  const visible = stores.filter(
    (s) =>
      (!city || s.city === city) &&
      (type === "Todas" || s.type === type || s.type === "Carros e Caminhões"),
  );
  const open = visible.find((s) => s.id === openId) ?? null;
  const step = (d: number) => {
    if (!open) return;
    const i = visible.indexOf(open);
    setOpenId(visible[(i + d + visible.length) % visible.length].id);
  };

  const chip = (active: boolean) =>
    `shrink-0 whitespace-nowrap px-4 py-2.5 sm:py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.15em] font-manrope transition-all active:scale-95 ${
      active
        ? "bg-energy border-energy text-white shadow-[0_0_20px_rgba(1,94,42,0.5)]"
        : "border-border text-light-gray hover:text-foreground hover:border-foreground/30 bg-foreground/[0.02]"
    }`;

  return (
    <section id="lojas" className="py-16 sm:py-24 px-4 bg-background relative border-t border-border overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-energy/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="animate-blob absolute top-1/3 -left-24 w-[420px] h-[420px] rounded-full bg-energy-light/15 blur-[110px] pointer-events-none" />
      <div className="animate-blob absolute bottom-10 -right-24 w-[460px] h-[460px] rounded-full bg-white/[0.07] blur-[110px] pointer-events-none [animation-delay:-6s]" />
      <div className="animate-blob absolute top-2/3 left-1/3 w-[320px] h-[320px] rounded-full bg-energy/20 blur-[100px] pointer-events-none [animation-delay:-10s]" />

      <div className="container mx-auto max-w-[1280px] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-8">
          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-energy-light font-bold tracking-[0.4em] text-[9px] uppercase mb-4 block">
              Nossa Rede de Lojas
            </motion.span>
            <motion.h2 key={`t${wave}`} initial={{ opacity: 0, y: 30, letterSpacing: "0.15em" }} whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.05em" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-black text-foreground leading-[0.9] tracking-tighter uppercase font-manrope">
              OUTRAS <span className="text-energy-light italic">LOJAS</span>
            </motion.h2>
            <motion.div key={`l${wave}`} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="origin-left h-[2px] w-24 mt-5 bg-gradient-to-r from-energy-light to-transparent" />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-light-gray text-sm mt-5 max-w-lg leading-relaxed">
              Encontre a unidade mais perto de você. Toque em uma loja para ver o mapa, traçar a rota ou ligar.
            </motion.p>
          </div>

          <div className="inline-flex items-center gap-3 border border-border px-6 py-3 bg-foreground/[0.02] backdrop-blur-md rounded-full">
            <div className="w-2 h-2 rounded-full bg-energy-light animate-pulse" />
            <motion.span key={visible.length} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground font-manrope">
              {visible.length} {visible.length === 1 ? "unidade" : "unidades"}
            </motion.span>
          </div>
        </div>

        {/* filtros */}
        <div className="flex sm:flex-wrap gap-2 mb-3 overflow-x-auto sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-lenis-prevent-touch>
          <button className={chip(!city)} onClick={() => setCity(null)}>Todas as cidades</button>
          {cities.map((c) => (
            <button key={c} className={chip(city === c)} onClick={() => setCity(city === c ? null : c)}>{c}</button>
          ))}
        </div>
        <div className="flex sm:flex-wrap gap-2 mb-8 sm:mb-12 overflow-x-auto sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {(["Todas", "Carros", "Caminhões"] as TypeFilter[]).map((t) => (
            <button key={t} className={chip(type === t)} onClick={() => setType(t)}>
              {t === "Todas" ? "Todos os tipos" : t}
            </button>
          ))}
        </div>

        <div key={wave} ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <StoreCard
                key={s.id} store={s} index={i}
                onOpen={() => setOpenId(s.id)}
                onCity={() => { setCity(s.city); gridRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {open && <StoreModal store={open} onClose={() => setOpenId(null)} onStep={step} />}
      </AnimatePresence>
    </section>
  );
};
