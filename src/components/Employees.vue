<template>
  <div class="card" v-if="Employees">
    <div class="flex-container">
      <div :key="key" v-for="(employee, key) in Employees">
        <div>
          <h3>{{ employee.FirstName }}</h3>
          <h3>{{ employee.Biography }}</h3>
        </div>
      </div>
      <Checked />
    </div>
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
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 40%;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
