/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useState } from 'react'
// import AuthService from '../services/auth.service'
import Reducer from '../reducers/auth'

const initialState = {
  isLogged: false,
  user: {}
}

const Context = createContext(initialState)

// const Provider = ({ children }) => {
//   const [state, dispatch] = useReducer(Reducer, initialState)

//   const [user, setUser] = useState(null)

//   console.log('Context Provider FLAG', state)
//   return (
//     <Context.Provider value={[state, dispatch]}>
//       {children}
//     </Context.Provider>
//   )
// }

const Provider = ({ children }) => {
  const [user, setUser] = useState(null)

  const contextValue = {
    user,
    login (user) {
      setUser(user)
    },
    logout () {
      setUser(null)
    },
    isLogged () {
      return !!user
    }
  }

  console.log('Context Provider FLAG', user)
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Context,
  Consumer: Context.Consumer
}
