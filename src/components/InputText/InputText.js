import React from 'react'

import './InputText.scss'

const InputText = ({ value, type, label, styleClass, error, ...rest }) => {
  const classes = error ? 'error' : ''
  return (
    <div className={'InputText ' + classes }>
      <div className="InputText__label">{ label }</div>
      <input {...value} type={type} className={styleClass} {...rest} />
      { error ? <small className="InputText__error-label">{ error.message }</small> : null }
    </div>
  )
}

export default InputText
