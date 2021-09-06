import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store.js"
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'

 
Vue.use(VueAxios, axios)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
