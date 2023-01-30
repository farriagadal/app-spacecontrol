/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
// services
import AuthService from '../../services/auth.service'
// hooks
import useAlert from '../../hooks/useAlert'
import useInputValue from '../../hooks/useInputValue'
import { Link, useHistory } from 'react-router-dom'
// components
import Alert from '../../components/Alert/Alert'
import InputText from '../../components/InputText/InputText'
import Button from '@material-ui/core/Button'
// context
import AuthContext from '../../context/authContext'
import MainContext from '../../context/mainContext'

const LoginForm = () => {
  const [, authDispatch] = useContext(AuthContext.Context)
  const [, mainDispatch] = useContext(MainContext.Context)
  const history = useHistory()
  const email = useInputValue('')
  const password = useInputValue('')
  const { showAlert, alertProps } = useAlert()

  const handleSignIn = async () => {
    if (!email.value || !password.value) return
    mainDispatch({ type: 'SET_LOADING', payload: true })
    try {
      const data = await AuthService.signIn({ email: email.value, password: password.value })
      console.log(data)
      const user = { token: data.token, ...data.user }
      authDispatch({ type: 'SET_USER', payload: user })
      console.log('SET_USER', user)
      setTimeout(() => {
        mainDispatch({ type: 'SET_LOADING', payload: false })
        history.push('/rooms')
      }, 1000)
    } catch (err) {
      if (err.data && err.data.error && err.data.error.emailInvalid) {
        const email = err.data.user.email
        setTimeout(() => {
          mainDispatch({ type: 'SET_LOADING', payload: false })
          history.push(`/send-email?email=${email}&send=true`)
        }, 1000)
        return
      }
      showAlert({ type: 'error', message: 'El email y/o contraseña están errones.' })
      mainDispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  return (
    <div>
      {/* USER ID: { authState.user.id ?? <p>SIN ID</p> } */}
      <InputText value={email} label="Your Email" type="text" />
      <InputText value={password} label="Password" type="password" />
      <br />
      <Button
        disabled={!email.value || !password.value}
        onClick={() => handleSignIn()}
        variant="contained"
        color="primary"
        className="w-100"
      >
        Log in
      </Button>
      <p className="Login-Component__content__register-btn">
        ¿No tienes una cuenta?
        <Link to="/register">Registrate!</Link>
      </p>
      <Alert {...alertProps} />
    </div>
  )
}

export default LoginForm
