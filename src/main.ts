import generatedRoutes from 'virtual:generated-pages'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { pinia } from './store/store.pinia'
import App from './App.vue'
import { useAuthStore } from '~/store/store.auth'
// import { useUserStore } from '~/store/store.users'

// your custom styles here
import './styles/tailwind.css'
import './styles/main.css'

const head = createHead()
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore()

  if (to.name !== 'login' && !isAuthenticated)
    next({ name: 'login' })
  else if (to.name === 'login' && isAuthenticated)
    next({ name: 'dashboard' })
  else
    next()
})

const { reAuthenticate } = useAuthStore()

reAuthenticate()
  .catch((e: any) => {
    console.log(e)
    localStorage.removeItem('feathers-jwt')
    router.push('login')
  })
  .then(() => {
    createApp(App)
      .use(pinia)
      .use(head)
      .use(router)
      .mount('#app')
  })
