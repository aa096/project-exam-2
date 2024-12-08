// useAuthStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null, // Initialiser bruker fra localStorage
  token: localStorage.getItem("token") || null,
  isAuthenticated: false,
  profileData: null, // Legg til profilData i Zustand
  setUser: (user) => set({ user }),
  setProfileData: (profileData) => set({ profileData }), // Setter profilData
  loadToken: () => set({ token: localStorage.getItem("token") }),
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null, isAuthenticated: false, profileData: null });
  },
  setAuthenticated: (status) => set({ isAuthenticated: status }),
}));

export default useAuthStore;
