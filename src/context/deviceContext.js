/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useEffect } from 'react'
import DeviceService from '../services/device.service'
import Reducer from '../reducers/device'

const initialState = {
  isLogged: true,
  device: {}
}

const Context = createContext(initialState)

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(async () => {
    const token = JSON.parse(localStorage.getItem('accessToken'))
    // console.log('tokentoken', token)
    try {
      if (!token) throw Error
      // const data = await DeviceService.verifyToken()
      // console.log('data verify token', data)
      // console.log('verifySessionToken', data)
      // const user = { token: token, device: {} }
      // dispatch({ type: 'SET_DEVICE', payload: user })
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
