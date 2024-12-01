import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: null,
  loadToken: () => {
    const savedToken = localStorage.getItem("token");
    set({ token: savedToken });
  },
}));

export default useAuthStore;
