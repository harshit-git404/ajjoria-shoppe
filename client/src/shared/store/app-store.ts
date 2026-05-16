import { create } from 'zustand';

type AppStore = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (value) => set({ sidebarOpen: value }),
}));
