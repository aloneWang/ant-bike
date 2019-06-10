import * as actionType from './actionType'
export const setToken = (token) => (dispatch) => {
  localStorage.setItem('token', token)
  dispatch({
    type: actionType.SET_TOKEN,
    data: token
  })
}

export const selctMenu = (data) => (dispatch)=>{
  
  dispatch({
    type: actionType.SELECT_MENU,
    data
  })
}
// export const upDateTitle = ()