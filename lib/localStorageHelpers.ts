export const getLocalStorageOrDefault = <T>(key: string, defaultObject: T): T => {
  try {
    return JSON.parse(window.localStorage.getItem(key) || '') as T;
  } catch (e) {
    return defaultObject;
  }
};

export const setLocalStorage = <T>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}
