## 透過Socket使用Vue+node.js
此專案可讓資料於前後端互相傳送

### 後端node.js server
- [參考原碼](./Server/index.js)
- socket.emit：發送值
- socket.on：接收值

1) 需先安裝socket.io
```bash
$ npm install --save socket.io
```

2) 啟動Server
```bash
# 二擇一
$ node index.js
$ npm run start
```

### 前端Vue.js
- [參考原碼](./test_vue_socketio/src/views/Home.vue)

1) 建立Vue專案
```bash
$ vue create [專案名]
$ cd [專案名]
$ npm install vue-socket.io
```

2) Socket.ios設定
- main.js設定如下
```js
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

```

3) 啟動Vue serve
```bash
$ npm run serve
```


> 上面的步驟都完成後，就可以讓前後端互通資料了!  
基本上，後端的port為8001, 前端為8080