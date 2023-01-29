import React from 'react'
//  components
import LoginForm from '../../components/LoginForm/LoginForm'
import SideContent from '../../components/SideContent/SideContent'
// icons
import googleIcon from '../../assets/icons/google-icon.svg'
// styles
import './Login.scss'

const Login = () => {
  return (
    <section className="Login-Component">
      <SideContent />
      <div className="Login-Component__content">
        <div className="Login-Component__content__card">
          <h1>Sign in</h1>
          <button type="button" className="Login-Component__content__btn-google d-flex w-100">
            <img src={googleIcon} alt="icon" />
            Sign in with Google
          </button>
          <div className="Login-Component__content__divider">
            <span />
            <p>OR</p>
            <span />
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export default Login
