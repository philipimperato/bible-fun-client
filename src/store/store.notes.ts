import { defineStore } from './store.pinia'
import { Note } from '~/models/note'

export const useNoteStore = () => {
  const { api } = useFeathers()
  const servicePath = 'notes'

  const useStore = defineStore({
    servicePath,
    Model: Note,
    state() {
      return {}
    },
    getters: {},
    actions: {},
  })
  const store = useStore(pinia)

  api.service(servicePath).hooks({})

  return {
    noteStore: store,
    Note: Note as typeof store.Model,
  }
}
