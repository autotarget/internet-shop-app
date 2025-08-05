import { create } from "zustand";

const useCartStore = create((set, get) => ({

  cart: [],
  addProduct: (product) => {
    const existingProduct = get().cart.find(p => p.id === product.id);
    
    console.log(existingProduct);
    if (existingProduct) {
     
      existingProduct.quantity += 1;
      set({ cart: [...get().cart] });
    } else {
    
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