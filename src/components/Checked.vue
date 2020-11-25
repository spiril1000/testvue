<template>
  <div>
    <div v-for="(service, key) in CheckedServices" :key="key">
      {{ service.Title }}
    </div>
    <div>
      {{ CheckedServices.length ? price : "0.00" }}
    </div>
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
  },
};
</script>

<style>
</style>