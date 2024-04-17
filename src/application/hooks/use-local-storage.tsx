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

  return {
    addToLocalStorage,
    findInLocalStorage,
  };
}
