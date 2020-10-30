import Vue from 'vue'
import App from './App.vue'

import VueFormulate from '@braid/vue-formulate'
Vue.use(VueFormulate)

// use tailwind's css file
import './assets/styles/index.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
