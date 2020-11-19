<template>
  <div class="card"></div>
</template>

<script>
export default {
  components: {},
  mounted() {
    const myPromise = new Promise(this.getAll)
      .then(handleFulfilledA)
      .then(handleFulfilledB)
      .then(handleFulfilledC)
      .catch(handleRejectedAny);
  },
  methods: {},
};
</script>

<style></style>
