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
// import Slider from 'react-slick'
import { Splide, SplideSlide } from '@splidejs/react-splide'
// styles
import './EmailVerified.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false
  }

  const goToNext = () => {
    setTimeout(() => {
      sliderRef.current.slickNext()
    }, 500)
  }

  const verifyEmailToken = async () => {
    mainDispatch({ type: 'SET_LOADING', payload: true })
    try {
      await AuthService.verifyEmail(token)
      // showAlert({ type: 'success', message: 'Email enviado!' })
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
    <section className="EmailVerified-Component">
      <div className="EmailVerified-Component__content">
        <div className="EmailVerified-Component__content__card">
        <Slider {...settings} ref={sliderRef}>
          <div className="EmailVerified-Component__content__slide">
          { !mainState.isLoading
            ? <Fragment>
                <img src={emailIcon} alt="icon" className="m-auto" />
                <h1>Email Verified successfully!</h1>
                <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
                <Button variant="contained" color="primary" onClick={() => goToNext()}>
                  Continue
                </Button>
              </Fragment>
            : null
          }
          </div>
          <div className="EmailVerified-Component__content__slide">
            <WorkspaceForm nextSlide={() => goToNext()} />
          </div>
          <div className="EmailVerified-Component__content__slide">
            <img src={checkIcon} alt="icon" className="m-auto" />
            <h1>Workspace created</h1>
            <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
            <Link to="/rooms">
              <Button variant="contained" color="primary">
                go to Rooms
              </Button>
            </Link>
          </div>
        </Slider>
        </div>
      </div>
      <Alert {...alertProps} />
    </section>
  )
}

export default EmailVerified
