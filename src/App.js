import React , { Component } from 'react';
import { GlobalStyles } from './global';
import { Cover } from './components';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { theme } from './theme';

export class App extends Component  {


 
  
render(){
  
  return (
  <React.Fragment>
 
  <HashRouter >
  <GlobalStyles />
   <section className="landing" >
    <Cover />
    </section>
  </HashRouter>
  

      
   
  </React.Fragment>
  )
     
}
}

export default App;
