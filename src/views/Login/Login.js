import React from 'react'
// components
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
// hooks
import useInputValue from '../../hooks/useInputValue'
// services
import AuthService from '../../services/auth.service'
// icons
import googleIcon from '../../assets/icons/google-icon.svg'
import logo from '../../assets/icons/logo-white.svg'
import shapeIcon from '../../assets/icons/bg-shape.svg'
import InputText from '../../components/InputText/InputText'

import './Login.scss'

const Login = () => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSignIn = async () => {
    if (email && password) {
      try {
        const res = await AuthService.signIn({ email: email.value, password: password.value })
        console.log(res)
        console.log(email.value)
        console.log(password.value)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <section className="Login-Component">
      <div className="Login-Component__sidebar">
        <div className="Login-Component__sidebar__card">
          <Link to="/">
            <img className="Register-Component__sidebar__logo" src={logo} alt="icon" />
          </Link>
          <h2>Where teams design together</h2>
          <p>
            Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet
            ullamco dolor proident.
          </p>
          <img className="Login-Component__sidebar__shape" src={shapeIcon} alt="icon" />
        </div>
      </div>
      <div className="Login-Component__content">
        <div className="Login-Component__content__card">
          <h1>Sign in</h1>
          <button type="button" className="Login-Component__content__btn-google flex w-full">
            <img src={googleIcon} alt="icon" />
            Sign in with Google
          </button>
          <div className="Login-Component__content__divider">
            <span />
            <p>OR</p>
            <span />
          </div>
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
        </div>
      </div>
    </section>
  )
}

export default Login
