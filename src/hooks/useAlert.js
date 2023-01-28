import { useState } from 'react'

const useAlert = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [alertOptions, setAlertOptions] = useState({
    type: '',
    message: '',
    duration: 0
  })

  const showAlert = (options) => {
    setAlertOptions(options)
    setOpenAlert(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setTimeout(() => {
      setOpenAlert(false)
    }, alertOptions.duration)
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
