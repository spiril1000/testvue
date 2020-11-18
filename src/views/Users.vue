<template>
<div v-if="Users.length > 0">
<div :key="key" v-for="(user,key) in Users">
    <h3>
        {{user.FirstName}} {{user.LastName}}
    </h3>
</div>
</div>
</template>


<script>
//  import * as http from "http";
export default {
    name: "Users",
    data(){
        return {
            Users: []
        }
    },
     mounted() {
         fetch('https://localhost:44382/api/users', {
             headers: {
                 'Authorization': 'Bearer ' + sessionStorage.getItem("Token")
             }
         })
  .then(response => response.json())
  .then(data => this.Users = data);

//      http.getJSON("https://localhost:44382/api/users").then(result => {
//   this.Users = result;
// }, error => {
//   console.log(error);
// });
  }
};

</script>


<style>

</style>