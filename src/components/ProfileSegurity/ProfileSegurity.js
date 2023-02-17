import React from 'react';

import InputText from '../../components/InputText/InputText.jsx'
import Button from '@material-ui/core/Button';

import './ProfileSegurity.scss'

const ProfileSegurity = props => {
  return (
    <div className="ProfileSegurity">
      <div className="form-inputs">
        <InputText styleClass="white-bg" label='Contraseña Actual' type='password' />
        <span />
        <InputText styleClass="white-bg" label='Nueva Contraseña' type='password' />
        <InputText styleClass="white-bg" label='Confirmar Contraseña' type='password' />
        <Button variant="contained" color="primary">
          Cambiar Contraseña
        </Button>
      </div>
    </div>
  );
};

export default ProfileSegurity;
