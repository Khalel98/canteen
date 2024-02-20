<template>
  <div class="section__free">
    <div class="section__free__content">
      <div class="profile__link" @click="goBack">
        &#8592; {{ $t("global__return") }}
      </div>

      <div class="section__free__title section__title">
        {{ $t("choose__free") }}
      </div>

      <div class="section__free__header">
        <div class="section__free__header__count">
          <span class="section__free__header__count__text">{{
            $t("free__header__count__true")
          }}</span>
          <span class="section__free__header__count__number" v-if="all_count">
            {{ received_count }} / {{ all_count }}</span
          >
        </div>

        <OrangeTerminalAccept v-if="typeofTerminal === 'orange'" />
        <BlueTerminalAccept v-if="typeofTerminal === 'siniy'" />
      </div>

      <div class="section__free__table">
        <div class="section__free__filters">
          <div class="section__free__filters__input">
            <v-text-field
              v-model="search"
              :label="this.$t('global__search')"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details
            ></v-text-field>
          </div>
        </div>
        <v-data-table
          :loading="loading"
          :headers="headers"
          :items="students"
          return-object
          item-value="name"
        >
          <template v-slot:headers="{ columns }">
            <tr>
              <template v-for="column in columns" :key="column.key">
                <td>
                  <div style="display: flex">
                    <span class="mr-2 cursor-pointer">{{ column.title }}</span>

                    <div
                      class="sorting__container"
                      :class="{ active: isActiveDate === 'asc' }"
                      @click="() => toggleDate()"
                    >
                      <v-icon
                        v-if="column.removable"
                        icon="mdi mdi-arrow-down-thin"
                      ></v-icon>
                    </div>
                  </div>
                </td>
              </template>
            </tr>
          </template>

          <template v-slot:loading>
            <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
          </template>

          <template v-slot:no-data> {{ $t("global__nodata") }} </template>

          <template v-slot:item.status="{ item }">
            <span
              class="section__free__status"
              :class="{ active: item.status }"
            >
              {{
                item.status
                  ? this.$t("free__filter__status__free__true")
                  : this.$t("free__filter__status__free__false")
              }}
            </span>
          </template>

          <template v-slot:bottom>
            <v-pagination
              v-model="page"
              :length="pageCount"
              :total-visible="4"
              @click="loadData"
            ></v-pagination>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import OrangeTerminalAccept from "@/components/paid/OrangeTerminalAccept.vue";
import BlueTerminalAccept from "@/components/free/BlueTerminalAccept.vue";

import axios from "@/axios.js";
export default {
  components: {
    OrangeTerminalAccept,
    BlueTerminalAccept,
  },
  data() {
    return {
      loading: false,
      isActiveDate: "desc",
      typeofTerminal: "",
      search: "",
      hasRunMethods: false,
      timeoutId: null,
      page: 1,
      itemsPerPage: 10,
      all_count: "",
      received_count: "",
      not_received_count: "",
      headers: [
        {
          align: "start",
          key: "order_num",
          title: "№",
          sortable: false,
        },
        { key: "iin", title: this.$t("free__table__iin"), sortable: false },
        {
          key: "full_name",
          title: this.$t("free__table__fullname"),
          sortable: false,
        },
        {
          key: "card_number",
          title: this.$t("free__table__card__num"),
          sortable: false,
        },
        {
          key: "status",
          title: this.$t("free__table__status"),
          sortable: false,
        },
        {
          key: "datetime_reg",
          title: this.$t("free__table__date"),
          sortable: false,
          removable: true,
        },
      ],

      students: [],
    };
  },
  methods: {
    async getStudents() {
      this.loading = true;
      try {
        const response = await axios.post(`free-food/find-students`, {
          full_name: this.search,
          full_name_sort: null,
          date_sort: this.isActiveDate,
          page: this.page,
        });
        console.log(response.data);
        this.students = response.data.students.data;
        this.all_count = response.data.students.total;
        this.received_count = response.data.today_stats.received_count;
        this.not_received_count = response.data.today_stats.not_received_count;
        this.hasRunMethods = false;
      } catch (error) {
        console.error(error);
        this.hasRunMethods = false;
      } finally {
        this.loading = false;
      }
    },
    loadData() {
      this.getStudents();
    },
    goBack() {
      this.$router.go(-1); // Перейти на один шаг назад в истории маршрута
    },

    test() {
      try {
        openSelectedPort();
        this.typeofTerminal = "siniy";
        console.log("siniy");
      } catch (e) {
        this.typeofTerminal = "orange";
        console.log("orange");
      }
    },

    toggleDate() {
      if (this.isActiveDate === "asc") {
        this.isActiveDate = "desc";
      } else {
        this.isActiveDate = "asc";
      }

      this.loadData();
    },
  },
  watch: {
    search() {
      if (!this.hasRunMethods) {
        if (this.timeoutId !== null) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
          this.loadData();
          this.hasRunMethods = true;
        }, 500);
      }
    },
  },

  computed: {
    pageCount() {
      return Math.ceil(this.all_count / this.itemsPerPage);
    },
  },

  mounted() {
    this.loadData();
    this.test();
  },
};
</script>

<style></style>
