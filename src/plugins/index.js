/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from "./vuetify";
import router from "../router";
import store from "../store"; // Import your Vuex store

import { createI18n } from "vue-i18n";

//npm install vue-i18n@next
import ru from "../locales/ru.json";
import kk from "../locales/kk.json";

const messages = {
  ru,
  kk,
};

const i18n = createI18n({
  locale: localStorage.getItem("currentLanguage") || "ru",
  messages,
});

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(store).use(i18n);
}
