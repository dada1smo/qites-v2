export default function useLocalStorage() {
  function addToLocalStorage(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  function findInLocalStorage(key?: string) {
    if (!key) {
      return null;
    }

    return localStorage.getItem(key);
  }

  function removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  return {
    addToLocalStorage,
    findInLocalStorage,
    removeLocalStorage,
  };
}
