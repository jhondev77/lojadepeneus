import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { Plus, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Como faço um orçamento?", a: `Basta clicar em qualquer botão do site para falar diretamente com nossa equipe no WhatsApp.` },
  { q: "Posso enviar uma foto do pneu?", a: "Sim! Enviar a medida ou uma foto do pneu ajuda nossa equipe a consultar a disponibilidade em segundos." },
  { q: "Trabalham com pneus agrícolas?", a: "Sim, somos especialistas em linha agrícola, atendendo tratores, máquinas e implementos em toda Cacoal e região." },
  { q: "Qual o horário de atendimento?", a: `${siteConfig.workingHours}.` },
  { q: "Qual o endereço da loja?", a: `${siteConfig.address}.` },
  { q: "Quais formas de pagamento?", a: "Aceitamos cartões de crédito, débito e PIX com condições de parcelamento facilitadas." }
];

const accentColors = [
  "var(--faq-green)",
  "var(--faq-teal)",
  "var(--faq-gold)",
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-background relative border-t border-border overflow-hidden">
      <div className="container mx-auto max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna esquerda: título, badge, "?" e CTA */}
          <div className="relative min-h-[420px]">
            <span className="text-energy font-bold tracking-[0.4em] text-[9px] uppercase mb-4 block">
              Dúvidas Frequentes
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-[0.9] tracking-tighter uppercase font-manrope mb-6">
              PERGUNTAS <span className="text-energy italic">FREQUENTES</span>
            </h2>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-foreground/[0.02] backdrop-blur-sm relative z-20">
              <span className="w-2 h-2 rounded-full bg-energy animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-light-gray">{faqs.length} PERGUNTAS</span>
            </div>

            {/* Elemento "?" de fundo — grande, translúcido e posicionado abaixo do badge */}
            <div
              className="absolute -left-6 top-32 text-[18rem] md:text-[22rem] font-black leading-none text-white/[0.04] select-none pointer-events-none z-0 font-manrope"
              aria-hidden="true"
            >
              ?
            </div>

            {/* Mini-card CTA aproveitando o espaço vazio */}
            <motion.a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Olá! Não encontrei minha dúvida no site e gostaria de falar com vocês.`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute left-0 top-64 md:top-72 z-10 inline-flex items-center gap-4 px-5 py-4 rounded-2xl border border-border bg-foreground/[0.03] backdrop-blur-md hover:bg-foreground/[0.06] hover:border-energy/30 transition-all duration-300 group max-w-xs"
            >
              <div className="w-10 h-10 rounded-full bg-energy/10 flex items-center justify-center shrink-0 group-hover:bg-energy/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-energy" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-foreground leading-snug">
                  Não achou sua dúvida?
                </p>
                <p className="text-[10px] font-medium text-light-gray mt-1 flex items-center gap-1 group-hover:text-energy transition-colors">
                  Fale conosco <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </motion.a>
          </div>

          {/* Lista de perguntas */}
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const accent = accentColors[i % accentColors.length] ?? "var(--energy)";
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className={`group transition-all duration-500 rounded-xl border-l-[3px] ${
                    isOpen
                      ? "bg-foreground/[0.02] p-5"
                      : "hover:bg-foreground/[0.01] py-1"
                  }`}
                  style={{ borderLeftColor: isOpen ? accent : "transparent" }}
                  onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.borderLeftColor = accent;
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.borderLeftColor = "transparent";
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left flex items-center gap-4"
                  >
                    {/* Numeração */}
                    <span className="text-[11px] font-black text-foreground/20 w-8 shrink-0 text-center font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-lg tracking-tighter transition-all duration-300 uppercase font-manrope font-black ${
                        isOpen ? "text-energy" : "text-foreground group-hover:text-energy/80"
                      }`}
                    >
                      {f.q}
                    </span>

                    {/* Ícone +/× dentro do círculo */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "backOut" }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-energy/15 text-energy" : "bg-foreground/[0.05] text-foreground/40 group-hover:text-energy/80"
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-12 text-light-gray text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
