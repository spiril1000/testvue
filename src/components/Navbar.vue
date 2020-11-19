<template>
  <header>
    <nav>
      <a id="" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          id="logo"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
      <ul>
        <li><router-link to="/Users">Users</router-link></li>
        <li><router-link to="/Booking">Booking</router-link></li>
        <li><a href="/">Link</a></li>
        <li><a href="/">Link</a></li>
        <li><a href="/">Link</a></li>
      </ul>
      <ul id="login">
        <li><router-link to="/Login">Login</router-link></li>
        <li><router-link to="/Register">Register</router-link></li>

      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

// scoped!
<style scoped>
header {
  background-color: #333;
  height: 50px;
  width: 100%;
  color: #ffffff;
}
header nav {
  display: flex;
  align-items: center;
  height: 100%;
  width: 1000px;
  margin: 0 auto;
}
#logo {
  font-weight: bold;
  padding: 0 20px;
  height: 30px;
  font-size: 2rem;
  color: #fff;
}
header > nav > ul {
  margin: 0;
  list-style: none;
  display: flex;
  height: 100%;
  align-items: center;
}
header > nav > ul > li {
  height: 100%;
  line-height: 40px;
}
li > a {
  color: #ddd;
  padding: 0 20px;
  display: block;
  height: 100%;
}
li:hover {
  background-color: #444;
}
li a:hover {
  color: #fff;
}
ul#login {
  margin-left: auto;
}
@media (max-width: 800px) {
  header {
    height: 300px;
  }
  header nav {
    display: flex;
    flex-direction: column;
  }
}
</style>