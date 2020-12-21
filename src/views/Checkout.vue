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
import { mapGetters } from "vuex";

export default {
  components: {
    Checked,
  },
  methods: {
    booktime: async function() {
      console.log(this.CheckedTime);
      var booking = {
        starttime: this.CheckedTime + ":00",
        services: this.CheckedServices,
        products: this.CheckedProducts,
        employeeId: this.$store.state.employee.EmployeeId,
        duration: this.CheckedServiceDuration,
        totalprice: this.CheckedProductPrice + this.CheckedServicePrice,
        comment: "Dette er en booking fra web klienten.",
        userId: this.$store.state.user.UserId,
      };
      await axios.post("/bookings", booking);
      this.$router.push("/UserPage");
    },
  },
  computed: {
    ...mapGetters([
      "CheckedTime",
      "AvailableTimes",
      "CheckedServices",
      "CheckedProducts",
      "CheckedEmployees",
      "CheckedServicePrice",
      "CheckedServiceDuration",
      "CheckedProductPrice",
    ]),
  },
};
</script>

<style></style>
