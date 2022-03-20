import create from 'zustand';

export const useStore = create((set: any) => ({
  darkMode: false,
  toggleDarkMode: () =>
    set((state: any) => ({ ...state, darkMode: !state.darkMode })),
}));
