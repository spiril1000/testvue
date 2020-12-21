<template>
  <div class="checkout">
    <div v-if="CheckedServices.length > 0">
      <div class="checkoutheader">Services</div>
      <div v-for="(service, key) in CheckedServices" :key="key">
        {{ service.Title }}
      </div>
      <div>{{ CheckedServices ? CheckedServicePrice : "0.00" }} kr</div>
      <div>{{ CheckedServices ? CheckedServiceDuration : "0.00" }}</div>
    </div>
    <div v-if="CheckedProducts.length > 0">
      <div class="checkoutheader">Produkter</div>
      <div v-for="(product, key) in CheckedProducts" :key="key">
        {{ product.Title }}
      </div>
      <div>{{ CheckedProducts ? CheckedProductPrice : "0.00" }}</div>
    </div>
    <div v-if="this.$store.state.employee != null">
      <div class="checkoutheader">Medarbejder</div>
      {{ this.$store.state.employee.FirstName }}
      <!-- <div>{{ CheckedEmployees ? CheckedProductPrice : "0.00" }}</div> -->
    </div>
    <div v-if="this.$store.state.checkedTime != null">
      <div class="checkoutheader">Valgt tid</div>
      <!-- <div>{{ CheckedEmployees ? CheckedProductPrice : "0.00" }}</div> -->
    </div>
    <div>
      {{ this.$store.state.checkedTime }}
      {{ this.$store.state.selecteddate }}
    </div>
    <div v-if="CheckedProducts.length && CheckedServices.length > 0">
      <div>{{ 0 + CheckedServicePrice + CheckedProductPrice }}</div>
    </div>
    <!-- <div>{{ CheckedTotalPrice }}</div> -->
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
      "Employee",
      // "CheckedTotalPrice",
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
  width: 40%;
  height: 50%;
  margin: 5px auto;
  border-radius: 50px;
  box-shadow: 0px 0px 20px 0px rgb(0, 0, 0.2);
  padding: 100px;
  line-height: 20px;
}
.checkoutheader {
  color: red;
}
</style>
