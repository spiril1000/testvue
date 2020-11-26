<template>
  <div>
    <div v-if="CheckedServices.length > 0">
      <div class="checkout">
        <div
          v-for="(service, product, key) in (CheckedServices, CheckedProducts)"
          :key="key"
        >
          {{ service.Title }}
        </div>
        <div>{{ CheckedServices ? price : "0.00" }} kr</div>
        <div>{{ CheckedServices ? duration : "0.00" }}</div>
        <div>{{ CheckedProducts ? retailprice : "0.00" }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["CheckedServices"], ["CheckedProducts"]),
    price() {
      return this.CheckedServices.map((element) => {
        return element.Price;
      }).reduce((a, b) => a + b);
    },
    duration() {
      return this.CheckedServices.map((element) => {
        return parseInt(element.Duration);
      }).reduce((a, b) => a + b);
    },
    retailprice() {
      return this.CheckedProducts.map((element) => {
        return element.RetailPrice;
      }).reduce((a, b) => a + b);
    },
  },
};
</script>

<style>
.checkout {
  background-color: rgba(255, 255, 255, 0.459);
  width: 20%;
  height: 100%;
  margin: 5px auto;
  border-radius: 50px;
  box-shadow: 0px 0px 20px 0px rgb(0, 0, 0.2);
  padding: 100px;
}
</style>