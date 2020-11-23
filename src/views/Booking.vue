<template>
  <div>
    <Services />
    <h3>Producter</h3>
    <Products />
    <h3>Medarbejdere</h3>
    <Employees />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Services from "../components/Services";
import Products from "../components/Products";
import Employees from "../components/Employees";
export default {
  components: {
    Services,
    Employees,
    Products,
  },
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
