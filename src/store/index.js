import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "https://hairforceone.azurewebsites.net/api/";

// axios.defaults.baseURL = "https://localhost:44382/api/";
// axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.setTokenFromSession;

axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // Stores the toke and user object
    user: null,
    users: null,
    token: null,
    services: null,
    products: null,
    employees: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setServices(state, services) {
      state.services = services;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setEmployees(state, employees) {
      state.employees = employees;
    },
    setToken(state, token) {
      state.token = token;
    },
    setTokenFromSession(state) {
      state.token = sessionStorage.getItem("Token");
    },
  },
  actions: {
    async getUsers({ commit }) {
      commit("setTokenFromSession");
      try {
        const response = await axios.get("/users", {
          headers: { Authorization: `Bearer ${this.state.token}` },
        });
        commit("setUsers", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },

    async getServices({ commit }) {
      commit("setTokenFromSession");
      try {
        const response = await axios.get("/services", {
          headers: { Authorization: `Bearer ${this.state.token}` },
        });
        commit("setServices", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },

    async getProducts({ commit }) {
      commit("setTokenFromSession");
      try {
        const response = await axios.get("/products", {
          headers: { Authorization: `Bearer ${this.state.token}` },
        });
        commit("setProducts", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },

    async getEmployees({ commit }) {
      commit("setTokenFromSession");
      try {
        const response = await axios.get("/employees", {
          headers: { Authorization: `Bearer ${this.state.token}` },
        });
        commit("setEmployees", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },
  },
  getters: {
    Users: (state) => state.users,
    Services: (state) => state.services,
    Products: (state) => state.products,
    Employees: (state) => state.employees,
  },
});
