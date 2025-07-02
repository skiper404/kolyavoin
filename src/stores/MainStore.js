import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("MainStore", () => {
  const showMenu = ref(false);
  const openMenu = () => (showMenu.value = true);
  const closeMenu = () => (showMenu.value = false);

  const activeTab = ref(null);

  const setActiveTab = (tab) => {
    activeTab.value = tab;
  };

  const name = ref("");
  const email = ref("");
  const phone = ref("");

  const isSubmit = ref(false);

  const submit = () => {
    name.value = "";
    email.value = "";
    phone.value = "";
    isSubmit.value = true;

    setTimeout(() => {
      isSubmit.value = false;
    }, 1000);
  };

  return {
    showMenu,
    openMenu,
    closeMenu,
    activeTab,
    setActiveTab,
    name,
    email,
    phone,
    submit,
    isSubmit,
  };
});
