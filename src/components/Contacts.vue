<script setup>
import bg2 from "@/assets/bg2.jpg";
import IconInstagram from "./icons/IconInstagram.vue";
import IconTelegram from "./icons/IconTelegram.vue";
import IconViber from "./icons/IconViber.vue";
import IconContacts from "./icons/IconContacts.vue";
</script>

<template>
  <div
    id="contacts"
    class="relative flex flex-col items-center p-2 pt-20 text-white"
  >
    <div
      :style="`background-image: url(${bg2})`"
      class="absolute inset-0 bg-cover bg-center shadow-lg"
    ></div>
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 flex gap-4 text-2xl text-blue-500"
    >
      <IconContacts />
      <div>Контакты</div>
    </div>
    <div class="z-10 mt-10 flex flex-col items-center gap-10 p-10">
      <a
        href="https://t.me/KOLYA_VOIN"
        class="flex items-center gap-4"
        data-aos="fade-right"
        data-aos-duration="1000"
        target="_blank"
      >
        <IconTelegram />
        @KOLYA_VOIN
      </a>
      <a
        href="https://www.instagram.com/kolya_voin3228/"
        target="_blank"
        class="flex items-center gap-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <IconInstagram />
        kolya_voin3228
      </a>
      <a
        href="viber://chat?number=+380951732724"
        class="flex items-center gap-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <IconViber />
        +380-95-173-2724
      </a>
      <a
        href="tel:+380951732724"
        class="flex items-center gap-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <IconContacts />
        +380-95-173-2724
      </a>
      <div class="flex flex-col gap-4 border bg-gray-900 p-2 text-lg">
        <div class="p-2 text-center">
          Оставляйте заявку. Обсудим ваш проект.
        </div>
        <div class="flex flex-col items-center justify-between">
          <label for="name" class="text-blue-500">Имя</label>
          <input
            type="text"
            id="name"
            class="w-full bg-gray-600 p-2 outline-0"
            placeholder="Игорь"
          />
        </div>
        <div class="flex flex-col items-center justify-between">
          <label for="name" class="text-blue-500">Почта</label>
          <input
            type="text"
            id="name"
            class="w-full bg-gray-600 p-2 outline-0"
            placeholder="igorek@mail.com"
          />
        </div>
        <div class="flex flex-col items-center justify-between">
          <label for="name" class="text-blue-500">Телефон</label>
          <input
            type="text"
            id="name"
            class="w-full bg-gray-600 p-2 outline-0"
            placeholder="+380951234567"
          />
        </div>
        <button class="bg-gray-600 hover:bg-gray-500 hover:text-green-500">
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>
