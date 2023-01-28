import React from 'react';

import './InputText.scss';

const InputText = props => {
  return (
    <div className="InputText">
      <div className="InputText__label">{ props.label }</div>
      <input type={ props.type } className={ props.styleClass }/>
    </div>
  );
};

export default InputText;
