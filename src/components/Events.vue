<template>
  <div class="card" v-if="Events">
    <div :key="key" v-for="(event, key) in events">
      <div>
        <div>{{ event.From }}</div>
        <div>{{ event.To }}</div>
        <div>{{ event.Available }}</div>
        <div>{{ event.StartTime }}</div>
        <div>{{ event.BookedDate }}</div>
      </div>
      <input type="checkbox" name="selected" id="" v-model="employee.checked" />
    </div>
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
  methods: {
    ...mapActions(["GetEvents"]),
    ...mapActions(["getAvailableTimes"]),
    test123: function () {
      this.getAvailableTimes(document.getElementById("date").value);
      document.getElementById("knap").value = document.getElementById(
        "date"
      ).value;
    },
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
  mounted() {
    document.getElementById("date").min = new Date().toISOString();
    this.getEvent();
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
      "Events",
    ]),
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
