import React, { useState } from 'react'
// services
import AuthService from '../../services/auth.service'
// hooks
import useInputValue from '../../hooks/useInputValue'
import { Link, useHistory } from 'react-router-dom'
// components
import InputText from '../../components/InputText/InputText'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = (props) => {
  return <MuiAlert variant="filled" {...props} />
}

const LoginForm = (props) => {
  const history = useHistory()
  const email = useInputValue('')
  const password = useInputValue('')
  const [openAlert, setOpenAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState({
    type: '',
    message: ''
  })
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert(false)
  }

  const handleSignIn = async () => {
    if (email && password) {
      try {
        const res = await AuthService.signIn({ email: email.value, password: password.value })
        console.log(res)
        history.push('/rooms')
      } catch (err) {
        console.log(err)
        setAlertMessage(
          {
            message: 'El email y/o contraseña están errones.',
            type: 'error'
          }
        )
        setOpenAlert(true)
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
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertMessage.type}>
          { alertMessage.message }
        </Alert>
      </Snackbar>
    </div>
  )
}

export default LoginForm
