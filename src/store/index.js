import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "https://hairforceone.azurewebsites.net/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("Token");
axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // Stores the toke and user object
    user: null,
    token: null,
    // baseadress: "https://localhost:44382/api/",
    baseadress: "http://hairforceone.azurewebsites.net/api/",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  getters: {},
});
