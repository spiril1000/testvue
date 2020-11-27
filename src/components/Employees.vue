<template>
  <div class="card" v-if="Employees">
    <div class="flex-container">
      <div :key="key" v-for="(employee, key) in Employees">
        <div>
          <div>{{ employee.FirstName }}</div>
          <div>{{ employee.Biography }}</div>
        </div>
        <input
          type="checkbox"
          name="selected"
          id=""
          v-model="employee.checked"
        />
      </div>
      <Checked />
    </div>
    <router-link to="/Booking/Events">Next, i think</router-link>
    <router-link to="/Booking/Products">Back, i think</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Checked from "../components/Checked.vue";
export default {
  components: { Checked },
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

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-container > div {
  width: 30%;
  height: 30%;
  padding: 10px;
  text-align: center;
  line-height: 75px;
  /* font-size: 30px; */
}
</style>
