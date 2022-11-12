import { createPinia, setActivePinia } from 'pinia'
import { setupFeathersPinia } from 'feathers-pinia'
import { api } from '../feathers'

export const pinia = createPinia()
setActivePinia(pinia)

export const { defineStore, BaseModel } = setupFeathersPinia({
  clients: { api },
  idField: 'id',
})
