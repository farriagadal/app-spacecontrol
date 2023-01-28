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
// services
import RoomService from 'src/services/room.service'

const SecurityForm = ({ room }) => {
  const [, mainDispatch] = useContext(MainContext.Context)
  const name = useInputValue(room.name)
  const capacity = useInputValue(room.capacity)
  const password = useInputValue('')
  const { showAlert, alertProps } = useAlert()
  const form = { id: room.id, name: name.value, password: password.value, capacity: parseInt(capacity.value) }

  const editRoom = async () => {
    mainDispatch({ type: 'SET_LOADING', payload: true })
    try {
      await RoomService.editRoom(form)
      setTimeout(() => {
        mainDispatch({ type: 'SET_LOADING', payload: false })
        window.location.reload(false)
      }, 1000)
    } catch (err) {
      setTimeout(() => {
        mainDispatch({ type: 'SET_LOADING', payload: false })
      }, 1000)
      showAlert({ type: 'error', message: 'Ha ocurrido un error al editar la sala, inténte más tarde.' })
      mainDispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const isValidForm = () => {
    if (!form.name || !form.capacity) { return false }
    if (form.name !== room.name || form.capacity !== room.capacity) { return true }
    if (form.password && form.password.length > 5) { return true }
    return false
  }

  return (
    <div className={styles.main}>
      <h2 className="mb-5 d-flex align-items-center justify-content-center">
        <SettingsIcon className="mr-2"/>
        Configuración
      </h2>
      {/* {
        isValidForm() ? 'TRUE' : 'FALSE'
      } */}
      <div className={styles.form}>
        <InputText value={name} label="Nombre de sala" type="name" />
        <div>
          <p>ID de sala</p>
          <p className={styles.codeField}>{ room.securityName }</p>
        </div>
        <InputText value={password} label="Contraseña de sala" type="password" placeholder="•••••••••••••" />
        <InputText value={capacity} label="Capacidad de sala" type="number" />
      </div>
      <Button
        disabled={!isValidForm()}
        onClick={() => editRoom()}
        variant="contained"
        color="primary"
        className="w-100 mt-4"
      >
        Guardar cambios
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className="w-100 mt-4"
      >
        Resetear
      </Button>
      <Alert {...alertProps} />
    </div>
  )
}

export default SecurityForm
