/* eslint-disable */
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './InputCheckbox.scss';

const InputCheckbox = ({ value, label, checked, onChange }) => {
  return (
    <div className="InputCheckbox">
      <FormControlLabel
        control={
          <Checkbox color="primary" name="checkedC" checked={checked}  onChange={onChange} />
        }
        label={label}
      />
    </div>
  );
};

export default InputCheckbox;
