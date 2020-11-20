<template>
  <div id="App">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    GetToken() {
      console.log(sessionStorage.getItem("Token"));
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
#App {
  /* Background */
  background-image: url("./assets/HQ.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100;
}
</style>
