import { create } from "zustand";
import axios from "axios";
import { BASE_URL } from "@/api/api";

const productStore = create((set) => ({
  product: null,
  products: [],
  loading: false,
  error: null,

  getAllProducts: async () => {
    try {
      set({ loading: true });
      const response = await axios.get(`${BASE_URL}product`);
      set({ products: response.data, loading: false });
    } catch (error) {
      console.log("couldn't fetch all of the products");
      set({ error: error, loading: false });
    }
  },
}));

export default productStore;
