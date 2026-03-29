import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductStore {
  products: Product[];
  createProduct: (body: Product) => Promise<void>;
  getProducts: () => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  getOneProduct: (id: string) => Promise<void>;
  updateProduct: (id: string, newProduct: Partial<Product>) => Promise<void>;
}

export const useProduct = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],

      
      createProduct: async (body: Product): Promise<void> => {
        await axios.post<Product>(
          "https://api-crud.elcho.dev/api/v1/c794c-65c42-4dc13/green-shop",
          body
        );
      },

      getProducts: async (): Promise<void> => {
        const response = await axios.get<Product[]>(
          "https://api-crud.elcho.dev/api/v1/c794c-65c42-4dc13/green-shop"
        );
        set({ products: response.data });
      },

      deleteProduct: async (id: number): Promise<void> => {
        await axios.delete(
          `https://api-crud.elcho.dev/api/v1/c794c-65c42-4dc13/green-shop/${id}`
        );
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        }));
      },

      getOneProduct: async (id: string): Promise<void> => {
        const response = await axios.get<Product>(
          `https://api-crud.elcho.dev/api/v1/c794c-65c42-4dc13/green-shop/${id}`
        );
        set((state) => ({
          products: [
            ...state.products.filter((p) => p.id !== response.data.id),
            response.data,
          ],
        }));
      },

      updateProduct: async (
        id: string,
        newProduct: Partial<Product>
      ): Promise<void> => {
        const response = await axios.put<Product>(
          `https://api-crud.elcho.dev/api/v1/c794c-65c42-4dc13/green-shop/${id}`,
          newProduct
        );
        set((state) => ({
          products: state.products.map((p) =>
            p.id === Number(id) ? response.data : p
          ),
        }));
      },
    }),
    { name: "products" }
  )
);
