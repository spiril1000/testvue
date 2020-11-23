<template>
  <div class="card" v-if="Services">
    <div :key="key" v-for="(service, key) in Services">
      <h3 id="Title">{{ service.Title }}</h3>
      <h4>{{ service.Duration }} minutter - {{ service.Price }}kr.</h4>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.getServices();
  },
  methods: {
    ...mapActions(["getServices"]),
  },
  computed: {
    ...mapGetters(["Services"]),
  },
};
</script>

<style>
h3#Title {
  text-align: center;
  color: black;
}
</style>
