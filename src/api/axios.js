import axios from 'axios'
import store from '@/store'
import * as actionType from '@/store/actionType'
const instance = axios.create({
  baseURL:'https://www.easy-mock.com/mock/5c4e75d6afd3a07bd7b6ec70/mockapi',
  timeout:5000
})

instance.interceptors.request.use( config => {
  const token = localStorage.getItem('token')

  store.dispatch({
    type: actionType.SET_LOADING,
    data: true
  })

  if(config.url !== '/login'){
    token ? 
    (config.headers.common['Authorization'] = token) : store.dispatch({
      type: actionType.SET_TOKEN,
      data: null
    }) 
  }
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use( res => {

  store.dispatch({
    type: actionType.SET_LOADING,
    data: false
  })

  return res
}, err => {
  Promise.reject(err)
})
export default instance