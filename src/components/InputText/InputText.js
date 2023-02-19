import React from 'react';

import './InputText.scss';

const InputText = props => {
  return (
    <div className="InputText">
      <div>{ props.label }</div>
      <input type={ props.type } />
    </div>
  );
};

export default InputText;
