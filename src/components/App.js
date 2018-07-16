import React from 'react'
import { createMuiTheme, withTheme, MuiThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6A2F5D'
    },
    secondary: {
      main: '#9E6083'
    }
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div />
    </MuiThemeProvider>
  )
}

export default withTheme(theme)(App)
