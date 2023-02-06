import React from 'react'
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

const LoginForm = () => {
  const { showAlert, alertProps } = useAlert()
  const history = useHistory()
  const firstName = useInputValue('')
  const lastName = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const passwordConfirm = useInputValue('')

  const handleSignUp = async () => {
    try {
      const form = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
      }
      const res = await AuthService.signUp(form)
      console.log(res)
      history.push('/register?step=2')
    } catch (err) {
      console.log('err', err)
      showAlert({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde' })
    }
  }

  return (
    <div className="form-inputs">
      <InputText value={firstName} label='First Name' type='text' />
      <InputText value={lastName} label='Last Name' type='text' />
      <InputText value={email} label='Your Email' type='text' />
      <InputText value={password} label='Password' type='password' />
      <InputText value={passwordConfirm} label='Confirm Password' type='password' />
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

export default LoginForm
