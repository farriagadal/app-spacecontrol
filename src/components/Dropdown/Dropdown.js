/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";

import './Dropdown.scss';

const Dropdown = props => {
  const [isActive, setActive] = useState(false)
  const dropdownAreaRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [])

  const handleClickOutside = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())

    if (!path.includes(dropdownAreaRef.current)) {
      setActive(false)
    }
  }

  return (
    <div className="Dropdown" ref={dropdownAreaRef} >
      <div onClick={() => setActive(!isActive)} className="Dropdown__label">
        <span>{props.label}</span>
      </div>
      { isActive
        ? <div style={{ width: props.width }} className={`Dropdown__options ${props.align}`}>{props.children}</div>
        : null
      }
    </div>
  );
};

export default Dropdown;
