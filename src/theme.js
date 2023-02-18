import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'capitalize',
    }
  },
  palette: {
    primary: {
      light: '#248181',
      main: '#248181',
      dark: '#248181',
      contrastText: '#fff'
    },
    secondary: {
      light: '#248181',
      main: '#248181',
      dark: '#248181',
      contrastText: '#fff'
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        height: 47,
        fontWeight: 'bold',
        fontSize: 16
      }
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#fff',
      }
    }
  },
  shadows: ['none']
});

export default theme;