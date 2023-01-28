import React from 'react'
import { Link } from 'react-router-dom'
// styles
import './SideContent.scss'
// icons
import logo from '../../assets/icons/logo-white.svg'
import shapeIcon from '../../assets/icons/bg-shape.svg'

const SideContent = props => {
  return (
    <div className={`SideContent-Component ${props.isDevice && 'device'}`}>
      <div className="SideContent-Component__card">
        <Link to="/">
          <img className="SideContent-Component__logo" src={logo} alt="icon" />
        </Link>
        <h2>{ props.title || 'Where teams design together' }</h2>
        <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
        <img className="SideContent-Component__shape" src={shapeIcon} alt="icon" />
      </div>
    </div>
  )
}

export default SideContent
