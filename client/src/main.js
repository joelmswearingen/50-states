import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'  // imports and allows bootstrap to be used

import StateAPIService from '@/services/stateService'  // imports and allows api service to be used

// config for Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// adds the API service to the Vue prototype
Vue.prototype.$stateService = StateAPIService


new Vue({
  render: h => h(App),
}).$mount('#app')
