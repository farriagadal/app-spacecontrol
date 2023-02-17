import React from 'react';

import InputText from '../../components/InputText/InputText'
import Button from '@material-ui/core/Button';

import './ProfileUserForm.scss'

const ProfileUserForm = props => {
  return (
    <div className="ProfileUserForm">
      <div className="form-inputs">
        <InputText styleClass="white-bg" label='Your Email' type='text' />
        <InputText styleClass="white-bg" label='Password' type='password' />
        <InputText styleClass="white-bg" label='Your Email' type='text' />
        <InputText styleClass="white-bg" label='Password' type='password' />
        <Button variant="contained" color="primary">
          Guardar Cambios
        </Button>
      </div>
    </div>
  );
};

export default ProfileUserForm;
