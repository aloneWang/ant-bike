import * as actionType  from './actionType'
const defaultState = {
  token: localStorage.getItem('token'),
  isLoading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SET_TOKEN:
      console.log(action.data)
      return {
        ...state,
        token: action.data
      }
    case actionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.data
      }
    case actionType.SELECT_MENU: 
      console.log(action.data)
      return{
        ...state,
        ...action.data
      }
    default:
      return state
  }
}