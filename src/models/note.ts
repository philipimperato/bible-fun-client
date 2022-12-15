import { BaseModel } from '~/store/store.pinia'

export class Note extends BaseModel {
  id?: string
  userId: number
  note: string
  createdAt: string

  constructor(data: Partial<Note> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}
