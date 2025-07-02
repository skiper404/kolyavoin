<script setup>
import bg1 from "@/assets/bg1.jpg";
import IconChevron from "./icons/IconChevron.vue";
</script>

<template>
  <div class="relative flex h-screen flex-col items-center px-10 text-white">
    <div
      :style="`background-image: url(${bg1})`"
      class="absolute inset-0 bg-cover bg-center shadow-lg"
    ></div>
    <div
      class="z-10 text-8xl text-white transition duration-300 hover:scale-120 hover:-rotate-6 hover:text-violet-500"
    >
      Обо мне
    </div>
    <div
      class="z-10 mt-10 flex h-100 w-full items-center justify-center border border-violet-500 bg-black/80 p-10 text-xl"
    >
      <span class="transition duration-300 hover:scale-150">
        Тут Блок информации о себе
      </span>
    </div>
    <IconChevron class="absolute bottom-16" />
  </div>
</template>

<style lang="scss" scoped></style>
