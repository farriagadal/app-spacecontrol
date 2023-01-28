/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import DeviceService from '../services/device.service'
import Layout from '../layout/Layout'

import DeviceContext from '../context/deviceContext'

const DeviceRoute = ({ component: Component, ...rest }) => {
  const [deviceState, deviceDispatch] = useContext(DeviceContext.Context)
  const history = useHistory()

  useEffect(async () => {
    if (!deviceState.device) {
      try {
        const token = JSON.parse(localStorage.getItem('accessToken'))
        if (!token) throw Error
        const data = await DeviceService.verifyDevice()
        const device = { token: token, ...data.device }
        deviceDispatch({ type: 'SET_DEVICE', payload: device })
      } catch (err) {
        deviceDispatch({ type: 'LOG_OUT' })
        history.push('/device')
      }
    }
  }, [])

  return (
      <Route {...rest}>
        {deviceState.device &&
          <Component />
        }
      </Route>
  )
}

export default DeviceRoute
