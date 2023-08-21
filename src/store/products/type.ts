export type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export type ProductsState = {
  products: Product[];
  selectedProduct: Product | null;
  related: Product[];
  filtered: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}