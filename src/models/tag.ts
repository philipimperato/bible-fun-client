import { BaseModel } from '~/store/store.pinia'

export class Tag extends BaseModel {
  id?: string
  userId: number
  verseId: string
  text: string
  bgColor: string
  textColor: string

  constructor(data: Partial<Tag> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}
