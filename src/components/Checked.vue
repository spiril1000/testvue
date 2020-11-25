<template>
  <div>
    <div v-for="(service, key) in CheckedServices" :key="key">
      {{ service.Title }}
    </div>
    <div>{{ CheckedServices ? price : "0.00" }} kr</div>
    <div>{{ CheckedServices ? duration : "0.00" }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["CheckedServices"]),
    price() {
      return this.CheckedServices.map((element) => {
        return element.Price;
      }).reduce((a, b) => a + b);
    },
    duration() {
      return this.CheckedServices.map((element) => {
        return element.Duration;
      }).reduce((a, b) => a + b);
    },
  },
};
</script>

<style>
</style>