<template>
  <div class="card" v-if="Products">
    <h1>Booking / Products</h1>
    <div class="container">
      <div class="productoverview">
        <table>
          <thead>
            <tr>
              <th class="chevron"></th>
              <th class="brand">Mærke</th>
              <th class="title">Navn</th>
              <th class="description"></th>

              <th class="price">Pris</th>
              <th class="checkbox"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="tablerow" v-for="(product, key) in Products" :key="key">
              <td
                style="width: 25px"
                @click="product.visible = !product.visible"
              >
                <span v-show="product.visible">
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
                <span v-show="!product.visible">
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
                {{ product.Title }}
                <div v-show="product.visible">
                  {{ product.Description }}, {{ product.Gender }}
                </div>
              </td>
              <td>{{ product.RetailPrice }} kr</td>
              <td>
                <input
                  type="checkbox"
                  name="selected"
                  id=""
                  v-model="product.checked"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="checkout">
        <Checked />
      </div>
    </div>
    <router-link to="/Booking/Services">Back, i think</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Checked from "../components/Checked.vue";

export default {
  components: { Checked },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  computed: {
    ...mapGetters(["Products"]),
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
.productoverview {
  width: 80%;
  /* Right Border */
  padding-right: 100px;
  border-right: 1px dashed;
  margin-right: 50px;
}
th.chevron {
  width: 25px;
}
th.product {
  text-align: left;
  width: 100%;
}
th.title {
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
