<template>
  <div>
    <div class="card" v-if="Services">
      <div :key="key" v-for="(service, key) in Services">
        <h3>{{ service.Title }} --- {{ service.Description }}</h3>
        <h4>{{ service.Duration }} minutter - {{ service.Price }}kr.</h4>
      </div>
    </div>
    <div class="card" v-if="Products">
      <div :key="key" v-for="(product, key) in Products">
        <h3>{{ product.Brand }} --- {{ product.Title }}</h3>
        <h4>{{ product.Description }} - {{ product.RetailPrice }}kr.</h4>
      </div>
    </div>
    <div class="card" v-if="Employees">
      <div :key="key" v-for="(employee, key) in Employees">
        <h3>{{ employee.FirstName }} --- {{ employee.LastName }}</h3>
        <h4>{{ employee.Experience }} - {{ employee.Biography }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  name: "Booking",
  mounted() {
    this.getServices();
    this.getProducts();
    this.getEmployees();
  },
  methods: {
    ...mapActions(["getServices", "getProducts", "getEmployees"]),
  },
  computed: {
    ...mapGetters(["Services", "Employees", "Products"]),
  },
};
</script>

<style></style>
