import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'material-icons/iconfont/material-icons.css';

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
