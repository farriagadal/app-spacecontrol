/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import DeviceService from 'src/services/device.service'
// styles
import styles from './DeviceCounter.module.scss'

const DeviceCounter = () => {
  const [room, setRoom] = useState({})

  useEffect(async () => {
    const data = await DeviceService.execAction({ actionId: 0 })
    setRoom(data.room)
  }, [])

  const increment = async () => {
    const data = await DeviceService.execAction({ actionId: 1 })
    setRoom(data.room)
  }
  const decrement = async () => {
    const data = await DeviceService.execAction({ actionId: 2 })
    setRoom(data.room)
  }

  return (
    <section className={styles.main}>
      <h1 className={styles.title}>{room.name}</h1>
      <p className={styles.count}>Personas: <b>{room.count}</b></p>
      <div className={styles.buttons}>
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </section>
  )
}

export default DeviceCounter
