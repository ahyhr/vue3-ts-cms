let BEST_URL = ''
let TIME_OUT = 10000

//process.env.NODE_ENV  webpack自动注入的环境字段
// 开发环境: development
//生产环境: production
//测试环境: test

if (process.env.NODE_ENV === 'development') {
  BEST_URL = 'http://127.0.0.1:8888/api/private/v1/'
} else if (process.env.NODE_ENV === 'production') {
  BEST_URL = 'http://127.0.0.1:8888/api/private/v1/'
} else {
  BEST_URL = 'http://127.0.0.1:8888/api/private/v1/'
}

export {
  BEST_URL,
  TIME_OUT
}
