import React, { createContext, useReducer } from 'react'
// import AuthService from '../services/auth.service'
import Reducer from '../reducers/auth'

const initialState = {
  isLogged: false,
  user: {}
}

const Context = createContext(initialState)

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  // const data = await AuthService.verifySessionToken()
  // console.log('verifySessionToken', data)
  console.log('aqui paso 1', state)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Context
}
