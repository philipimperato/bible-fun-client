import generatedRoutes from 'virtual:generated-pages'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { pinia } from './store/store.pinia'
import App from './App.vue'

// your custom styles here
import './styles/tailwind.css'
import './styles/main.css'

const head = createHead()
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(pinia)
  .use(head)
  .use(router)
  .mount('#app')

