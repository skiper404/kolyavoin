<script setup>
import { useMainStore } from "@/stores/MainStore";
import Logo from "./Logo.vue";
import MenuButton from "./MenuButton.vue";
import Navigation from "./Navigation.vue";

const mainStore = useMainStore();
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-20 flex h-14 items-center justify-between gap-2 bg-gray-900 p-4"
  >
    <Logo />
    <Navigation />
    <MenuButton @click="mainStore.openMenu" />
  </header>
</template>

<style lang="scss" scoped></style>
