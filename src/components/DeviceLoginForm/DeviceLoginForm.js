/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
// services
import DeviceService from '../../services/device.service'
// hooks
import useAlert from '../../hooks/useAlert'
import useInputValue from '../../hooks/useInputValue'
import { useHistory } from 'react-router-dom'
// components
import Alert from '../../components/Alert/Alert'
import InputText from '../../components/InputText/InputText'
import Button from '@material-ui/core/Button'
// context
import DeviceContext from '../../context/deviceContext'
import MainContext from '../../context/mainContext'

const LoginForm = () => {
  const [, deviceDispatch] = useContext(DeviceContext.Context)
  const [, mainDispatch] = useContext(MainContext.Context)
  const history = useHistory()
  const securityName = useInputValue('')
  const password = useInputValue('')
  const { showAlert, alertProps } = useAlert()

  const handleSignIn = async () => {
    if (!securityName.value || !password.value) return
    mainDispatch({ type: 'SET_LOADING', payload: true })
    try {
      const data = await DeviceService.connectDevice({ securityName: securityName.value, password: password.value })
      console.log('data', data)
      const device = { token: data.token, ...data.device }
      deviceDispatch({ type: 'SET_DEVICE', payload: device })
      setTimeout(() => {
        mainDispatch({ type: 'SET_LOADING', payload: false })
        history.push('/device/counter')
      }, 1000)
    } catch (err) {
      showAlert({ type: 'error', message: 'El codigo de sala y/o contraseña están errones.' })
      mainDispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  return (
    <div>
      {/* USER ID: { authState.user.id ?? <p>SIN ID</p> } */}
      <InputText value={securityName} label="Codigo de sala" type="text" />
      <InputText value={password} label="Contraseña de sala" type="password" />
      <br />
      <Button
        disabled={!securityName.value || !password.value}
        onClick={() => handleSignIn()}
        variant="contained"
        color="primary"
        className="w-100"
      >
        Iniciar contador
      </Button>
      <Alert {...alertProps} />
    </div>
  )
}

export default LoginForm
