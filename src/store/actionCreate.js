import * as actionType from './actionType'
export const setToken = (token) => (dispatch) => {
  localStorage.setItem('token', token)
  dispatch({
    type: actionType.SET_TOKEN,
    data: token
  })
}