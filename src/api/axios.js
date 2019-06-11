import axios from 'axios'
import { message } from 'antd'
import store from '@/store'
import * as actionType from '@/store/actionType'


const setLoading = (status)=>{
  store.dispatch({
    type: actionType.SET_LOADING,
    data: status
  })
}
const instance = axios.create({
  baseURL:'https://www.easy-mock.com/mock/5c4e75d6afd3a07bd7b6ec70/mockapi',
  timeout:5000
})

instance.interceptors.request.use( config => {
  const token = localStorage.getItem('token')
  setLoading(true)

  if(config.url !== '/login'){

    if(token){
      config.headers.common['Authorization'] = token
    } else{
      store.dispatch({
        type: actionType.SET_TOKEN,
        data: null
      })
      // 增加消息弹窗
      message.error('token失效了,请重新登录！');
      return Promise.reject("token失效了")
    }
  }
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use( res => {

  setLoading(false)
  return res
}, err => {
  setLoading(false)
  return Promise.reject(err)
})
export default instance