import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1d2d44',
    },
    secondary: {
      main: '#283b58',
    },
    // Add other palette customizations if needed
  },
  typography: {
    fontFamily: 'sans-serif',
    // Customize typography variants or other typography options here
  },
  // Add other theme customizations if needed
});

export default theme;