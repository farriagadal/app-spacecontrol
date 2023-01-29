import React, { useEffect, useState } from 'react'

import InsertChartIcon from '@material-ui/icons/InsertChart'
import Button from '@material-ui/core/Button'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import DevicesList from 'src/components/DevicesList/DevicesList'
import Modal from 'src/components/Modal/Modal'
import HowConnect from 'src/components/HowConnect/HowConnect'

import RoomService from 'src/services/room.service'

import styles from './RoomDetail.module.scss'

const RoomDetail = (props) => {
  const [room, setRoom] = useState({})

  useEffect(async () => {
    const roomId = props.match.params.id
    const data = await RoomService.getRoom(roomId)
    setRoom(data)
  }, [])

  return (
    <div className="pt-5 container">
      <div className="d-flex align-items-center">
        <div className={`${styles.header} mr-auto`}>
          <h1>{room.name}</h1>
          <span>{room.securityName}</span>
        </div>

        <Modal component={<HowConnect/>} button={
          <Button className="rounded-pill py-2 px-4 border-2" variant="outlined">
            <LockOutlinedIcon className="mr-2"/>
            <b>Seguridad</b>
          </Button>}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.metrics}>
          <div className={styles.metricsItem}>
            <label>N° Personas actualmente</label>
            <span>{room.count}</span>
          </div>
          <div className={styles.metricsItem}>
            <label>Capacidad utilizada</label>
            <span>5%</span>
          </div>
          <div className={styles.metricsItem}>
            <label>N° Personas en el día</label>
            <span>120</span>
          </div>
        </div>
        <div className={styles.chart}>
          <InsertChartIcon />
        </div>
      </div>
      <DevicesList devices={room.devices} />
    </div>
  )
}

export default RoomDetail
