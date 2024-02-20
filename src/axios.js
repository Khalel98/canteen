import axios from "axios";
import store from "./store";

let ru = localStorage.getItem("currentLanguage") || "ru";

const apiKey = `http://localhost:80/api/${ru}/canteen/`;

const instance = axios.create({
  baseURL: apiKey,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const activeToken = store.getters.getAccessToken;

    if (activeToken) {
      config.headers.Authorization = `Bearer ${activeToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Logout user or perform any other action related to token expiration

      store.dispatch("logout"); // Assuming you have a logout action in your store
    }
    return Promise.reject(error);
  }
);

export default instance;
