import React, { useState, useContext } from 'react'

import AuthService from '../../services/auth.service'

import useInputValue from '../../hooks/useInputValue'
import useAlert from '../../hooks/useAlert'
import { Link, useHistory } from 'react-router-dom'

import Alert from '../../components/Alert/Alert'
import InputText from '../InputText/InputText'
import Button from '@material-ui/core/Button'
import InputCheckbox from '../../components/InputCheckbox/InputCheckbox'

import Validator from 'fastest-validator'

import MainContext from '../../context/mainContext'

import styles from './RegisterForm.module.scss'

const userSchema = {
  firstName: { type: 'string', optional: false, max: '100' },
  lastName: { type: 'string', optional: false, max: '100' },
  email: { type: 'email', optional: false, max: '100' },
  password: { type: 'string', min: 6 },
  confirmPassword: { type: 'equal', field: 'password' }
}

const RegisterForm = () => {
  const { showAlert, alertProps } = useAlert()
  const [, mainDispatch] = useContext(MainContext.Context)
  const history = useHistory()
  const firstName = useInputValue('')
  const lastName = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const confirmPassword = useInputValue('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [formErrors, setFormErrors] = useState([])

  const handleSignUp = async () => {
    const form = {
      firstName: firstName.value || null,
      lastName: lastName.value || null,
      email: email.value || null,
      password: password.value || null,
      confirmPassword: confirmPassword.value || null
    }

    const v = new Validator()
    const validation = v.validate(form, userSchema)
    console.log('validation', validation) // TODO: Borrar
    if (validation !== true) {
      setFormErrors(validation)
      showAlert({ type: 'error', message: 'Campos incompletos!' })
      return
    }
    setFormErrors([])

    try {
      mainDispatch({ type: 'SET_LOADING', payload: true })
      const res = await AuthService.signUp(form)
      console.log(res)
      setTimeout(() => {
        mainDispatch({ type: 'SET_LOADING', payload: false })
        history.push('/send-email')
      }, 1000)
    } catch (err) {
      console.log('err', err)
      mainDispatch({ type: 'SET_LOADING', payload: false })
      showAlert({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde' })
    }
  }

  return (
    <div className={styles.form}>
      <InputText value={firstName} error={formErrors.find(v => v.field === 'firstName')} label='First Name' type='text' />
      <InputText value={lastName} error={formErrors.find(v => v.field === 'lastName')} label='Last Name' type='text' />
      <InputText value={email} error={formErrors.find(v => v.field === 'email')} label='Your Email' type='text' />
      <InputText value={password} error={formErrors.find(v => v.field === 'password')} label='Password' type='password' />
      <InputText
        value={confirmPassword}
        error={formErrors.find(v => v.field === 'confirmPassword')}
        label='Confirm Password' type='password'
      />
      <div className={styles.agree}>
        <InputCheckbox checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} label={<p>I agree to all <Link to="/terms">Terms & Conditions</Link></p>} />
      </div>
      {/* <button className="btn btn--primary w-100">Crear</button> */}
      <Button disabled={!acceptTerms} onClick={() => handleSignUp()} variant="contained" color="primary">
        Continue
      </Button>
      <Alert {...alertProps} />
    </div>
  )
}

export default RegisterForm
