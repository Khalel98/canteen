// Composables
import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/DefaultView.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/choice/ChoiceView.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "free",
        name: "free",
        component: () => import("@/views/nutriation/FreeNutriation.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "test",
        name: "test",
        component: () => import("@/views/nutriation/TestView.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/free/:id",
        component: () => import("@/views/nutriation/StatusView.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/general/GeneralView.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../views/login/AuthorizationPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
