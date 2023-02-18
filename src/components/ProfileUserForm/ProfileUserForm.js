import React from 'react';

import InputText from '../../components/InputText/InputText'
import Button from '@material-ui/core/Button';

import './ProfileUserForm.scss'

const ProfileUserForm = props => {
  return (
    <div className="ProfileUserForm">
      <div className="form-inputs">
        <InputText label='Your Email' type='text' />
        <InputText label='Password' type='password' />
        <InputText label='Your Email' type='text' />
        <InputText label='Password' type='password' />
        <Button variant="contained" color="primary">
          Guardar Cambios
        </Button>
      </div>
    </div>
  );
};

export default ProfileUserForm;
