import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../assets/icons/logo-white.svg'

import Facebook from '@material-ui/icons/Facebook'
import Instagram from '@material-ui/icons/Instagram'
import LinkedIn from '@material-ui/icons/LinkedIn'

import './AppFooter.scss'

const AppFooter = props => {
  return (
    <footer className="AppFooter">
      <div className="container">
        <div className="links">
          <Link to="/ayuda">Centro de ayuda</Link>
          <Link to="/ayuda">Soporte</Link>
        </div>
        <div className="social-medias">
          <Link to="/">
            <img className="logo" src={logo} alt="icon" />
          </Link>
          <a href="/" target="_blank">
            <Facebook />
          </a>
          <a href="/" target="_blank">
            <Instagram />
          </a>
          <a href="/" target="_blank">
            <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
