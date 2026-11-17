import type { Category } from "../Types";
import { images } from "../assets";

// Para mostrar o preço, adicione  price: "R$ 29,90"  em qualquer produto.
export const categories: Category[] = [
  {
    slug: "rosto",
    title: "Rosto",
    subtitle: "Pó facial, mousse e água micelar",
    description: "Cuidado e acabamento perfeito para a sua pele.",
    cover: images.po,
    products: [
      { id: "po", name: "Pó Facial Translúcido", image: images["po"], price: "R$ 29,90", description: "Asti Cosméticos · 15g · Ultra matte aveludado, textura ultra fina e resistente à água.", available: true },
      { id: "mousse", name: "Mousse Facial Yarah", image: images["mousse"], price: "R$ 39,90", description: "Cap Life · 150mL · Limpeza antipoluição com escova facial.", available: true },
      { id: "micelar", name: "Água Micelar Rosa Mosqueta", image: images["micelar"], price: "R$ 24,90", description: "Castilla Cosméticos · 250ml · 10 em 1: limpa, demaquila, hidrata e muito mais.", available: true },
      { id: "base liquida", name: "Base Líquida", image: images["base-liquida"], price: "R$ 34,90", description: "Asti Cosméticos · 25g · Textura leve e cobertura media.", available: true },
      { id: "mascara de cilios", name: "Máscara de Cílios", image: images["mascara-cilios"], price: "R$ 29,90", description: "Asti Cosméticos · 10ml · Volume e definição para os cílios.", available: false},
      { id: "mascara facial", name: "Máscara Facial", image: images["mascara-facial"], price: "R$ 19,90", description: "Asti Cosméticos · 75g · Hidratação e nutrição para a pele.", available: false},
      { id: "lapis de olhos", name: "Lápis de Olhos", image: images["lapis-de-olho"], price: "R$ 14,90", description: "Asti Cosméticos · 1,2g · Delineador de longa duração.", available: false},
      { id: "Fixadora", name: "Bruma Fixadora", image: images["fixadora"], price: "14,59", description: "Asti Cosméticos · 120ml · Fixa · Tonica · Hidrata · Maltifica.", available: false},
      { id: "Sabonete Facial", name: "Lovely", image: images["sabonete-facial"], price: "13,99", description: "Asti Cosméticos · 100ml · antioxidante · Purifica, Hidrata, Acalma e Antipoluição", available: false},
      { id: "Iluminador", name: "Iluminador Glow Face", image: images["iluminador"], price: "12,99", description: "Asti Cosméticos · ", available: false},
      { id: "Pó rosa mosqueta", name: "Pó rosa mosqueta", image: images["po-rosa-mosqueta"], price: "13,49", description: "Asti Cosméticos · 12g · para todos os tipos de pele", available: false},
      { id: "Mousse Facial", name: " Scandalus", image: images["scandalus"], price: "14,00", description: "Asti Cosméticos · 150ml · purifica, hidrata, acalma. Antipoluição", available: false},
      { id: "Blush", name: "Paleta de Blush", image: images["paleta-de-blush"], price: "11,99", description: "Asti Cosméticos · 8,5g · Cute Bear", available: false},
      { id: "mascara cilios", name: "Máscara para cílios", image: images["mascara-cilios"], price: "12,99", description: "Asti Cosméticos · Toque Special", available: false},
      { id: "po facial", name: "Pó Cristal Primer", image: images["po-facial"], price: "13,49", description: "Asti Cosméticos · Bem me quero Makeup", available: false}
    ],
  },
  {
    slug: "intimo",
    title: "Cuidado íntimo",
    subtitle: "Desodorantes e sabonetes",
    description: "Conforto e proteção para o seu dia a dia.",
    cover: images["kit-rosa"],
    products: [
      { id: "kit-rosa", name: "Kit Cuidado Íntimo · Rosa Mosqueta", image: images["kit-rosa"], price: "R$ 49,90", description: "Bioinstinto · Desodorante íntimo 50mL + sabonete higiene íntima 200mL.", available: false },
      { id: "kit-vanilla", name: "Kit Cuidado Íntimo · Vanilla", image: images["kit-vanilla"], price: "R$ 49,90", description: "Bioinstinto · Desodorante íntimo 50mL + sabonete íntimo em gel 200mL.", available: false },
    ],
  },
  {
    slug: "labios",
    title: "Lábios",
    subtitle: "Batons e muito mais",
    description: "Cor e conforto para os seus lábios.",
    cover: images["batom"],
    products: [
      { id: "astro-lips", name: "Batom Astro Lips · Bala Matte", image: images["batom"], price: "R$ 29,90", description: "Mia Make · Coleção Astro · 3,7g · Alta cobertura, hidratação e textura confortável.", available: false },
      { id: "lapis labial", name: "lápis Labial", image: images["lapis-labial"], price: "R$ 14,90", description: "Asti Cosméticos · 1,2g · Delineador de longa duração.", available: true},
      { id: "gloss magico", name: "Gloss Mágico", image: images["gloss-magico"], price: "R$ 19,90", description: "Asti Cosméticos · 5mL · Hidratação e brilho intenso.", available: true},
      { id: "gloss", name: "Gloss", image: images["gloss"], price: "R$ 14,90", description: "Asti Cosméticos · 5mL · Brilho intenso e hidratação.", available: false},
      { id: "brilho labial", name: "Brilho Labial", image: images["brilho"], price: "R$ 14,90", description: "Asti Cosméticos · 5mL · Hidratação e brilho intenso.", available: false},
      { id: "Gloos Mel", name: "Gloos Mel", image: images["gloss-mel"], price: "12,59", description: "Asti Cosméticos · 5ml · Brilho intenso, hidrata e suaviza os lábios. sabor e cheiro de mel", available: false},
      { id: "Lip Gloss", name: "Lip Gloss", image: images["lip-gloss"], price: "11,00", description: "Asti Cosméticos · 5ml · Toque Special", available: false},
      { id: "Batom Bala", name: "Batom Bala", image: images["batom-bala"], price: "10,99", description: "Asti Cosméticos · Primavera", available: false}
    ],
  },
  {
    slug: "Corpo",
    title: "Corpo",
    subtitle: "Hidratação e perfume",
    description: "Perfume e hidratação para o seu corpo.",
    cover: images["deo-colonia"],
    products: [
      {id: "deo-colonia", name: "Body Splash Deo Colônia", image: images["deo-colonia"], price: "R$ 17,99", description: "Asti Cosméticos · 100mL · Hidratação e perfume para o corpo.", available: false},
      {id: "esfoliante-corporal", name: "Esfoliante Corporal", image: images["esfoliante-corporal"], price: "R$ 19,99", description: "Asti Cosméticos · 200g · Esfoliação e hidratação para o corpo.", available: false},
      {id: "oleo-capilar", name: "Oleo Capilar", image: images["oleo-capilar"], price: "14,29", description: "Asti Cosméticos · 30ml · Hidratação e Brilho", available: false}
    ]

  }
];
