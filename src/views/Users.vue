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
  // data() {
  //   return {
  //     Users: [],
  //   };
  // },
  computed: {
    ...mapGetters(["Users"])
  },
  mounted() {
    this.getUsers();

    // this.Users = this.$store.getters.Users;
    
    // fetch(this.$store.state.baseadress + "users", {
    //   headers: {
    //     Authorization: "Bearer " + sessionStorage.getItem("Token"),
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => (this.Users = data));
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
