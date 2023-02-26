import React from 'react'
// components
import SideContent from '../../components/SideContent/SideContent'
import Button from '@material-ui/core/Button'
// styles
import './EmailVerified.scss'
// icons
import emailIcon from '../../assets/icons/email-sended.svg'

const EmailVerified = props => {
  return (
    <section className="EmailVerified-Component">
      <SideContent />
      <div className="EmailVerified-Component__content">
        <div className="EmailVerified-Component__content__card">
          <img src={emailIcon} alt="icon" />
          <h1>Email Verified</h1>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
          <Button variant="outlined" color="primary">
            Resend Email
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EmailVerified
