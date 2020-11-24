<template>
  <div>
    <!-- <button @click="getUsers">tryk</button> -->
    <div class="card" v-if="Users">
      <div :key="key" v-for="(user, key) in Users">
        <h3>{{ user.FirstName }} {{ user.LastName }}</h3>

        <h4>{{ user.Email }} - {{ user.PhoneNo }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["getUsers"]),
  },
  components: {},
  name: "Users",

  computed: {
    ...mapGetters(["Users"]),
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style>
h4 {
  display: block;
  text-align: center;
  margin-block: 10px;
}
h3 {
  color: blue;
}
</style>
