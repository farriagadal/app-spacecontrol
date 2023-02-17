import React from "react";

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './Rooms.scss'

const Rooms = props => {
  const fakeData = [
    {
      id: 1,
      name: 'Room N°1',
      persons_count: 14,
      persons_limit: 30,
      status: 'Safe',
      date_updated: '12-02-21 14:30'
    },
    {
      id: 2,
      name: 'Room N°2',
      persons_count: 14,
      persons_limit: 30,
      status: 'Safe',
      date_updated: '12-02-21 14:30'
    },
    {
      id: 3,
      name: 'Room N°3',
      persons_count: 14,
      persons_limit: 30,
      status: 'Safe',
      date_updated: '12-02-21 14:30'
    },
    {
      id: 4,
      name: 'Room N°4',
      persons_count: 14,
      persons_limit: 30,
      status: 'Safe',
      date_updated: '12-02-21 14:30'
    }
  ]

  return(
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
        {fakeData.map((room, index) =>
          <div className="Rooms__list__item">
            <p><b>{room.name}</b></p>
            <p>{room.persons_count}/{room.persons_limit}</p>
            <p>{room.status}</p>
            <p>{room.date_updated}</p>
            <Link to={`/rooms/${room.id}`}>
              <Button color="" variant="contained">Ver más</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Rooms;