/**
 * Banco de dados das outras lojas (rede Fox).
 * Para adicionar ou editar uma loja, basta mexer neste array.
 */
export type StoreType = "Carros" | "Caminhões" | "Carros e Caminhões";

export type StoreIcon =
  | "Car" | "CarFront" | "CircleDot" | "Warehouse" | "Truck" | "Building2" | "Gauge" | "Wrench";

export interface Store {
  id: string;
  icon: StoreIcon;
  name: string;
  address: string;
  phone: string;
  type: StoreType;
  city: string; // usado no "Ver tudo em {city}"
  /** Opcional: número de WhatsApp da loja (só dígitos, com DDD). Se vazio, usa o telefone. */
  whatsapp?: string;
}

export const stores: Store[] = [
  {
    id: "fox-jorge-teixeira-pvh",
    icon: "Car",
    name: "Jorge Teixeira - Porto Velho",
    address: "Av. Governador Jorge Teixeira, 1159 – Nossa senhora das Graças",
    phone: "(69) 3217-3040",
    type: "Carros",
    city: "Porto Velho",
  },
  {
    id: "fox-nacoes-unidas-pvh",
    icon: "CarFront",
    name: "Nações Unidas - Porto Velho",
    address: "Av. Nações Unidas, 805 - Nossa senhora das Graças",
    phone: "(69) 3217-3030",
    type: "Carros",
    city: "Porto Velho",
  },
  {
    id: "fox-recapagem-pvh",
    icon: "CircleDot",
    name: "Recapagem - Porto Velho",
    address: "Rua da Beira, 9400 – Eldorado",
    phone: "(69) 3217-8800",
    type: "Caminhões",
    city: "Porto Velho",
  },
  {
    id: "fox-ariquemes",
    icon: "Warehouse",
    name: "Ariquemes",
    address: "Av. Canaã, 1717 – Áreas Especiais",
    phone: "(69) 3535-3270",
    type: "Carros e Caminhões",
    city: "Ariquemes",
  },
  {
    id: "fox-ji-parana",
    icon: "Truck",
    name: "Ji-Paraná 1 Distrito",
    address: "Av. Transcontinental, 2444 – Casa Preta",
    phone: "(69) 3422-2711",
    type: "Carros e Caminhões",
    city: "Ji-Paraná",
  },
  {
    id: "fox-cacoal",
    icon: "Building2",
    name: "VILHENORTE PNEUS",
    address: "Av. Castelo Branco, 19558 – Centro",
    phone: "(69) 3180-0018",
    type: "Carros e Caminhões",
    city: "Cacoal",
    whatsapp: "(69) 99263-0889",
  },
  {
    id: "fox-vilhena",
    icon: "Gauge",
    name: "Vilhena",
    address: "Av. Marechal Rondon, 3224 – Centro",
    phone: "(69) 3321-4155",
    type: "Carros",
    city: "Vilhena",
  },
  {
    id: "fox-recapagem-vilhena",
    icon: "Wrench",
    name: "Recapagem Vilhena",
    address: "Av. Marechal Rondon, 7940 – Setor Industrial",
    phone: "(69) 3322-3365",
    type: "Caminhões",
    city: "Vilhena",
  },
];

/* ---------- Helpers de links (Google Maps / telefone) ---------- */
const query = (s: Store) => `${s.name}, ${s.address}, ${s.city} - RO, Brasil`;

/** Abre a loja no Google Maps */
export const mapsUrl = (s: Store) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query(s))}`;

/** Abre a rota até a loja (app do Maps no celular) */
export const directionsUrl = (s: Store) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query(s))}`;

/** Mini mapa embutido (sem precisar de chave de API) */
export const embedUrl = (s: Store) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query(s))}&z=16&output=embed`;

/** Abre conversa no WhatsApp com mensagem pronta */
export const waUrl = (s: Store) => {
  const digits = (s.whatsapp ?? s.phone).replace(/\D/g, "");
  const msg = `Olá! Vim pelo site da Vilhenorte Pneus e gostaria de falar com a ${s.name}.`;
  return `https://wa.me/55${digits}?text=${encodeURIComponent(msg)}`;
};

export const telUrl = (s: Store) => `tel:+55${s.phone.replace(/\D/g, "")}`;

export const cities = Array.from(new Set(stores.map((s) => s.city)));
