/**
 * Centralized business configuration for Vilhenorte Pneus
 */
import logoNoBgAsset from "@/assets/logo_no_bg.png";

export const siteConfig = {
  name: "Vilhenorte Pneus",
  logoUrl: logoNoBgAsset, // Updated to latest no-background version
  slogan: "Segurança e durabilidade.",
  rating: 5.0,
  experienceYears: 10,
  clientsServed: 5000,
  tiresSold: 20000,
  address: "Av. Castelo Branco, 20116 - Novo Horizonte, Cacoal - RO",
  phone: "(69) 2101-3213",
  whatsapp: "5569992630889",
  instagram: "vilhenorte.cacoal",
  email: "vilhenortecomerciodepneus@gmail.com",
  cnpj: "49.608.129/0005-08",
  coordinates: {
    lat: -11.4395066,
    lng: -61.4379848,
  },
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=-11.4395066,-61.4379848",
  googleReviewsLink: "https://www.google.com/search?q=Vilhenorte+Pneus+Cacoal+Avaliações#lrd=0x93c83457194f4a95:0xc3f58a9807a00318,1",
  workingHours: "Segunda a Sábado, das 07:30 às 18:00",
  ogImage: "https://kind-quirky-creator.lovable.app/og-image.jpg",
  
  brands: [
    "DUNLOP",
    "ROADCRUZA",
    "XBRI",
    "WESTLAKE",
    "ALLIANCE",
    "SPEEDMAX",
    "LINGLONG"
  ],
  
  categories: [
    { id: "passeio", label: "PNEUS DE PASSEIO", icon: "Car" },
    { id: "suv", label: "PNEUS SUV E PICK-UP", icon: "CarFront" },
    { id: "utilitarios", label: "PNEUS UTILITÁRIOS", icon: "Truck" },
    { id: "caminhao", label: "PNEUS CAMINHÕES E ÔNIBUS", icon: "Bus" },
    { id: "agricola", label: "PNEUS AGRÍCOLAS", icon: "Tractor" },
    { id: "otr", label: "PNEUS OTR / INDUSTRIAIS", icon: "HardHat" }
  ]
};
