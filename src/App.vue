<script setup>
import { useMainStore } from "./stores/MainStore";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import TheMenu from "./components/TheMenu.vue";

const mainStore = useMainStore();
</script>

<template>
  <div class="bg-gray-800 text-sm text-white">
    <Header />
    <TheMenu v-if="mainStore.showMenu" @click="mainStore.closeMenu" />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
