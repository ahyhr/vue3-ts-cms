import axios from 'axios'
//type 表示引入接口
import type { AxiosInstance } from 'axios'
import type { MyRequestInterceptors, MyRequestConfig } from './type'

class MyRequest {
  // axios 实例
  instance: AxiosInstance
  //拦截器
  interceptors?: MyRequestInterceptors

  // 多个实例不同配置
  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)

    this.interceptors = config.interceptors
    // 单个实例添加拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例拦截器
    this.instance.interceptors.request.use((res) => {
      // loading 加载中
      // console.log('所有实例请求拦截器')
      return res
    }, (err) => {
      return err
    })
    this.instance.interceptors.response.use((res) => {
      // console.log('所有实例响应拦截器')
      return res.data
    }, (err) => {
      return err
    })
  }




  // 封装方法
  request<T>(config: MyRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 实例单独请求的拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance.request<any, T>(config).then(res => {
        // 实例单独响应的拦截
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
      }).catch(err => reject(err))
    })
  }
  get<T>(config: MyRequestConfig): Promise<T> {
    return this.request<T>({...config, method: 'GET'})
  }
  post<T>(config: MyRequestConfig): Promise<T> {
    return this.request<T>({...config, method: 'POST'})
  }
  delete<T>(config: MyRequestConfig): Promise<T> {
    return this.request<T>({...config, method: 'DELETE'})
  }
  patch<T>(config: MyRequestConfig): Promise<T> {
    return this.request<T>({...config, method: 'PATCH'})
  }
}

export default MyRequest
