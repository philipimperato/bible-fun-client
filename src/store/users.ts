import { api } from '../feathers'
import { BaseModel, defineStore } from './store.pinia'

export class User extends BaseModel {
  id?: number
  email: string
  status: string

  constructor(data: Partial<User> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}

const servicePath = 'users'
export const useUsers = defineStore({ servicePath, Model: User })

api.service(servicePath).hooks({})
