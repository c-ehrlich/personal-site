import create from 'zustand';

interface AppState {
  theme: string;
  toggleTheme: () => void;
}

const useStore = create<AppState>((set) => ({
  theme: 'light',
  toggleTheme: () => {
    set((state) => ({
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  },
}));

export default useStore;
