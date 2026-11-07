import type { Category } from "../Types";
import { po, mousse, micelar, kitRosa, kitVanilla, batom } from "../assets";

// Para mostrar o preço, adicione  price: "R$ 29,90"  em qualquer produto.
export const categories: Category[] = [
  {
    slug: "rosto",
    title: "Rosto",
    subtitle: "Pó facial, mousse e água micelar",
    description: "Cuidado e acabamento perfeito para a sua pele.",
    cover: po,
    products: [
      { id: "po", name: "Pó Facial Translúcido", image: po, description: "Asti Cosméticos · 15g · Ultra matte aveludado, textura ultra fina e resistente à água." },
      { id: "mousse", name: "Mousse Facial Yarah", image: mousse, description: "Cap Life · 150mL · Limpeza antipoluição com escova facial." },
      { id: "micelar", name: "Água Micelar Rosa Mosqueta", image: micelar, description: "Castilla Cosméticos · 250ml · 10 em 1: limpa, demaquila, hidrata e muito mais." },
    ],
  },
  {
    slug: "intimo",
    title: "Cuidado íntimo",
    subtitle: "Desodorantes e sabonetes",
    description: "Conforto e proteção para o seu dia a dia.",
    cover: kitRosa,
    products: [
      { id: "kit-rosa", name: "Kit Cuidado Íntimo · Rosa Mosqueta", image: kitRosa, description: "Bioinstinto · Desodorante íntimo 50mL + sabonete higiene íntima 200mL." },
      { id: "kit-vanilla", name: "Kit Cuidado Íntimo · Vanilla", image: kitVanilla, description: "Bioinstinto · Desodorante íntimo 50mL + sabonete íntimo em gel 200mL." },
    ],
  },
  {
    slug: "labios",
    title: "Lábios",
    subtitle: "Batons e muito mais",
    description: "Cor e conforto para os seus lábios.",
    cover: batom,
    products: [
      { id: "astro-lips", name: "Batom Astro Lips · Bala Matte", image: batom, description: "Mia Make · Coleção Astro · 3,7g · Alta cobertura, hidratação e textura confortável." },
    ],
  },
];
