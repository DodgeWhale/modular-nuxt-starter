export const useMainStore = defineStore('main', {
  state: () => {
    return {};
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
