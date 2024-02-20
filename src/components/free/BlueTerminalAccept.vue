<template>
  <div class="section__free__header__action green">
    <v-btn class="regular__btn" variant="outlined" @click="openDialog">
      {{ $t("free__header__action") }}
    </v-btn>
  </div>

  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-card>
      <div class="section__modal">
        <div class="section__modal__title">
          {{ $t("free__modal__title") }}
        </div>
        <div class="text-center mb-6" v-if="this.loading">
          <v-progress-circular
            :size="70"
            :width="7"
            color="#0066ff"
            indeterminate
          ></v-progress-circular>
          <h3 class="text-center mb-6 section__modal__inf">
            {{ $t("free__modal__scan") }}
          </h3>
        </div>

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
      loading: false,
      dialog: false,
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
      this.runNfc();
    },

    goTo() {
      this.$router.push("/free/success");
    },
    async acceptStudentNfc(nfc) {
      try {
        const response = await axios.post("free-food/send-food-log", {
          full_hex: nfc,
        });
        console.log(response.data.message);
        this.message = response.data.message;
        this.studentsData = response.data.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
        setTimeout(this.reset, 3000);
      }
    },

    reset() {
      this.message = "";
      this.studentsData.full_name = "";
      this.studentsData.iin = "";
      this.runNfc();
    },

    close() {
      this.dialog = false;
      cancelRequest();
    },

    runNfc() {
      this.loading = true;
      readNFC(60000, 400, (data) => {
        if (data.slice(9, 19) === "01JSC00040") {
          this.runNfc();
        } else {
          this.acceptStudentNfc(data.slice(9, 19));
        }
      });
    },
  },
};
</script>
