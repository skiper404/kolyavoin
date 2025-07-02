import "./assets/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPinia } from "pinia";

AOS.init();
const pinia = createPinia();

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(pinia).mount("#app");
