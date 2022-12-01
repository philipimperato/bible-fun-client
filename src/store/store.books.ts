import { api } from '../feathers'
import { defineStore } from './store.pinia'
import { Book } from '~/models/book'

const servicePath = 'books'
export const useBooks = defineStore({ servicePath, Model: Book })

api.service(servicePath).hooks({})
