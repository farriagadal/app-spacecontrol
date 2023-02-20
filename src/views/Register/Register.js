import React from 'react'

import RegisterForm from 'src/components/RegisterForm/RegisterForm'
import SideContent from 'src/components/SideContent/SideContent'

import styles from './Register.module.scss'

import googleIcon from 'src/assets/icons/google-icon.svg'

const Register = () => {
  return (
    <section className={styles.main}>
      <SideContent />
      <div className={styles.content}>
        <div className={styles.card}>
          <h1>Register</h1>
          <RegisterForm />
          <div className={styles.googleSection}>
            <div className={styles.divider}>
              <span/>
              <p>OR</p>
              <span/>
            </div>
            <button className={styles.googleBtn}>
              <img src={googleIcon} alt="icon" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
