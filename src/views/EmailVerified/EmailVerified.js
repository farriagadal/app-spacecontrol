import React, { useRef } from 'react'
// components
import { Link } from 'react-router-dom'
import WorkspaceForm from '../../components/WorkspaceForm/WorkspaceForm'
import Button from '@material-ui/core/Button'
import Slider from 'react-slick'
// styles
import './EmailVerified.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// icons
import emailIcon from '../../assets/icons/email-verified.svg'
import checkIcon from '../../assets/icons/check-big.svg'

const EmailVerified = () => {
  const sliderRef = useRef()

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

  return (
    <section className="EmailVerified-Component">
      <div className="EmailVerified-Component__content">
        <div className="EmailVerified-Component__content__card">
        <Slider {...settings} ref={sliderRef}>
          <div className="EmailVerified-Component__content__slide">
            <img src={emailIcon} alt="icon" className="m-auto" />
            <h1>Email Verified</h1>
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
    </section>
  )
}

export default EmailVerified
