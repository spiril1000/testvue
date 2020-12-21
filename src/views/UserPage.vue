<template>
  <div class="card">
    <h1 v-if="this.$store.state.user != null">
      Velkommen {{ this.$store.state.user.FirstName }}
    </h1>
    <h2>Her er dine Bookinger</h2>
    <div :key="key" v-for="(booking, key) in UserBookings">
      <div>
        <h3>Tidspunkt</h3>
        <div>{{ booking.StartTime }}</div>
        <h3>Længde</h3>
        <div>{{ booking.Duration }} min</div>
        <h3>Pris</h3>
        <div>{{ booking.TotalPrice }} kr.</div>
      </div>
      <input type="button" value="Annuller" v-on:click="cancel(booking)" />
    </div>
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
  name: "UserPage",
  mounted() {
    this.getUserBookings();
  },
  methods: {
    ...mapActions(["getUserBookings", "cancelBooking"]),
    cancel: function(booking) {
      this.cancelBooking(booking);
    },
  },
  computed: {
    ...mapGetters(["UserBookings"]),
  },
};
</script>

<style></style>
