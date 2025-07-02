<script setup>
import bg2 from "@/assets/bg2.jpg";
import IconInstagram from "./icons/IconInstagram.vue";
import IconTelegram from "./icons/IconTelegram.vue";
import IconViber from "./icons/IconViber.vue";
import IconYouTube from "./icons/IconYouTube.vue";
</script>

<template>
  <div
    id="contacts"
    class="relative flex h-[100vh] flex-col items-center p-10 pt-20 text-white"
  >
    <div
      :style="`background-image: url(${bg2})`"
      class="absolute inset-0 bg-cover bg-center shadow-lg"
    ></div>
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 text-4xl text-blue-500"
    >
      Контакты
    </div>
    <div class="z-10 mt-10 grid grid-cols-2 gap-10 p-10">
      <IconInstagram data-aos="fade-down" data-aos-duration="1000" />
      <IconTelegram data-aos="fade-left" data-aos-duration="1000" />
      <IconViber data-aos="fade-right" data-aos-duration="1000" />
      <IconYouTube data-aos="fade-up" data-aos-duration="1000" />
    </div>
  </div>
</template>
