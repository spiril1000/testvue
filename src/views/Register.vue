<template>
  <div>
    <form @submit.prevent="Register" method="Register">
      <label for="email">Email</label>
      <input
        v-model="email"
        placeholder="name@mail.com "
        id="email"
        type="text"
      />
      <label for="password">Adgangskode</label>
      <input
        v-model="password"
        placeholder="Password"
        id="password"
        type="password"
      />
      <label for="firstName">Fornavn</label>
      <input
        v-model="firstName"
        placeholder="Anne"
        id="firstName"
        type="text"
      />
      <label for="lastName">Efternavn</label>
      <input
        v-model="lastName"
        placeholder="Merete Jensen"
        id="lastName"
        type="text"
      />
      <label for="phoneNo">Mobilnummer</label>
      <input
        v-model="phoneNo"
        placeholder="21805578"
        id="phoneNo"
        type="text"
      />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "../axios/index.js";

export default {
  name: "Register",
  data: function () {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNo: "",
    };
  },

  methods: {
    ...mapMutations(["setUser", "setToken"]),
    Register() {
      var user = JSON.stringify({
        FirstName: this.firstName,
        LastName: this.lastName,
        Email: this.email,
        PhoneNo: this.phoneNo,
        Password: this.password,
      });
      axios.post("/users", user);
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
