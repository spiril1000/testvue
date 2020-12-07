<template>
  <div class="card">
    <div>
      <input type="button" value="TRYK HER" v-on:click="booktime" />
    </div>
    <div>
      <Checked />
    </div>
    <router-link to="/Booking/Events">Back, i think</router-link>
  </div>
</template>

<script>
import Checked from "../components/Checked.vue";
import axios from "../axios/index.js";

export default {
  components: {
    Checked,
  },
  methods: {
    booktime: function () {
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

<style>
</style>