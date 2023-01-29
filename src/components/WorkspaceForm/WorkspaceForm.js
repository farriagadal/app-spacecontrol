/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
// services
import WorkspaceService from '../../services/workspace.service'
// hooks
import useInputValue from '../../hooks/useInputValue'
import useAlert from '../../hooks/useAlert'
// components
import Alert from '../../components/Alert/Alert'
import InputText from '../../components/InputText/InputText'
import Button from '@material-ui/core/Button'
// styles
import './WorkspaceForm.scss'
import MainContext from '../../context/mainContext'

const WorkspaceForm = (props) => {
  const [, mainDispatch] = useContext(MainContext.Context)
  const workspace = useInputValue('')
  const { showAlert, alertProps } = useAlert()

  const handleSignIn = async () => {
    if (workspace.value) {
      mainDispatch({ type: 'SET_LOADING', payload: true })
      try {
        const res = await WorkspaceService.createWorkspace({ workspace: workspace.value })
        console.log(res)
      } catch (err) {
        console.log(err)
        showAlert({ type: 'error', message: 'Ha ocurrido un error, inténte más tarde' })
      }
      setTimeout(() => { // TODO: change
        mainDispatch({ type: 'SET_LOADING', payload: false })
        props.nextSlide()
      }, 1000)
    }
  }

  return (
    <div className="WorkspaceForm-Component">
      <h1>Insert the name of your Workspace</h1>
      <div className="WorkspaceForm-Component__content">
        <p>Reprehenderit esse labore id veniam ut veniam non ex.</p>
        <InputText value={workspace} type="text" />
        <br />
        <Button onClick={() => handleSignIn()} variant="contained" color="primary" className="w-100">
          Continue
        </Button>
      </div>
      <Alert {...alertProps} />
    </div>
  )
}

export default WorkspaceForm
