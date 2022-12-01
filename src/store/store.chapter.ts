import { defineStore } from './store.pinia'
import { Chapter } from '~/models/chapter'

export const useChapterStore = () => {
  const { api } = useFeathers()
  const servicePath = 'chapters'

  const useStore = defineStore({
    servicePath,
    Model: Chapter,
    state() {
      return {}
    },
    getters: {},
    actions: {},
  })
  const store = useStore(pinia)

  api.service(servicePath).hooks({})

  return {
    chapterStore: store,
    Chapter: Chapter as typeof store.Model,
  }
}
