import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Users from "../views/Users";
import Home from "../views/Home";
import Register from "../views/Register";
import Booking from "../views/Booking";
import Services from "../components/Services";
import Products from "../components/Products";
import Employees from "../components/Employees";

Vue.use(VueRouter);

// https://router.vuejs.org/guide/

const routes = [
  {
    path: "/Booking/Employees",
    name: "Employees",
    component: Employees,
  },
  {
    path: "/Booking/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/Booking/Services",
    name: "Services",
    component: Services,
  },
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
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
