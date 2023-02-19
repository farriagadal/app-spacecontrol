import React from 'react';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import InputText from '@/components/InputText/InputText'

import './Login.scss';

const Login = props => {
  return (
    <section className="Login-Component">
      <div className="Login-Component__sidebar"></div>
      <div className="Login-Component__content">
        <div className="Login-Component__content__card">
          <AccessAlarmIcon />
          <h1>Login</h1>

          <hr />
          <InputText label='Email' type='text' />
          <InputText label='Password' type='password' />
          <button>Ingresar</button>
        </div>
      </div>

    </section>
  );
};

export default Login;
