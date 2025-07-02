<script setup>
import bg2 from "@/assets/bg2.jpg";
import IconInstagram from "./icons/IconInstagram.vue";
import IconTelegram from "./icons/IconTelegram.vue";
import IconViber from "./icons/IconViber.vue";
import IconYouTube from "./icons/IconYouTube.vue";
</script>

<template>
  <div class="relative flex h-screen flex-col items-center px-10 text-white">
    <div
      :style="`background-image: url(${bg2})`"
      class="absolute inset-0 bg-cover bg-center shadow-lg"
    ></div>
    <div
      class="z-10 text-8xl text-white transition duration-300 hover:scale-120 hover:-rotate-6 hover:text-violet-500"
    >
      Контакты
    </div>
    <div
      class="z-10 mt-10 flex w-full items-center justify-around gap-2 border-violet-500 bg-black/80 p-10 text-xl"
    >
      <IconInstagram />
      <IconTelegram />
      <IconViber />
      <IconYouTube />
    </div>
  </div>
</template>
