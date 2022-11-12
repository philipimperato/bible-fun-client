import ObjectId from 'bson-objectid'
import { syncWithStorage } from 'feathers-pinia'
import { api } from '../feathers'
import { BaseModel, defineStore } from './store.pinia'

interface NotificationData {
  type: 'success' | 'info' | 'error'
  title: string
  msg: string
}

export class Notification extends BaseModel {
  id?: string
  type: string
  msg: string
  title: string

  constructor(data: Partial<Notification> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
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
