import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.prototype.$http = axios;

axios.interceptors.request.use(
  (config) => {
    var token = localStorage.getItem("jwt");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// const BASE_URL = 'http://localhost:8080/api/';

export default new Vuex.Store({
  state: {
    user: null,
    dikisForm: {},
    hookandLoopForm: [],
    insertHookandLoopForm: {},
  },
  mutations: {
    LOGIN_USER(state, data) {
      state.user = data;
      localStorage.setItem("jwt", data.jwt); // TODO: jwt token is not present in the localStorage once its manually deleted
    },

    LOGOUT_USER() {
      localStorage.removeItem("jwt");
      location.replace("/login");
      location.reload();
    },

    SIGNUP_USER(state, data) {
      state.user = data;
    },

    GET_DIKIS_FORM(state, data) {
      state.dikisForm = data;
    },

    GET_HOOK_LOOP_FORM(state, data) {
      state.hookandLoopForm = data;
    },

    INSERT_HOOK_LOOP(state, data) {
      state.insertHookandLoopForm = data.formData;
    },
  },
  actions: {
    login({ commit }, credentials) {
      return axios
        .post("http://localhost:8080/api/auth/signin", credentials)
        .catch((error) => console.log(error))
        .then(({ data }) => {
          if (!data.success) {
            console.log(data.errorDescription);
          } else {
            commit("LOGIN_USER", data);
          }
        });
    },

    logout({ commit }) {
      return axios
        .delete("http://localhost:8080/api/auth/signin")
        .catch((error) => console.log(error))
        .then(({ data }) => {
          commit("LOGOUT_USER", data);
        });
    },

    signup({ commit }, credentials) {
      return axios
        .post("http://localhost:8080/api/auth/signup", credentials)
        .catch((error) => console.log(error))
        .then(({ data }) => {
          if (!data.success) {
            console.log(data.errorDescription);
          } else {
            commit("SIGNUP_USER", data);
          }
        });
    },

    getDikisForm({ commit }) {
      return axios
        .get(
          "http://localhost:8080/api/getDikisGunlukImalatRaporu/dikisGunlukImalatRaporu"
        )
        .catch((error) => console.log(error))
        .then(({ data }) => {
          commit("GET_DIKIS_FORM", data);
        });
    },

    getHookandLoopForm({ commit }) {
      return axios
        .get(
          "http://localhost:8080/api/gethookAndLoopGunlukImalat/HookAndLoopGunlukImalat"
        )
        .catch((error) => console.log(error))
        .then(({ data }) => {
          commit("GET_HOOK_LOOP_FORM", data);
        });
    },

    insertHookAndLoopGunlukImalat({ commit }, formData) {
      return axios
        .post("http://localhost:8080/api/inserthookAndLoopGunlukImalat", formData)
        .catch((error) => console.log(error))
        .then(({ data }) => {
          commit("INSERT_HOOK_LOOP", data);
        });
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },

  modules: {},
});
