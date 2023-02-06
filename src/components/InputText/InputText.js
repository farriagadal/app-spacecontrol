import React from 'react'

import './InputText.scss'

const InputText = (props) => {
  const {
    value, type, label, styleClass
  } = props

  return (
    <div className="InputText">
      <div className="InputText__label">{ label }</div>
      <input {...value} type={type} className={styleClass} />
    </div>
  )
}

export default InputText
