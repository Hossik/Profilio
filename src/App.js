import React , { Component } from 'react';
import { GlobalStyles } from './global';
import { Cover } from './components';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { theme } from './theme';

export class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      intro:false
  }
  }
  remove = () => {
    clearInterval(this.intervalID)
  }
  componentDidMount() {
  
    this.intervalID = setInterval(() => {
      this.setState(state => ({
        intro : !state.intro
      }));
    }, 14000);
    setInterval (this.remove, 15000)
  }
  
render(){
  
  return (
  <React.Fragment>
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

      
   
  </React.Fragment>
  )
     
}
}

export default App;
