import type { Verse } from './verse'
import { BaseModel } from '~/store/store.pinia'

export class Chapter extends BaseModel {
  id?: number
  bookId: number
  chapterId: number
  chapter: number
  name: string
  verses: Verse[]

  constructor(data: Partial<Chapter> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}
