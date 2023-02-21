import React, { useContext } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

import MainContext from '../../context/mainContext'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

const Loader = () => {
  const [authState] = useContext(MainContext.Context)
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open={authState.isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loader
