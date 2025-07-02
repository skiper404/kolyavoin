<script setup>
import bg4 from "@/assets/bg4.jpg";
</script>

<template>
  <div
    id="portfolio"
    class="relative flex flex-col items-center p-10 pt-20 text-white"
  >
    <div
      :style="`background-image: url(${bg4})`"
      class="absolute inset-0 bg-cover bg-center shadow-lg"
    ></div>
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 text-4xl font-extralight text-green-500"
    >
      Портфолио
    </div>
    <div
      class="z-10 mt-10 grid w-full grid-cols-1 gap-10 text-2xl md:grid-cols-3"
    >
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-red-500/50 transition duration-300 hover:border-red-500 hover:text-red-500"
      >
        Project One
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-pink-500/80 transition duration-300 hover:border-pink-500 hover:text-pink-500"
      >
        Project Two
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-orange-500/80 transition duration-300 hover:border-orange-500 hover:text-orange-500"
      >
        Project Three
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-yellow-500/80 transition duration-300 hover:border-yellow-500 hover:text-yellow-500"
      >
        Project Four
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-lime-500/80 transition duration-300 hover:border-lime-500 hover:text-lime-500"
      >
        Project Five
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-green-500/80 transition duration-300 hover:border-green-500 hover:text-green-500"
      >
        Project Six
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-blue-500/80 transition duration-300 hover:border-blue-500 hover:text-blue-500"
      >
        Project Seven
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-violet-500/80 transition duration-300 hover:border-violet-500 hover:text-violet-500"
      >
        Project Eight
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        class="flex h-50 items-center justify-center border-2 bg-teal-500/80 transition duration-300 hover:border-teal-500 hover:text-teal-500"
      >
        Project Nine
      </div>
    </div>
  </div>
</template>
