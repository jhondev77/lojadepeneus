/**
 * Cadastro atual das lojas.
 * A lista abaixo é a fonte oficial para nomes, cidades e contatos.
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
  city: string;
  state: "RO" | "MT";
  /** Número de WhatsApp da loja, quando informado. */
  whatsapp?: string;
}

export const stores: Store[] = [
  {
    id: "fox-jorge-teixeira-pvh",
    icon: "Gauge",
    name: "VILHENORTE PNEUS",
    address: "Vilhena - RO",
    phone: "(69) 2101-3213",
    type: "Carros e Caminhões",
    city: "Vilhena",
    state: "RO",
    whatsapp: "(69) 99243-5795",
  },
  {
    id: "fox-nacoes-unidas-pvh",
    icon: "Car",
    name: "VILHENORTE COMERCIO",
    address: "São Miguel do Guaporé - RO",
    phone: "(69) 3197-0217",
    type: "Carros e Caminhões",
    city: "São Miguel do Guaporé",
    state: "RO",
    whatsapp: "(69) 98444-9138",
  },
  {
    id: "fox-cacoal",
    icon: "Building2",
    name: "VILHENORTE PNEUS",
    address: "Cacoal - RO",
    phone: "(69) 3180-0018",
    type: "Carros e Caminhões",
    city: "Cacoal",
    state: "RO",
    whatsapp: "(69) 99263-0889",
  },
  {
    id: "fox-ariquemes",
    icon: "Warehouse",
    name: "BARAO PNEUS",
    address: "Comodoro - MT",
    phone: "",
    type: "Carros e Caminhões",
    city: "Comodoro",
    state: "MT",
    whatsapp: "(65) 99214-5620",
  },
  {
    id: "fox-ji-parana",
    icon: "Truck",
    name: "BARAO PNEUS",
    address: "Juína - MT",
    phone: "",
    type: "Carros e Caminhões",
    city: "Juína",
    state: "MT",
    whatsapp: "(66) 99252-9741",
  },
  {
    id: "fox-vilhena",
    icon: "Wrench",
    name: "VILHENORTE AUTOPEÇAS",
    address: "Vilhena - RO",
    phone: "(69) 2101-3213",
    type: "Carros e Caminhões",
    city: "Vilhena",
    state: "RO",
  },
  {
    id: "fox-recapagem-vilhena",
    icon: "CarFront",
    name: "VILHENORTE PNEUS",
    address: "Espigão d'Oeste - RO",
    phone: "(69) 9931-3074",
    type: "Carros e Caminhões",
    city: "Espigão d'Oeste",
    state: "RO",
    whatsapp: "(69) 99207-3530",
  },
];

/* ---------- Helpers de links (Google Maps / telefone) ---------- */
const query = (s: Store) => `${s.name}, ${s.city}, ${s.state}, Brasil`;

/** Abre a loja no Google Maps */
export const mapsUrl = (s: Store) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query(s))}`;

/** Abre a rota até a loja */
export const directionsUrl = (s: Store) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query(s))}`;

/** Mini mapa embutido (sem precisar de chave de API) */
export const embedUrl = (s: Store) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query(s))}&z=13&output=embed`;

/** Abre conversa no WhatsApp somente quando existe número de WhatsApp cadastrado */
export const waUrl = (s: Store) => {
  const digits = (s.whatsapp ?? "").replace(/\D/g, "");
  if (!digits) return null;
  const msg = `Olá! Vim pelo site da Vilhenorte Pneus e gostaria de falar com a ${s.name}.`;
  return `https://wa.me/55${digits}?text=${encodeURIComponent(msg)}`;
};

export const telUrl = (s: Store) => {
  const digits = s.phone.replace(/\D/g, "");
  return digits ? `tel:+55${digits}` : null;
};

export const cities = Array.from(new Set(stores.map((s) => s.city)));
