export interface Tire {
  id: string;
  marca: string;
  modelo: string;
  categoria: 
    | "passeio" 
    | "suv" 
    | "pickup" 
    | "utilitarios" 
    | "caminhao" 
    | "agricola" 
    | "otr" 
    | "motos";
  tipoVeiculo?: string;
  tipoUso?: string; // ex: H/T, A/T, M/T
  medidas: string[];
  aro?: string;
  largura?: string;
  perfil?: string;
  indiceCarga?: string;
  indiceVelocidade?: string;
  descricao?: string;
  imagem: string; // URL da imagem ou string vazia para placeholder
  preco?: number;
  disponibilidade: boolean;
  ativo: boolean;
}

export const tireCatalog: Tire[] = [
  // DUNLOP
  {
    id: "dunlop-sp-touring-r1",
    marca: "DUNLOP",
    modelo: "SP Touring R1",
    categoria: "passeio",
    medidas: ["175/70 R13", "175/65 R14", "185/60 R14", "185/65 R15"],
    imagem: "https://www.pneufree.com.br/foto/pneu/dunlop-sp-touring-r1-2_g.jpg",
    descricao: "Excelente custo-benefício e durabilidade para uso urbano.",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "dunlop-sp-sport-fm800",
    marca: "DUNLOP",
    modelo: "SP Sport FM800",
    categoria: "passeio",
    medidas: ["195/60 R15", "205/55 R16", "225/45 R17"],
    imagem: "https://www.pneufree.com.br/foto/pneu/dunlop-sp-sport-fm800-2_g.jpg",
    descricao: "Máxima segurança e conforto, com excelente aderência em pista molhada.",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "dunlop-enasave-ec300",
    marca: "DUNLOP",
    modelo: "Enasave EC300+",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "dunlop-direzza-dz102",
    marca: "DUNLOP",
    modelo: "Direzza DZ102",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "dunlop-sport-maxx-060",
    marca: "DUNLOP",
    modelo: "SP Sport Maxx 060+",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "dunlop-grandtrek-at5",
    marca: "DUNLOP",
    modelo: "Grandtrek AT5",
    categoria: "pickup",
    tipoUso: "A/T",
    medidas: ["265/70 R16", "265/65 R17", "265/60 R18"],
    imagem: "https://www.pneufree.com.br/foto/pneu/dunlop-grandtrek-at5-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },

  // XBRI
  {
    id: "xbri-ecology",
    marca: "XBRI",
    modelo: "ECOLOGY",
    categoria: "passeio",
    medidas: ["175/70 R13", "175/65 R14", "205/55 R16"],
    imagem: "https://www.pneufree.com.br/foto/pneu/xbri-ecology-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "xbri-sport-plus-2",
    marca: "XBRI",
    modelo: "Sport Plus 2",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/xbri-sport-plus-2-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "xbri-fastway",
    marca: "XBRI",
    modelo: "Fastway",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/xbri-fastway-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "xbri-brutus",
    marca: "XBRI",
    modelo: "BRUTUS",
    categoria: "pickup",
    tipoUso: "A/T",
    medidas: ["265/70 R16", "265/65 R17", "285/70 R17"],
    imagem: "https://www.pneufree.com.br/foto/pneu/xbri-brutus-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "xbri-brutus-ii",
    marca: "XBRI",
    modelo: "Brutus II",
    categoria: "pickup",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "xbri-forza",
    marca: "XBRI",
    modelo: "Forza",
    categoria: "pickup",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/xbri-forza-a-t-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "xbri-ecowing",
    marca: "XBRI",
    modelo: "Ecowing",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/xbri-ecowing-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },

  // WESTLAKE
  {
    id: "westlake-z108",
    marca: "WESTLAKE",
    modelo: "Z-108",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "westlake-rp18",
    marca: "WESTLAKE",
    modelo: "RP18",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/westlake-rp18-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "westlake-rp28",
    marca: "WESTLAKE",
    modelo: "RP28",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/westlake-rp28-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "westlake-h202",
    marca: "WESTLAKE",
    modelo: "H-202",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/westlake-h202-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "westlake-h206",
    marca: "WESTLAKE",
    modelo: "H-206",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "westlake-sa07",
    marca: "WESTLAKE",
    modelo: "SA07",
    categoria: "pickup",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "westlake-h188",
    marca: "WESTLAKE",
    modelo: "H188",
    categoria: "utilitarios",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "westlake-hf805",
    marca: "WESTLAKE",
    modelo: "HF805",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },

  // SPEEDMAX
  {
    id: "speedmax-hh301",
    marca: "SPEEDMAX",
    modelo: "HH301",
    categoria: "caminhao",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "speedmax-prime-frd16",
    marca: "SPEEDMAX",
    modelo: "Prime FRD16",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "speedmax-mh01",
    marca: "SPEEDMAX",
    modelo: "MH01",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "speedmax-spm301",
    marca: "SPEEDMAX",
    modelo: "SPM301",
    categoria: "caminhao",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "speedmax-drivemax-c10",
    marca: "SPEEDMAX",
    modelo: "DRIVEMAX C10",
    categoria: "caminhao",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },

  // LINGLONG
  {
    id: "linglong-green-max",
    marca: "LINGLONG",
    modelo: "Green-Max",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/linglong-green-max-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-green-max-hp010",
    marca: "LINGLONG",
    modelo: "Green-Max HP010",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/linglong-green-max-hp010-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-green-max-extra",
    marca: "LINGLONG",
    modelo: "Green-Max Extra Load",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-green-max-van",
    marca: "LINGLONG",
    modelo: "Green-Max Van",
    categoria: "utilitarios",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/linglong-green-max-van-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-sport-master",
    marca: "LINGLONG",
    modelo: "Sport Master",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/linglong-sport-master-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-crosswind-ht",
    marca: "LINGLONG",
    modelo: "Crosswind H/T",
    categoria: "pickup",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-crosswind-at",
    marca: "LINGLONG",
    modelo: "Crosswind A/T",
    categoria: "pickup",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/linglong-crosswind-at-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-crosswind-mt",
    marca: "LINGLONG",
    modelo: "Crosswind M/T",
    categoria: "pickup",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/linglong-crosswind-mt-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-crosswind-4x4-hp",
    marca: "LINGLONG",
    modelo: "Crosswind 4x4 HP",
    categoria: "pickup",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-green-max-4x4",
    marca: "LINGLONG",
    modelo: "Green-Max 4x4",
    categoria: "pickup",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "linglong-otr-l3",
    marca: "LINGLONG",
    modelo: "OTR L3",
    categoria: "otr",
    medidas: ["17.5-25", "20.5-25", "23.5-25"],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },

  // ROADCRUZA
  {
    id: "roadcruza-ra350",
    marca: "ROADCRUZA",
    modelo: "RA350",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "roadcruza-ra510",
    marca: "ROADCRUZA",
    modelo: "RA510",
    categoria: "passeio",
    medidas: [],
    imagem: "https://www.pneufree.com.br/foto/pneu/roadcruza-ra510-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "roadcruza-ra710",
    marca: "ROADCRUZA",
    modelo: "RA710",
    categoria: "passeio",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "roadcruza-ra1100",
    marca: "ROADCRUZA",
    modelo: "RA1100",
    categoria: "pickup",
    tipoUso: "A/T",
    medidas: ["235/75 R15", "265/70 R16", "265/70 R17"],
    imagem: "https://www.pneufree.com.br/foto/pneu/roadcruza-ra1100-2_g.jpg",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "roadcruza-ra320",
    marca: "ROADCRUZA",
    modelo: "RA320",
    categoria: "utilitarios",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },
  {
    id: "roadcruza-ra3200",
    marca: "ROADCRUZA",
    modelo: "RA3200",
    categoria: "pickup",
    medidas: [],
    imagem: "",
    disponibilidade: true,
    ativo: true
  },

  // ALLIANCE
  {
    id: "alliance-agri-star",
    marca: "ALLIANCE",
    modelo: "Agri Star",
    categoria: "agricola",
    medidas: ["18.4-34", "14.9-24", "12.4-24"],
    imagem: "",
    disponibilidade: true,
    ativo: true
  }
];
