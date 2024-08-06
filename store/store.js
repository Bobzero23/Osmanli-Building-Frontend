import { api, BASE_URL } from "@/api/api";
import axios from "axios";
import { create } from "zustand";

const authStore = create((set) => ({
  user: null,
  userId: null,
  loggedIn: false,
  loading: false,
  jwt: null,
  users: [],

  login: async (userData) => {
    set({ loading: true });

    try {
      const { data } = await axios.post(`${BASE_URL}auth/signin`, userData);
      localStorage.setItem("jwt", data.jwt);
      set({ loading: false, loggedIn: true, jwt: data.jwt });
      return data;
    } catch (error) {
      set({ error: error, loading: false });
    }
  },
  signup: async (userData) => {
    set({ loading: true });

    try {
      const { data } = await axios.post(`${BASE_URL}auth/signup`, userData);
      set({ loggedIn: true, error: null, loading: null });
      return data;
    } catch (error) {
      set({ error: error, loading: false });
    }
  },
}));

export default authStore;
