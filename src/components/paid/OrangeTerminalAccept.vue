<template>
  <div class="section__free__header__action green">
    <v-btn class="regular__btn" variant="outlined" @click="openDialog">
      {{ $t("free__header__action") }}
    </v-btn>
  </div>

  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-card>
      <div class="section__modal">
        <div class="section__modal__title">{{ $t("free__modal__title") }}</div>
        <div v-if="this.status === null" class="section__modal__inf">
          {{ $t("free__modal__scan") }}
        </div>
        <div class="section__modal__gif">
          <img
            v-if="this.status === null"
            src="@/assets/gif/scan__card.gif"
            alt=""
          />
          <img
            v-if="this.status === '001'"
            src="@/assets/gif/finish.gif"
            alt=""
          />
        </div>

        <v-text-field
          v-model="card_number"
          clearable
          label="NFC"
          prepend-icon="mdi mdi-nfc-variant"
          variant="outlined"
          ref="cardInput"
        ></v-text-field>

        <h3 v-if="this.message" class="text-center mb-6">
          {{ $t("free__modal__status") }}: {{ this.message }}
        </h3>
        <h4 v-if="this.studentsData.full_name" class="text-center mb-6">
          {{ $t("free__modal__student") }}: {{ this.studentsData.full_name }}
        </h4>

        <div class="section__modal__action">
          <v-btn class="section__modal__action__btn" @click="close">
            {{ $t("global__close") }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "@/axios.js";

export default {
  data() {
    return {
      status: null,
      dialog: false,
      card_number: null,
      hasRunMethods: false,
      timeoutId: null,
      message: null,
      studentsData: {
        full_name: "",
        iin: "",
      },
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
      this.handleBlur();
      window.addEventListener("click", this.handleBlur);
    },

    handleBlur() {
      this.$nextTick(() => {
        this.$refs.cardInput.focus();
      });
    },

    close() {
      window.removeEventListener("click", this.handleBlur);
      this.dialog = false;
      this.card_number = null;
      this.hasRunMethods = false;
      this.timeoutId = null;
    },

    reset() {
      this.message = "";
      this.card_number = "";
      this.hasRunMethods = false;
      this.studentsData.full_name = "";
      this.studentsData.iin = "";
      this.status = null;
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId);
      }
    },

    goTo() {
      this.$router.push("/free/success");
    },
    async acceptStudentNfc() {
      try {
        const response = await axios.post("free-food/send-food-log", {
          full_hex: this.card_number,
        });
        console.log(response.data.message);
        this.status = response.data.status_code;
        this.studentsData = response.data.data;
        this.card_number = "";
        this.message = response.data.message;
        this.hasRunMethods = false;
        if (this.timeoutId !== null) {
          clearTimeout(this.timeoutId);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setTimeout(this.reset, 3000);
      }
    },

    reloadPage() {
      alert(this.$t("free__modal__alert"));
      location.reload();
    },
  },

  watch: {
    card_number() {
      const containsCyrillic = /[а-яА-ЯЁё]/.test(this.card_number);
      if (containsCyrillic) {
        this.reloadPage();
      }
      if (!this.hasRunMethods) {
        if (this.timeoutId !== null) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
          if (this.card_number.length > 0) {
            this.acceptStudentNfc();
            this.hasRunMethods = true;
          }
        }, 500);
      }
    },
  },
};
</script>
