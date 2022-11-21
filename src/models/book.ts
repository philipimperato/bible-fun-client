import { BaseModel } from '~/store/store.pinia'

export class Book extends BaseModel {
  id?: number
  name: string
  testament: string

  constructor(data: Partial<Book> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}
