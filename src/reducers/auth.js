const auth = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLogged: true
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        isLogged: false
      }
    default:
      return state
  }
}

export default auth
