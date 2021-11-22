import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from '../routes';
import {  CompanyProvider } from '../contexts/CompanyContext';





const App = (): JSX.Element => (
  <AuthProvider>
    <CompanyProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle /> <Router>
        <Rotas />
      </Router>
    </ThemeProvider>
    </CompanyProvider>
  </AuthProvider>
);

export default App;
