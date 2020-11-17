<template>
  <div id="app">
    <div>
      <h1>
        HairForceOne
      </h1>
      <h2>
        Login
      </h2>
      <div>
      </div>
      <input type="button" value="Token" @click="GetToken">
      <login/>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login";
import Users from './components/Users.vue';

export default {
  name: 'App',
  components: {
    Login,
    Users
  },
  methods: {
    GetToken(){
      console.log(sessionStorage.getItem('Token'))
    }
  }
}
  
    Login  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
