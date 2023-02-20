/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import AuthService from '../services/auth.service'
import Layout from '../layout/Layout'
import useAuth from 'src/hooks/useAuth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authState, authDispatch] = useAuth()
  const history = useHistory()

  console.log('authState', authState)

  useEffect(async () => {
    if (!authState.user) {
      try {
        const token = JSON.parse(localStorage.getItem('accessToken'))
        if (!token) throw Error
        const data = await AuthService.verifySessionToken()
        const user = { token: data.token, ...data.user }
        authDispatch({ type: 'SET_USER', payload: user })
      } catch (err) {
        authDispatch({ type: 'LOG_OUT' })
        history.push('/')
      }
    }
  }, [])

  return (
      <Route {...rest}>
        {authState.user &&
          <Layout>
            <Component />
          </Layout>
        }
      </Route>
  )
}

export default React.memo(PrivateRoute)
