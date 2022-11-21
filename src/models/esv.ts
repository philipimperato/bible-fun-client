import { BaseModel } from '~/store/store.pinia'

export class ESV extends BaseModel {
  id?: number
  passages: Array<any>

  constructor(data: Partial<ESV> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }
}
