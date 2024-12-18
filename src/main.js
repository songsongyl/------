import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './bootstrap-5.3.0-dist/css/bootstrap.min.css';
import Vant from 'vant'
import 'vant/lib/index.css'
const app = createApp(App)
app.use(router)
app.use(AntDesignVue)
app.use(ElementPlus)
app.use(Vant)
app.mount('#app')