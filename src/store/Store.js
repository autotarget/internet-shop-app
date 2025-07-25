import axios from "axios";
import { create } from "zustand";

const useStore = create((set) => ({
    products: [],
    filteredProducts: [],
    currentProduct: null,
    error: null,
    loading: false,
    categories: [],
    selectedCategory: 'All',

    setCategory: (category) => set({ selectedCategory: category }),

    filterProducts: () => set((state) => ({
        filteredProducts: state.selectedCategory === 'All' ? state.products : state.products.filter((product) => product.category === state.selectedCategory),
    })),

    getProductById: (id) => set ((state) => ({currentProduct: state.filteredProducts.find(p => p.id === id)})),

    fetchProducts: async () => {
        set({loading: true, error:null} )
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            set({ products: response.data, loading: false });

        } catch (error) {
            set({ loading: false, error: error.message });
        }
    },

    fetchCategories: async () => {
        set({loading:true, error:null})
        try {
            const response = await axios.get('https://fakestoreapi.com/products/categories')
            set({ categories: response.data, loading:false});
        } catch (error) {
            set({ loading: false, error: error.message });
        }
    }
}));

export default useStore;