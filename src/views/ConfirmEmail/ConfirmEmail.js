import React from 'react'
// hooks
import { useLocation } from 'react-router-dom'
import useAlert from '../../hooks/useAlert'
// services
import AuthService from '../../services/auth.service'
// components
import Alert from '../../components/Alert/Alert'
import SideContent from '../../components/SideContent/SideContent'
import Button from '@material-ui/core/Button'
// styles
import './ConfirmEmail.scss'
// icons
import emailIcon from '../../assets/icons/email-sended.svg'

const ConfirmEmail = () => {
  const { showAlert, alertProps } = useAlert()
  const search = useLocation().search
  const email = new URLSearchParams(search).get('email')
  console.log('email?', email)

  const handleClick = async () => {
    try {
      await AuthService.resendEmail({ email })
      showAlert({ type: 'success', message: 'Email enviado!' })
    } catch (err) {
      console.log(err)
      showAlert({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde.' })
    }
  }

  return (
    <section className="ConfirmEmail-Component">
      <SideContent />
      <div className="ConfirmEmail-Component__content">
        <div className="ConfirmEmail-Component__content__card">
          <img src={emailIcon} alt="icon" />
          <h1>Email sended!</h1>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
          <Button onClick={() => handleClick()} variant="outlined" color="primary">
            Resend Email
          </Button>
        </div>
      </div>
      <Alert {...alertProps} />
    </section>
  )
}

export default ConfirmEmail
