import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ModalMui from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const Modal = (props) => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: '#fff',
      boxShadow: theme.shadows[5],
      padding: props.padding ? props.padding : '100px'
    }
  }))

  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="Modal-component">
      <div onClick={handleOpen}>
        {props.button}
      </div>
      <ModalMui
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {props.component}
          </div>
        </Fade>
      </ModalMui>
    </div>
  )
}

export default Modal
