<template>
  <div>
    <Services />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Services from "../components/Services";
export default {
  components: {
    Services,
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
