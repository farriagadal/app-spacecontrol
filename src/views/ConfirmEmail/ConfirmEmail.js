import React, { useEffect } from 'react'

import { useLocation } from 'react-router-dom'
import useAlert from 'src/hooks/useAlert'

import AuthService from 'src/services/auth.service'

import emailIcon from 'src/assets/icons/email-sended.svg'
import Alert from 'src/components/Alert/Alert'
import SideContent from 'src/components/SideContent/SideContent'
import Button from '@material-ui/core/Button'

import { styles } from './ConfirmEmail.module.scss'

const ConfirmEmail = () => {
  const { showAlert, alertProps } = useAlert()
  const search = useLocation().search
  const email = new URLSearchParams(search).get('email')
  const sendInit = new URLSearchParams(search).get('send')

  useEffect(() => {
    if (sendInit) {
      sendEmail()
    }
  }, [])

  const sendEmail = async () => {
    try {
      await AuthService.resendEmail({ email })
      showAlert({ type: 'success', message: 'Email enviado!' })
    } catch (err) {
      console.log(err)
      showAlert({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde.' })
    }
  }

  return (
    <section className={styles.main}>
      <SideContent />
      <div className={styles.content}>
        <div className={styles.card}>
          <img src={emailIcon} alt="icon" />
          <h1>Verify your email to continue</h1>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
          <Button onClick={() => sendEmail()} variant="outlined" color="primary">
            Resend Email
          </Button>
        </div>
      </div>
      <Alert {...alertProps} />
    </section>
  )
}

export default ConfirmEmail
