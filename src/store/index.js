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
    services: [],
    products: [],
    employees: [],
    availabletimes: [],
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
    setAvailableTimes(state, availabletimes) {
      state.availabletimes = availabletimes;
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
    // OBS
    async getServices({ commit }) {
      if (this.state.services.length < 1) {
        try {
          const response = await axios.get("/services");
          // .then((response) => {
          response.data.forEach((element) => {
            element.visible = false;
            element.checked = false;
          });
          commit("setServices", response.data);
        } catch (error) {
          console.log(error);
          this.$router.push("/login");
        }
      }
    },
    async getAvailableTimes({ commit, getters }, selecteddate) {
      var data = {
        employeeId: this.state.employees,
        selecteddate: selecteddate,
        duration: getters.CheckedServiceDuration,
      };
      try {
        const response = await axios.post("/Events", data);
        // .then((response) => {
        commit("setAvailableTimes", response.data);
      } catch (error) {
        console.log(error);
        this.$router.push("/login");
      }
    },
    // This is the right way to do things
    async getProducts({ commit, state }) {
      if (state.products.length < 1) {
        try {
          const response = await axios.get("/products");
          response.data.forEach((element) => {
            element.visible = false;
            element.checked = false;
          });
          commit("setProducts", response.data);
        } catch (error) {
          console.log(error);
          this.$router.push("/login");
        }
      }
    },

    async getEmployees({ commit }) {
      if (this.state.employees < 1) {
        try {
          const response = await axios.get("/employees");
          response.data.forEach((element) => {
            element.checked = false;
          });
          commit("setEmployees", response.data);
        } catch (error) {
          console.log(error);
          this.$router.push("/login");
        }
      }
    },
  },

  // https://vuex.vuejs.org/guide/getters.html
  // () ?? return??
  getters: {
    Users: (state) => state.users,
    Services: (state) => state.services,
    AvailableTimes: (state) => state.availabletimes,
    Products: (state) => state.products,
    Employees: (state) => state.employees,
    CheckedServices: (state) =>
      state.services.filter((service) => service.checked),
    CheckedProducts: (state) =>
      state.products.filter((product) => product.checked),
    CheckedEmployees: (state) =>
      state.employees.find((employee) => employee.checked),
    CheckedServicePrice: (state, getters) =>
      getters.CheckedServices.map((element) => element.Price).reduce(
        (a, b) => a + b
      ),
    CheckedServiceDuration: (state, getters) =>
      getters.CheckedServices.map((element) =>
        parseInt(element.Duration)
      ).reduce((a, b) => a + b),
    CheckedProductPrice: (state, getters) =>
      getters.CheckedProducts.map((element) => element.RetailPrice).reduce(
        (a, b) => a + b
      ),
  },
});
