/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from 'src/routers/PrivateRoute'
import DeviceRoute from 'src/routers/DeviceRoute'

import { ThemeProvider } from '@material-ui/core'
import theme from 'src/theme'
// APP
import Login from 'src/views/Login/Login'
import Register from 'src/views/Register/Register'
import Profile from 'src/views/Profile/Profile'
import ConfirmEmail from 'src/views/ConfirmEmail/ConfirmEmail'
import EmailVerified from 'src/views/EmailVerified/EmailVerified'
import Rooms from 'src/views/Rooms/Rooms'
import RoomDetail from 'src/views/RoomDetail/RoomDetail'
import ComingSoon from 'src/views/ComingSoon/ComingSoon'
import Loader from 'src/components/Loader/Loader'
// DEVICE
import DeviceLogin from 'src/views/DeviceLogin/DeviceLogin'
import DeviceCounter from 'src/views/DeviceCounter/DeviceCounter'

import 'src/assets/scss/app.scss'

import MainContext from 'src/context/mainContext'
import AuthContext from 'src/context/authContext'
import DeviceContext from 'src/context/deviceContext'

const App = () => {
  return (
    <MainContext.Provider>
      <AuthContext.Provider>
        <DeviceContext.Provider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <div className="App">
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/send-email" component={ConfirmEmail} />
                  <Route exact path="/verify-email" component={EmailVerified} />
                  <Route exact path="/coming-soon" component={ComingSoon} />
                  <Route exact path="/coming-soon" component={ComingSoon} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <PrivateRoute exact path="/rooms" component={Rooms} />
                  <PrivateRoute exact path="/rooms/:id" component={RoomDetail} />
                  <Route exact path="/device" component={DeviceLogin} />
                  <DeviceRoute exact path="/device/counter" component={DeviceCounter} />
                </Switch>
              </div>
              <Loader />
            </ThemeProvider>
          </BrowserRouter>
        </DeviceContext.Provider>
      </AuthContext.Provider>
    </MainContext.Provider>
  )
}

export default App
