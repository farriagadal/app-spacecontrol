/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useContext, Fragment } from 'react'
// services
import useAlert from 'src/hooks/useAlert'
import AuthService from 'src/services/auth.service'
// components
import { Link, useLocation, useHistory } from 'react-router-dom'
import Alert from 'src/components/Alert/Alert'
import WorkspaceForm from 'src/components/WorkspaceForm/WorkspaceForm'
import Button from '@material-ui/core/Button'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
// styles
import styles from './EmailVerified.module.scss'
// context
import MainContext from 'src/context/mainContext'
// icons
import emailIcon from 'src/assets/icons/email-verified.svg'
import checkIcon from 'src/assets/icons/check-big.svg'

const EmailVerified = () => {
  const { showAlert, alertProps } = useAlert()
  const sliderRef = useRef()
  const search = useLocation().search
  const token = new URLSearchParams(search).get('token')
  const [mainState, mainDispatch] = useContext(MainContext.Context)
  const history = useHistory()

  const settings = {
    drag: false,
    gap: '3rem',
    arrows: false
  }

  const goToNext = () => {
    setTimeout(() => {
      sliderRef.current.go('>')
    }, 100)
  }

  const verifyEmailToken = async () => {
    mainDispatch({ type: 'SET_LOADING', payload: true })
    try {
      await AuthService.verifyEmail(token)
    } catch (err) {
      console.log('verifyEmailToken err', err.response)
      showAlert({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde' })
      // history.push('/')
    } finally {
      mainDispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  useEffect(() => {
    verifyEmailToken()
  }, [])

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <div className={styles.card}>
        <Splide options={settings} ref={sliderRef}>
          <SplideSlide className={styles.slide}>
          { !mainState.isLoading
            ? <Fragment>
                <img src={emailIcon} alt="icon" className="m-auto" />
                <h1>Email Verified successfully!</h1>
                <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
                <Button className="px-5" variant="contained" color="primary" onClick={() => goToNext()}>
                  Continue
                </Button>
              </Fragment>
            : null
          }
          </SplideSlide>
          <SplideSlide className={styles.slide}>
            <WorkspaceForm nextSlide={() => goToNext()} />
          </SplideSlide>
          <SplideSlide className={styles.slide}>
            <img src={checkIcon} alt="icon" className="m-auto" />
            <h1>Workspace created</h1>
            <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
            <Link to="/rooms">
              <Button className="px-5" variant="contained" color="primary">
                go to Rooms
              </Button>
            </Link>
          </SplideSlide>
        </Splide>
        </div>
      </div>
      <Alert {...alertProps} />
    </section>
  )
}

export default EmailVerified
