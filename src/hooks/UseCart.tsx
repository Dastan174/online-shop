import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ICartProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartStore {
  cart: ICartProduct[];
  addToCart: (item: ICartProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => ({
          cart: [...state.cart, item],
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== id),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart" }
  )
);
