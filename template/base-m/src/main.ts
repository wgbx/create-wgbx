import 'modern-css-reset'
import { createApp } from 'vue'
import App from './App.vue'
import './lib/asyncVConsole'
import router from './router'
import pinia from './store'
import 'virtual:svg-icons-register'

createApp(App).use(router).use(pinia).mount('#app')
