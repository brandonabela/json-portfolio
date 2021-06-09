import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import './index.css';

import theme from './theme';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);
