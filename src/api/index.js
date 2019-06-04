// 只展示数据接口
import axios from './axios'

export const LOGIN =  async (data) => {
  const res = await axios.post('/login', data)
  
  return res.data

}