const device = (state, action) => {
  switch (action.type) {
    case 'SET_DEVICE':
      localStorage.setItem('accessToken', JSON.stringify(action.payload.token))
      return {
        ...state,
        device: action.payload,
        isLogged: true
      }
    case 'LOG_OUT':
      localStorage.removeItem('accessToken')
      return {
        ...state,
        device: null,
        isLogged: false
      }
    default:
      return state
  }
}

export default device
