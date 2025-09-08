import { createTheme } from '@mui/material/styles';
import {lime, green, red, pink, purple } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: `'Raleway', sans-serif`,
  },
  palette: {
    
    background: {
      default: '#f5f7fa'
, // Linen color
    },
    gradient: {
    main: purple[800],
    solid: pink[800], // fallback solid color
  },
    red: red,
    pink: pink,
    purple: purple,
    green: green,
    lime: lime, 
    primary: {
      main: '#7b1fa2', // rich yellow
      white: "#f5f5f5"
    },
    
    secondary: {
      main: '#4a148c', // rich yellow
    },
  },
});

export default theme;