import { createStore } from "vuex";
import axios from "@/axios.js";
import router from "@/router";

export default createStore({
  state: {
    accessToken: null,
  },
  mutations: {
    setToken(state, token) {
      state.accessToken = token;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      // eslint-disable-next-line no-useless-catch
      try {
        const response = await axios.post("login", credentials);
        commit("setToken", response.data.token);
      } catch (error) {
        throw error;
      }
    },
    async logout({ commit, state }) {
      try {
        await axios.get("logout", {
          headers: {
            Authorization: `Bearer  ${state.token}`,
          },
        });

        commit("setToken", null);
        router.push("/login");
      } catch (error) {
        router.push("/login");
        console.error(error);
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.accessToken !== null;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
  },
});
