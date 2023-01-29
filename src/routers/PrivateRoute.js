/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import AuthService from '../services/auth.service'
import Layout from '../layout/Layout'

// import AuthContext from '../context/authContext'
import useAuth from 'src/hooks/useAuth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth()
  const history = useHistory()
  // const [user, setUser] = useState(null)
  console.log('auth 0', auth)
  // localStorage.setItem('accessToken', JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoibmVva2V5MjNAZ21haWwuY29tIiwiaWF0IjoxNjM3NDU5NjA3LCJleHAiOjE2Mzc1NDYwMDd9.-rbDYsLwfk9USaQcQjMNNa_dORtDszE8UhAXUW53Lk8'))

  useEffect(async () => {
    console.log('ddddddddddddddd')
    if (!auth.user) {
      const token = JSON.parse(localStorage.getItem('accessToken'))
      console.log('token', token)
      try {
        if (!token) throw Error
        const data = await AuthService.verifySessionToken()
        console.log('verifySessionToken', data)
        const obj = { token: data.token, ...data.user }
        // setUser(obj)
        auth.login(obj)
      } catch (err) {
        // authDispatch({ type: 'LOG_OUT' })
        console.log('err', err)
        console.log('REDIRECT....')
        history.push('/')
      }
    }
  })

  // console.log('user 0', user)

  return (
      <Route {...rest}>
        {auth.user &&
          <Layout>
            <Component />
          </Layout>
        }
      </Route>
  )
}

export default React.memo(PrivateRoute)
