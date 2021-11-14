//统一出口
import { BEST_URL, TIME_OUT } from './request/config'
import MyRequest from './request/index'
import localCache from '@/utils/cache'

// 不同地址可创建多个实例
const myRequest = new MyRequest({
  baseURL: BEST_URL,
  timeout: TIME_OUT,
  // 拦截器
  interceptors: {
    // 请求拦截器
    requestInterceptor: (config) => {
      console.log('实例请求拦截器')
      console.log(config)

      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = token as string
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      // console.log(error)
      return error
    },
    //响应拦截器
    responseInterceptor: (config) => {
      // console.log('响应拦截器')
      // console.log(config)
      return config
    },
    responseInterceptorCatch: (error) => {
      // console.log(error)
      return error
    }
  }
})

// 实例二  可自由配置拦截器
// const myRequest2 = new MyRequest({
//   baseURL: BEST_URL,
//   timeout: TIME_OUT,
//   interceptors: {
//     // 请求拦截器
//     requestInterceptor: (config) => {
//       console.log('请求拦截器')
//       console.log(config)
//       return config
//     },
//     responseInterceptorCatch: (error) => {
//       console.log(error)
//       return error
//     }
//   }
// })

//单独请求拦截器
// myRequest.request({
//   url: '/get',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('request单独请求拦截器')
//       console.log(config)
//       return config
//     }
//   }
// })

// myRequest.get({
//   url: '/get'
// }).then(res => {
//   console.log('get请求',res)
// })

export default myRequest
