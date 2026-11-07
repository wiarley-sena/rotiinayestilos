export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
}

export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  products: Product[];
}
