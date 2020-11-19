<template>
  <div>
    <form @submit.prevent="Login">
      <label for="email">Email</label>
      <input v-model="email" placeholder="name@mail.com " id="email" type="text" />
      <label for="password">Password</label>
      <input v-model="password" placeholder="Password" id="password" type="password" />
      <label for="husk">Husk mig</label>
      <input type="checkbox" name="Husk mig" id="husk" />
      <button type="submit">Login</button>
    </form>
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
form {
  /* border: 1px solid black; */
  /* background-color: #eee; */
  padding: 20px;
  width: 300px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.95);
}
form label {
  display: block;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #333;
}
form input {
  display: block;
}
form input[type="text"],
form input[type="password"] {
  outline: none;
  text-align: center;
  margin: 0 auto;
  border-radius: 15px;
  border: 2px solid rgba(11, 11, 11, 0.1);
  padding: 5px 10px;
}
form input[type="text"]:focus-within,
form input[type="password"]:focus-within {
  border-bottom: 2px solid #555;
}
</style>