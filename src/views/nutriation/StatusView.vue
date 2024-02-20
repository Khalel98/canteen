<template>
  <div class="section__status">
    <div class="profile__link" @click="goBack" style="margin-top: 30px">
      &#8592; {{ $t("global__return") }}
    </div>
    <div class="section__status__content _container">
      <div v-if="this.status == 'success'" class="section__status__success">
        <img
          src="@/assets/img/success.svg"
          alt=""
          class="section__status__success__img"
        />
        <div class="section__status__success__title">Абдулова Ақшолпан</div>
        <div class="section__status__success__subtitle">
          бүгінге тегін тамақты алды!
        </div>
      </div>
      <div v-if="this.status == 'declined'" class="section__status__success">
        <img
          src="@/assets/img/declined.svg"
          alt=""
          class="section__status__success__img"
        />
        <div class="section__status__success__title">Абдулова Ақшолпан</div>
        <div class="section__status__success__subtitle">
          тізімнен табылмады!
        </div>
      </div>

      <div v-if="this.status == 'cart'" class="section__status__success">
        <img
          src="@/assets/img/cart.svg"
          alt=""
          class="section__status__success__img"
        />
        <div class="section__status__success__title">Тамақ сәтті берілді!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    status() {
      return this.$route.params.id;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Перейти на один шаг назад в истории маршрута
    },
  },
};
</script>

<style></style>
