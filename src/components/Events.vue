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
        starttime: "12-01-2020 13:30:00",
        services: this.CheckedServices,
        products: this.CheckedProducts,
        employee: this.CheckedEmployees,
        duration: this.CheckedServiceDuration,
        totalprice: this.CheckedProductPrice + this.CheckedServicePrice,
        comment: "Dette er en test kommentar",
      };
      axios.post("/bookings", booking);
    },
  },
};
</script>

<style></style>
