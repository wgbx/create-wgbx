import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import 'modern-css-reset'
import 'virtual:svg-icons-register'

createApp(App).use(router).use(pinia).mount('#app')
