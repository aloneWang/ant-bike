import axios from 'axios'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c4e75d6afd3a07bd7b6ec70/mockapi'
const instance = axios.create({
  baseURL:'https://www.easy-mock.com/mock/5c4e75d6afd3a07bd7b6ec70/mockapi',
  timeout:5000
})

instance.interceptors.request.use( config => {
  const token = localStorage.getItem('token')
  if(config.url !== '/login' && token ){
    config.headers.common['Authorization'] = token;
  }
  return config
}, err => {
  return Promise.reject(err)
})
export default instance