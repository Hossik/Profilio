import React from 'react';
import { GlobalStyles } from './global';
import { Cover } from './components';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { theme } from './theme';

function App() {
  return (
  
<ThemeProvider  theme={theme}>
  <> 
  <BrowserRouter >
  <GlobalStyles />
  <section className="landing" >
    <Cover />
    </section>
  </BrowserRouter>
  </>
</ThemeProvider>

  );
}

export default App;
