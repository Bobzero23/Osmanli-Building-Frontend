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
      if (data.status === true) {
        set({
          loading: false,
          loggedIn: true,
          jwt: data.jwt,
          userId: data.userId,
        });
        return data;
      }
    } catch (error) {
      set({ error: error, loading: false });
    }
  },
  signup: async (userData) => {
    set({ loading: true });

    try {
      const { data } = await axios.post(`${BASE_URL}auth/signup`, userData);
      if (data.status === true) {
        set({
          loggedIn: true,
          error: null,
          loading: null,
          userId: data.userId,
        });
        return data;
      }
    } catch (error) {
      set({ error: error, loading: false });
    }
  },
  logout: () => {
    set({ loggedIn: false, user: null, error: null });
    localStorage.removeItem("jwt");
  },
}));

export default authStore;
