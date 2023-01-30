import React, { createContext, useReducer } from 'react'
import Reducer from '../reducers/auth'

const initialState = {
  user: {}
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

const Context = createContext(initialState)

export default {
  Provider,
  Context
}
