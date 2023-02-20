const auth = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      localStorage.setItem('accessToken', JSON.stringify(action.payload.token))
      return {
        ...state,
        user: action.payload,
        isLogged: true
      }
    case 'LOG_OUT':
      localStorage.removeItem('accessToken')
      return {
        ...state,
        user: null,
        isLogged: false
      }
    default:
      return state
  }
}

export default auth
