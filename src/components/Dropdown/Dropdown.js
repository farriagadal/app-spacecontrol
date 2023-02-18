import React, { useState } from 'react';

import './Dropdown.scss';

const Dropdown = props => {
  const [isActive, setActive] = useState(false)
  return (
    <div className="Dropdown">
      <div onClick={() => setActive(!isActive)} className="Dropdown__label">
        <span>{props.label}</span>
      </div>
      { isActive
        ? <div className="Dropdown__options">{props.children}</div>
        : null
      }
    </div>
  );
};

export default Dropdown;
