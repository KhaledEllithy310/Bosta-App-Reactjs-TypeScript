//========== LocalStorage Handlers ===========//

export const storeInLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
