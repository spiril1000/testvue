<template>
  <div class="card" v-if="Services">
    <h1>Booking / Services</h1>
    <div class="container">
      <div class="serviceoverview">
        <table>
          <thead>
            <tr>
              <th class="chevron"></th>
              <th class="service">Service</th>
              <th class="duration">Tid</th>
              <th class="price">Pris</th>
              <th class="checkbox"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="tablerow" v-for="(service, key) in Services" :key="key">
              <td
                style="width: 25px"
                @click="service.visible = !service.visible"
              >
                <span v-show="service.visible">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="25px"
                    height="25px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <span v-show="!service.visible">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="25px"
                    height="25px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </td>
              <td>
                {{ service.Title }}
                <div v-show="service.visible">{{ service.Description }}</div>
              </td>
              <td>{{ service.Duration }} min</td>
              <td>{{ service.Price }} kr</td>
              <td>
                <input
                  type="checkbox"
                  name="selected"
                  id=""
                  v-model="service.checked"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Checked />
    </div>
    <router-link to="/Booking/Products">Next, i think</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Checked from "../components/Checked.vue";
export default {
  components: {
    Checked,
  },
  mounted() {
    // if (this.$store.services.length < 0) {
    this.getServices();
    // }
  },
  methods: {
    ...mapActions(["getServices"]),
  },
  computed: {
    ...mapGetters(["Services"]),
  },
};
</script>

<style scoped>
.tablerow {
  border: 1px solid black;
  /* border-bottom: 2px solid black; */
}
.container {
  display: flex;
}
.serviceoverview {
  width: 80%;
  /* Right Border */
  padding-right: 100px;
  border-right: 1px dashed;
  margin-right: 50px;
}

th.chevron {
  width: 25px;
}
th.service {
  text-align: left;
  width: 100%;
}
th.duration {
  width: 80px;
}
th.price {
  width: 80px;
}
th.checkbox {
  width: 25px;
}
table {
  table-layout: fixed;
  width: 100%;
}
thead {
  margin: auto;
}
</style>
