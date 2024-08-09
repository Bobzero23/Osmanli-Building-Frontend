import { create } from "zustand";
import axios from "axios";
import { BASE_URL } from "@/api/api";

const authStore = create((set) => ({
  user: "",
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
      localStorage.setItem("user", data.role);

      if (data.status === true) {
        set({
          loading: false,
          loggedIn: true,
          jwt: data.jwt,
          userId: data.userId,
          user: data.role,
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
        if (data.role === "admin") set({ user: "admin" });
        return data;
      }
    } catch (error) {
      set({ error: error, loading: false });
    }
  },
  logout: () => {
    set({ loggedIn: false, user: null, error: null });
    localStorage.clear();
  },

  // Added the initialize function to check localStorage for jwt
  initialize: () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      set({ loggedIn: true, jwt: jwt });
    }
  },
}));

export default authStore;
