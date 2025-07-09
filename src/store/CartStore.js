import { create } from "zustand";

const useCartStore = create((set, get) => ({

  cart: [],
  addProduct: (product) => {
    const existingProduct = get().cart.find(p => p.id === product.id);
    
    console.log(existingProduct);
    if (existingProduct) {
      // Если товар уже есть в корзине, увеличиваем его количество
      existingProduct.quantity += 1;
      set({ cart: [...get().cart] });
    } else {
      // Если товара нет в корзине, добавляем новый
      set({ cart: [...get().cart, { ...product, quantity: 1 }] });
    }
  },

  removeProduct: (id) => {
    set({ cart: get().cart.filter((item) => item.id !== id) });
  },

  clearCart: () => {
    set({ cart: [] });
  },

}));

export default useCartStore;