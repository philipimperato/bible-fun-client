import { api } from '../feathers'
import { defineStore } from './store.pinia'
import { User } from '~/models/user'

const servicePath = 'users'
export const useUsers = defineStore({ servicePath, Model: User })

api.service(servicePath).hooks({})
