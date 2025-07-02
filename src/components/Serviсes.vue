<script setup>
import IconChevron from "./icons/IconChevron.vue";
import bg3 from "@/assets/bg4.jpg";
</script>

<template>
  <div
    id="services"
    class="relative flex h-[100vh] flex-col items-center p-10 pt-20 text-white"
  >
    <div
      :style="`background-image: url(${bg3})`"
      class="absolute inset-0 bg-cover bg-center shadow-lg"
    ></div>
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 text-4xl font-extralight text-yellow-500"
    >
      Услуги
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      class="z-10 mt-10 flex h-100 w-full items-center justify-center border border-violet-500 bg-black/80 p-10 text-xl"
    >
      <div class="transition duration-300 hover:scale-150">Тут Блок услуг</div>
    </div>
    <IconChevron class="absolute bottom-0" />
  </div>
</template>

<style lang="scss" scoped></style>
