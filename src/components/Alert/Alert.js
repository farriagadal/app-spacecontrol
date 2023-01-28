import React from 'react'
import ReactDOM from 'react-dom'
// components
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const AlertContent = (props) => {
  return <MuiAlert variant="filled" {...props} />
}

const Alert = ({ openAlert, alertOptions, handleClose }) => {
  return (
    openAlert
      ? ReactDOM.createPortal(
      <React.Fragment>
        <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
          <AlertContent onClose={handleClose} severity={alertOptions.type}>
            { alertOptions.message }
          </AlertContent>
        </Snackbar>
      </React.Fragment>, document.body
      )
      : null
  )
}

export default Alert
