<template>
  <div>
    <div>
      <form>
        <input v-model="email" type="text" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input type="submit" value="Login" @click="Login" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return { email: "", password: "" };
  },

  methods: {
    Login() {
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

      fetch("https://localhost:44382/api/token", requestOptions)
        .then((response) => response.json())
        .then((result) => sessionStorage.setItem("Token", result.access_token))
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