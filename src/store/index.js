import Vue from "vue";

// https://vuex.vuejs.org/

import Vuex from "vuex";

// https://www.npmjs.com/package/axios

import axios from "../axios/index.js";

// axios.defaults.baseURL = "https://hairforceone.azurewebsites.net/api/";

// axios.defaults.baseURL = "https://localhost:44382/api/";
// axios.defaults.headers.common["Authorization"] =
// "Bearer " + sessionStorage.getItem("Token");
// axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.use(Vuex);

export default new Vuex.Store({
  // https://vuex.vuejs.org/guide/state.html

  state: {
    user: null,
    users: null,
    token: null,
    services: null,
    products: null,
    employees: null,
  },

  // https://vuex.vuejs.org/guide/mutations.html

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

  // https://vuex.vuejs.org/guide/actions.html

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

  // https://vuex.vuejs.org/guide/getters.html

  getters: {
    Users: (state) => state.users,
    Services: (state) => state.services,
    Products: (state) => state.products,
    Employees: (state) => state.employees,
  },
});
