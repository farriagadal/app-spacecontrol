/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import { AnimatedSwitch } from 'react-router-transition'
import PrivateRoute from './routers/PrivateRoute'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
// APP
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Profile from './views/Profile/Profile'
import ConfirmEmail from './views/ConfirmEmail/ConfirmEmail'
import EmailVerified from './views/EmailVerified/EmailVerified'
import Rooms from './views/Rooms/Rooms'
import RoomDetail from './views/RoomDetail/RoomDetail'
import ComingSoon from './views/ComingSoon/ComingSoon'
import Loader from './components/Loader/Loader'
import Layout from './layout/Layout'
// DEVICE
import DeviceLogin from './views/DeviceLogin/DeviceLogin'
import DeviceCounter from './views/DeviceCounter/DeviceCounter'

import './assets/scss/app.scss'

import AuthContext from './context/authContext'
import DeviceContext from './context/deviceContext'
import MainContext from './context/mainContext'

const App = () => {
  return (
    <MainContext.Provider>
      <AuthContext.Provider>
        <DeviceContext.Provider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <div className="App">
                <AnimatedSwitch
                  atEnter={{ opacity: 0 }}
                  atLeave={{ opacity: 0 }}
                  atActive={{ opacity: 1 }}
                  className="switch-wrapper"
                >
                  <Route exact path="/" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/send-email" component={ConfirmEmail} />
                  <Route exact path="/verify-email" component={EmailVerified} />
                  <Route exact path="/coming-soon" component={ComingSoon} />
                  <Route exact path="/coming-soon" component={ComingSoon} />

                  <Route exact path="/device" component={DeviceLogin} />
                  {/* <AuthContext.Consumer>
                    { ([state]) => state.isLogged
                      ? <Fragment>
                        <RouteWrapper exact path="/profile" component={Profile} />
                        <RouteWrapper exact path="/rooms" component={Rooms} />
                        <RouteWrapper exact path="/rooms/:id" component={RoomDetail} />
                      </Fragment>
                      : <Login />
                    }
                  </AuthContext.Consumer> */}
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <PrivateRoute exact path="/rooms" component={Rooms} />

                  <PrivateRoute exact path="/device-counter" component={DeviceCounter} />

                </AnimatedSwitch>
              </div>
              <Loader />
            </ThemeProvider>
          </BrowserRouter>
        </DeviceContext.Provider>
      </AuthContext.Provider>
    </MainContext.Provider>
  )
}

// const RouteWrapper = ({
//   component: Component,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) => (
//       <Layout>
//         <Component {...props} />
//       </Layout>
//     )}
//   />
// )

const RouteWrapper = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
)

export default App
