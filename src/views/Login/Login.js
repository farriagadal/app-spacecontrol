import React from 'react'

import { Link } from 'react-router-dom'
//  components
import LoginForm from 'src/components/LoginForm/LoginForm'
import SideContent from 'src/components/SideContent/SideContent'
// icons
import googleIcon from 'src/assets/icons/google-icon.svg'
// styles
import styles from './Login.module.scss'

const Login = () => {
  return (
    <section className={styles.main}>
      <SideContent />
      <div className={styles.content}>
        <div className={styles.card}>
          <h1>Sign in</h1>
          <button type="button" className={styles.btnGoogle}>
            <img src={googleIcon} alt="icon" />
            Sign in with Google
          </button>
          <div className={styles.divider}>
            <span />
            <p>OR</p>
            <span />
          </div>
          <LoginForm />
          <p className={styles.registerBtn}>
            ¿No tienes una cuenta?
            <Link to="/register">Registrate!</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
