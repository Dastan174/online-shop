import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductStore {
  products: IProduct[];
  setProducts: (items: IProduct[]) => void;
  getProductById: (id: number) => IProduct | undefined;
}

export const useProduct = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],

      setProducts: (items) => set({ products: items }),

      getProductById: (id) => get().products.find((p) => p.id === id),
    }),
    { name: "products" }
  )
);
