import { api } from '../feathers'
import { defineStore } from './store.pinia'
import { ESV } from '~/models/esv'

const servicePath = 'esv'
export const useESV = defineStore({ servicePath, Model: ESV })

api.service(servicePath).hooks({})
