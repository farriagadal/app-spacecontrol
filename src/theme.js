/* eslint-disable */
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
        fontSize: 16,
        letterSpacing: 0
      }
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#fff',
      }
    },
    MuiIconButton: {
      colorSecondary: {
        backgroundColor: '#24818110',
        '&:hover': {
          backgroundColor: "#24818150",
       }
      }
    }
  },
  shadows: ['none']
});

export default theme;