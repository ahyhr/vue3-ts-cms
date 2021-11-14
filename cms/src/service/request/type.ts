import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 封装接口
export interface MyRequestInterceptors {
  // 请求拦截器接口
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig,
  requestInterceptorCatch?: (error: any) => any,
  //响应拦截器接口
  responseInterceptor?: (config: any) => any,
  responseInterceptorCatch?: (error: any) => any,
}

//继承axios 添加拦截器接口
export interface MyRequestConfig extends AxiosRequestConfig {
  interceptors?: MyRequestInterceptors
}
