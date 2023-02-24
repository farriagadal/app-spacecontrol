import React, { useState } from 'react'
// services
import WorkspaceService from '../../services/workspace.service'
// hooks
import useInputValue from '../../hooks/useInputValue'
// components
import InputText from '../../components/InputText/InputText'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
// styles
import './WorkspaceForm.scss'

const Alert = (props) => {
  return <MuiAlert variant="filled" {...props} />
}

const WorkspaceForm = (props) => {
  const workspace = useInputValue('')
  const [openAlert, setOpenAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState({ type: '', message: '' })
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return
    setOpenAlert(false)
  }

  const handleSignIn = async () => {
    if (workspace.value) {
      try {
        const res = await WorkspaceService.createWorkspace({ workspace: workspace.value })
        console.log(res)
      } catch (err) {
        console.log(err)
        setAlertMessage({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde' })
        setOpenAlert(true)
      }
    }
    props.nextSlide()
  }

  return (
    <div className="WorkspaceForm-Component">
      <h1>Insert the name of your Workspace</h1>
      <div className="WorkspaceForm-Component__content">
        <p>Reprehenderit esse labore id veniam ut veniam non ex.</p>
        <InputText value={workspace} type="text" />
        <br />
        <Button onClick={() => handleSignIn()} variant="contained" color="primary" className="w-full">
          Continue
        </Button>
      </div>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertMessage.type}>
          { alertMessage.message }
        </Alert>
      </Snackbar>
    </div>
  )
}

export default WorkspaceForm
