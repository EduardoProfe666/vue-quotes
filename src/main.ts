import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Toaster } from 'vue-sonner'
import './style.css'
import App from './App.vue'
import PhosphorIcons from "@phosphor-icons/vue"

const app = createApp(App)
app.use(createPinia())
app.component('Toaster', Toaster)
app.use(PhosphorIcons)
app.mount('#app')