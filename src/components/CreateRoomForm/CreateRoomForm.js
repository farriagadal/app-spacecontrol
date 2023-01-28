/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
// services
import RoomService from '../../services/room.service'
// hooks
import { useHistory } from 'react-router-dom'
import useInputValue from '../../hooks/useInputValue'
import useAlert from '../../hooks/useAlert'
// components
import Alert from '../../components/Alert/Alert'
import InputText from '../../components/InputText/InputText'
import Button from '@material-ui/core/Button'
// context
import MainContext from '../../context/mainContext'

const CreateRoomForm = (props) => {
  const history = useHistory()
  const [, mainDispatch] = useContext(MainContext.Context)
  const roomName = useInputValue('')
  const { showAlert, alertProps } = useAlert()

  const createRoom = async () => {
    if (roomName.value) {
      mainDispatch({ type: 'SET_LOADING', payload: true })
      try {
        const data = await RoomService.createRoom({ name: roomName.value })
        console.log('res', data)
        history.push(`/rooms/${data.id}`)
      } catch (err) {
        console.log(err)
        showAlert({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde' })
      }
      setTimeout(() => { // TODO: change
        mainDispatch({ type: 'SET_LOADING', payload: false })
      }, 1000)
    }
  }

  return (
    <div className="text-center">
      <h1>Nueva Sala</h1>
      <div>
        <p className="mb-4">Ingrese un nombre para la nueva sala.</p>
        <InputText value={roomName} type="text" />
        <br />
        <Button onClick={() => createRoom()} variant="contained" color="primary" className="w-100">
          Crear
        </Button>
      </div>
      <Alert {...alertProps} />
    </div>
  )
}

export default CreateRoomForm
