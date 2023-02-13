import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Profile from './views/Profile/Profile'
import Rooms from './views/Rooms/Rooms'
import Layout from './layout/Layout'

import './assets/scss/app.scss'

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <ThemeProvider theme={theme}>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <RouteWrapper path="/profile" component={Profile} />
        <RouteWrapper path="/rooms" component={Rooms} />
      </Switch>
    </div>
  </ThemeProvider>
)

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
