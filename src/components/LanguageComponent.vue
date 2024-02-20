<template>
  <div>
    <button
      class="language__btn"
      @click="setLanguagePreference('ru')"
      :class="{ active: lang === 'ru' }"
    >
      Рус
    </button>
    <button
      class="language__btn"
      @click="setLanguagePreference('kk')"
      :class="{ active: lang === 'kk' }"
    >
      Қаз
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("currentLanguage") || "ru",
    };
  },
  methods: {
    setLanguagePreference(lang, isReload = true) {
      localStorage.setItem("currentLanguage", lang);
      this.$i18n.locale = lang;
      this.lang = lang;
      if (isReload) location.reload();
    },

    config() {
      const currentLanguage = localStorage.getItem("currentLanguage") || "ru";
      if (currentLanguage === "kk") {
        this.$i18n.locale = "kk";
      } else {
        this.$i18n.locale = "ru";
      }
    },
  },
  created() {
    this.config();
  },
  mounted() {
    const lang = localStorage.getItem("currentLanguage");
    if (lang) {
      this.setLanguagePreference(lang, false);
      this.config();
    }
  },
};
</script>
