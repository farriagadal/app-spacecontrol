import React from 'react'
// components
import SideContent from '../../components/SideContent/SideContent'
import Button from '@material-ui/core/Button'
// styles
import './ConfirmEmail.scss'
// icons
import emailIcon from '../../assets/icons/email-sended.svg'

const ConfirmEmail = props => {
  return (
    <section className="ConfirmEmail-Component">
      <SideContent />
      <div className="ConfirmEmail-Component__content">
        <div className="ConfirmEmail-Component__content__card">
          <img src={emailIcon} alt="icon" />
          <h1>Verify your email address</h1>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
          <Button variant="outlined" color="primary">
            Resend Email
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ConfirmEmail
