import { defineStore } from 'pinia'

export interface Modal {
  isOpen: boolean
}

export const useModal = defineStore('modal', {
  state: (): Modal => ({
    isOpen: false,
  }),
  actions: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  },
})

export default useModal
