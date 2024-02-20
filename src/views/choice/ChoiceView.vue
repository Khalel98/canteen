<template>
  <div class="section__choice">
    <div class="section__choice__content">
      <div class="section__choice__row">
        <div @click="free" class="section__choice__item">
          <div class="section__choice__item__title">
            {{ $t("choose__free") }}
          </div>
          <img
            src="@/assets/img/free.svg"
            alt=""
            class="section__choice__item__img"
          />
        </div>

        <div
          @click="paid"
          class="section__choice__item"
          style="pointer-events: none"
        >
          <div class="section__choice__item__title">
            {{ $t("choose__paid") }}
          </div>
          <img
            src="@/assets/img/paid.svg"
            alt=""
            class="section__choice__item__img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    free() {
      this.$router.push({ name: "free" });
    },
    paid() {
      this.$router.push({ name: "paid" });
    },
  },
};
</script>

<style></style>
