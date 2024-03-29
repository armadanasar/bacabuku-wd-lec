import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import authApi from '../../dataFetch/authApi'
import style from '../../styles/PageHeader.css'

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: 'none'
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}))

function PageHeader() {
  const classes = useStyles()

  const loginButton = (
    <Button
      href="/login"
      color="primary"
      variant="outlined"
      className={classes.link}
    >
      Login
    </Button>
  )

  const logoutButton = (
    <Button
      href="/logout"
      color="primary"
      variant="outlined"
      className={classes.link}
    >
      Logout
    </Button>
  )

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <a href="/" class="appTitleLink">
            Bacabuku
          </a>
        </Typography>
        {authApi.getToken() ? logoutButton : loginButton}
      </Toolbar>
    </AppBar>
  )
}

export default PageHeader
