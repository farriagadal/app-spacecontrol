import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Profile from './views/Profile/Profile'
import ConfirmEmail from './views/ConfirmEmail/ConfirmEmail'
import EmailVerified from './views/EmailVerified/EmailVerified'
import Rooms from './views/Rooms/Rooms'
import Layout from './layout/Layout'

import './assets/scss/app.scss'

const App = () => {
  const location = useLocation()

  return (
  // eslint-disable-next-line react/jsx-filename-extension
  <ThemeProvider theme={theme}>
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/confirm-email" component={ConfirmEmail} />
            <Route exact path="/verify-email" component={EmailVerified} />
            <RouteWrapper path="/profile" component={Profile} />
            <RouteWrapper path="/rooms" component={Rooms} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  </ThemeProvider>
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
