import React, { useRef, useEffect, useContext } from 'react'
// services
import AuthService from '../../services/auth.service'
// components
import { Link, useLocation, useHistory } from 'react-router-dom'
import WorkspaceForm from '../../components/WorkspaceForm/WorkspaceForm'
import Button from '@material-ui/core/Button'
import Slider from 'react-slick'
// styles
import './EmailVerified.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// context
import MainContext from '../../context/mainContext'
// icons
import emailIcon from '../../assets/icons/email-verified.svg'
import checkIcon from '../../assets/icons/check-big.svg'

const EmailVerified = () => {
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
      console.log(err)
      history.push('/error')
    } finally {
      mainDispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  useEffect(() => {
    verifyEmailToken()
  }, [])

  return (
    <section className="EmailVerified-Component">

      { mainState.isLoading
        ? <div className="EmailVerified-Component__content">
          <div className="EmailVerified-Component__content__card">
          <Slider {...settings} ref={sliderRef}>
            <div className="EmailVerified-Component__content__slide">
              <img src={emailIcon} alt="icon" className="m-auto" />
              <h1>Email Verified successfully!</h1>
              <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
              <Button variant="contained" color="primary" onClick={() => goToNext()}>
                Continue
              </Button>
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
        : null
      }
    </section>
  )
}

export default EmailVerified
