<template>
  <div class="card">
    <h1>HairForceOne / Booking</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import Services from "../components/Services";
// import Products from "../components/Products";
// import Employees from "../components/Employees";
export default {
  // components: {
  //   Services,
  //   Employees,
  //   Products,
  // },
  name: "Booking",
  mounted() {
    this.getProducts();
    this.getEmployees();
  },
  methods: {
    ...mapActions(["getProducts", "getEmployees"]),
  },
  computed: {
    ...mapGetters(["Employees", "Products"]),
  },
};
</script>

<style></style>
