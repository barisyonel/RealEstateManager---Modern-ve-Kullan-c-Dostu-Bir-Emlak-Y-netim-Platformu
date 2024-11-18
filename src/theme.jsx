import { createTheme } from '@mui/material/styles';

const theme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#bb86fc' : '#6200ea',
      },
      secondary: {
        main: darkMode ? '#03dac6' : '#03a9f4',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#CC2B52' : '#6200ea', // Sidebar ve diğer yazılar için renk
      },
    },
    typography: {
      h4: {
        fontWeight: 'bold',
        color: darkMode ? '#ffffff' : '#6200ea',
      },
      body1: {
        color: darkMode ? '#CC2B52' : '#333333', // Ana yazı rengi
      },
      button: {
        color: darkMode ? '#03dac6' : '#6200ea',
      },
    },
  });

export default theme;
