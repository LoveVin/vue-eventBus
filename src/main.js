import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let eventBus = new Vue()
Object.defineProperty(Vue.prototype,'$eventBus',{
  get(){
    return eventBus
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
