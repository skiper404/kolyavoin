<script setup>
import bg1 from "@/assets/bg1.jpg";
import IconChevron from "./icons/IconChevron.vue";
import IconUser from "./icons/IconUser.vue";
</script>

<template>
  <div
    id="about"
    class="relative flex h-[100vh] flex-col items-center p-10 pt-20 text-white"
  >
    <div
      :style="`background-image: url(${bg1})`"
      class="absolute inset-0 bg-cover bg-center shadow-lg"
    ></div>
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="font-press-start z-10 flex items-end text-2xl font-extralight text-red-500"
    >
      <IconUser />
      Oбо мне
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      class="z-10 mt-10 flex h-100 w-full items-center justify-center border border-violet-500 bg-black/80 p-10 text-xl"
    >
      <span class="transition duration-300 hover:scale-150">
        Тут Блок информации о себе
      </span>
    </div>
    <IconChevron class="absolute bottom-0" />
  </div>
</template>
