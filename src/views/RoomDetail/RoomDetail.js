/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import SettingsIcon from '@material-ui/icons/Settings'
import DevicesList from 'src/components/DevicesList/DevicesList'
import SecurityForm from 'src/components/SecurityForm/SecurityForm'
import RoomMetrics from 'src/components/RoomMetrics/RoomMetrics'
import Drawer from '@material-ui/core/Drawer'

import RoomService from 'src/services/room.service'

import styles from './RoomDetail.module.scss'

const RoomDetail = (props) => {
  const [room, setRoom] = useState({})
  const [openDrawer, setOpenDrawer] = useState(false)
  const { id } = useParams()

  useEffect(async () => {
    const data = await RoomService.getRoom(id)
    setRoom(data)
  }, [])

  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open)
  }

  return (
    <div className="pt-5 container">
      <div className="d-flex align-items-center">
        <div className={`${styles.header} mr-auto`}>
          <h1>{room.name}</h1>
          <span>{room.securityName}</span>
        </div>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)} className="rounded-pill py-2 px-4 border-2" variant="outlined">
            <SettingsIcon className="mr-2"/>
            <b>Configuración</b>
          </Button>
          <Drawer anchor={'right'} open={openDrawer} onClose={toggleDrawer(false)}>
            {<SecurityForm room={room} />}
          </Drawer>
        </React.Fragment>
      </div>
      {
        room.id &&
        <React.Fragment>
          <RoomMetrics room={room} />
          <DevicesList devices={room.devices} />
        </React.Fragment>
      }
    </div>
  )
}

export default RoomDetail
