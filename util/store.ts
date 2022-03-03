import create from 'zustand';
import {
  getLocalStorageOrDefault,
  setLocalStorage,
} from './localStorageHelpers';

interface AppState {
  theme: string;
  toggleTheme: () => void;
}

const useStore = create<AppState>((set) => ({
  theme: getLocalStorageOrDefault('theme', 'light'),
  toggleTheme: () => {
    set((state) => ({
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
    setLocalStorage('theme', getLocalStorageOrDefault('theme', 'light') === 'light' ? 'dark' : 'light');
  },
}));

export default useStore;
