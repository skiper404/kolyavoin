<script setup>
import IconInstagram from "./icons/IconInstagram.vue";
import IconTelegram from "./icons/IconTelegram.vue";
import IconViber from "./icons/IconViber.vue";
import IconContacts from "./icons/IconContacts.vue";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();
</script>

<template>
  <div
    id="contacts"
    class="relative flex flex-col items-center p-2 pt-20 text-white"
  >
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 flex gap-4 text-2xl text-violet-500"
    >
      <IconContacts />
      <div>Контакты</div>
    </div>
    <div class="z-10 mt-10 flex flex-col items-center gap-10 px-2 py-10">
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
      <div
        class="flex w-[100%] flex-col gap-4 border border-violet-500 bg-gray-900 p-2 text-lg"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <div class="p-2 text-center">
          Оставляйте заявку. Обсудим ваш проект.
        </div>
        <div
          v-if="mainStore.isSubmit"
          class="p-2 text-center text-orange-500 transition duration-300"
        >
          Заявка отправлена
        </div>
        <div class="flex flex-col items-center justify-between gap-2">
          <label for="name" class="text-blue-500">Имя</label>
          <input
            type="text"
            id="name"
            class="w-full bg-gray-600 p-2 outline-0"
            placeholder="Игорь"
            v-model="mainStore.name"
          />
        </div>
        <div class="flex flex-col items-center justify-between gap-2">
          <label for="email" class="text-blue-500">Почта</label>
          <input
            type="text"
            id="email"
            class="w-full bg-gray-600 p-2 outline-0"
            placeholder="igorek@mail.com"
            v-model="mainStore.email"
          />
        </div>
        <div class="flex flex-col items-center justify-between gap-2">
          <label for="phone" class="text-blue-500">Телефон</label>
          <input
            type="text"
            id="phone"
            class="w-full bg-gray-600 p-2 outline-0"
            placeholder="+380951234567"
            v-model="mainStore.phone"
          />
        </div>
        <button
          class="h-10 bg-gray-600 text-green-500 hover:bg-gray-500"
          @click="mainStore.submit"
        >
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>
