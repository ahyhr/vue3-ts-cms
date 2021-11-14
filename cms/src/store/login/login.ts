import { Module } from "vuex"
import { accountLoginRequest } from '@/service/login/login'
import localCache from '@/utils/cache'

import type { IAccount, ILoginResultData } from '@/service/login/type'
import type { IloginState } from './types'
import type { IRootState } from '../types'

// login 模块
const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    // 保存用户信息
    changeUserInfo(state, userInfo: ILoginResultData) {
      state.token = userInfo.token
      state.userInfo = userInfo
      // 本地保存token
      localCache.setCache('token', userInfo.token)
      localCache.setCache('userInfo', userInfo)

    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const userInfo = loginResult.data
      commit('changeUserInfo', userInfo)
    }
  }
}

export default loginModule
