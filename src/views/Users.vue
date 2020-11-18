<template>
<div v-if="Users.length > 0">
<div :key="key" v-for="(user,key) in Users">
    <h3>
        {{user.FirstName}} {{user.LastName}}
    </h3>
    
    <h4>
        {{user.Email}} - {{user.PhoneNo}}
    </h4>
</div>
</div>
</template>


<script>
export default {
    name: "Users",
    data(){
        return {
            Users: []
        }
    },
     mounted() {
         fetch(this.$store.state.baseadress + "users", {
             headers: {
                 'Authorization': 'Bearer ' + sessionStorage.getItem("Token")
             }
         })
  .then(response => response.json())
  .then(data => this.Users = data);

  }
};

</script>


<style>
h4 {
    display: block;
    text-align: center;
    margin-block: 10px;
}
</style>