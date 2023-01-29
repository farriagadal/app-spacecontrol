import React, { createContext, useReducer, useEffect } from 'react'
import AuthService from '../services/auth.service'
import Reducer from '../reducers/auth'

const initialState = {
  isLogged: true,
  user: {}
}

const Context = createContext(initialState)

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(async () => {
    const token = JSON.parse(localStorage.getItem('accessToken'))
    try {
      if (!token) throw Error
      const data = await AuthService.verifySessionToken()
      console.log('verifySessionToken', data)
      const user = { token: data.token, ...data.user }
      dispatch({ type: 'SET_USER', payload: user })
    } catch (err) {
      dispatch({ type: 'LOG_OUT' })
    }
  }, [])

  // useEffect(() => {
  //   AuthService.verifySessionToken().then((data) => {
  //     console.log('response', data)
  //     const user = { token: data.token, ...data.user }
  //     dispatch({ type: 'SET_USER', payload: user })
  //   }).catch((error) => {
  //     dispatch({ type: 'LOG_OUT' })
  //     console.log('error', error.response)
  //   })
  // }, [])

  console.log('Context Provider FLAG', state)
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
