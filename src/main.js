import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
// Normalizes the css to ignore browser default css
import "modern-normalize";
import "./assets/css/global.css";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  
  render: h => h(App),
  
}).$mount('#app')
