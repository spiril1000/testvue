<template>
  <div class="card" v-if="Employees">
    <div :key="key" v-for="(employee, key) in Employees">
      <h3>{{ employee.FirstName }}</h3>
      <h3>{{ employee.Biography }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["getEmployees"]),
  },
  computed: {
    ...mapGetters(["Employees"]),
  },
  mounted() {
    this.getEmployees();
  },
};
</script>

<style></style>
