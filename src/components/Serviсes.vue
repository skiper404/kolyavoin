<script setup>
import IconChevron from "./icons/IconChevron.vue";
import bg3 from "@/assets/bg4.jpg";
import IconStar from "./icons/IconStar.vue";
IconStar;
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
      class="z-10 flex items-end gap-2 text-2xl font-extralight text-yellow-500"
    >
      <IconStar />
      <div>Услуги</div>
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
