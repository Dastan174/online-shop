import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartStore {
  cart: CartProduct[];
  addToCart: (item: CartProduct) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: async (item: CartProduct): Promise<void> => {
        set((state) => ({
          cart: [...state.cart, item],
        }));
      },

      removeFromCart: async (id: number): Promise<void> => {
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== id),
        }));
      },

      clearCart: async (): Promise<void> => {
        set({ cart: [] });
      },
    }),
    { name: "cart" }
  )
);
