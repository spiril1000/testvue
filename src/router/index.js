import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Users from "../views/Users";
import Home from "../views/Home";
import Register from "../views/Register";
import Booking from "../views/Booking";

Vue.use(VueRouter);

// https://router.vuejs.org/guide/


const routes = [
  {
    path: "/Booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
      path: "/Users",
      name: "Users",
      component: Users,

  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;