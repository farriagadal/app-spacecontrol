import React, { useEffect, useState } from 'react'

import InsertChartIcon from '@material-ui/icons/InsertChart'
import DevicesList from '../../components/DevicesList/DevicesList'

import RoomService from '../../services/room.service'

import './RoomDetail.scss'

const RoomDetail = (props) => {
  const [room, setRoom] = useState({})

  useEffect(async () => {
    const roomId = props.match.params.id
    const data = await RoomService.getRoom(roomId)
    console.log('data', data)
    setRoom(data)
  }, [])

  return (
    <div className="RoomDetail container">
      <div className="RoomDetail__title">
        <h1>{room.name}</h1>
        <span>{room.securityName}</span>
      </div>
      <div className="RoomDetail__content">
        <div className="RoomDetail__content__metrics">
          <div className="RoomDetail__content__metrics__item">
            <label>N° Personas actualmente</label>
            <span>{room.count}</span>
          </div>
          <div className="RoomDetail__content__metrics__item">
            <label>Capacidad utilizada</label>
            <span>5%</span>
          </div>
          <div className="RoomDetail__content__metrics__item">
            <label>N° Personas en el día</label>
            <span>120</span>
          </div>
        </div>
        <div className="RoomDetail__content__chart">
          <InsertChartIcon />
        </div>
      </div>
      <DevicesList devices={room.devices} />
    </div>
  )
}

export default RoomDetail
