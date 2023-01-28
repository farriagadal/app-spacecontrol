import React from 'react'
// styles
import './HowConnect.scss'
// icons
import linkSvg from '../../assets/icons/link-svg-draw.svg'

const HowConnect = () => {
  return (
    <section className="HowConnect-Component">
      <img src={linkSvg} alt="icon" className="m-auto" />
      <h1>Como enlazar un contador</h1>
      <p><b>1.-</b> Entra a la siguiente url <a href="/devices">www.spacecontrol.app/devices</a></p>
      <p><b>2.-</b> Ingresa el ID de tu sala <label>XVC1CS1</label></p>
      <p><b>3.-</b> Ingresa la contraseña secreta de la sala <label>121DSAXAS1SA</label></p>
    </section>
  )
}

export default HowConnect
