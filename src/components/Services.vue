<template>
  <div class="card" v-if="Services">
    <div :key="key" v-for="(service, key) in Services">
      <div class="blok">
        <p id="Title">{{ service.Title }}</p>
        <p id="Duration">{{ service.Duration }} minutter</p>
        <p id="Price">{{ service.Price }}kr.</p>
      </div>
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
#Title {
  margin: 0px;
  border: 1px solid;
}
#Duration {
  margin: 10px;
  border: 1px solid;
  padding: 5px;
}
#Price {
  margin: 10px;
  border: 1px solid;
  padding: 5px;
}
.blok {
  margin-block-end: 20px;
  color: black;
  display: flex;
}
</style>
