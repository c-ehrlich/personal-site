import create from 'zustand';
import {
  getLocalStorageOrDefault,
  setLocalStorage,
} from './localStorageHelpers';

export enum Theme {
  light = 'lightTheme',
  dark = 'darkTheme',
}

interface AppState {
  theme: Theme;
  toggleTheme: () => void;
}

const useStore = create<AppState>((set) => ({
  theme: getLocalStorageOrDefault<Theme>('theme', Theme.light),
  toggleTheme: () => {
    set((state) => ({
      ...state,
      theme: state.theme === Theme.light ? Theme.dark : Theme.light,
    }));
    console.log(getLocalStorageOrDefault('theme', 'hi'));
    setLocalStorage(
      'theme',
      getLocalStorageOrDefault('theme', Theme.light) === Theme.light
        ? Theme.dark
        : Theme.light
    );
  },
}));

export default useStore;
