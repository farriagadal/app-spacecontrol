import React, { useState } from 'react'
// services
import AuthService from '../../services/auth.service'
// hooks
import useInputValue from '../../hooks/useInputValue'
import useAlert from '../../hooks/useAlert'
import { Link, useHistory } from 'react-router-dom'
// components
import Alert from '../../components/Alert/Alert'
import InputText from '../InputText/InputText'
import Button from '@material-ui/core/Button'
import InputCheckbox from '../../components/InputCheckbox/InputCheckbox'
// others
import Validator from 'fastest-validator'

const userSchema = {
  firstName: { type: 'string', optional: false, max: '100' },
  lastName: { type: 'string', optional: false, max: '100' },
  email: { type: 'email', optional: false, max: '100' },
  password: { type: 'string', min: 6 },
  confirmPassword: { type: 'equal', field: 'password' }
}

const RegisterForm = () => {
  const { showAlert, alertProps } = useAlert()
  const history = useHistory()
  const firstName = useInputValue('')
  const lastName = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const confirmPassword = useInputValue('')
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
      const res = await AuthService.signUp(form)
      console.log(res)
      history.push('/register?step=2')
    } catch (err) {
      console.log('err', err)
      showAlert({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde' })
    }
  }

  return (
    <div className="RegisterForm-Component form-inputs">
      <InputText value={firstName} error={formErrors.find(v => v.field === 'firstName')} label='First Name' type='text' />
      <InputText value={lastName} error={formErrors.find(v => v.field === 'lastName')} label='Last Name' type='text' />
      <InputText value={email} error={formErrors.find(v => v.field === 'email')} label='Your Email' type='text' />
      <InputText value={password} error={formErrors.find(v => v.field === 'password')} label='Password' type='password' />
      <InputText
        value={confirmPassword}
        error={formErrors.find(v => v.field === 'confirmPassword')}
        label='Confirm Password' type='password'
      />
      <div className="form-inputs__agree">
        <InputCheckbox label={<p>I agree to all <Link to="/terms">Terms & Conditions</Link></p>} />
      </div>
      {/* <button className="btn btn--primary w-full">Crear</button> */}
      <Button onClick={() => handleSignUp()} variant="contained" color="primary">
        Crear
      </Button>
      <Alert {...alertProps} />
    </div>
  )
}

export default RegisterForm
