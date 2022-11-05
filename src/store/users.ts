import { api } from '../feathers'
import { BaseModel, defineStore } from './store.pinia'

export class User extends BaseModel {
  constructor(data: Partial<User> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}

const servicePath = 'users'
export const useUsers = defineStore({ servicePath, Model: User, actions: { testing() {} } })

api.service(servicePath).hooks({})
