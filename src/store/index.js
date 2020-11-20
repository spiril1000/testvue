import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "https://hairforceone.azurewebsites.net/api/";
// axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.setTokenFromSession;
// axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // Stores the toke and user object
    user: null,
    users: null,
    token: null,
    // baseadress: "https://localhost:44382/api/",
    // baseadress: "http://hairforceone.azurewebsites.net/api/",
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
    setTokenFromSession(state) {
      state.token = sessionStorage.getItem("Token");
     }
      
  },
  actions: {
    async getUsers({ commit }) {
      commit("setTokenFromSession");
      try {
        const response = await axios.get("/users", { headers: {'Authorization': `Bearer ${this.state.token}`}});
        commit("setUsers", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },
  },
  getters: {
    Users: (state) => state.users
  },
});
