import { createStore } from 'vuex'
import login from './login/login'
import type { IRootState } from './types'

export default createStore<IRootState>({
  state() {
    return {
      name: 'yhr',
      age: 21
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
  }
})
