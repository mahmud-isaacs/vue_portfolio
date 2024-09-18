import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(store)
app.use(router)

// Initialize AOS
AOS.init()

app.mount('#app')
