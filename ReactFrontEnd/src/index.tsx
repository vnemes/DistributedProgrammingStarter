import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { grey, blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';


const customTheme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      dark: grey[900],
      light: grey[700],

    },
    secondary: {
      main: grey[400],
      dark: blueGrey[600],
      light: blueGrey[200],
    },
    text: {
      primary: grey[100],
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
