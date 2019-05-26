import axios from './axios'

export const login = (data) => {
  axios.post('/login', data)
}