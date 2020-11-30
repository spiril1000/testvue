<template>
  <div class="card">
    <input type="button" id="knap" value="TRYK HER" v-on:click="test123" />
    <input type="date" id="date" @blur="test123" />
    <div v-for="(availabletime, key) in AvailableTimes" :key="key">
      {{ availabletime }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "../axios/index.js";
export default {
  mounted() {
    document.getElementById("date").min = new Date().toISOString();
  },
  computed: {
    ...mapGetters([
      "AvailableTimes",
      "CheckedServices",
      "CheckedProducts",
      "CheckedEmployees",
      "CheckedServicePrice",
      "CheckedServiceDuration",
      "CheckedProductPrice",
    ]),
  },

  methods: {
    ...mapActions(["getAvailableTimes"]),
    test123: function() {
      this.getAvailableTimes(document.getElementById("date").value);
      document.getElementById("knap").value = document.getElementById(
        "date"
      ).value;
    },
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

<style scoped>
div.time {
  border-radius: 50px;
  text-align: center;
  width: 60px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.137);
}
</style>
