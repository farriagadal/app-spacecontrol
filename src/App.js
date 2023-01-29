import React, { Fragment } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import { AnimatedSwitch } from 'react-router-transition'

import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

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

import './assets/scss/app.scss'

import AuthContext from './context/authContext'
import MainContext from './context/mainContext'

const App = () => {
  return (
    <MainContext.Provider>
      <AuthContext.Provider>
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

                <AuthContext.Consumer>
                  { ([state]) => state.isLogged
                    ? <Fragment>
                      <RouteWrapper exact path="/profile" component={Profile} />
                      <RouteWrapper exact path="/rooms" component={Rooms} />
                      <RouteWrapper exact path="/rooms/:id" component={RoomDetail} />
                    </Fragment>
                    : <Login />
                  }
                </AuthContext.Consumer>

              </AnimatedSwitch>
            </div>
            <Loader />
          </ThemeProvider>
        </BrowserRouter>
      </AuthContext.Provider>
    </MainContext.Provider>
  )
}

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
