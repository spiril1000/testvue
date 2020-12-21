<template>
  <div class="card" v-if="Employees">
    <div class="flex-container">
      <div :key="key" v-for="(employee, key) in Employees">
        <div>
          <div>{{ employee.FirstName }}</div>
          <div>{{ employee.Biography }}</div>
        </div>
        <input
          type="radio"
          name="selected"
          :value="employee"
          v-model="pickedEmployee"
          v-on:input="selectEmployee"
        />
      </div>
      <Checked />
    </div>
    <router-link to="/Booking/Events">Next, i think</router-link>
    <router-link to="/Booking/Products">Back, i think</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Checked from "../components/Checked.vue";
export default {
  components: { Checked },
  props: ["pickedEmployee"],
  methods: {
    ...mapActions(["getEmployees"]),
    selectEmployee: function() {
      this.$store.commit("setEmployee", this.$props.pickedEmployee);
    },
  },
  computed: {
    ...mapGetters(["Employees"]),
  },
  mounted() {
    this.getEmployees();
  },
  pickedEmployee: {
    get() {
      return this.$store.state.employee;
    },
    set(value) {
      this.$store.commit("setEmployee", value);
    },
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
  line-height: 25px;
  /* font-size: 30px; */
}
</style>
