import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../assets/icons/logo-black.svg'

import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import PersonIcon from '@material-ui/icons/Person'

import Dropdown from '../Dropdown/Dropdown'

import './AppHeader.scss'

import { IconButton } from '@material-ui/core'

const AppHeader = props => {
  return (
    <header className="AppHeader flex">
      <Link to="/">
        <img className="logo" src={logo} alt="icon" />
      </Link>
      <div className="flex ml-auto">
        <IconButton className="icon" color="secondary" size="medium">
          <MenuIcon />
        </IconButton>
        <IconButton className="icon" color="secondary" size="medium">
          <NotificationsIcon />
        </IconButton>
        <Dropdown align="right" width={300} label={
          <IconButton color="secondary" size="medium">
            <PersonIcon />
          </IconButton>
        }>
          <div className="dropdown-user">
            <div className="dropdown-user__label">
              <div className="dropdown-user__label__icon">
                <IconButton color="secondary" size="medium">
                  <PersonIcon />
                </IconButton>
              </div>
              <div className="dropdown-user__label__info">
                <p><b>Fernando Arriagada</b></p>
                <p>farriagadal@gmail.com</p>
              </div>
            </div>
            <div className="dropdown-user__actions">
              <Link to="/profile">
                <button className="dropdown-user__actions__option">Ver Cuenta</button>
              </Link>
              <button className="dropdown-user__actions__option">Cerrar Sesión</button>
            </div>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}

export default AppHeader
