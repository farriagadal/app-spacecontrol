import React from 'react'

import Button from '@material-ui/core/Button'

import './DevicesList.scss'

const DevicesList = (props) => {
  console.log('props', props)

  // const fakeData = [
  //   {
  //     id: 1,
  //     name: 'Device N°1'
  //   },
  //   {
  //     id: 2,
  //     name: 'Device N°2'
  //   },
  //   {
  //     id: 3,
  //     name: 'Device N°3'
  //   },
  //   {
  //     id: 4,
  //     name: 'Device N°4'
  //   }
  // ]

  return (
    <div className="DevicesList container">
      <h2>Dispositivos</h2>
      <div className="DevicesList__list">
        <div className="DevicesList__list__label">
            <p>Nombre dispositivo</p>
            <p>Ubicación</p>
            <p>Último conteo</p>
            <p>Total conteos hoy</p>
            <span />
          </div>
        {props.devices
          ? props.devices.map((device, index) =>
          <div className="DevicesList__list__item" key={index}>
            <p><b>{device.name}</b></p>
            <p>{device.ubication}</p>
            <p>{device.updatedAt}</p>
            <p>{device.totalCounts}</p>
            <Button variant="contained">Ver más</Button>
          </div>
          )
          : null}
      </div>
    </div>
  )
}

export default DevicesList
