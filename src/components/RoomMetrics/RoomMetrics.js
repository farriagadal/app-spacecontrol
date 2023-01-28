/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import InsertChartIcon from '@material-ui/icons/InsertChart'
// styles
import styles from './RoomMetrics.module.scss'
// services
import RoomService from 'src/services/room.service'

const RoomMetrics = (props) => {
  const [room, setRoom] = useState(props.room)
  console.log('room', room)

  useEffect(() => {
    updateRoom()
  }, [])

  const updateRoom = () => {
    setInterval(() => {
      RoomService.getRoom(props.room.id).then((data) => {
        console.log('set data', data)
        setRoom(data)
      })
    }, 1000)
  }

  return (
    <div className={styles.content}>
    <div className={styles.metrics}>
      <div className={styles.metricsItem}>
        <label>N° Personas actualmente</label>
        <span>{room.count}</span>
      </div>
      <div className={styles.metricsItem}>
        <label>Capacidad utilizada</label>
        <span>{parseInt((room.count / room.capacity) * 100)}%</span>
      </div>
      <div className={styles.metricsItem}>
        <label>N° Personas en el día</label>
        <span>{room.count}</span>
      </div>
    </div>
    <div className={styles.chart}>
      <InsertChartIcon />
    </div>
  </div>
  )
}

export default RoomMetrics
