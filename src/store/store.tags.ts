import { defineStore } from './store.pinia'
import { Tag } from '~/models/tag'

export const useTags = () => {
  const { api } = useFeathers()
  const servicePath = 'tags'

  const useStore = defineStore({
    servicePath,
    Model: Tag,
    state() {
      return {}
    },
    getters: {},
    actions: {},
  })
  const store = useStore(pinia)

  api.service(servicePath).hooks({})

  return {
    tagStore: store,
    Tag: Tag as typeof store.Model,
  }
}
