/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from 'react'
import Reducer from '../reducers/auth'

const initialState = {
  isLogged: false,
  user: null
}

const Context = createContext(initialState)

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Context,
  Consumer: Context.Consumer
}
