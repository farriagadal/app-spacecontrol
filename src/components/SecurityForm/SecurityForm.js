/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
// hooks
import useAlert from 'src/hooks/useAlert'
import useInputValue from 'src/hooks/useInputValue'
// components
import Alert from 'src/components/Alert/Alert'
import InputText from 'src/components/InputText/InputText'
import Button from '@material-ui/core/Button'
import SettingsIcon from '@material-ui/icons/Settings'
// context
import MainContext from 'src/context/mainContext'
// styles
import styles from './SecurityForm.module.scss'

const SecurityForm = ({ room }) => {
  const [, mainDispatch] = useContext(MainContext.Context)
  const securityName = useInputValue(room.securityName)
  const maxCapacity = useInputValue(100)
  const password = useInputValue('')
  const { showAlert, alertProps } = useAlert()

  const handleSignIn = async () => {
    mainDispatch({ type: 'SET_LOADING', payload: true })
    try {
      // TODO: Check if the room data has changed.
      const obj = { securityName: securityName.value, password: password.value, maxCapacity: maxCapacity.value }
      console.log(obj)
      // const data = await AuthService.signIn({ securityName: securityName.value, password: password.value })
      // const user = { token: data.token, ...data.user }
      setTimeout(() => {
        mainDispatch({ type: 'SET_LOADING', payload: false })
      }, 1000)
    } catch (err) {
      setTimeout(() => {
        mainDispatch({ type: 'SET_LOADING', payload: false })
      }, 1000)
      showAlert({ type: 'error', message: 'El Codigo de sala y/o contraseña están errones.' })
      mainDispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  return (
    <div>
      <h2 className="mb-5 d-flex align-items-center justify-content-center">
        <SettingsIcon className="mr-2"/>
        Seguridad
      </h2>
      <p>ID de sala</p>
      <p className={`${styles.codeField} mt-3 mb-4`}>{ securityName.value }</p>
      <InputText value={password} label="Contraseña de sala" type="password" placeholder="•••••••••••••" />
      <InputText value={maxCapacity} label="Capacidad de sala" type="number" />
      <br />
      <Button
        onClick={() => handleSignIn()}
        variant="contained"
        color="primary"
        className="w-100 mt-4"
      >
        Guardar cambios
      </Button>
      <Alert {...alertProps} />
    </div>
  )
}

export default SecurityForm
