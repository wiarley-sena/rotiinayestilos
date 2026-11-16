import type { Category } from "../Types";
import { po, mousse, micelar, kitRosa, kitVanilla, batom, glossmagico, gloss, brilho, baseliquida, lapisdeolhos, lapislabial, mascaradecilios, mascarafacial } from "../assets";

// Para mostrar o preço, adicione  price: "R$ 29,90"  em qualquer produto.
export const categories: Category[] = [
  {
    slug: "rosto",
    title: "Rosto",
    subtitle: "Pó facial, mousse e água micelar",
    description: "Cuidado e acabamento perfeito para a sua pele.",
    cover: po,
    products: [
      { id: "po", name: "Pó Facial Translúcido", image: po, price: "R$ 29,90", description: "Asti Cosméticos · 15g · Ultra matte aveludado, textura ultra fina e resistente à água." },
      { id: "mousse", name: "Mousse Facial Yarah", image: mousse, price: "R$ 39,90", description: "Cap Life · 150mL · Limpeza antipoluição com escova facial." },
      { id: "micelar", name: "Água Micelar Rosa Mosqueta", image: micelar, price: "R$ 24,90", description: "Castilla Cosméticos · 250ml · 10 em 1: limpa, demaquila, hidrata e muito mais." },
      { id: "base liquida", name: "Base Líquida", image: baseliquida, price: "R$ 34,90", description: "Asti Cosméticos · 25g · Textura leve e cobertura media." },
      { id: "mascara de cilios", name: "Máscara de Cílios", image: mascaradecilios, price: "R$ 29,90", description: "Asti Cosméticos · 10ml · Volume e definição para os cílios."},
      { id: "mascara facial", name: "Máscara Facial", image: mascarafacial, price: "R$ 19,90", description: "Asti Cosméticos · 75g · Hidratação e nutrição para a pele."},
      { id: "lapis de olhos", name: "Lápis de Olhos", image: lapisdeolhos, price: "R$ 14,90", description: "Asti Cosméticos · 1,2g · Delineador de longa duração."},
    ],
  },
  {
    slug: "intimo",
    title: "Cuidado íntimo",
    subtitle: "Desodorantes e sabonetes",
    description: "Conforto e proteção para o seu dia a dia.",
    cover: kitRosa,
    products: [
      { id: "kit-rosa", name: "Kit Cuidado Íntimo · Rosa Mosqueta", image: kitRosa, price: "R$ 49,90", description: "Bioinstinto · Desodorante íntimo 50mL + sabonete higiene íntima 200mL." },
      { id: "kit-vanilla", name: "Kit Cuidado Íntimo · Vanilla", image: kitVanilla, price: "R$ 49,90", description: "Bioinstinto · Desodorante íntimo 50mL + sabonete íntimo em gel 200mL." },
    ],
  },
  {
    slug: "labios",
    title: "Lábios",
    subtitle: "Batons e muito mais",
    description: "Cor e conforto para os seus lábios.",
    cover: batom,
    products: [
      { id: "astro-lips", name: "Batom Astro Lips · Bala Matte", image: batom, price: "R$ 29,90", description: "Mia Make · Coleção Astro · 3,7g · Alta cobertura, hidratação e textura confortável." },
      { id: "lapis labial", name: "lápis Labial", image: lapislabial, price: "R$ 14,90", description: "Asti Cosméticos · 1,2g · Delineador de longa duração."},
      { id: "gloss magico", name: "Gloss Mágico", image: glossmagico, price: "R$ 19,90", description: "Asti Cosméticos · 5mL · Hidratação e brilho intenso."},
      { id: "gloss", name: "Gloss", image: gloss, price: "R$ 14,90", description: "Asti Cosméticos · 5mL · Brilho intenso e hidratação."},
      { id: "brilho labial", name: "Brilho Labial", image: brilho, price: "R$ 14,90", description: "Asti Cosméticos · 5mL · Hidratação e brilho intenso."},
    ],
  },
];
