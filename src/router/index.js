import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Users from "../views/Users";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
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