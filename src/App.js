import { Route } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Profile from './views/Profile/Profile';

import './assets/scss/app.scss'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </div>
    </ThemeProvider>
  );
}

export default App;
