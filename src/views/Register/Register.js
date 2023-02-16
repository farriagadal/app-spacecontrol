/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom'

import './Register.scss';

import googleIcon from '../../assets/icons/google-icon.svg';
import logo from '../../assets/icons/logo-white.svg';
import shapeIcon from '../../assets/icons/bg-shape.svg';

import InputText from '../../components/InputText/InputText.jsx'
import InputCheckbox from '../../components/InputCheckbox/InputCheckbox';

import Button from '@material-ui/core/Button';

const Register = props => {
  return (
    <section className="Register-Component">
      <div className="Register-Component__sidebar">
        <div className="Register-Component__sidebar__card">
          <Link to="/">
            <img className="Register-Component__sidebar__logo" src={logo} alt="icon" />
          </Link>
          <h2>Where teams design together</h2>
          <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
          <img className="Register-Component__sidebar__shape" src={shapeIcon} alt="icon" />
        </div>
      </div>
      <div className="Register-Component__content">
        <div className="Register-Component__content__card">
          <h1>Register</h1>
          <div className="form-inputs">
            <InputText label='Your Email' type='text' />
            <InputText label='Password' type='password' />
            <InputText label='Your Email' type='text' />
            <InputText label='Password' type='password' />
            <div className="form-inputs__agree">
              <InputCheckbox label={<p>I agree to all <Link to="/terms">Terms & Conditions</Link></p>} />
            </div>
            {/* <button className="btn btn--primary w-full">Crear</button> */}
            <Button variant="contained" color="primary">
              Crear
            </Button>
          </div>
          <div className="Register-Component__content__google-section">
            <div className="Register-Component__content__divider">
              <span/>
              <p>OR</p>
              <span/>
            </div>
            <button className="Register-Component__content__btn-google flex w-full">
              <img src={googleIcon} alt="icon" />
              Sign up with Google
            </button>
          </div>

          <br />
          {/* <button className="btn btn--primary w-full">Ingresar</button>
          <p className="Register-Component__content__register-btn">¿No tienes una cuenta?
            <a href="/">Registrate!</a>
          </p> */}
        </div>
      </div>

    </section>
  );
};

export default Register;
