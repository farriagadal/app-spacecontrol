import { useState } from 'react'

const useAlert = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [alertOptions, setAlertOptions] = useState({
    type: '',
    message: ''
  })

  const showAlert = (options) => {
    setAlertOptions(options)
    setOpenAlert(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert(false)
  }

  return {
    showAlert,
    alertProps: {
      handleClose,
      openAlert,
      alertOptions
    }
  }
}

export default useAlert
