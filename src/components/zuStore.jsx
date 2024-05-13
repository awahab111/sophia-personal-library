import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUserStore = create(persist(
    (set, get) => ({
        user: null,
        setUser: (user) => set({ user }),
        logout: () => set({ user: null }),
        getUser: () => get().user,
    }),
    {
        name: 'user_storage',
        getStorage: () => localStorage,
    }
));