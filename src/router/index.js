import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Users from "../views/Users";
import Home from "../views/Home";
import Register from "../views/Register";
import Services from "../views/Services";
import Products from "../views/Products";
import Employees from "../views/Employees";
import Events from "../views/Events";
import Checkout from "../views/Checkout";
import UserPage from "../views/UserPage";

Vue.use(VueRouter);

// https://router.vuejs.org/guide/

const routes = [
  {
    path: "/Booking/Checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/UserPage",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/Booking/Events",
    name: "Events",
    component: Events,
  },
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
    component: Services,
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
