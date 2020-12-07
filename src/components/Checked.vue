<template>
  <div class="checkout">
    <div v-if="CheckedServices.length > 0">
      <div v-for="(service, key) in CheckedServices" :key="key">
        {{ service.Title }}
      </div>
      <div>{{ CheckedServices ? CheckedServicePrice : "0.00" }} kr</div>
      <div>{{ CheckedServices ? CheckedServiceDuration : "0.00" }}</div>
    </div>
    <div v-if="CheckedProducts.length > 0">
      <div v-for="(product, key) in CheckedProducts" :key="key">
        {{ product.Title }}
      </div>
      <div>{{ CheckedProducts ? CheckedProductPrice : "0.00" }}</div>
    </div>
    <div v-if="CheckedEmployees != null">
      {{ CheckedEmployees.FirstName }}
      <!-- <div>{{ CheckedEmployees ? CheckedProductPrice : "0.00" }}</div> -->
    </div>
    <div v-if="CheckedEvents != null">
      {{ CheckedEvents.StartTime }}

      <!-- <div>{{ CheckedEmployees ? CheckedProductPrice : "0.00" }}</div> -->
    </div>
    <div>{{ this.$store.state.checkedTime }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "CheckedServices",
      "CheckedProducts",
      "CheckedEmployees",
      "CheckedServicePrice",
      "CheckedServiceDuration",
      "CheckedProductPrice",
      "CheckedEvents",
    ]),
    // price() {
    //   return this.CheckedServices.map((element) => {
    //     return element.Price;
    //   }).reduce((a, b) => a + b);
    // },
    // duration() {
    //   return this.CheckedServices.map((element) => {
    //     return parseInt(element.Duration);
    //   }).reduce((a, b) => a + b);
    // },
    // retailprice() {
    //   return this.CheckedProducts.map((element) => {
    //     return parseFloat(element.RetailPrice);
    //   }).reduce((a, b) => a + b);
    // },
  },
};
</script>

<style scoped>
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
