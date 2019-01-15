import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
import VueSelect from 'vue-select'



Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VModal, { dialog: true, clickToClose: false })
Vue.component('v-select', VueSelect)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
