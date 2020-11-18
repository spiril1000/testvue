<template>
  <div>
    <div>
      <h3>Login</h3>
      <form>
        <input v-model="email" type="text" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input type="button" value="Login" @click="Login" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data: function () {
    return { email: "", password: "" };
  },

  methods: {
    ...mapMutations(["setUser", "setToken"]),
    Login() {
      var vm = this
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("username", this.email);
      urlencoded.append("password", this.password);
      urlencoded.append("grant_type", "password");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch(this.$store.state.baseadress + "token", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if (result.access_token != null) {
            sessionStorage.setItem("Token", result.access_token);
            vm.$router.push("/Users");
          }
          
          
        }) 
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>