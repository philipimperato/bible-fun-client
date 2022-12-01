import { BaseModel } from '~/store/store.pinia'

export class Verse extends BaseModel {
  id?: number
  verse: string
  verseText: string

  constructor(data: Partial<Verse> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}
