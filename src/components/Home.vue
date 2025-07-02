<script setup>
import IconChevron from "./icons/IconChevron.vue";
import IconSmile from "./icons/IconSmile.vue";

import bg2 from "/src/assets/bg2.jpg";
</script>

<template>
  <div
    class="relative flex h-screen flex-col items-center overflow-hidden text-white"
  >
    <div
      :style="`background-image: url(${bg2})`"
      class="absolute inset-0 bg-cover bg-center shadow-lg"
    ></div>
    <div
      class="mt-30 grid animate-pulse grid-cols-1 gap-6 text-9xl font-extralight md:grid-cols-2"
    >
      <div class="flex">
        <span>V</span>
        <IconSmile />
        <span>in</span>
      </div>
      <div>
        <span>Studio</span>
      </div>
    </div>
    <div class="z-10 mt-10 text-center text-2xl font-extralight text-white">
      Просто доверься мне...
    </div>
    <IconChevron class="absolute bottom-16" />
  </div>
</template>
