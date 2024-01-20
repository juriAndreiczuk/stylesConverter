import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app
  .use(createPinia())
  .use(VueQueryPlugin)
  .mount('#app')
