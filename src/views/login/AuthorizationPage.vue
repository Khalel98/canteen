<template>
  <div class="section__login">
    <div class="wrapper">
      <div class="section__login__logo">
        <div class="section__login__logo__icon">
          <img src="@/assets/img/icon.svg" alt="" />
        </div>
        <div class="section__login__logo__smart">
          <img src="@/assets/img/logo__navbar.svg" alt="" />
        </div>
      </div>

      <div class="section__login__form">
        <v-form v-on:submit.prevent="this.login()">
          <div class="text-center">
            <v-otp-input
              v-model="pin_code"
              :loading="loading"
              length="4"
              variant="underlined"
              ref="input__pincode"
            ></v-otp-input>
          </div>

          <div class="section__login__action" style="padding: 20px 40px">
            <v-btn
              class="section__login__submit regular__btn blue"
              variant="tonal"
              type="submit"
              :disabled="pin_code.length < 4 || loading"
            >
              {{ $t("authorization__enter") }}
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      pin_code: "",
      signInInn: true,
      signInEcp: false,
      iin: "010101010101",
      password: "123456",
      show: false,
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {
          pin_code: this.pin_code,
        });

        this.$router.push("/");
      } catch (error) {
        console.error(error);
        alert(this.$t("authorization__alert"));
      }
    },

    handleBlur() {
      this.$nextTick(() => {
        this.$refs.input__pincode.focus();
      });
    },
  },

  mounted() {
    this.handleBlur();
  },
};
</script>
