import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // Stores the toke and user object
    user: null,
    users: null,
    token: null,
    // baseadress: "https://localhost:44382/api/",
    baseadress: "http://hairforceone.azurewebsites.net/api/",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const response = await axios.get("/users");
        commit("setUsers", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },
  },
  getters: {
    users: (state) => {
      return state.users;
    },
  },
});
