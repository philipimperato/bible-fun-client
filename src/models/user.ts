import { BaseModel } from '~/store/store.pinia'

export class User extends BaseModel {
  id?: number
  email: string
  status: string

  constructor(data: Partial<User> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}