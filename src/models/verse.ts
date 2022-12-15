import { BaseModel } from '~/store/store.pinia'
import type { Note } from '~/models/note'

export class Verse extends BaseModel {
  id?: number
  verse: string
  verseText: string
  notes: Note[]

  constructor(data: Partial<Verse> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}
