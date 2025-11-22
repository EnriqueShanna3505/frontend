// src/store/useCatStore.js
import { create } from "zustand";

export const useCatStore = create((set) => ({
  cats: [],
  likedCats: [],
  loading: false,

  fetchCats: async () => {
    set({ loading: true });
    try {
      const promises = Array.from({ length: 10 }).map(() =>
        fetch("https://cataas.com/cat?json=true").then(res => res.json())
      );
      const cats = await Promise.all(promises);
      set({
        cats: cats.map(cat => ({ id: cat.id, url: `https://cataas.com/cat/${cat.id}` }))
      });
    } catch (error) {
      console.error("Failed to fetch cats", error);
    } finally {
      set({ loading: false });
    }
  },

  swipeRight: (catId) => {
    set(state => ({
      cats: state.cats.filter(cat => cat.id !== catId),
      likedCats: [...state.likedCats, catId],
    }));
  },

  swipeLeft: (catId) => {
    set(state => ({
      cats: state.cats.filter(cat => cat.id !== catId),
    }));
  },

  reset: () => set({ cats: [], likedCats: [] }),
}));
