import Vue from "vue";

// https://vuex.vuejs.org/

import Vuex from "vuex";

// https://www.npmjs.com/package/axios

// Import axios/index.js singleton instance 
import axios from "../axios/index.js";

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
        const response = await axios.get("/services");
        commit("setServices", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },

    async getProducts({ commit }) {
      commit("setTokenFromSession");
      try {
        const response = await axios.get("/products");
        commit("setProducts", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },

    async getEmployees({ commit }) {
      commit("setTokenFromSession");
      try {
        const response = await axios.get("/employees");
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
