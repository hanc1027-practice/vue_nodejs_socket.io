import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true, //Browser console可以看到
    connection: 'http://127.0.0.1:8001',
    vuex: {
        store,
        actionPrefix: 'SOCKET_', //為vuex設定的兩個字首
        mutationPrefix: 'SOCKET_'
    },
}))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
