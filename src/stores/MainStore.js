import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("MainStore", () => {
  const showMenu = ref(false);
  const openMenu = () => (showMenu.value = true);
  const closeMenu = () => (showMenu.value = false);

  return { showMenu, openMenu, closeMenu };
});
