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

const app = createApp(App)
app.use(pinia)
app.use(head)
app.use(router)
app.mount('#app')

// useSnacks(pinia)

// store.$subscribe((mutation, state) => {
//   for (const { id, type, msg } of Object.values(state.itemsById)) {
//     console.log(type, msg)
//     store.removeFromStore({ id })
//   }
// })

