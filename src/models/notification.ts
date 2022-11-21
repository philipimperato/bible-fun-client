import { BaseModel } from '~/store/store.pinia'

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
