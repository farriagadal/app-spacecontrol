import React from 'react'

import Button from '@material-ui/core/Button'
import LinkIcon from '@material-ui/icons/Link'
import InboxIcon from '@material-ui/icons/Inbox'
import Modal from '../Modal/Modal'
import HowConnect from '../HowConnect/HowConnect'

import './DevicesList.scss'

const DevicesList = (props) => {
  return (
    <div className="DevicesList container">
      <div className="d-flex align-items-center">
        <h2 className="mr-auto">Dispositivos</h2>
        <Modal component={<HowConnect/>} button={
          <Button className="rounded-pill py-2 px-4 border-2" variant="outlined">
            <LinkIcon className="mr-1"/>
            <b>¿Como Enlanzar?</b>
          </Button>}
        />
      </div>
      <div className="DevicesList__list">
        <div className="DevicesList__list__label">
            <p>Nombre dispositivo</p>
            <p>Ubicación</p>
            <p>Último conteo</p>
            <p>Total conteos hoy</p>
            <span />
          </div>
        {props.devices && props.devices.length
          ? props.devices.map((device, index) =>
          <div className="DevicesList__list__item" key={index}>
            <p><b>{device.name}</b></p>
            <p>{device.ubication}</p>
            <p>{device.updatedAt}</p>
            <p>{device.totalCounts}</p>
            <Button variant="contained">Ver más</Button>
          </div>
          )
          : <div className="DevicesList__empty">
              <InboxIcon />
              No hay dispositivos conectados
            </div>}
      </div>
    </div>
  )
}

export default DevicesList
