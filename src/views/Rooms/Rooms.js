/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import RoomService from '../../services/room.service'

import './Rooms.scss'

const Rooms = (props) => {
  const [rooms, setRooms] = useState([])

  useEffect(async () => {
    const data = await RoomService.getRooms()
    setRooms(data)
  }, [])

  // const fakeData = [
  //   {
  //     id: 1,
  //     name: 'Room N°1',
  //     persons_count: 14,
  //     persons_limit: 30,
  //     status: 'Safe',
  //     date_updated: '12-02-21 14:30'
  //   },
  //   {
  //     id: 2,
  //     name: 'Room N°2',
  //     persons_count: 14,
  //     persons_limit: 30,
  //     status: 'Safe',
  //     date_updated: '12-02-21 14:30'
  //   },
  //   {
  //     id: 3,
  //     name: 'Room N°3',
  //     persons_count: 14,
  //     persons_limit: 30,
  //     status: 'Safe',
  //     date_updated: '12-02-21 14:30'
  //   },
  //   {
  //     id: 4,
  //     name: 'Room N°4',
  //     persons_count: 14,
  //     persons_limit: 30,
  //     status: 'Safe',
  //     date_updated: '12-02-21 14:30'
  //   }
  // ]

  return (
    <div className="Rooms container">
      <h1>Rooms</h1>
      <div className="Rooms__list">
        <div className="Rooms__list__label">
            <p>Sala</p>
            <p>Capacidad</p>
            <p>Estado</p>
            <p>Último conteo</p>
            <span />
          </div>
        {rooms.map((room, index) =>
          <div className="Rooms__list__item" key={index}>
            <p><b>{room.name}</b></p>
            <p>{room.count}/100</p>
            <p>{room.status}</p>
            <p>{(new Date(room.updatedAt)).toLocaleDateString()}</p>
            <Link to={`/rooms/${room.id}`}>
              <Button color="" variant="contained">Ver más</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Rooms
