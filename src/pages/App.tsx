import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from '../routes';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";





const App = (): JSX.Element => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle /> <Router>
        <Rotas />
      </Router>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
