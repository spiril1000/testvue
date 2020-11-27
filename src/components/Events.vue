<template>
  <div class="card">
    <input type="button" value="TRYK HER" v-on:click="booktime" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "../axios/index.js";
export default {
  computed: {
    ...mapGetters([
      "CheckedServices",
      "CheckedProducts",
      "CheckedEmployees",
      "CheckedServicePrice",
      "CheckedServiceDuration",
      "CheckedProductPrice",
    ]),
  },

  methods: {
    booktime: function() {
      var booking = {
        services: this.CheckedServices,
        products: this.CheckedProducts,
        employee: this.CheckedEmployees,
        duration: this.CheckedServiceDuration,
        price: this.CheckedProductPrice + this.CheckedServicePrice,
      };
      axios.post("/bookings", booking);
    },
  },
};
</script>

<style></style>
