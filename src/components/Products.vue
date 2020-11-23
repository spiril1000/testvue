<template>
  <div class="card" v-if="Products">
    <div :key="key" v-for="(product, key) in Products">
      <h3 id="Title">{{ product.Title }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  computed: {
    ...mapGetters(["Products"]),
  },
};
</script>

<style></style>
