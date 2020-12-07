<template>
  <div class="card">
    <input type="date" id="date" @blur="test123" />
    <div class="test">
      <div
        v-for="(availabletime, key) in AvailableTimes"
        :key="key"
        class="time"
      >
        <input
          type="radio"
          name="radiotimes"
          :id="'time-' + key"
          :value="availabletime"
          v-model="checkedTime"
        />
        <label :for="'time-' + key">{{ availabletime }}</label>
      </div>
    </div>
    <checked />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "../axios/index.js";
import dayjs from "dayjs";
import checked from "./Checked";
export default {
  components: {
    checked,
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
  mounted() {
    var time = new dayjs();

    this.getAvailableTimes(time);
    document.getElementById("date").min = new Date().toISOString();
    // this.getEvent();
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
    checkedTime: {
      get() {
        return this.$store.state.checkedTime;
      },
      set(value) {
        this.$store.commit("setCheckedTime", value);
      },
    },
  },
};
</script>

<style scoped>
div.time {
  border-radius: 50px;
  text-align: center;
  width: auto;
  padding: 5px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.336);
  display: inline-flex;
  box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.27);
}
input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  background-color: red;
}
</style>
