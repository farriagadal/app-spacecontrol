/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Modal from 'src/components/Modal/Modal'
import CreateRoomForm from 'src/components/CreateRoomForm/CreateRoomForm'
import AddIcon from '@material-ui/icons/Add'

import RoomService from 'src/services/room.service'

import styles from './Rooms.module.scss'

const Rooms = () => {
  const [rooms, setRooms] = useState([])

  useEffect(async () => {
    const data = await RoomService.getRooms()
    setRooms(data)
  }, [])

  return (
    <div className={`${styles.main} container`}>
      <div className="d-flex align-items-center">
        <h1 className="mr-auto">Rooms</h1>
        <Modal padding="70px 150px" component={<CreateRoomForm/>} button={
          <Button className="pl-3 pr-4" variant="contained" color="primary">
            <AddIcon className="mr-2"/>
            <b>Nueva sala</b>
          </Button>}
        />
      </div>

      <div className={styles.list}>
        <div className={styles.label}>
            <p>Sala</p>
            <p>Capacidad</p>
            <p>Estado</p>
            <p>Último conteo</p>
            <span />
          </div>
        {rooms.map((room, index) =>
          <div className={styles.item} key={index}>
            <p><b>{room.name}</b></p>
            <p>{room.count}/100</p>
            <p>{room.status}</p>
            <p>{(new Date(room.updatedAt)).toLocaleDateString()}</p>
            <Link to={`/rooms/${room.id}`}>
              <Button variant="contained">Ver más</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Rooms
