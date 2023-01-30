import React, { Fragment, useEffect } from 'react'
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
import ComingSoon from './views/ComingSoon/ComingSoon'
import Loader from './components/Loader/Loader'
import Layout from './layout/Layout'

import './assets/scss/app.scss'

import AuthService from './services/auth.service'

import AuthContext from './context/authContext'
import MainContext from './context/mainContext'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  // const [isLogged, setLogged] = useState(true)
  // const data = await AuthService.verifySessionToken()
  // console.log('verifySessionToken', data)

  useEffect(() => {
    AuthService.verifySessionToken().then((response) => {
      console.log('response', response)
    })
  }, [])

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

                <AuthContext.Context>
                  { ([state]) => state.isLogged
                    ? <Fragment>
                      <RouteWrapper path="/profile" component={Profile} />
                      <RouteWrapper path="/rooms" component={Rooms} />
                    </Fragment>
                    : <h1>NO AUTH</h1>
                  }
                </AuthContext.Context>
                <Route exact path="/register" component={Register} />
                <Route exact path="/send-email" component={ConfirmEmail} />
                <Route exact path="/verify-email" component={EmailVerified} />

                <Route exact path="/coming-soon" component={ComingSoon} />
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
