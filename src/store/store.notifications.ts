import ObjectId from 'bson-objectid'
import { syncWithStorage } from 'feathers-pinia'
import { api } from '../feathers'
import { defineStore } from './store.pinia'
import { Notification } from '~/models/notification'

interface NotificationData {
  type: 'success' | 'info' | 'error'
  title: string
  msg: string
}

const servicePath = 'notifications'
export const useNotifications = defineStore({
  servicePath,
  Model: Notification,

  actions: {
    add: (data: NotificationData) => {
      const store = useNotifications()
      const id = ObjectId().toHexString()

      store.addToStore({ id, ...data })
    },
  },
})

const store = useNotifications()
export const addSnack = store.add

syncWithStorage(store, ['itemsById'])
api.service(servicePath).hooks({})
