import React from 'react'
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

const LoginForm = (props) => {
  const history = useHistory()
  const email = useInputValue('')
  const password = useInputValue('')
  const { showAlert, alertProps } = useAlert()

  const handleSignIn = async () => {
    if (email && password) {
      try {
        const res = await AuthService.signIn({ email: email.value, password: password.value })
        console.log(res)
        history.push('/rooms')
      } catch (err) {
        console.log(err)
        showAlert({ type: 'error', message: 'El email y/o contraseña están errones.' })
      }
    }
  }

  return (
    <div>
      <InputText value={email} label="Your Email" type="text" />
      <InputText value={password} label="Password" type="password" />
      <br />
      <Button onClick={() => handleSignIn()} variant="contained" color="primary" className="w-full">
        Ingresar
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
