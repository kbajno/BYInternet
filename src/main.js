import Vue from 'vue'
import VFC from 'vfc'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

Vue.use(VFC)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
