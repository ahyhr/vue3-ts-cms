import myRequest from '@/service'
import type { IAccount, IDataType, ILoginResultData, ILoginResultMeta } from './type'

// 登录请求
export function accountLoginRequest(accoun: IAccount) {
  return myRequest.post<IDataType<ILoginResultData, ILoginResultMeta>>({
    url: 'login',
    data: {
      username: accoun.name,
      password: accoun.password
    }
  })
}
