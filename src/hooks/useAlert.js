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

  return {
    showAlert,
    alertProps: {
      setOpenAlert,
      openAlert,
      alertOptions
    }
  }
}

export default useAlert
