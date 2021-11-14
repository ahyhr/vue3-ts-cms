export interface IAccount {
  name: string,
  password: string
}

export interface ILoginResultData {
  email: string,
  id: number,
  mobile: string,
  rid: number,
  token: string,
  username: string
}

export interface ILoginResultMeta {
  msg: string,
  status: number
}

export interface IDataType<T = any, S = any> {
  data: T,
  meta: S
}
