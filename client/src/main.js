import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'  // imports and allows VueRouter library from vue-router dependency to be used
import router from './router'  // imports and allows router variable from router/index.js file to be used

import BootstrapVue from 'bootstrap-vue'  // imports and allows BootstrapVue library from bootstrap-vue dependency to be used
import StateAPIService from '@/services/stateService'  // imports and allows StateAPIService variable (the api service) from services/stateService.js file to be used

// config for Vue Router
Vue.use(VueRouter)

// config for Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// adds the API service to the Vue prototype
Vue.prototype.$stateService = StateAPIService

// adds Leaflet's css 
import 'leaflet/dist/leaflet.css'

new Vue({
  render: h => h(App),
  router  /* includes the routes creates in the rendering of the app */
}).$mount('#app')
