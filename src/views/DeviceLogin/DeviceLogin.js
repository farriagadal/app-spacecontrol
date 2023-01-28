import React from 'react'
//  components
import DeviceLoginForm from 'src/components/DeviceLoginForm/DeviceLoginForm'
import SideContent from 'src/components/SideContent/SideContent'
// styles
import styles from './DeviceLogin.module.scss'
import logo from '../../assets/icons/logo-black.svg'

const DeviceLogin = () => {
  return (
    <section className={styles.main}>
      <SideContent title="Device Connect" isDevice={true} />
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="icon" />
        <div className={styles.card}>
          <h1>Ingrese los datos de la sala</h1>
          <DeviceLoginForm />
        </div>
      </div>
    </section>
  )
}

export default DeviceLogin
