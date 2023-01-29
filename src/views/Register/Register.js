import React from 'react'
// components
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import SideContent from '../../components/SideContent/SideContent'
// styles
import './Register.scss'
// icons
import googleIcon from '../../assets/icons/google-icon.svg'

const Register = () => {
  return (
    <section className="Register-Component">
      <SideContent />
      <div className="Register-Component__content">
        <div className="Register-Component__content__card">
          <h1>Register</h1>
          <RegisterForm />
          <div className="Register-Component__content__google-section">
            <div className="Register-Component__content__divider">
              <span/>
              <p>OR</p>
              <span/>
            </div>
            <button className="Register-Component__content__btn-google d-flex w-100">
              <img src={googleIcon} alt="icon" />
              Sign up with Google
            </button>
          </div>

          <br />
          {/* <button className="btn btn--primary w-100">Ingresar</button>
          <p className="Register-Component__content__register-btn">¿No tienes una cuenta?
            <a href="/">Registrate!</a>
          </p> */}
        </div>
      </div>
    </section>
  )
}

export default Register
