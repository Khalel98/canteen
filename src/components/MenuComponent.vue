<template>
  <div class="section__menu">
    <div class="section__menu__content _container">
      <div class="section__menu__profile" v-if="isPermanent"></div>

      <div class="section__menu__clock">
        {{ currentTime }}
      </div>
      <div class="section__menu__controls" v-if="isPermanent">
        <LanguageComponent />

        <button
          class="section__menu__logout"
          @click="this.$router.push('/login')"
        >
          <v-icon>mdi mdi-exit-to-app</v-icon>
          <span>{{ $t("global__exit") }}</span>
        </button>
      </div>

      <div class="text-center" v-if="!isPermanent">
        <v-menu v-model="menu" :close-on-content-click="false" location="end">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="text"
              v-bind="props"
              icon="mdi-dots-vertical"
            ></v-btn>
          </template>

          <v-card max-width="300">
            <v-divider></v-divider>
            <div class="section__menu__controls">
              <LanguageComponent />

              <button class="section__menu__logout" @click="logout">
                <v-icon>mdi mdi-exit-to-app</v-icon>
                <span>{{ $t("global__exit") }}</span>
              </button>
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn variant="text" @click="menu = false">
                {{ $t("global__close") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageComponent from "@/components/LanguageComponent.vue";
export default {
  components: {
    LanguageComponent,
  },
  data() {
    return {
      currentTime: "",
      menu: false,
      drawer: null,
      screenWidth: window.innerWidth,
      isScreenSizeLessThan1100px: window.innerWidth <= 1100,
      isPermanent: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    updateClock() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      this.currentTime = `${hours}:${minutes}`;
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
      this.isScreenSizeLessThan1100px = this.screenWidth <= 1100;

      if (this.isScreenSizeLessThan1100px) {
        this.isPermanent = false;
      } else {
        this.isPermanent = true;
      }
    },
  },
  watch: {
    isScreenSizeLessThan1100px(newVal) {
      this.isPermanent = !newVal;
    },
  },

  mounted() {
    // Update the clock every minute
    setInterval(this.updateClock, 60000);
    // Initial call to display the time immediately
    this.updateClock();

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
.language__btn {
  background: none;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: #000;
  padding: 5px 15px;
}
button.active {
  color: #fff;
  border-radius: 30px;
  background: #123088;
}
</style>
